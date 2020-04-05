export const updateMessageEscapeCaracteres = (message) => {
  const messageWithUpdateEscapeCaracteres = message.replace(/\\n/g, "\n");
  return messageWithUpdateEscapeCaracteres;
};
