// axios 封装到 repuest 里面，对 axios进行一些配置

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
