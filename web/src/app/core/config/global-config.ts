export class GlobalConfig {
  //Configuration urls
  static apiPort = '2700';
  static path =
    window.location.protocol +
    '//' +
    window.location.hostname +
    ':' +
    GlobalConfig.apiPort +
    '/';
  static AUTHORIZATION_HEADER = 'Authorization';
}
