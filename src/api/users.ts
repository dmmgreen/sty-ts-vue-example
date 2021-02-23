import request from '@/utils/request'

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })
