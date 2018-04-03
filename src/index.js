
// 使用fetch请求
fetch('/api/placement/preData', {
  method: 'post',
  credentials: 'include',
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    age: 18,
    name: 'zm'
  })
}).then( res => {
  console.log(res)
})
