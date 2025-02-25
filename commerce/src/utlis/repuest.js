// axios 封装到 repuest 里面，对 axios进行一些配置

import {Toast} from 'vant'

// 创建 axios实力
const instance = axios.create({
  // 基地址
  baseURL: 'https://some-domain.com/api/',
  // 超时时间
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// 自定义配置


instance.interceptors.request.use(function (config) {
  // 开启网络请求提示，开启之后，防止多次无效触发
  Toast.loading({
    message: '加载中...',
    forbidClick: true,   //  是否禁止背景点击
    duration: 0,          //  几秒钟关闭加载提示
  })


  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {

  return Promise.reject(error);
});


// 导出配置好的实例
