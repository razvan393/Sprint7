require('normalize.css');
require('styles/App.css');

import React from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import ChatLog from './ChatLog';
import ActiveUsers from './ActiveUsers';
import User from './User';

import API from './api';

var AppComponent = React.createClass({
  getInitialState: function () {
    return {
      activeUsers: [],

      messageLog: [],

      isLoggedIn: false,

      currentUser: {
        fb_id: '1307233471',
        first_name: 'Razvan',
        last_name: 'Bolovan'
      }
    }
  },


  fetchUsers: function () {
    API.fetchUsers()
      .then(function (json) {
        this.setState({
          activeUsers: json
        });
      }.bind(this));
  },

  fetchUser: function () {
    return API.fetchUser(this.state.currentUser)
      .then(function (json) {
        this.setState({currentUser: json});
      }.bind(this));
  },

  fetchMessages: function () {
    API.fetchMessages(this.state.currentUser)
      .then(function (log) {
        this.setState({
          messageLog: log
        });
      }.bind(this));
  },

  componentWillMount: function () {
    this.fetchUsers();
    setInterval(this.fetchUsers, 3000);

    this.fetchUser().then(function () {
      this.fetchMessages();
      setInterval(this.fetchMessages, 2000);
    }.bind(this));
  },

  onSubmit: function (body) {
    API.sendMessage(body, this.state.currentUser)
      .then(function (json) {
      }.bind(this));
  },

  renderChat: function () {
    var currentUser = this.state.currentUser;
    var chatMessages = this.state.messageLog.map(function (message) {
      var alignRight = (currentUser.fb_id === message.participant.fb_id);

      return (<ChatMessage
        user={message.participant}
        body={message.body}
        date={message.date}
        delivered={message.id}
        key={message.id}
        alignRight={alignRight}
      />)
    });
    return (

      <div className='chat-view'>
        <ActiveUsers list={this.state.activeUsers}/>
        <ChatLog>
          {chatMessages}
        </ChatLog>
        <ChatInput onSubmit={this.onSubmit}/>
      </div>
    )
  },

  renderLogin: function () {
    return(
      <div className="login-view">
        <a href="#">Login with Facebook</a>
      </div>
    )
  },

  render: function () {

    return (
      <div className="app">
        { this.state.isLoggedIn ? this.renderChat() : this.renderLogin() }

      </div>
    );
  }
});


export default AppComponent;
