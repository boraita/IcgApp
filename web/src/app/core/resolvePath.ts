import { GlobalConfig } from './config/global-config';
/**
 * Adding variables within path and returning it
 * @param params Object()
 */
function getPath(params: any) {
  if (params.length === 0) {
    // TODO update when alert component exist
    alert('wrong arguments to setUrls')
  }
  let url = params.slice(0, 1)[0];
  params.splice(1).map((url_param: string) => (url = url.replace(/%s/, url_param)));
  return url;
}

/**
 * This functions is resolving API path
 * @param params [url: string,params: string]
 */
export const resolveApiPath = (...params: Array<string | number>) => {
  const urlApi = getPath(params);
  const fullUrl = "".concat(window.location.hostname, ":", GlobalConfig.apiPort, "/", GlobalConfig.baseApiUrl, urlApi)
  return fullUrl;
};
