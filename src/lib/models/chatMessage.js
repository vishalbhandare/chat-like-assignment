class ChatMessage {
  constructor(
    chatRoomId,
    message,
    messageAt,
    messageBy,
    isLastMessageOfDay = false
  ) {
    this.message = message;
    this.messageAt = messageAt;
    this.chatRoomId = chatRoomId;
    this.messageBy = messageBy;
    this.isLastMessageOfDay = isLastMessageOfDay;
    this.userFirstMessage = false;
  }

  getChatMessageJson() {
    return {
      message: this.message,
      messageAt: this.messageAt,
      chatRoomId: this.chatRoomId,
      messageBy: this.messageBy,
    };
  }

  getTimePrefix() {
    let hours = this.messageAt.getHours();
    let minutes = this.messageAt.getMinutes();
    let dayPrefix = +hours >= 12 ? "PM" : "AM";
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    return `${hours}:${minutes} ${dayPrefix}`;
  }

  isSelfSent(user) {
    return user.email === this.messageBy.email;
  }

  getSenderPrefix() {
    return this.messageBy.email.substr(0, 1).toUpperCase();
  }

  getFormattedDateforLastDay() {
    if (this.isLastMessageOfDay) {
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return this.messageAt.toLocaleTimeString("en-US", options);
    }
    return "";
  }
}

export default ChatMessage;
