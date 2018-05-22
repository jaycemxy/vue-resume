const routes = [
  { path: '/', component: window.App },
  { path: '/login', component: window.Login },
  { path: '/signUp', component: window.signUp },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const root = new Vue({
  router: router,
  data() {
      return {
          currentUser: {}
      }
  }
}).$mount('#root')

// 现在，应用已经启动了！


/*let app = new Vue({
    el: '#app',
    watch: {
        'currentUser.objectId': function (newValue, oldValue) {
            if (newValue) {
                this.getResume(this.currentUser).then((resume) => this.resume = resume)
            }
        }
    },
})


// 获取当前用户
let currentUser = AV.User.current()
if (currentUser) {
    app.currentUser = currentUser.toJSON()
    app.shareLink = location.origin + location.pathname + '?user_id=' + app.currentUser.objectId
    app.getResume(app.currentUser).then(resume => {
        app.resume = resume
    })
}


// 获取预览用户的 id
let search = location.search
let regex = /user_id=([^&]+)/
let matches = search.match(regex)
let userId
if (matches) {
    userId = matches[1]
    app.mode = 'preview'
    app.getResume({
        objectId: userId
    }).then(resume => {
        app.previewResume = resume
    })
} */