import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import ChatController from '../controllers/chatcontroller.js';

export default class Chat extends Component{
  state = {
    messages: []
  };

  componentWillMount(){

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          ChatController.sendMessage(message);
        }}
        user={{
          _id: ChatController.getUid(),
          name: this.props.name,
        }}
      />
    );
  }

  componentDidMount() {
    ChatController.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    ChatController.closeChat();
  }
}

Chat.defaultProps = {
  name: 'Cool Person!',
}
