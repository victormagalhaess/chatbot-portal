import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./App.css";
import sendUserDataToChatbot from "./actions/chatbotComunicationAction";
import profilePic from "./img/pp.jpg";
require("dotenv/config");

class App extends Component {
  handleNewUserMessage = async message => {
    const responseChatbot = await sendUserDataToChatbot(message);
    addResponseMessage(responseChatbot.data.text);
  };

  componentDidMount = () => {
    const initialMessage = "Olá, tudo bem? Sou um bot feito para dar informações sobre meu criador!";
    const suggestionMessage = `Para começar, me pergunte "O que eu posso perguntar?"`;
    addResponseMessage(initialMessage);
    addResponseMessage(suggestionMessage);
  };

  render = () => {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          title="Victor's Chatbot"
          subtitle=""
          profileAvatar={profilePic}
          senderPlaceHolder="Digite uma mensagem..."
        />
      </div>
    );
  };
}

export default App;
