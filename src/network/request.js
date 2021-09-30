import Axios from "axios";
export function request(config) {
  //1.创建axios实例
  const instance = Axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout: 5000
  });
  //2.axios的拦截器
  //2.1请求拦截
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      // console.log(err);
    }
  );
  //2.2响应拦截
  instance.interceptors.response.use(
    res => {
      return res;
      // console.log(res);
    },
    err => {
      // console.log(err);
    }
  );

  //3.发送真正的网络请求
  return instance(config);
}
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建axios实例
//     const instance = Axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     });
//     instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err);
//       });
//   });
// }
