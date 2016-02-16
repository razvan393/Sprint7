const API = {
  base: 'http://192.168.1.114:9000/api/',

  fetchUsers: function () {
    var url = this.base + 'participants';
    return fetch(url).then(function (response) {
      return response.json()
    });
  },

  fetchUser: function (currentUser) {
    var url = this.base + 'participants';
    var attr = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentUser)
    };
    return fetch(url, attr)
      .then(function (response) {
        return response.json();
      });
  },

  fetchMessages: function (currentUser) {
    var url = this.base + 'messages/' + currentUser.id;

    return fetch(url).then(function (response) {
      return response.json()
    });
  },

  sendMessage: function (body, currentUser) {
    var url = this.base + 'messages/' + currentUser.id;
    var attr = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({body: body})
    };

    return fetch(url, attr)
      .then(function (response) {
        return response.json();
      });
  }
};

export default API;
