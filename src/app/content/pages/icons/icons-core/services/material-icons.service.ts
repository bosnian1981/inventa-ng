import { Injectable } from '@angular/core';

@Injectable()
export class MaterialIconsService {
  private iconList = [
    { name: '3d_rotation', type: 'action' },
    {
      name: 'accessibility',
      type: 'action'
    },
    {
      name: 'accessibility_new',
      type: 'action'
    },
    { name: 'accessible', type: 'action' },
    {
      name: 'accessible_forward',
      type: 'action'
    },
    {
      name: 'account_balance',
      type: 'action'
    },
    {
      name: 'account_balance_wallet',
      type: 'action'
    },
    { name: 'account_box', type: 'action' },
    {
      name: 'account_circle',
      type: 'action'
    },
    {
      name: 'add_shopping_cart',
      type: 'action'
    },
    { name: 'alarm', type: 'action' },
    { name: 'alarm_add', type: 'action' },
    { name: 'alarm_off', type: 'action' },
    { name: 'alarm_on', type: 'action' },
    { name: 'all_out', type: 'action' },
    { name: 'android', type: 'action' },
    {
      name: 'announcement',
      type: 'action'
    },
    {
      name: 'arrow_right_alt',
      type: 'action'
    },
    {
      name: 'aspect_ratio',
      type: 'action'
    },
    { name: 'assessment', type: 'action' },
    { name: 'assignment', type: 'action' },
    {
      name: 'assignment_ind',
      type: 'action'
    },
    {
      name: 'assignment_late',
      type: 'action'
    },
    {
      name: 'assignment_return',
      type: 'action'
    },
    {
      name: 'assignment_returned',
      type: 'action'
    },
    {
      name: 'assignment_turned_in',
      type: 'action'
    },
    { name: 'autorenew', type: 'action' },
    { name: 'backup', type: 'action' },
    { name: 'book', type: 'action' },
    { name: 'bookmark', type: 'action' },
    {
      name: 'bookmark_border',
      type: 'action'
    },
    { name: 'bug_report', type: 'action' },
    { name: 'build', type: 'action' },
    { name: 'cached', type: 'action' },
    {
      name: 'calendar_today',
      type: 'action'
    },
    {
      name: 'calendar_view_day',
      type: 'action'
    },
    {
      name: 'camera_enhance',
      type: 'action'
    },
    {
      name: 'card_giftcard',
      type: 'action'
    },
    {
      name: 'card_membership',
      type: 'action'
    },
    { name: 'card_travel', type: 'action' },
    {
      name: 'change_history',
      type: 'action'
    },
    {
      name: 'check_circle',
      type: 'action'
    },
    {
      name: 'check_circle_outline',
      type: 'action'
    },
    {
      name: 'chrome_reader_mode',
      type: 'action'
    },
    { name: 'class', type: 'action' },
    { name: 'code', type: 'action' },
    { name: 'commute', type: 'action' },
    {
      name: 'compare_arrows',
      type: 'action'
    },
    {
      name: 'contact_support',
      type: 'action'
    },
    { name: 'copyright', type: 'action' },
    { name: 'credit_card', type: 'action' },
    { name: 'dashboard', type: 'action' },
    { name: 'date_range', type: 'action' },
    { name: 'delete', type: 'action' },
    {
      name: 'delete_forever',
      type: 'action'
    },
    {
      name: 'delete_outline',
      type: 'action'
    },
    { name: 'description', type: 'action' },
    { name: 'dns', type: 'action' },
    { name: 'done', type: 'action' },
    { name: 'done_all', type: 'action' },
    {
      name: 'done_outline',
      type: 'action'
    },
    { name: 'donut_large', type: 'action' },
    { name: 'donut_small', type: 'action' },
    {
      name: 'drag_indicator',
      type: 'action'
    },
    { name: 'eject', type: 'action' },
    { name: 'euro_symbol', type: 'action' },
    { name: 'event', type: 'action' },
    { name: 'event_seat', type: 'action' },
    { name: 'exit_to_app', type: 'action' },
    { name: 'explore', type: 'action' },
    { name: 'extension', type: 'action' },
    { name: 'face', type: 'action' },
    { name: 'favorite', type: 'action' },
    {
      name: 'favorite_border',
      type: 'action'
    },
    { name: 'feedback', type: 'action' },
    {
      name: 'find_in_page',
      type: 'action'
    },
    {
      name: 'find_replace',
      type: 'action'
    },
    { name: 'fingerprint', type: 'action' },
    { name: 'flight_land', type: 'action' },
    {
      name: 'flight_takeoff',
      type: 'action'
    },
    {
      name: 'flip_to_back',
      type: 'action'
    },
    {
      name: 'flip_to_front',
      type: 'action'
    },
    { name: 'g_translate', type: 'action' },
    { name: 'gavel', type: 'action' },
    { name: 'get_app', type: 'action' },
    { name: 'gif', type: 'action' },
    { name: 'grade', type: 'action' },
    { name: 'group_work', type: 'action' },
    { name: 'help', type: 'action' },
    {
      name: 'help_outline',
      type: 'action'
    },
    {
      name: 'highlight_off',
      type: 'action'
    },
    { name: 'history', type: 'action' },
    { name: 'home', type: 'action' },
    {
      name: 'horizontal_split',
      type: 'action'
    },
    {
      name: 'hourglass_empty',
      type: 'action'
    },
    {
      name: 'hourglass_full',
      type: 'action'
    },
    { name: 'http', type: 'action' },
    { name: 'https', type: 'action' },
    {
      name: 'important_devices',
      type: 'action'
    },
    { name: 'info', type: 'action' },
    { name: 'input', type: 'action' },
    {
      name: 'invert_colors',
      type: 'action'
    },
    { name: 'label', type: 'action' },
    {
      name: 'label_important',
      type: 'action'
    },
    { name: 'language', type: 'action' },
    { name: 'launch', type: 'action' },
    { name: 'line_style', type: 'action' },
    { name: 'line_weight', type: 'action' },
    { name: 'list', type: 'action' },
    { name: 'lock', type: 'action' },
    { name: 'lock_open', type: 'action' },
    { name: 'loyalty', type: 'action' },
    {
      name: 'markunread_mailbox',
      type: 'action'
    },
    { name: 'maximize', type: 'action' },
    { name: 'minimize', type: 'action' },
    { name: 'motorcycle', type: 'action' },
    { name: 'note_add', type: 'action' },
    {
      name: 'offline_bolt',
      type: 'action'
    },
    { name: 'offline_pin', type: 'action' },
    { name: 'opacity', type: 'action' },
    {
      name: 'open_in_browser',
      type: 'action'
    },
    { name: 'open_in_new', type: 'action' },
    { name: 'open_with', type: 'action' },
    { name: 'pageview', type: 'action' },
    { name: 'pan_tool', type: 'action' },
    { name: 'payment', type: 'action' },
    {
      name: 'perm_camera_mic',
      type: 'action'
    },
    {
      name: 'perm_contact_calendar',
      type: 'action'
    },
    {
      name: 'perm_data_setting',
      type: 'action'
    },
    {
      name: 'perm_device_information',
      type: 'action'
    },
    {
      name: 'perm_identity',
      type: 'action'
    },
    { name: 'perm_media', type: 'action' },
    {
      name: 'perm_phone_msg',
      type: 'action'
    },
    {
      name: 'perm_scan_wifi',
      type: 'action'
    },
    { name: 'pets', type: 'action' },
    {
      name: 'picture_in_picture',
      type: 'action'
    },
    {
      name: 'picture_in_picture_alt',
      type: 'action'
    },
    {
      name: 'play_for_work',
      type: 'action'
    },
    { name: 'polymer', type: 'action' },
    {
      name: 'power_settings_new',
      type: 'action'
    },
    {
      name: 'pregnant_woman',
      type: 'action'
    },
    { name: 'print', type: 'action' },
    {
      name: 'query_builder',
      type: 'action'
    },
    {
      name: 'question_answer',
      type: 'action'
    },
    { name: 'receipt', type: 'action' },
    {
      name: 'record_voice_over',
      type: 'action'
    },
    { name: 'redeem', type: 'action' },
    {
      name: 'remove_shopping_cart',
      type: 'action'
    },
    { name: 'reorder', type: 'action' },
    {
      name: 'report_problem',
      type: 'action'
    },
    { name: 'restore', type: 'action' },
    {
      name: 'restore_from_trash',
      type: 'action'
    },
    {
      name: 'restore_page',
      type: 'action'
    },
    { name: 'room', type: 'action' },
    {
      name: 'rounded_corner',
      type: 'action'
    },
    { name: 'rowing', type: 'action' },
    { name: 'schedule', type: 'action' },
    { name: 'search', type: 'action' },
    { name: 'settings', type: 'action' },
    {
      name: 'settings_applications',
      type: 'action'
    },
    {
      name: 'settings_backup_restore',
      type: 'action'
    },
    {
      name: 'settings_bluetooth',
      type: 'action'
    },
    {
      name: 'settings_brightness',
      type: 'action'
    },
    {
      name: 'settings_cell',
      type: 'action'
    },
    {
      name: 'settings_ethernet',
      type: 'action'
    },
    {
      name: 'settings_input_antenna',
      type: 'action'
    },
    {
      name: 'settings_input_component',
      type: 'action'
    },
    {
      name: 'settings_input_composite',
      type: 'action'
    },
    {
      name: 'settings_input_hdmi',
      type: 'action'
    },
    {
      name: 'settings_input_svideo',
      type: 'action'
    },
    {
      name: 'settings_overscan',
      type: 'action'
    },
    {
      name: 'settings_phone',
      type: 'action'
    },
    {
      name: 'settings_power',
      type: 'action'
    },
    {
      name: 'settings_remote',
      type: 'action'
    },
    {
      name: 'settings_voice',
      type: 'action'
    },
    { name: 'shop', type: 'action' },
    { name: 'shop_two', type: 'action' },
    {
      name: 'shopping_basket',
      type: 'action'
    },
    {
      name: 'shopping_cart',
      type: 'action'
    },
    {
      name: 'speaker_notes',
      type: 'action'
    },
    {
      name: 'speaker_notes_off',
      type: 'action'
    },
    { name: 'spellcheck', type: 'action' },
    { name: 'stars', type: 'action' },
    { name: 'store', type: 'action' },
    { name: 'subject', type: 'action' },
    {
      name: 'supervised_user_circle',
      type: 'action'
    },
    {
      name: 'supervisor_account',
      type: 'action'
    },
    { name: 'swap_horiz', type: 'action' },
    {
      name: 'swap_horizontal_circle',
      type: 'action'
    },
    { name: 'swap_vert', type: 'action' },
    {
      name: 'swap_vertical_circle',
      type: 'action'
    },
    { name: 'tab', type: 'action' },
    {
      name: 'tab_unselected',
      type: 'action'
    },
    {
      name: 'text_rotate_up',
      type: 'action'
    },
    {
      name: 'text_rotate_vertical',
      type: 'action'
    },
    {
      name: 'text_rotation_down',
      type: 'action'
    },
    {
      name: 'text_rotation_none',
      type: 'action'
    },
    { name: 'theaters', type: 'action' },
    { name: 'thumb_down', type: 'action' },
    { name: 'thumb_up', type: 'action' },
    {
      name: 'thumbs_up_down',
      type: 'action'
    },
    { name: 'timeline', type: 'action' },
    { name: 'toc', type: 'action' },
    { name: 'today', type: 'action' },
    { name: 'toll', type: 'action' },
    { name: 'touch_app', type: 'action' },
    {
      name: 'track_changes',
      type: 'action'
    },
    { name: 'translate', type: 'action' },
    {
      name: 'trending_down',
      type: 'action'
    },
    {
      name: 'trending_flat',
      type: 'action'
    },
    { name: 'trending_up', type: 'action' },
    { name: 'turned_in', type: 'action' },
    {
      name: 'turned_in_not',
      type: 'action'
    },
    { name: 'update', type: 'action' },
    {
      name: 'verified_user',
      type: 'action'
    },
    {
      name: 'vertical_split',
      type: 'action'
    },
    { name: 'view_agenda', type: 'action' },
    { name: 'view_array', type: 'action' },
    {
      name: 'view_carousel',
      type: 'action'
    },
    { name: 'view_column', type: 'action' },
    { name: 'view_day', type: 'action' },
    {
      name: 'view_headline',
      type: 'action'
    },
    { name: 'view_list', type: 'action' },
    { name: 'view_module', type: 'action' },
    { name: 'view_quilt', type: 'action' },
    { name: 'view_stream', type: 'action' },
    { name: 'view_week', type: 'action' },
    { name: 'visibility', type: 'action' },
    {
      name: 'visibility_off',
      type: 'action'
    },
    {
      name: 'voice_over_off',
      type: 'action'
    },
    { name: 'watch_later', type: 'action' },
    { name: 'work', type: 'action' },
    { name: 'work_off', type: 'action' },
    {
      name: 'work_outline',
      type: 'action'
    },
    {
      name: 'youtube_searched_for',
      type: 'action'
    },
    { name: 'zoom_in', type: 'action' },
    { name: 'zoom_out', type: 'action' },
    {
      name: 'alternate_email',
      type: 'communication'
    },
    {
      name: 'business',
      type: 'communication'
    },
    { name: 'call', type: 'communication' },
    {
      name: 'call_end',
      type: 'communication'
    },
    {
      name: 'call_made',
      type: 'communication'
    },
    {
      name: 'call_merge',
      type: 'communication'
    },
    {
      name: 'call_missed',
      type: 'communication'
    },
    {
      name: 'call_missed_outgoing',
      type: 'communication'
    },
    {
      name: 'call_received',
      type: 'communication'
    },
    {
      name: 'call_split',
      type: 'communication'
    },
    {
      name: 'cancel_presentation',
      type: 'communication'
    },
    {
      name: 'cell_wifi',
      type: 'communication'
    },
    { name: 'chat', type: 'communication' },
    {
      name: 'chat_bubble',
      type: 'communication'
    },
    {
      name: 'chat_bubble_outline',
      type: 'communication'
    },
    {
      name: 'clear_all',
      type: 'communication'
    },
    {
      name: 'comment',
      type: 'communication'
    },
    {
      name: 'contact_mail',
      type: 'communication'
    },
    {
      name: 'contact_phone',
      type: 'communication'
    },
    {
      name: 'contacts',
      type: 'communication'
    },
    {
      name: 'dialer_sip',
      type: 'communication'
    },
    {
      name: 'dialpad',
      type: 'communication'
    },
    {
      name: 'domain_disabled',
      type: 'communication'
    },
    {
      name: 'email',
      type: 'communication'
    },
    {
      name: 'forum',
      type: 'communication'
    },
    {
      name: 'import_contacts',
      type: 'communication'
    },
    {
      name: 'import_export',
      type: 'communication'
    },
    {
      name: 'invert_colors_off',
      type: 'communication'
    },
    {
      name: 'list_alt',
      type: 'communication'
    },
    {
      name: 'live_help',
      type: 'communication'
    },
    {
      name: 'location_off',
      type: 'communication'
    },
    {
      name: 'location_on',
      type: 'communication'
    },
    {
      name: 'mail_outline',
      type: 'communication'
    },
    {
      name: 'message',
      type: 'communication'
    },
    {
      name: 'mobile_screen_share',
      type: 'communication'
    },
    {
      name: 'no_sim',
      type: 'communication'
    },
    {
      name: 'pause_presentation',
      type: 'communication'
    },
    {
      name: 'phone',
      type: 'communication'
    },
    {
      name: 'phonelink_erase',
      type: 'communication'
    },
    {
      name: 'phonelink_lock',
      type: 'communication'
    },
    {
      name: 'phonelink_ring',
      type: 'communication'
    },
    {
      name: 'phonelink_setup',
      type: 'communication'
    },
    {
      name: 'portable_wifi_off',
      type: 'communication'
    },
    {
      name: 'present_to_all',
      type: 'communication'
    },
    {
      name: 'ring_volume',
      type: 'communication'
    },
    {
      name: 'rss_feed',
      type: 'communication'
    },
    {
      name: 'screen_share',
      type: 'communication'
    },
    {
      name: 'sentiment_satisfied_alt',
      type: 'communication'
    },
    {
      name: 'speaker_phone',
      type: 'communication'
    },
    {
      name: 'stay_current_landscape',
      type: 'communication'
    },
    {
      name: 'stay_current_portrait',
      type: 'communication'
    },
    {
      name: 'stay_primary_landscape',
      type: 'communication'
    },
    {
      name: 'stay_primary_portrait',
      type: 'communication'
    },
    {
      name: 'stop_screen_share',
      type: 'communication'
    },
    {
      name: 'swap_calls',
      type: 'communication'
    },
    {
      name: 'textsms',
      type: 'communication'
    },
    {
      name: 'unsubscribe',
      type: 'communication'
    },
    {
      name: 'voicemail',
      type: 'communication'
    },
    {
      name: 'vpn_key',
      type: 'communication'
    },
    { name: '4k', type: 'av' },
    { name: 'add_to_queue', type: 'av' },
    { name: 'airplay', type: 'av' },
    { name: 'album', type: 'av' },
    { name: 'art_track', type: 'av' },
    { name: 'av_timer', type: 'av' },
    {
      name: 'branding_watermark',
      type: 'av'
    },
    { name: 'call_to_action', type: 'av' },
    { name: 'closed_caption', type: 'av' },
    { name: 'control_camera', type: 'av' },
    { name: 'equalizer', type: 'av' },
    { name: 'explicit', type: 'av' },
    { name: 'fast_forward', type: 'av' },
    { name: 'fast_rewind', type: 'av' },
    {
      name: 'featured_play_list',
      type: 'av'
    },
    { name: 'featured_video', type: 'av' },
    { name: 'fiber_dvr', type: 'av' },
    {
      name: 'fiber_manual_record',
      type: 'av'
    },
    { name: 'fiber_new', type: 'av' },
    { name: 'fiber_pin', type: 'av' },
    {
      name: 'fiber_smart_record',
      type: 'av'
    },
    { name: 'forward_10', type: 'av' },
    { name: 'forward_30', type: 'av' },
    { name: 'forward_5', type: 'av' },
    { name: 'games', type: 'av' },
    { name: 'hd', type: 'av' },
    { name: 'hearing', type: 'av' },
    { name: 'high_quality', type: 'av' },
    { name: 'library_add', type: 'av' },
    { name: 'library_books', type: 'av' },
    { name: 'library_music', type: 'av' },
    { name: 'loop', type: 'av' },
    { name: 'mic', type: 'av' },
    { name: 'mic_none', type: 'av' },
    { name: 'mic_off', type: 'av' },
    {
      name: 'missed_video_call',
      type: 'av'
    },
    { name: 'movie', type: 'av' },
    { name: 'music_video', type: 'av' },
    { name: 'new_releases', type: 'av' },
    { name: 'not_interested', type: 'av' },
    { name: 'note', type: 'av' },
    { name: 'pause', type: 'av' },
    {
      name: 'pause_circle_filled',
      type: 'av'
    },
    {
      name: 'pause_circle_outline',
      type: 'av'
    },
    { name: 'play_arrow', type: 'av' },
    {
      name: 'play_circle_filled',
      type: 'av'
    },
    {
      name: 'play_circle_outline',
      type: 'av'
    },
    { name: 'playlist_add', type: 'av' },
    {
      name: 'playlist_add_check',
      type: 'av'
    },
    { name: 'playlist_play', type: 'av' },
    { name: 'queue', type: 'av' },
    { name: 'queue_music', type: 'av' },
    { name: 'queue_play_next', type: 'av' },
    { name: 'radio', type: 'av' },
    { name: 'recent_actors', type: 'av' },
    {
      name: 'remove_from_queue',
      type: 'av'
    },
    { name: 'repeat', type: 'av' },
    { name: 'repeat_one', type: 'av' },
    { name: 'replay', type: 'av' },
    { name: 'replay_10', type: 'av' },
    { name: 'replay_30', type: 'av' },
    { name: 'replay_5', type: 'av' },
    { name: 'shuffle', type: 'av' },
    { name: 'skip_next', type: 'av' },
    { name: 'skip_previous', type: 'av' },
    {
      name: 'slow_motion_video',
      type: 'av'
    },
    { name: 'snooze', type: 'av' },
    { name: 'sort_by_alpha', type: 'av' },
    { name: 'stop', type: 'av' },
    { name: 'subscriptions', type: 'av' },
    { name: 'subtitles', type: 'av' },
    { name: 'surround_sound', type: 'av' },
    { name: 'video_call', type: 'av' },
    { name: 'video_label', type: 'av' },
    { name: 'video_library', type: 'av' },
    { name: 'videocam', type: 'av' },
    { name: 'videocam_off', type: 'av' },
    { name: 'volume_down', type: 'av' },
    { name: 'volume_mute', type: 'av' },
    { name: 'volume_off', type: 'av' },
    { name: 'volume_up', type: 'av' },
    { name: 'add', type: 'connection' },
    { name: 'add_box', type: 'connection' },
    {
      name: 'add_circle',
      type: 'connection'
    },
    {
      name: 'add_circle_outline',
      type: 'connection'
    },
    { name: 'archive', type: 'connection' },
    {
      name: 'backspace',
      type: 'connection'
    },
    { name: 'ballot', type: 'connection' },
    { name: 'block', type: 'connection' },
    { name: 'clear', type: 'connection' },
    { name: 'create', type: 'connection' },
    {
      name: 'delete_sweep',
      type: 'connection'
    },
    { name: 'drafts', type: 'connection' },
    {
      name: 'file_copy',
      type: 'connection'
    },
    {
      name: 'filter_list',
      type: 'connection'
    },
    { name: 'flag', type: 'connection' },
    {
      name: 'font_download',
      type: 'connection'
    },
    { name: 'forward', type: 'connection' },
    { name: 'gesture', type: 'connection' },
    {
      name: 'how_to_reg',
      type: 'connection'
    },
    {
      name: 'how_to_vote',
      type: 'connection'
    },
    { name: 'inbox', type: 'connection' },
    { name: 'link', type: 'connection' },
    {
      name: 'link_off',
      type: 'connection'
    },
    {
      name: 'low_priority',
      type: 'connection'
    },
    { name: 'mail', type: 'connection' },
    {
      name: 'markunread',
      type: 'connection'
    },
    {
      name: 'move_to_inbox',
      type: 'connection'
    },
    {
      name: 'next_week',
      type: 'connection'
    },
    {
      name: 'outlined_flag',
      type: 'connection'
    },
    { name: 'redo', type: 'connection' },
    { name: 'remove', type: 'connection' },
    {
      name: 'remove_circle',
      type: 'connection'
    },
    {
      name: 'remove_circle_outline',
      type: 'connection'
    },
    { name: 'reply', type: 'connection' },
    {
      name: 'reply_all',
      type: 'connection'
    },
    { name: 'report', type: 'connection' },
    {
      name: 'report_off',
      type: 'connection'
    },
    { name: 'save', type: 'connection' },
    {
      name: 'save_alt',
      type: 'connection'
    },
    {
      name: 'select_all',
      type: 'connection'
    },
    { name: 'send', type: 'connection' },
    { name: 'sort', type: 'connection' },
    {
      name: 'text_format',
      type: 'connection'
    },
    {
      name: 'unarchive',
      type: 'connection'
    },
    { name: 'undo', type: 'connection' },
    { name: 'waves', type: 'connection' },
    { name: 'weekend', type: 'connection' },
    {
      name: 'where_to_vote',
      type: 'connection'
    },
    {
      name: 'access_alarm',
      type: 'device'
    },
    {
      name: 'access_alarms',
      type: 'device'
    },
    { name: 'access_time', type: 'device' },
    { name: 'add_alarm', type: 'device' },
    {
      name: 'add_to_home_screen',
      type: 'device'
    },
    {
      name: 'airplanemode_active',
      type: 'device'
    },
    {
      name: 'airplanemode_inactive',
      type: 'device'
    },
    {
      name: 'battery_alert',
      type: 'device'
    },
    {
      name: 'battery_charging_full',
      type: 'device'
    },
    {
      name: 'battery_full',
      type: 'device'
    },
    { name: 'battery_std', type: 'device' },
    {
      name: 'battery_unknown',
      type: 'device'
    },
    { name: 'bluetooth', type: 'device' },
    {
      name: 'bluetooth_connected',
      type: 'device'
    },
    {
      name: 'bluetooth_disabled',
      type: 'device'
    },
    {
      name: 'bluetooth_searching',
      type: 'device'
    },
    {
      name: 'brightness_auto',
      type: 'device'
    },
    {
      name: 'brightness_high',
      type: 'device'
    },
    {
      name: 'brightness_low',
      type: 'device'
    },
    {
      name: 'brightness_medium',
      type: 'device'
    },
    { name: 'data_usage', type: 'device' },
    {
      name: 'developer_mode',
      type: 'device'
    },
    { name: 'devices', type: 'device' },
    { name: 'dvr', type: 'device' },
    { name: 'gps_fixed', type: 'device' },
    {
      name: 'gps_not_fixed',
      type: 'device'
    },
    { name: 'gps_off', type: 'device' },
    { name: 'graphic_eq', type: 'device' },
    {
      name: 'location_disabled',
      type: 'device'
    },
    {
      name: 'location_searching',
      type: 'device'
    },
    {
      name: 'mobile_friendly',
      type: 'device'
    },
    { name: 'mobile_off', type: 'device' },
    {
      name: 'network_cell',
      type: 'device'
    },
    {
      name: 'network_wifi',
      type: 'device'
    },
    { name: 'nfc', type: 'device' },
    {
      name: 'screen_lock_landscape',
      type: 'device'
    },
    {
      name: 'screen_lock_portrait',
      type: 'device'
    },
    {
      name: 'screen_lock_rotation',
      type: 'device'
    },
    {
      name: 'screen_rotation',
      type: 'device'
    },
    { name: 'sd_storage', type: 'device' },
    {
      name: 'settings_system_daydream',
      type: 'device'
    },
    {
      name: 'signal_cellular_4_bar',
      type: 'device'
    },
    {
      name: 'signal_cellular_alt',
      type: 'device'
    },
    {
      name: 'signal_cellular_connected_no_internet_4_bar',
      type: 'device'
    },
    {
      name: 'signal_cellular_no_sim',
      type: 'device'
    },
    {
      name: 'signal_cellular_null',
      type: 'device'
    },
    {
      name: 'signal_cellular_off',
      type: 'device'
    },
    {
      name: 'signal_wifi_4_bar',
      type: 'device'
    },
    {
      name: 'signal_wifi_4_bar_lock',
      type: 'device'
    },
    {
      name: 'signal_wifi_off',
      type: 'device'
    },
    { name: 'storage', type: 'device' },
    { name: 'usb', type: 'device' },
    { name: 'wallpaper', type: 'device' },
    { name: 'widgets', type: 'device' },
    { name: 'wifi_lock', type: 'device' },
    {
      name: 'wifi_tethering',
      type: 'device'
    },
    { name: 'add_comment', type: 'editor' },
    { name: 'attach_file', type: 'editor' },
    {
      name: 'attach_money',
      type: 'editor'
    },
    { name: 'bar_chart', type: 'editor' },
    { name: 'border_all', type: 'editor' },
    {
      name: 'border_bottom',
      type: 'editor'
    },
    {
      name: 'border_clear',
      type: 'editor'
    },
    {
      name: 'border_color',
      type: 'editor'
    },
    {
      name: 'border_horizontal',
      type: 'editor'
    },
    {
      name: 'border_inner',
      type: 'editor'
    },
    { name: 'border_left', type: 'editor' },
    {
      name: 'border_outer',
      type: 'editor'
    },
    {
      name: 'border_right',
      type: 'editor'
    },
    {
      name: 'border_style',
      type: 'editor'
    },
    { name: 'border_top', type: 'editor' },
    {
      name: 'border_vertical',
      type: 'editor'
    },
    {
      name: 'bubble_chart',
      type: 'editor'
    },
    { name: 'drag_handle', type: 'editor' },
    {
      name: 'format_align_center',
      type: 'editor'
    },
    {
      name: 'format_align_justify',
      type: 'editor'
    },
    {
      name: 'format_align_left',
      type: 'editor'
    },
    {
      name: 'format_align_right',
      type: 'editor'
    },
    { name: 'format_bold', type: 'editor' },
    {
      name: 'format_clear',
      type: 'editor'
    },
    {
      name: 'format_color_fill',
      type: 'editor'
    },
    {
      name: 'format_color_reset',
      type: 'editor'
    },
    {
      name: 'format_color_text',
      type: 'editor'
    },
    {
      name: 'format_indent_decrease',
      type: 'editor'
    },
    {
      name: 'format_indent_increase',
      type: 'editor'
    },
    {
      name: 'format_italic',
      type: 'editor'
    },
    {
      name: 'format_line_spacing',
      type: 'editor'
    },
    {
      name: 'format_list_bulleted',
      type: 'editor'
    },
    {
      name: 'format_list_numbered',
      type: 'editor'
    },
    {
      name: 'format_list_numbered_rtl',
      type: 'editor'
    },
    {
      name: 'format_paint',
      type: 'editor'
    },
    {
      name: 'format_quote',
      type: 'editor'
    },
    {
      name: 'format_shapes',
      type: 'editor'
    },
    { name: 'format_size', type: 'editor' },
    {
      name: 'format_strikethrough',
      type: 'editor'
    },
    {
      name: 'format_textdirection_l_to_r',
      type: 'editor'
    },
    {
      name: 'format_textdirection_r_to_l',
      type: 'editor'
    },
    {
      name: 'format_underlined',
      type: 'editor'
    },
    { name: 'functions', type: 'editor' },
    { name: 'highlight', type: 'editor' },
    {
      name: 'insert_chart',
      type: 'editor'
    },
    {
      name: 'insert_chart_outlined',
      type: 'editor'
    },
    {
      name: 'insert_comment',
      type: 'editor'
    },
    {
      name: 'insert_drive_file',
      type: 'editor'
    },
    {
      name: 'insert_emoticon',
      type: 'editor'
    },
    {
      name: 'insert_invitation',
      type: 'editor'
    },
    { name: 'insert_link', type: 'editor' },
    {
      name: 'insert_photo',
      type: 'editor'
    },
    {
      name: 'linear_scale',
      type: 'editor'
    },
    { name: 'merge_type', type: 'editor' },
    {
      name: 'mode_comment',
      type: 'editor'
    },
    {
      name: 'monetization_on',
      type: 'editor'
    },
    { name: 'money_off', type: 'editor' },
    {
      name: 'multiline_chart',
      type: 'editor'
    },
    { name: 'notes', type: 'editor' },
    { name: 'pie_chart', type: 'editor' },
    { name: 'publish', type: 'editor' },
    {
      name: 'scatter_plot',
      type: 'editor'
    },
    { name: 'score', type: 'editor' },
    { name: 'short_text', type: 'editor' },
    { name: 'show_chart', type: 'editor' },
    { name: 'space_bar', type: 'editor' },
    {
      name: 'strikethrough_s',
      type: 'editor'
    },
    { name: 'table_chart', type: 'editor' },
    { name: 'text_fields', type: 'editor' },
    { name: 'title', type: 'editor' },
    {
      name: 'vertical_align_bottom',
      type: 'editor'
    },
    {
      name: 'vertical_align_center',
      type: 'editor'
    },
    {
      name: 'vertical_align_top',
      type: 'editor'
    },
    { name: 'wrap_text', type: 'editor' },
    { name: 'attachment', type: 'file' },
    { name: 'cloud', type: 'file' },
    { name: 'cloud_circle', type: 'file' },
    { name: 'cloud_done', type: 'file' },
    {
      name: 'cloud_download',
      type: 'file'
    },
    { name: 'cloud_off', type: 'file' },
    { name: 'cloud_queue', type: 'file' },
    { name: 'cloud_upload', type: 'file' },
    {
      name: 'create_new_folder',
      type: 'file'
    },
    { name: 'folder', type: 'file' },
    { name: 'folder_open', type: 'file' },
    { name: 'folder_shared', type: 'file' },
    { name: 'cast', type: 'hardware' },
    {
      name: 'cast_connected',
      type: 'hardware'
    },
    { name: 'computer', type: 'hardware' },
    {
      name: 'desktop_mac',
      type: 'hardware'
    },
    {
      name: 'desktop_windows',
      type: 'hardware'
    },
    {
      name: 'developer_board',
      type: 'hardware'
    },
    {
      name: 'device_hub',
      type: 'hardware'
    },
    {
      name: 'device_unknown',
      type: 'hardware'
    },
    {
      name: 'devices_other',
      type: 'hardware'
    },
    { name: 'dock', type: 'hardware' },
    { name: 'gamepad', type: 'hardware' },
    { name: 'headset', type: 'hardware' },
    {
      name: 'headset_mic',
      type: 'hardware'
    },
    { name: 'keyboard', type: 'hardware' },
    {
      name: 'keyboard_arrow_down',
      type: 'hardware'
    },
    {
      name: 'keyboard_arrow_left',
      type: 'hardware'
    },
    {
      name: 'keyboard_arrow_right',
      type: 'hardware'
    },
    {
      name: 'keyboard_arrow_up',
      type: 'hardware'
    },
    {
      name: 'keyboard_backspace',
      type: 'hardware'
    },
    {
      name: 'keyboard_capslock',
      type: 'hardware'
    },
    {
      name: 'keyboard_hide',
      type: 'hardware'
    },
    {
      name: 'keyboard_return',
      type: 'hardware'
    },
    {
      name: 'keyboard_tab',
      type: 'hardware'
    },
    {
      name: 'keyboard_voice',
      type: 'hardware'
    },
    { name: 'laptop', type: 'hardware' },
    {
      name: 'laptop_chromebook',
      type: 'hardware'
    },
    {
      name: 'laptop_mac',
      type: 'hardware'
    },
    {
      name: 'laptop_windows',
      type: 'hardware'
    },
    { name: 'memory', type: 'hardware' },
    { name: 'mouse', type: 'hardware' },
    {
      name: 'phone_android',
      type: 'hardware'
    },
    {
      name: 'phone_iphone',
      type: 'hardware'
    },
    { name: 'phonelink', type: 'hardware' },
    {
      name: 'phonelink_off',
      type: 'hardware'
    },
    {
      name: 'power_input',
      type: 'hardware'
    },
    { name: 'router', type: 'hardware' },
    { name: 'scanner', type: 'hardware' },
    { name: 'security', type: 'hardware' },
    { name: 'sim_card', type: 'hardware' },
    {
      name: 'smartphone',
      type: 'hardware'
    },
    { name: 'speaker', type: 'hardware' },
    {
      name: 'speaker_group',
      type: 'hardware'
    },
    { name: 'tablet', type: 'hardware' },
    {
      name: 'tablet_android',
      type: 'hardware'
    },
    {
      name: 'tablet_mac',
      type: 'hardware'
    },
    { name: 'toys', type: 'hardware' },
    { name: 'tv', type: 'hardware' },
    {
      name: 'videogame_asset',
      type: 'hardware'
    },
    { name: 'watch', type: 'hardware' },
    { name: 'add_a_photo', type: 'images' },
    {
      name: 'add_photo_alternate',
      type: 'images'
    },
    {
      name: 'add_to_photos',
      type: 'images'
    },
    { name: 'adjust', type: 'images' },
    { name: 'assistant', type: 'images' },
    {
      name: 'assistant_photo',
      type: 'images'
    },
    { name: 'audiotrack', type: 'images' },
    {
      name: 'blur_circular',
      type: 'images'
    },
    { name: 'blur_linear', type: 'images' },
    { name: 'blur_off', type: 'images' },
    { name: 'blur_on', type: 'images' },
    {
      name: 'brightness_1',
      type: 'images'
    },
    {
      name: 'brightness_2',
      type: 'images'
    },
    {
      name: 'brightness_3',
      type: 'images'
    },
    {
      name: 'brightness_4',
      type: 'images'
    },
    {
      name: 'brightness_5',
      type: 'images'
    },
    {
      name: 'brightness_6',
      type: 'images'
    },
    {
      name: 'brightness_7',
      type: 'images'
    },
    {
      name: 'broken_image',
      type: 'images'
    },
    { name: 'brush', type: 'images' },
    { name: 'burst_mode', type: 'images' },
    { name: 'camera', type: 'images' },
    { name: 'camera_alt', type: 'images' },
    {
      name: 'camera_front',
      type: 'images'
    },
    { name: 'camera_rear', type: 'images' },
    { name: 'camera_roll', type: 'images' },
    {
      name: 'center_focus_strong',
      type: 'images'
    },
    {
      name: 'center_focus_weak',
      type: 'images'
    },
    { name: 'collections', type: 'images' },
    {
      name: 'collections_bookmark',
      type: 'images'
    },
    { name: 'color_lens', type: 'images' },
    { name: 'colorize', type: 'images' },
    { name: 'compare', type: 'images' },
    {
      name: 'control_point',
      type: 'images'
    },
    {
      name: 'control_point_duplicate',
      type: 'images'
    },
    { name: 'crop', type: 'images' },
    { name: 'crop_16_9', type: 'images' },
    { name: 'crop_3_2', type: 'images' },
    { name: 'crop_5_4', type: 'images' },
    { name: 'crop_7_5', type: 'images' },
    { name: 'crop_din', type: 'images' },
    { name: 'crop_free', type: 'images' },
    {
      name: 'crop_landscape',
      type: 'images'
    },
    {
      name: 'crop_original',
      type: 'images'
    },
    {
      name: 'crop_portrait',
      type: 'images'
    },
    { name: 'crop_rotate', type: 'images' },
    { name: 'crop_square', type: 'images' },
    { name: 'dehaze', type: 'images' },
    { name: 'details', type: 'images' },
    { name: 'edit', type: 'images' },
    { name: 'exposure', type: 'images' },
    {
      name: 'exposure_neg_1',
      type: 'images'
    },
    {
      name: 'exposure_neg_2',
      type: 'images'
    },
    {
      name: 'exposure_plus_1',
      type: 'images'
    },
    {
      name: 'exposure_plus_2',
      type: 'images'
    },
    {
      name: 'exposure_zero',
      type: 'images'
    },
    { name: 'filter', type: 'images' },
    { name: 'filter_1', type: 'images' },
    { name: 'filter_2', type: 'images' },
    { name: 'filter_3', type: 'images' },
    { name: 'filter_4', type: 'images' },
    { name: 'filter_5', type: 'images' },
    { name: 'filter_6', type: 'images' },
    { name: 'filter_7', type: 'images' },
    { name: 'filter_8', type: 'images' },
    { name: 'filter_9', type: 'images' },
    {
      name: 'filter_9_plus',
      type: 'images'
    },
    {
      name: 'filter_b_and_w',
      type: 'images'
    },
    {
      name: 'filter_center_focus',
      type: 'images'
    },
    {
      name: 'filter_drama',
      type: 'images'
    },
    {
      name: 'filter_frames',
      type: 'images'
    },
    { name: 'filter_hdr', type: 'images' },
    { name: 'filter_none', type: 'images' },
    {
      name: 'filter_tilt_shift',
      type: 'images'
    },
    {
      name: 'filter_vintage',
      type: 'images'
    },
    { name: 'flare', type: 'images' },
    { name: 'flash_auto', type: 'images' },
    { name: 'flash_off', type: 'images' },
    { name: 'flash_on', type: 'images' },
    { name: 'flip', type: 'images' },
    { name: 'gradient', type: 'images' },
    { name: 'grain', type: 'images' },
    { name: 'grid_off', type: 'images' },
    { name: 'grid_on', type: 'images' },
    { name: 'hdr_off', type: 'images' },
    { name: 'hdr_on', type: 'images' },
    { name: 'hdr_strong', type: 'images' },
    { name: 'hdr_weak', type: 'images' },
    { name: 'healing', type: 'images' },
    { name: 'image', type: 'images' },
    {
      name: 'image_aspect_ratio',
      type: 'images'
    },
    {
      name: 'image_search',
      type: 'images'
    },
    { name: 'iso', type: 'images' },
    { name: 'landscape', type: 'images' },
    { name: 'leak_add', type: 'images' },
    { name: 'leak_remove', type: 'images' },
    { name: 'lens', type: 'images' },
    {
      name: 'linked_camera',
      type: 'images'
    },
    { name: 'looks', type: 'images' },
    { name: 'looks_3', type: 'images' },
    { name: 'looks_4', type: 'images' },
    { name: 'looks_5', type: 'images' },
    { name: 'looks_6', type: 'images' },
    { name: 'looks_one', type: 'images' },
    { name: 'looks_two', type: 'images' },
    { name: 'loupe', type: 'images' },
    {
      name: 'monochrome_photos',
      type: 'images'
    },
    {
      name: 'movie_creation',
      type: 'images'
    },
    {
      name: 'movie_filter',
      type: 'images'
    },
    { name: 'music_note', type: 'images' },
    { name: 'music_off', type: 'images' },
    { name: 'nature', type: 'images' },
    {
      name: 'nature_people',
      type: 'images'
    },
    {
      name: 'navigate_before',
      type: 'images'
    },
    {
      name: 'navigate_next',
      type: 'images'
    },
    { name: 'palette', type: 'images' },
    { name: 'panorama', type: 'images' },
    {
      name: 'panorama_fish_eye',
      type: 'images'
    },
    {
      name: 'panorama_horizontal',
      type: 'images'
    },
    {
      name: 'panorama_vertical',
      type: 'images'
    },
    {
      name: 'panorama_wide_angle',
      type: 'images'
    },
    { name: 'photo', type: 'images' },
    { name: 'photo_album', type: 'images' },
    {
      name: 'photo_camera',
      type: 'images'
    },
    {
      name: 'photo_filter',
      type: 'images'
    },
    {
      name: 'photo_library',
      type: 'images'
    },
    {
      name: 'photo_size_select_actual',
      type: 'images'
    },
    {
      name: 'photo_size_select_large',
      type: 'images'
    },
    {
      name: 'photo_size_select_small',
      type: 'images'
    },
    {
      name: 'picture_as_pdf',
      type: 'images'
    },
    { name: 'portrait', type: 'images' },
    {
      name: 'remove_red_eye',
      type: 'images'
    },
    {
      name: 'rotate_90_degrees_ccw',
      type: 'images'
    },
    { name: 'rotate_left', type: 'images' },
    {
      name: 'rotate_right',
      type: 'images'
    },
    {
      name: 'shutter_speed',
      type: 'images'
    },
    { name: 'slideshow', type: 'images' },
    { name: 'straighten', type: 'images' },
    { name: 'style', type: 'images' },
    {
      name: 'switch_camera',
      type: 'images'
    },
    {
      name: 'switch_video',
      type: 'images'
    },
    { name: 'tag_faces', type: 'images' },
    { name: 'texture', type: 'images' },
    { name: 'timelapse', type: 'images' },
    { name: 'timer', type: 'images' },
    { name: 'timer_10', type: 'images' },
    { name: 'timer_3', type: 'images' },
    { name: 'timer_off', type: 'images' },
    { name: 'tonality', type: 'images' },
    { name: 'transform', type: 'images' },
    { name: 'tune', type: 'images' },
    { name: 'view_comfy', type: 'images' },
    {
      name: 'view_compact',
      type: 'images'
    },
    { name: 'vignette', type: 'images' },
    { name: 'wb_auto', type: 'images' },
    { name: 'wb_cloudy', type: 'images' },
    {
      name: 'wb_incandescent',
      type: 'images'
    },
    {
      name: 'wb_iridescent',
      type: 'images'
    },
    { name: 'wb_sunny', type: 'images' },
    { name: '360', type: 'maps' },
    { name: 'add_location', type: 'maps' },
    { name: 'atm', type: 'maps' },
    { name: 'beenhere', type: 'maps' },
    { name: 'category', type: 'maps' },
    {
      name: 'compass_calibration',
      type: 'maps'
    },
    {
      name: 'departure_board',
      type: 'maps'
    },
    { name: 'directions', type: 'maps' },
    {
      name: 'directions_bike',
      type: 'maps'
    },
    {
      name: 'directions_boat',
      type: 'maps'
    },
    {
      name: 'directions_bus',
      type: 'maps'
    },
    {
      name: 'directions_car',
      type: 'maps'
    },
    {
      name: 'directions_railway',
      type: 'maps'
    },
    {
      name: 'directions_run',
      type: 'maps'
    },
    {
      name: 'directions_subway',
      type: 'maps'
    },
    {
      name: 'directions_transit',
      type: 'maps'
    },
    {
      name: 'directions_walk',
      type: 'maps'
    },
    {
      name: 'edit_attributes',
      type: 'maps'
    },
    { name: 'edit_location', type: 'maps' },
    { name: 'ev_station', type: 'maps' },
    { name: 'fastfood', type: 'maps' },
    { name: 'flight', type: 'maps' },
    { name: 'hotel', type: 'maps' },
    { name: 'layers', type: 'maps' },
    { name: 'layers_clear', type: 'maps' },
    {
      name: 'local_activity',
      type: 'maps'
    },
    { name: 'local_airport', type: 'maps' },
    { name: 'local_atm', type: 'maps' },
    { name: 'local_bar', type: 'maps' },
    { name: 'local_cafe', type: 'maps' },
    {
      name: 'local_car_wash',
      type: 'maps'
    },
    {
      name: 'local_convenience_store',
      type: 'maps'
    },
    { name: 'local_dining', type: 'maps' },
    { name: 'local_drink', type: 'maps' },
    { name: 'local_florist', type: 'maps' },
    {
      name: 'local_gas_station',
      type: 'maps'
    },
    {
      name: 'local_grocery_store',
      type: 'maps'
    },
    {
      name: 'local_hospital',
      type: 'maps'
    },
    { name: 'local_hotel', type: 'maps' },
    {
      name: 'local_laundry_service',
      type: 'maps'
    },
    { name: 'local_library', type: 'maps' },
    { name: 'local_mall', type: 'maps' },
    { name: 'local_movies', type: 'maps' },
    { name: 'local_offer', type: 'maps' },
    { name: 'local_parking', type: 'maps' },
    {
      name: 'local_pharmacy',
      type: 'maps'
    },
    { name: 'local_phone', type: 'maps' },
    { name: 'local_pizza', type: 'maps' },
    { name: 'local_play', type: 'maps' },
    {
      name: 'local_post_office',
      type: 'maps'
    },
    {
      name: 'local_printshop',
      type: 'maps'
    },
    { name: 'local_see', type: 'maps' },
    {
      name: 'local_shipping',
      type: 'maps'
    },
    { name: 'local_taxi', type: 'maps' },
    { name: 'map', type: 'maps' },
    { name: 'money', type: 'maps' },
    { name: 'my_location', type: 'maps' },
    { name: 'navigation', type: 'maps' },
    { name: 'near_me', type: 'maps' },
    {
      name: 'not_listed_location',
      type: 'maps'
    },
    { name: 'person_pin', type: 'maps' },
    {
      name: 'person_pin_circle',
      type: 'maps'
    },
    { name: 'pin_drop', type: 'maps' },
    { name: 'place', type: 'maps' },
    { name: 'rate_review', type: 'maps' },
    { name: 'restaurant', type: 'maps' },
    {
      name: 'restaurant_menu',
      type: 'maps'
    },
    { name: 'satellite', type: 'maps' },
    {
      name: 'store_mall_directory',
      type: 'maps'
    },
    { name: 'streetview', type: 'maps' },
    { name: 'subway', type: 'maps' },
    { name: 'terrain', type: 'maps' },
    { name: 'traffic', type: 'maps' },
    { name: 'train', type: 'maps' },
    { name: 'tram', type: 'maps' },
    {
      name: 'transfer_within_a_station',
      type: 'maps'
    },
    {
      name: 'transit_enterexit',
      type: 'maps'
    },
    { name: 'trip_origin', type: 'maps' },
    { name: 'zoom_out_map', type: 'maps' },
    { name: 'apps', type: 'navigation' },
    {
      name: 'arrow_back',
      type: 'navigation'
    },
    {
      name: 'arrow_back_ios',
      type: 'navigation'
    },
    {
      name: 'arrow_downward',
      type: 'navigation'
    },
    {
      name: 'arrow_drop_down',
      type: 'navigation'
    },
    {
      name: 'arrow_drop_down_circle',
      type: 'navigation'
    },
    {
      name: 'arrow_drop_up',
      type: 'navigation'
    },
    {
      name: 'arrow_forward',
      type: 'navigation'
    },
    {
      name: 'arrow_forward_ios',
      type: 'navigation'
    },
    {
      name: 'arrow_left',
      type: 'navigation'
    },
    {
      name: 'arrow_right',
      type: 'navigation'
    },
    {
      name: 'arrow_upward',
      type: 'navigation'
    },
    { name: 'cancel', type: 'navigation' },
    { name: 'check', type: 'navigation' },
    {
      name: 'chevron_left',
      type: 'navigation'
    },
    {
      name: 'chevron_right',
      type: 'navigation'
    },
    { name: 'close', type: 'navigation' },
    {
      name: 'expand_less',
      type: 'navigation'
    },
    {
      name: 'expand_more',
      type: 'navigation'
    },
    {
      name: 'first_page',
      type: 'navigation'
    },
    {
      name: 'fullscreen',
      type: 'navigation'
    },
    {
      name: 'fullscreen_exit',
      type: 'navigation'
    },
    {
      name: 'last_page',
      type: 'navigation'
    },
    { name: 'menu', type: 'navigation' },
    {
      name: 'more_horiz',
      type: 'navigation'
    },
    {
      name: 'more_vert',
      type: 'navigation'
    },
    { name: 'refresh', type: 'navigation' },
    {
      name: 'subdirectory_arrow_left',
      type: 'navigation'
    },
    {
      name: 'subdirectory_arrow_right',
      type: 'navigation'
    },
    {
      name: 'unfold_less',
      type: 'navigation'
    },
    {
      name: 'unfold_more',
      type: 'navigation'
    },
    { name: 'adb', type: 'notification' },
    {
      name: 'airline_seat_flat',
      type: 'notification'
    },
    {
      name: 'airline_seat_flat_angled',
      type: 'notification'
    },
    {
      name: 'airline_seat_individual_suite',
      type: 'notification'
    },
    {
      name: 'airline_seat_legroom_extra',
      type: 'notification'
    },
    {
      name: 'airline_seat_legroom_normal',
      type: 'notification'
    },
    {
      name: 'airline_seat_legroom_reduced',
      type: 'notification'
    },
    {
      name: 'airline_seat_recline_extra',
      type: 'notification'
    },
    {
      name: 'airline_seat_recline_normal',
      type: 'notification'
    },
    {
      name: 'bluetooth_audio',
      type: 'notification'
    },
    {
      name: 'confirmation_number',
      type: 'notification'
    },
    {
      name: 'disc_full',
      type: 'notification'
    },
    {
      name: 'drive_eta',
      type: 'notification'
    },
    {
      name: 'enhanced_encryption',
      type: 'notification'
    },
    {
      name: 'event_available',
      type: 'notification'
    },
    {
      name: 'event_busy',
      type: 'notification'
    },
    {
      name: 'event_note',
      type: 'notification'
    },
    {
      name: 'folder_special',
      type: 'notification'
    },
    {
      name: 'live_tv',
      type: 'notification'
    },
    { name: 'mms', type: 'notification' },
    { name: 'more', type: 'notification' },
    {
      name: 'network_check',
      type: 'notification'
    },
    {
      name: 'network_locked',
      type: 'notification'
    },
    {
      name: 'no_encryption',
      type: 'notification'
    },
    {
      name: 'ondemand_video',
      type: 'notification'
    },
    {
      name: 'personal_video',
      type: 'notification'
    },
    {
      name: 'phone_bluetooth_speaker',
      type: 'notification'
    },
    {
      name: 'phone_callback',
      type: 'notification'
    },
    {
      name: 'phone_forwarded',
      type: 'notification'
    },
    {
      name: 'phone_in_talk',
      type: 'notification'
    },
    {
      name: 'phone_locked',
      type: 'notification'
    },
    {
      name: 'phone_missed',
      type: 'notification'
    },
    {
      name: 'phone_paused',
      type: 'notification'
    },
    { name: 'power', type: 'notification' },
    {
      name: 'power_off',
      type: 'notification'
    },
    {
      name: 'priority_high',
      type: 'notification'
    },
    {
      name: 'sd_card',
      type: 'notification'
    },
    { name: 'sms', type: 'notification' },
    {
      name: 'sms_failed',
      type: 'notification'
    },
    { name: 'sync', type: 'notification' },
    {
      name: 'sync_disabled',
      type: 'notification'
    },
    {
      name: 'sync_problem',
      type: 'notification'
    },
    {
      name: 'system_update',
      type: 'notification'
    },
    {
      name: 'tap_and_play',
      type: 'notification'
    },
    {
      name: 'time_to_leave',
      type: 'notification'
    },
    {
      name: 'tv_off',
      type: 'notification'
    },
    {
      name: 'vibration',
      type: 'notification'
    },
    {
      name: 'voice_chat',
      type: 'notification'
    },
    {
      name: 'vpn_lock',
      type: 'notification'
    },
    { name: 'wc', type: 'notification' },
    { name: 'wifi', type: 'notification' },
    {
      name: 'wifi_off',
      type: 'notification'
    },
    { name: 'ac_unit', type: 'places' },
    {
      name: 'airport_shuttle',
      type: 'places'
    },
    {
      name: 'all_inclusive',
      type: 'places'
    },
    {
      name: 'beach_access',
      type: 'places'
    },
    {
      name: 'business_center',
      type: 'places'
    },
    { name: 'casino', type: 'places' },
    { name: 'child_care', type: 'places' },
    {
      name: 'child_friendly',
      type: 'places'
    },
    {
      name: 'fitness_center',
      type: 'places'
    },
    {
      name: 'free_breakfast',
      type: 'places'
    },
    { name: 'golf_course', type: 'places' },
    { name: 'hot_tub', type: 'places' },
    { name: 'kitchen', type: 'places' },
    {
      name: 'meeting_room',
      type: 'places'
    },
    {
      name: 'no_meeting_room',
      type: 'places'
    },
    { name: 'pool', type: 'places' },
    {
      name: 'room_service',
      type: 'places'
    },
    { name: 'rv_hookup', type: 'places' },
    { name: 'smoke_free', type: 'places' },
    {
      name: 'smoking_rooms',
      type: 'places'
    },
    { name: 'spa', type: 'places' },
    { name: 'check_box', type: 'toggle' },
    {
      name: 'check_box_outline_blank',
      type: 'toggle'
    },
    {
      name: 'indeterminate_check_box',
      type: 'toggle'
    },
    {
      name: 'radio_button_checked',
      type: 'toggle'
    },
    {
      name: 'radio_button_unchecked',
      type: 'toggle'
    },
    { name: 'star', type: 'toggle' },
    { name: 'star_border', type: 'toggle' },
    { name: 'star_half', type: 'toggle' },
    { name: 'add_alert', type: 'warning' },
    { name: 'error', type: 'warning' },
    {
      name: 'error_outline',
      type: 'warning'
    },
    {
      name: 'notification_important',
      type: 'warning'
    },
    { name: 'warning', type: 'warning' },
    { name: 'cake', type: 'social' },
    { name: 'domain', type: 'social' },
    { name: 'group', type: 'social' },
    { name: 'group_add', type: 'social' },
    {
      name: 'location_city',
      type: 'social'
    },
    { name: 'mood', type: 'social' },
    { name: 'mood_bad', type: 'social' },
    {
      name: 'notifications',
      type: 'social'
    },
    {
      name: 'notifications_active',
      type: 'social'
    },
    {
      name: 'notifications_none',
      type: 'social'
    },
    {
      name: 'notifications_off',
      type: 'social'
    },
    {
      name: 'notifications_paused',
      type: 'social'
    },
    { name: 'pages', type: 'social' },
    { name: 'party_mode', type: 'social' },
    { name: 'people', type: 'social' },
    {
      name: 'people_outline',
      type: 'social'
    },
    { name: 'person', type: 'social' },
    { name: 'person_add', type: 'social' },
    {
      name: 'person_outline',
      type: 'social'
    },
    { name: 'plus_one', type: 'social' },
    { name: 'poll', type: 'social' },
    { name: 'public', type: 'social' },
    { name: 'school', type: 'social' },
    {
      name: 'sentiment_dissatisfied',
      type: 'social'
    },
    {
      name: 'sentiment_satisfied',
      type: 'social'
    },
    {
      name: 'sentiment_very_dissatisfied',
      type: 'social'
    },
    {
      name: 'sentiment_very_satisfied',
      type: 'social'
    },
    { name: 'share', type: 'social' },
    {
      name: 'thumb_down_alt',
      type: 'social'
    },
    {
      name: 'humb_up_alt',
      type: 'social'
    },
    { name: 'whatshot', type: 'social' }
    // end - material icons
  ];

  getIconTypes() {
    let types = [];
    types = this.iconList.map(function(item) {
      return item.type;
    });
    types = Array.from(new Set(types));
    return types; // unique types
  }

  getIconList(type) {
    const list = this.iconList.filter(function(item) {
      return item.type === type;
    });

    return list;
  }

  getIconListBySearchText(type, searchText) {
    const list = this.getIconList(type);
    const matches = list.filter(s => s.name.includes(searchText));

    // console.log('matches', matches);
    return matches;
  }
}
