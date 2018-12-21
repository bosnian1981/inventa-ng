export class Conversation {
    id: number;
    user1: number;
    user2: number;
    messages: ChatMessage[];
}

export class ChatMessage {
    id: number;
    sender: number;
    receiver: number;
    message: string;
    time: string;
}
