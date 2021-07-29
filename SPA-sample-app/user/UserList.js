// ユーザーリストコンポーネント
var UserList = {
  // HTMLのscriptタグのidを指定する
  template: '#user-list',
  data: function () {
    return {
      loading: false,
      users: function () {
        return []
      }, //初期値の空配列
      error: null
    }
  },

  // 初期化時にデータを取得する
  created: function () {
    this.fetchData()
  },

  // $route の変更を watch することでルーティングが変更された時に再度データを取得
  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData: function () {
      this.loading = true
      // 取得したデータの結果をusersに格納する
      // Function.prototype.bind は this のスコープを渡すために利用
      getUsers((function (err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}
