export class Settings {
  constructor(
    public title: string,
    public theme: {
      skin: string;
      layout: string;
      navbar: {
        width: string;
        position: string;
        variant: string;
      };
      header: {
        state: string;
      };
      footer: {
        state: string;
      };
      chat: {
        hide: boolean;
        position: string;
      };
      settingsVisible: boolean;
    }
  ) {}
}
