import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import sendUserDataToChatbot from "./features/chatbotCommunication";
import { updateMessageEscapeCaracteres } from "./shared/utils";

import "react-chat-widget/lib/styles.css";
import "./styles/App.css";
import profilePic from "./img/pp.jpg";

require("dotenv/config");

class App extends Component {
  handleNewUserMessage = async (message) => {
    const responseChatbot = await sendUserDataToChatbot(message);
    const escapedResponseChatbot = updateMessageEscapeCaracteres(responseChatbot.data.text);
    addResponseMessage(escapedResponseChatbot);
  };

  componentDidMount = () => {
    const initialMessage = "Olá, tudo bem? \n\n Sou um bot feito para dar informações sobre meu criador!";
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
