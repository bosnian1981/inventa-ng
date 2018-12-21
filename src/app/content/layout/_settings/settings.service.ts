import { Injectable } from '@angular/core';
import { Settings } from './settings.model';

@Injectable()

// Paste your settins below
// ------------------------
export class SettingsService {
  public options = new Settings(
    'InventaNG', {
    skin: 'light-blue', // dark-blue, dark-orange, dark-green, dark-purple, light-blue, light-orange, light-green, light-purple, custom
    layout: 'default', // default, horizontal
    navbar: {
      width: 'default', // default, folded
      position: 'left',
      variant: 'v1'
    },
    header: {
      state: 'below-fixed'
    },
    footer: {
      state: 'below-static'
    },
    chat: {
      hide: false,
      position: 'right'
    },
    settingsVisible: true
  });
}
// ------------------------
// Paste your settins above

/* ------------------------------------
  Default Settings
--------------------------------------- */
// public options = new Settings(
//   'InventaNG',
//   {
//   skin: 'light-purple',
//   layout: 'default',
//   navbar: {
//     width: 'default',
//     position: 'left',
//     variant: 'v1'
//   },
//   header: {
//     state: 'below-fixed'
//   },
//   footer: {
//     state: 'below-static'
//   },
//   chat: {
//     hide: false,
//     position: 'right'
//   },
//   settingsVisible: true
// });
// }
