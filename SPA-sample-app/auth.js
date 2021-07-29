// サンプルアプリケーション用のダミー認証モジュール
var Auth = {
  login: function (email, pass, cb) {
    // ダミーデータを使った擬似ログイン
    setTimeout(function () {
      if (email === 'vue@example.com' && pass === 'vue') {
        // ログイン成功時はローカルストレージにtokenを保存する
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) { cb(true) }
      } else {
        if (cb) { cb(false) }
      }
    }, 0)
  },

  logout: function () {
    delete localStorage.token
  },

  loggedIn: function () {
    // ローカルストレージに token があればログイン状態とみなす
    return !!localStorage.token
  }
}
