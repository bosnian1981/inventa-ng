import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { User } from 'shared/models/user';
import { UserService } from 'shared/services/user.service';
import { Conversation, ChatMessage } from 'shared/models/conversation';
import { ChatService } from 'shared/services/chat.service';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {
  @ViewChild('selectedUserImg')
  @ViewChild('chatPS')
  chatPS: PerfectScrollbarComponent;

  selectedUserImg: ElementRef;
  showActiveBox = false;
  animationClass = 'slideInUp';
  users: User[];
  selectedUser: User;
  conversations: Conversation[] = [];
  conversation: Conversation;
  messages: ChatMessage[];
  messageText: string;

  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getConversations();
    this.scrollChatToBotoom();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users.filter(u => u.id !== 2); // 2 is imaginary userId of logged user
    });
  }

  public getConversations(): void {
    this.chatService.getConversations().subscribe(conversations => {
      this.conversations = conversations;
    });
  }

  toggleChatActive(user: User) {
    this.selectedUser = user;
    if (this.showActiveBox && !user) {
      this.animationClass = 'slideOutDown';
      setTimeout(() => {
        this.showActiveBox = false;
      }, 500);
    } else {
      this.animationClass = 'slideInUp';
      this.showActiveBox = true;

      if (this.selectedUserImg) {
        const el = this.selectedUserImg.nativeElement;
        if (!el.classList.contains('zoomIn')) {
          this.renderer.addClass(el, 'zoomIn');
        }

        setTimeout(() => {
          this.renderer.removeClass(el, 'zoomIn');
        }, 500);
      }
    }

    if (user) {
      this.getMessages(user.id, 2); // 2 is imaginary userId of logged user
    }
  }

  getMessages(user1, user2) {
    for (let i = 0; i < this.conversations.length; i++) {
      if (this.conversations[i] && this.conversations[i].user1 === user1) {
        this.conversation = this.conversations[i];
        this.messages = this.conversations[i].messages;
        break;
      }
    }
  }

  sendMessage(messageText) {
    if (messageText) {
      const c: Conversation = this.conversation;
      const m: ChatMessage = new ChatMessage();
      const messagesLength = c.messages.length;
      m.message = messageText;
      m.id = messagesLength + 1;
      m.time = moment()
        .calendar()
        .toString();
      m.sender = c.user2;
      m.receiver = c.user1;
      c.messages.push(m);
      this.chatService.updateConversation(c);
      this.getMessages(c.user1, 2);
      this.messageText = '';
      this.scrollChatToBotoom();
    }
  }

  scrollChatToBotoom() {
    this.chatPS.directiveRef.scrollToBottom(-70, 300);
  }

  onClickedOutside(e: Event) {
    if (this.showActiveBox) {
      this.toggleChatActive(null);
    }
  }
}
