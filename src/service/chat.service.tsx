import BaseService from "./base.service";

class ChatService extends BaseService {
  on(arg0: string, handleLoadChat: () => Promise<void>) {
    throw new Error("Method not implemented.");
  }
  off(arg0: string, handleLoadChat: () => Promise<void>) {
    throw new Error("Method not implemented.");
  }
    async sendMessage(data: 
        { message: string
        receiverId: string
     }) {
        return await this.postRequest('/chat/sendMessage', data);
     }
      async getChatDetail(userId: string) {
        return await this.getRequest('/chat/'+userId, {params:{page:1, limit:50}});
     }
}

export default new ChatService();