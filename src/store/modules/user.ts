import { VuexModule, Module, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUserState {
  avatar: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public avatar = ''

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }
}

export const UserModule = getModule(User)
