// ルートオプションを渡してルーターインスタンスを生成
var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter: function (to, from, next) {
        // 認証されていない状態でアクセスした時はloginページに推移する
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          // 認証済みであればそのまま新規ユーザー作成ページへ進む
          next()
        }
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter: function (to, from, next) {
        Auth.logout()
        next('/top')
      }
    },
    // 定義されていないパスへの対応。トップページへリダイレクトする。
    {
      path: '*',
      redirect: '/top'
    }
  ]
})
