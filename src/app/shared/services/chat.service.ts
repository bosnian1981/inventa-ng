import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from 'shared/models/conversation';

@Injectable()

export class ChatService {
  public url = 'api/conversations';
  constructor(public http: HttpClient) {}

  getConversations(): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.url);
  }

  updateConversation(conversation: Conversation) {
    return this.http.put(this.url, conversation);
  }
}
