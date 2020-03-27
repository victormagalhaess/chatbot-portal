import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./App.css";
import sendUserDataToChatbot from "./actions/chatbotComunicationAction";
require("dotenv/config");

class App extends Component {
  handleNewUserMessage = async message => {
    const responseChatbot = await sendUserDataToChatbot(message);
    addResponseMessage(responseChatbot.data.text);
  };

  render() {
    return (
      <div className="App">
        <Widget handleNewUserMessage={this.handleNewUserMessage} title="Torugo's Chatbot" subtitle="" />
      </div>
    );
  }
}

export default App;
