import chatService from "../../lib/remote/chatService";
import { ref } from "vue";
export default function useChatMessageState() {
  const chatMessageList = ref([]);

  const fetchChatMessageList = async (chatRoomName) => {
    try {
      let chatMessages = await chatService.getChatsByChatRoom(chatRoomName);
      console.log("chatMessages", chatMessages);
      chatMessageList.value = chatMessages;
    } catch (err) {
      console.log("err", err);
    }
  };

  return { fetchChatMessageList, chatMessageList };
}
