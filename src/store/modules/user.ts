import { VuexModule, Module, Mutation, getModule, Action } from 'vuex-module-decorators'
import { setToken, getToken, removeToken } from '@/utils/cookies'
import { login } from '@/api/users'
import store from '@/store'

export interface IUserState {
  avatar: string
  token: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public avatar = ''
  public token = getToken() || ''

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    setToken(data.accessToken)
    this.SET_TOKEN(data.accessToken)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
  }
}

export const UserModule = getModule(User)
