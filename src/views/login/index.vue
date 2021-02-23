<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title')}}</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
            <svg-icon name="user" />
          </span>
        <el-input v-model="loginForm.username" :placeholder="`请输入${$t('login.username')}`"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
            <svg-icon name="password" />
          </span>
        <el-input v-model="loginForm.password" :placeholder="`请输入${$t('login.password')}`"></el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%; margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >
        {{ $t('login.logIn') }}
      </el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Form } from 'element-ui'
import { UserModule } from '@/store/modules/user'

@Component({
  name: 'Login'
})
export default class extends Vue {
  private loginForm ={
    username: 'admin',
    password: '111111'
  }

  private loading= false
  private passwordType = 'password'

  private handleLogin() {
    (this.$refs.loginForm as Form).validate(async(valid: boolean) => {
      if (valid) {
        this.loading = false
        await UserModule.Login(this.loginForm)
        console.log('success')
        this.$router.push({
          path: '/'
        }).catch(err => {
          console.log(err)
        })
      }
    })
  }
}
</script>

<style lang="scss">
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
.login-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color:$loginBg;
  .title-container{
    position: relative;
    .title{
      font-size: 26px;
      color:$lightGray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .login-form{
    position: relative;
    width: 520px;
    max-width: 100%;
    padding:160px 35px 0;
    margin:auto;
    overflow: hidden;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $darkGray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
}
</style>
