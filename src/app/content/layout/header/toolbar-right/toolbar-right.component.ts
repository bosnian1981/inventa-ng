import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { LanguagesService } from 'shared/services/languages.service';
import { Subscription } from 'rxjs';
import { ComponentCommunicationService } from 'shared/services/component-communication.service';
import { Language } from 'shared/models/language';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-toolbar-right',
  templateUrl: './toolbar-right.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ToolbarRightComponent implements OnInit {
  @ViewChild('profileCard')
  profileCard: ElementRef;
  @ViewChild('languageCard')
  languageCard: ElementRef;
  @ViewChild('alertsCard')
  alertsCard: ElementRef;
  @ViewChild('messagesCard')
  messagesCard: ElementRef;
  @ViewChild('tasksCard')
  tasksCard: ElementRef;
  @ViewChild('toolbar')
  toolbar: ElementRef;
  subscription: Subscription;
  selectedLanguage: Language;
  showToolbarToggler = false;
  showChatToggler = false;

  constructor(
    private renderer: Renderer2,
    private componentCommunicationService: ComponentCommunicationService,
    private languageService: LanguagesService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.subscription = this.componentCommunicationService
      .getMessage()
      .subscribe(message => {
        this.languageService.getLanguages().subscribe(
          languages => {
            this.selectedLanguage = languages.find(
              l => l.id.toString() === message.text
            );
          },
          null,
          () => this.toggleLanguageCard()
        );
      });
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1221px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.renderer.addClass(this.toolbar.nativeElement, 'd-none');
          this.showToolbarToggler = true;
        } else {
          this.renderer.setAttribute(
            this.toolbar.nativeElement,
            'class',
            'toolbar'
          );
          this.showToolbarToggler = false;
        }
      });

    this.breakpointObserver
      .observe(['(max-width: 1221px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showChatToggler = true;
        } else {
          this.showChatToggler = false;
        }
      });
  }

  toggleTasksCard() {
    this.toggleCard(this.tasksCard.nativeElement);
  }
  hideTasksCard() {
    this.toggleCard(this.tasksCard.nativeElement, true);
  }

  toggleMessagesCard() {
    this.toggleCard(this.messagesCard.nativeElement);
  }
  hideMessagesCard() {
    this.toggleCard(this.messagesCard.nativeElement, true);
  }

  toggleAlertsCard() {
    this.toggleCard(this.alertsCard.nativeElement);
  }
  hideAlertsCard() {
    this.toggleCard(this.alertsCard.nativeElement, true);
  }

  toggleLanguageCard() {
    this.toggleCard(this.languageCard.nativeElement);
  }
  hideLanguageCard() {
    this.toggleCard(this.languageCard.nativeElement, true);
  }

  toggleProfileCard() {
    this.toggleCard(this.profileCard.nativeElement);
  }
  hideProfileCard() {
    this.toggleCard(this.profileCard.nativeElement, true);
  }
  toggleCard(card, hide?: boolean) {
    if (card.classList.contains('slideInRight') || hide) {
      this.renderer.removeClass(card, 'slideInRight');
      this.renderer.addClass(card, 'slideOutRight');
      setTimeout(() => {
        this.renderer.addClass(card, 'd-none');
        this.renderer.removeClass(card, 'slideOutRight');
      }, 500);
    } else {
      this.renderer.removeClass(card, 'd-none');
      this.renderer.removeClass(card, 'slideOutRight');
      this.renderer.addClass(card, 'slideInRight');
    }
  }

  toggleToolbar() {
    if (this.toolbar.nativeElement.classList.contains('d-none')) {
      this.renderer.setAttribute(
        this.toolbar.nativeElement,
        'class',
        'toolbar md animated slideInRight'
      );
    } else {
      this.renderer.setAttribute(
        this.toolbar.nativeElement,
        'class',
        'd-none animated slideOutRight'
      );
    }
  }
  hideToolbar() {
    if (!this.toolbar.nativeElement.classList.contains('d-none')) {
      this.renderer.setAttribute(
        this.toolbar.nativeElement,
        'class',
        'd-none animated slideOutRight'
      );
    }
  }

  toggleChat() {
    const chat = document.querySelector('#chat');
    const chatBody = document.querySelector('#chatBody');

    if (!chat.classList.contains('show')) {
      this.renderer.addClass(chat, 'show');
      this.renderer.removeClass(chatBody, 'slideOutDown');
    } else {
      this.renderer.removeClass(chat, 'show');
    }
  }
}
