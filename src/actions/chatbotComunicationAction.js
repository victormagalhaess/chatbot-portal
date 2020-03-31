const axios = require("axios");

const sendUserDataToChatbot = async message => {
  return axios.post(process.env.REACT_APP_CHATBOT_URL, { message });
};

export default sendUserDataToChatbot;
