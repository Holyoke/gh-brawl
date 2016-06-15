var axios = require('axios');

var id = 'get';
var sec = 'a_key';
var param = '?client_id=' + id + '&client_secret=' + sec;

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo: function (players ) {
    return axios.all(players.map(function (name) {
      return getUserInfo(name);
    })).then(function (info) {
      return info.map(function(user) {
        return user.data;
        })
      }).catch(function (err) {
        console.warn('Warning in getPlayersInfo', err);
      })
    }
};

module.exports = helpers;
