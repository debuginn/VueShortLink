import storageService from '@/service/storageService';
import userService from '@/service/userService';

const userModule = {
  namespaced: true,

  state: {
    token: storageService.get(storageService.USER_TOKEN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },

  mutations: {
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      // 更新 state
      state.token = token;
    },
    SET_USERINFO(state, userInfo) {
      // 更新本地缓存
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
      // 更新 state
      state.userInfo = userInfo;
    },
  },

  actions: {
    register(context, { name, telephone, password }) {
      return new Promise((resolve, reject) => {
        userService.register({ name, telephone, password }).then((res) => {
          // 保存 token
          context.commit('SET_TOKEN', res.data.data.token);
          return userService.userInfo();
        }).then((response) => {
          // 保存用户信息
          context.commit('SET_USERINFO', response.data.data.user);
          resolve(response);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },

};

export default userModule;
