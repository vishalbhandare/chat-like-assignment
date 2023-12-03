import ChatMessage from "../models/chatMessage";
import ChatRoom from "../models/chatRoom";

const chatService = {
  getChatRoomListFromLocalStorage: () => {
    const chatRoomListStr = localStorage.getItem("chatRoomList") || "[]";
    const chatRoomListJson = JSON.parse(chatRoomListStr);

    return chatRoomListJson
      .map((chatRoom) => {
        return new ChatRoom(
          chatRoom.roomName,
          new Date(chatRoom.createdAt),
          chatRoom.createdBy,
          chatService.getFormattedChatMessage(chatRoom.chatMessages)
        );
      })
      .sort((item1, item2) => item2.createdAt - item1.createdAt);
  },

  getFormattedChatMessage(messagesJson) {
    let markMessageAsEod = "";
    // console.log(messagesJson, "messagesJson");
    let userFirstMessage = "";
    return messagesJson
      .map(
        (message) =>
          new ChatMessage(
            message.chatRoomId,
            message.message,
            new Date(message.messageAt),
            message.messageBy
          )
      )
      .sort((item1, item2) => item1.messageAt - item2.messageAt)
      .map((item) => {
        let isDateChanged = false;
        if (!markMessageAsEod) {
          markMessageAsEod = item.messageAt;
        } else if (
          markMessageAsEod.toDateString() !== item.messageAt.toDateString()
        ) {
          isDateChanged = true;
        }
        if (!userFirstMessage) {
          item.userFirstMessage = item.messageBy;
        } else if (userFirstMessage.email !== item.messageBy.email) {
          item.userFirstMessage = item.messageBy;
        }

        item.isLastMessageOfDay = isDateChanged ? markMessageAsEod : false;
        markMessageAsEod = item.messageAt;
        userFirstMessage = item.messageBy;
        return item;
      });
  },

  saveChatRoomListToLocalStorage: (chatRoomList) => {
    const jsonObj = chatRoomList.map((chatRoomInstance) =>
      chatRoomInstance.getChatRoomJson()
    );
    localStorage.setItem("chatRoomList", JSON.stringify(jsonObj));
  },

  validateChatRoomDetail: (chatRoomName) => {
    if (!chatRoomName || chatRoomName.length <= 2 || chatRoomName.length > 20) {
      return false;
    }
    return true;
  },

  addChatRoom: async (chatRoomName, user) => {
    if (!chatService.validateChatRoomDetail(chatRoomName)) {
      return false;
    }
    let chatRoomList = chatService.getChatRoomListFromLocalStorage();
    chatRoomList.push(new ChatRoom(chatRoomName, new Date(), user));
    chatService.saveChatRoomListToLocalStorage(chatRoomList);
    return true;
  },

  sendChatMessage: async (chatRoomName, message, user) => {
    let chatRoomList = chatService.getChatRoomListFromLocalStorage();
    const chatRoomIndex = chatRoomList.findIndex(
      (chatRoom) =>
        chatRoom.roomName.toLowerCase() === chatRoomName.toLowerCase()
    );
    if (chatRoomIndex >= 0) {
      chatRoomList[chatRoomIndex].chatMessages.push(
        new ChatMessage(chatRoomName, message, new Date(), user)
      );
    }
    chatService.saveChatRoomListToLocalStorage(chatRoomList);
    return true;
  },

  getAllChatRooms: async () => {
    return chatService.getChatRoomListFromLocalStorage();
  },
  getChatsByChatRoom: async (chatRoomName) => {
    let chatRoomList = chatService.getChatRoomListFromLocalStorage();
    const chatRoom = chatRoomList.find(
      (chatRoom) =>
        chatRoom.roomName.toLowerCase() === chatRoomName.toLowerCase()
    );
    return chatRoom.chatMessages ? chatRoom.chatMessages : [];
  },
  sendChatInChatRoom: () => {},
};

export default chatService;
