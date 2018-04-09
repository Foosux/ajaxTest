
// 使用fetch请求
fetch('/api/placement/preData', {
  method: 'get',
  credentials: 'include',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  }
}).then( res => {
  console.log(res)
})

// 使用axios

// var Axios = require('axios')
import Axios from 'axios'

Axios.get('/api/placement/preData?v=123', {
  // headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
  //     // 'Content-Type': 'application/json'
    // }
})
