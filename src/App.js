import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
require("dotenv/config");
const axios = require("axios");
const CHATBOT_URL = "https://torugo-chatbot.herokuapp.com/api/v1/mensagem";

class App extends Component {
  handleNewUserMessage = async message => {
    const resposta = await axios.post(CHATBOT_URL, { message });
    addResponseMessage(resposta.data.text);
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
