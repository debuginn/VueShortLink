import request from '@/utils/request';

// 用户注册
const register = ({ name, telephone, password }) => {
  return request.post('auth/register', { name, telephone, password });
};

// 获取用户信息
const userInfo = () => {
  return request.get('auth/info');
};

export default {
  register,
  userInfo,
};
