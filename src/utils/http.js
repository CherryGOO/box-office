import axios from 'axios'

// 卖座相关接口
const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 5000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16171586311986452439171073","bc":"110100"}'
  }
})

// 云服务器'http://115.28.130.111:3000'相关接口
const instance2 = axios.create({
  baseURL: '/info',
  timeout: 5000
})

// axios可以设置请求与响应的拦截器
// 在发送请求之前，做一个请求之前的拦截器
instance2.interceptors.request.use(config => {
  console.log('1.config==>', config)
  config.headers = { ...config.headers, 'X-Access-Token': localStorage.getItem('token') }
  return config
})

// 获取数据后，后端给前端相应结果，做一个响应后的拦截处理
instance2.interceptors.response.use(res => {
  console.log('2.res==>', res)
  if (res.data.flag) {
    return res.data.data
  } else {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('失败了...')
  }
})

export {
  instance,
  instance2
}
