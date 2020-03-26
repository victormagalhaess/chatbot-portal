import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
require("dotenv/config");
const axios = require("axios");

class App extends Component {
  handleNewUserMessage = async message => {
    console.log(process.env.REACT_APP_CHATBOT_URL);
    const resposta = await axios.post(process.env.REACT_APP_CHATBOT_URL, { message });
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
