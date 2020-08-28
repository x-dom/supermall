import axios from  'axios';

export function request(config) {

  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });


  //2、拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    // 作用
    // 1、修改请求信息
    // 2、发送网络请求时，显示请求图标
    // 3、携带特殊信息，如token
    return config;
  }, err => {
    return err;
  });

  //响应拦截
  instance.interceptors.response.use(response => {
    return response.data;
  }, err => {
    return err;
  })

  return instance(config);
}