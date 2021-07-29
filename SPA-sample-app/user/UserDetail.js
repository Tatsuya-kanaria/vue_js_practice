// ユーザー詳細ページのコンポーネント
var UserDetail = {
  template: '#user-detail',
  // 初期値のセット
  data: function () {
    return {
      loading: false,
      user: null,
      error: null
    }
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData: function () {
      this.loading = true
      // this.$route.params.userId に現在のURL上のパラメーターに対応したuserIdが格納される
      getUser(this.$route.params.userId, (function (err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}
