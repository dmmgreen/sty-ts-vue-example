<template>
  <div class="login-container">
    <el-form>
      <div class="title-container">
        <h3 class="title">{{ $t('login.title')}}</h3>
      </div>
      <el-form-item>
        <el-input v-model="loginForm.username" :placeholder="$t('login.username')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" :placeholder="$t('login.password')"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'Login'
})
export default class extends Vue {
  private loginForm ={
    username: 'admin',
    password: '111111'
  }
}
</script>
