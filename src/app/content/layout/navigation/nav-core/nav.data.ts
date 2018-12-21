import { NavModel } from './nav.model';

/*
export class NavModel {
    constructor(
        public id: number,
        public title: string,
        public routerLink: string,
        public href: string,
        public icon: string,
        public target: string,
        public hasSubMenu: boolean,
        public parentId: number) { }
}
*/

export const NavData = [
  // Root
  new NavModel(
    1,
    'Dashboard',
    '/dashboard',
    null,
    'area-chart',
    'fa',
    null,
    false,
    0,
    4
  ),
  new NavModel(
    7,
    'Google Material',
    null,
    null,
    'sliders',
    'fa',
    null,
    true,
    0
  ),
  new NavModel(80, 'Icons', null, null, 'star-o', 'fa', null, true, 0),
  new NavModel(3, 'Apps', null, null, 'th', 'fa', null, true, 0),
  new NavModel(93, 'Charts', null, null, 'bar-chart', 'fa', null, true, 0),
  new NavModel(4, 'Pages', null, null, 'file', 'fa', null, true, 0),
  new NavModel(96, 'Tools', null, null, 'wrench', 'fa', null, true, 0),
  new NavModel(97, 'Maps', null, null, 'map-marker', 'fa', null, true, 0),
  new NavModel(
    83,
    'Menu Levels',
    null,
    null,
    'angle-double-down',
    'fa',
    null,
    true,
    0
  ),
  new NavModel(6, 'Documentation', null, null, 'book', 'fa', null, true, 0),
  new NavModel(
    88,
    'External Link',
    null,
    'https://www.google.com/',
    'link',
    'fa',
    '_blank',
    false,
    0
  ),

  // Apps
  new NavModel(
    10,
    'eCommerce',
    null,
    null,
    'shopping-cart',
    'fa',
    null,
    true,
    3
  ),
  new NavModel(
    92,
    'Calendar',
    '/calendar',
    null,
    'calendar',
    'fa',
    null,
    false,
    3
  ),
  new NavModel(
    99,
    'Mailbox',
    '/mailbox',
    null,
    'envelope',
    'fa',
    null,
    false,
    3
  ),
  new NavModel(100, 'Todo', '/todo', null, 'list-alt', 'fa', null, false, 3),
  new NavModel(101, 'Chat', '/chat', null, 'comments', 'fa', null, false, 3),

  // Maps
  new NavModel(
    102,
    'Google Maps',
    '/maps/google-maps',
    null,
    'map-marker',
    'fa',
    null,
    false,
    97
  ),
  // Charts
  new NavModel(
    94,
    'Charts-js',
    '/charts/charts-js',
    null,
    'area-chart',
    'fa',
    null,
    false,
    93
  ),
  new NavModel(
    95,
    'Ngx-Charts',
    '/charts/ngx-charts',
    null,
    'pie-chart',
    'fa',
    null,
    false,
    93
  ),
  // Pages
  new NavModel(90, 'User', null, null, 'user', 'fa', null, true, 4),
  new NavModel(11, 'Account', null, null, 'user-plus', 'fa', null, true, 4),
  new NavModel(89, 'Blank', '/blank', null, 'file', 'fa', null, false, 4),
  new NavModel(
    12,
    'Not Found',
    '/pagenotfound',
    null,
    'exclamation-triangle',
    'fa',
    null,
    false,
    4
  ),

  // Icons
  new NavModel(
    81,
    'Material Icons',
    '/icons/material',
    null,
    'cube',
    'fa',
    null,
    false,
    80
  ),
  new NavModel(
    82,
    'Line Awesome Icons',
    '/icons/line-awesome',
    null,
    'font',
    'fa',
    null,
    false,
    80
  ),

  // Tools
  new NavModel(
    105,
    'Drag-Drop',
    '/tools/drag-drop',
    null,
    'arrows',
    'fa',
    null,
    false,
    96
  ),
  new NavModel(
    106,
    'Alerts',
    '/tools/alerts',
    null,
    'bell',
    'fa',
    null,
    false,
    96
  ),
  new NavModel(
    107,
    'Toastr',
    '/tools/toastr',
    null,
    'bell',
    'fa',
    null,
    false,
    96
  ),
  new NavModel(
    108,
    'Modals',
    '/tools/modals',
    null,
    'files-o',
    'fa',
    null,
    false,
    96
  ),

  // levels :: start
  new NavModel(84, 'Level 2', null, null, 'level-down', 'fa', null, true, 83),
  new NavModel(85, 'Level 3', null, null, 'level-down', 'fa', null, true, 84),
  new NavModel(86, 'Level 4', null, null, 'level-down', 'fa', null, true, 85),
  new NavModel(87, 'Level 5', null, null, null, 'fa', null, false, 86),
  // levels :: end

  // documentation :: start
  new NavModel(109, 'Angular Introduction', null, null, 'book', 'fa', null, true, 6),
  new NavModel(110, 'INVENTA-ng details', null, null, 'book', 'fa', null, true, 6),
  new NavModel(111, 'References', '/documentation/references', null, 'book', 'fa', null, false, 6),
  new NavModel(112, 'Changelog', '/documentation/changelog', null, 'book', 'fa', null, false, 6),

  // angular introduction :: start
  new NavModel(113, 'Overview', '/documentation/angular-overview', null, 'book', 'fa', null, false, 109),
  new NavModel(114, 'Instalation', '/documentation/angular-instalation', null, 'book', 'fa', null, false, 109),
  new NavModel(115, 'Deployment', '/documentation/angular-deployment', null, 'book', 'fa', null, false, 109),
  // angular introduction :: end

  // working with INVENTA-ng :: start
  new NavModel(116, 'Quick Start', '/documentation/theme-quick-start', null, 'book', 'fa', null, false, 110),
  new NavModel(117, 'Theme Settings', '/documentation/theme-settings', null, 'book', 'fa', null, false, 110),
  new NavModel(118, 'Create Custom Skin', '/documentation/theme-create-custom-skin', null, 'book', 'fa', null, false, 110),
  new NavModel(119, 'Create New Page', '/documentation/theme-create-new-page', null, 'book', 'fa', null, false, 110),
  new NavModel(120, 'Files Structure', '/documentation/theme-files-structure', null, 'book', 'fa', null, false, 110),
  new NavModel(121, 'Stylesheets', '/documentation/theme-stylesheets', null, 'book', 'fa', null, false, 110),
  // working with INVENTA-ng :: end
  // documentation :: end

  // Material Component Groups
  new NavModel(
    16,
    'Form Controls',
    null,
    null,
    'newspaper-o',
    'fa',
    null,
    true,
    7
  ),
  new NavModel(17, 'Navigation', null, null, 'bars', 'fa', null, true, 7),
  new NavModel(18, 'Layout', null, null, 'th-large', 'fa', null, true, 7),
  new NavModel(
    19,
    'Buttons & Indicators',
    null,
    null,
    'keyboard-o',
    'fa',
    null,
    true,
    7
  ),
  new NavModel(
    20,
    'Popups & Modals',
    null,
    null,
    'comment-o',
    'fa',
    null,
    true,
    7
  ),
  new NavModel(21, 'Data Table', null, null, 'table', 'fa', null, true, 7),

  // Material Components - Form Controls
  new NavModel(
    22,
    'Autocomplete',
    '/material/autocomplete',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    23,
    'Checkbox',
    '/material/checkbox',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    24,
    'Datepicker',
    '/material/datepicker',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    25,
    'Form field',
    '/material/form-field',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    26,
    'Input',
    '/material/input',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    27,
    'Radio button',
    '/material/radio-button',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    28,
    'Select',
    '/material/select',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    29,
    'Slider',
    '/material/slider',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),
  new NavModel(
    30,
    'Slide toggle',
    '/material/slide-toggle',
    null,
    null,
    'fa',
    null,
    false,
    16
  ),

  // Material Components - Navigation
  new NavModel(31, 'Menu', '/material/menu', null, null, 'fa', null, false, 17),
  new NavModel(
    32,
    'Sidenav',
    '/material/sidenav',
    null,
    null,
    'fa',
    null,
    false,
    17
  ),
  new NavModel(
    33,
    'Toolbar',
    '/material/toolbar',
    null,
    null,
    'fa',
    null,
    false,
    17
  ),

  // Material Components - Layout
  new NavModel(34, 'Card', '/material/card', null, null, 'fa', null, false, 18),
  new NavModel(
    35,
    'Divider',
    '/material/divider',
    null,
    null,
    'fa',
    null,
    false,
    18
  ),
  new NavModel(
    36,
    'Expansion Panel',
    '/material/expansion-panel',
    null,
    null,
    'fa',
    null,
    false,
    18
  ),
  new NavModel(
    37,
    'Grid list',
    '/material/grid-list',
    null,
    null,
    'fa',
    null,
    false,
    18
  ),
  new NavModel(38, 'List', '/material/list', null, null, 'fa', null, false, 18),
  new NavModel(
    39,
    'Stepper',
    '/material/stepper',
    null,
    null,
    'fa',
    null,
    false,
    18
  ),
  new NavModel(40, 'Tabs', '/material/tabs', null, null, 'fa', null, false, 18),
  new NavModel(41, 'Tree', '/material/tree', null, null, 'fa', null, false, 18),

  // Material Components - Buttons and Indicators
  new NavModel(
    42,
    'Button',
    '/material/button',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(
    43,
    'Button toggle',
    '/material/button-toggle',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(
    44,
    'Badge',
    '/material/badge',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(
    45,
    'Chips',
    '/material/chips',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(46, 'Icon', '/material/icon', null, null, 'fa', null, false, 19),
  new NavModel(
    47,
    'Progress spinner',
    '/material/progress-spinner',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(
    48,
    'Progress bar',
    '/material/progress-bar',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),
  new NavModel(
    97,
    'Ripples',
    '/material/ripples',
    null,
    null,
    'fa',
    null,
    false,
    19
  ),

  // Material Components - Popups and Modals
  new NavModel(
    49,
    'Bottom sheet',
    '/material/bottom-sheet',
    null,
    null,
    'fa',
    null,
    false,
    20
  ),
  new NavModel(
    50,
    'Dialog',
    '/material/dialog',
    null,
    null,
    'fa',
    null,
    false,
    20
  ),
  new NavModel(
    51,
    'Snackbar',
    '/material/snackbar',
    null,
    null,
    'fa',
    null,
    false,
    20
  ),
  new NavModel(
    52,
    'Tooltip',
    '/material/tooltip',
    null,
    null,
    'fa',
    null,
    false,
    20
  ),

  // Material Components - Datatable
  new NavModel(
    53,
    'Paginator',
    '/material/paginator',
    null,
    null,
    'fa',
    null,
    false,
    21
  ),
  new NavModel(
    55,
    'Table',
    '/material/table',
    null,
    null,
    'fa',
    null,
    false,
    21
  ),

  // MDA - Components
  // new NavModel(73, 'Dropdown', '/mda/dropdown', null, null, null, null, false, 9),
  // new NavModel(74, 'Vertical Menu', '/mda/vertical-menu', null, null, null, null, false, 9),

  // eCommerce pages
  new NavModel(
    75,
    'Customers',
    '/ecommerce/customers',
    null,
    'users',
    'fa',
    null,
    false,
    10
  ),
  new NavModel(
    76,
    'Products',
    '/ecommerce/products',
    null,
    'dropbox',
    'fa',
    null,
    false,
    10
  ),

  // Account pages
  new NavModel(
    77,
    'Login',
    '/auth/login',
    null,
    'sign-in',
    'fa',
    null,
    false,
    11
  ),
  new NavModel(
    78,
    'Register',
    '/auth/register',
    null,
    'user-plus',
    'fa',
    null,
    false,
    11
  ),
  new NavModel(
    79,
    'Password recovery',
    '/auth/recovery',
    null,
    'retweet',
    'fa',
    null,
    false,
    11
  ),

  // User pages
  new NavModel(91, 'Profile', '/user', null, 'user', 'fa', null, false, 90)
];
