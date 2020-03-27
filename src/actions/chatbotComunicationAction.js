const axios = require("axios");

const sendUserDataToChatbot = async message => {
  console.log(process.env.REACT_APP_CHATBOT_URL);
  return axios.post(process.env.REACT_APP_CHATBOT_URL, { message });
};

export default sendUserDataToChatbot;
