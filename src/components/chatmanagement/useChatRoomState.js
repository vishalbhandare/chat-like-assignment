import { ref, reactive, onMounted, inject } from "vue";
import chatService from "../../lib/remote/chatService";
export default function useChatRoomState() {
  const showCreateDialog = ref(false);
  //   const selectedChatRoomName = ref("");
  const chatRoomInfo = reactive({ data: [], loading: false, error: false });
  const selectedChatRoomName = inject("selectedChatRoomName");
  const fetchChatRooms = async () => {
    try {
      console.log("fetchChatRooms");
      chatRoomInfo.loading = true;
      const resp = await chatService.getAllChatRooms();
      chatRoomInfo.data = resp;
      chatRoomInfo.loading = false;

      if (!selectedChatRoomName.value && resp.length > 0) {
        setSelectedChatRoomName(resp[0].roomName);
      }
    } catch (e) {
      chatRoomInfo.error = true;
    }
  };

  const toggleDialog = () => {
    showCreateDialog.value = !showCreateDialog.value;
  };

  const setSelectedChatRoomName = (roomName) => {
    selectedChatRoomName.value = roomName;
  };

  onMounted(() => {
    fetchChatRooms();
  });

  return {
    showCreateDialog,
    chatRoomInfo,
    toggleDialog,
    setSelectedChatRoomName,
    fetchChatRooms,
  };
}
