// ユーザー作成コンポーネント
var UserCreate = {
  template: '#user-create',
  data: function () {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },

  created: function () {
  },

  methods: {
    defaultUser: function () {
      return {
        name: '',
        description: ''
      }
    },

    createUser: function () {
      // 入力パラメーターのバリデーション
      if (this.user.name.trim() === '') {
        this.error = 'Nameは必須です'
        return
      }
      if (this.user.description.trim() === '') {
        this.error = 'Descriptionは必須です'
        return
      }

      postUser(this.user, (function (err, user) {
        this.sending = false
        if (err) {
          this.error = err.toString()
        } else {
          this.error = null
          // デフォルトでフォームをリセット
          this.user = this.defaultUser()
          alert('新規ユーザーが登録されました')
          // ユーザー一覧ページに戻る
          this.$router.push('/users')
        }
      }).bind(this))
    }
  }
}
