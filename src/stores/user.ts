import { defineStore } from 'pinia';
interface UserInfo {
  name: string;
}
export const useUserStore = defineStore('user', () => {
  // const isLogin = ref<boolean>(JSON.parse(sessionStorage.getItem('isLogin') || 'true'));
  const isLogin = ref<boolean>(true);
  const userInfo = ref<UserInfo | {}>(JSON.parse(sessionStorage.getItem('isLogin') || '{}'));

  const setLogin = (login: boolean) => {
    isLogin.value = login;
    sessionStorage.setItem('isLogin', JSON.stringify(login));
  }

  const setUserInfo = (info: UserInfo | {}) => {
    userInfo.value = info;
    sessionStorage.setItem('userInfo', JSON.stringify(info));
  }

  return {
    isLogin,
    userInfo,
    setLogin,
    setUserInfo
  };
});
