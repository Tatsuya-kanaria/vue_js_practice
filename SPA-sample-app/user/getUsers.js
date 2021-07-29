// 擬似的に API 経由で情報を取得したようにする
var getUsers = function (callback) {
  setTimeout(function () {
    callback(null, userData)
  }, 1000)
}
