import { defineStore } from 'pinia'
import { GetUserinfo } from '@/api/login'

export const useAccount = defineStore('account', {
  state: () => ({
    userinfo: null,
    permissionList: [],
    roles: []
  }),
  actions: {
    // 清除用户信息
    clearUserinfo() {
      this.userinfo = null
    },
    // 获取用户信息
    async getUserinfo() {
      const { code, data } = await GetUserinfo()
      if (+code === 200) {
        this.userinfo = data
        this.roles = data.roles
        return Promise.resolve(data)
      }
    },
  },
})
