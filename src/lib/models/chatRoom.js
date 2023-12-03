class ChatRoom {
  constructor(roomName, createdAt, createdBy, messages = []) {
    this.roomName = roomName;
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.chatMessages = messages;
  }

  addMessage(message) {
    this.chatMessages = this.chatMessages || [];
    this.chatMessages.push(message);
  }

  getDateDescription() {
    if (this.createdAt) {
      let month = this.createdAt.toLocaleString("default", { month: "short" });
      let year = this.createdAt.getFullYear();
      let dayNumber = this.createdAt.getDate();
      return `${dayNumber}${month}${year}`;
    }
    return "";
  }

  getChatRoomNamePrefix() {
    return this.roomName.substr(0, 2).toUpperCase();
  }

  getChatRoomJson() {
    return {
      roomName: this.roomName,
      createdAt: this.createdAt,
      createdBy: this.createdBy,
      chatMessages: this.chatMessages,
    };
  }
}
export default ChatRoom;
