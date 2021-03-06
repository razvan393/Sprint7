require('normalize.css');
require('styles/App.css');


import React from 'react';

var ChatInput = React.createClass({

  onSubmit: function (event) {
    event.preventDefault();
    var body = this.refs.message.value;
    this.props.onSubmit(body);
    this.refs.myForm.reset();
  },

  render: function () {

    return (
      <div className='chat-input'>
        <form ref="myForm" onSubmit={this.onSubmit}>
          <input ref='message' placeholder='type here...'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
});

export default ChatInput;
