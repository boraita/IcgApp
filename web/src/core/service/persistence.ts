import {GlobalConfig} from '../config/global';

/**
 * Set an item to local storage
 *
 * @param {string} key
 * @param {(string|Object)} value
 */
function setStorageItem(key: string, value: any) {
  let objectValue = value;
  if (objectValue instanceof Object) {
    objectValue = JSON.stringify(objectValue);
  }
  localStorage.setItem(key, objectValue);
}

/**
 * Get an item from cookie
 *
 * @param {string} key
 * @return {(string)}
 */
function getCookieItem(key: string) {
  let result;
  const match = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  if (match?.length) {
    result = match[2];
  }
  return result;
}
/**
 * Get an item from local storage
 *
 * @param {string} key
 * @return {(string|Object)}
 */
function getStorageItem(key: string) {
  let result;
  try {
    result = JSON.parse(localStorage.getItem(key) || '');
  } catch (e) {
    return localStorage.getItem(key);
  }
  return result;
}

/**
 * Remove an item from local storage
 * @param {string} key
 */
function removeStorageItem(key: string) {
  localStorage.removeItem(key);
}

function getAuthorization() {
  return getCookieItem(GlobalConfig.AuthorizationStorage);
}

/**
 * Return if has authorization token in Cookies
 */
function setLogout() {
  const allCookies = document.cookie.split(';');
  // The "expire" attribute of every cookie is
  // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
  for (let i = 0; i < allCookies.length; i++) {
    document.cookie = allCookies[i] + '=;expires=' +
      new Date(0).toUTCString();
  }
  // TODO
  // window.location.href = ApiResources.SIGNIN;
}


function setCurrentLanguage(lang: string) {
  document.cookie = GlobalConfig.LanguageStorage + '=' + lang + '; path=/';
}

function getCurrentLanguage(): string {
  return getCookieItem(GlobalConfig.LanguageStorage) || process.env.VUE_APP_I18N_LOCALE;
}

export default {
  setStorageItem,
  getStorageItem,
  getAuthorization,
  setLogout,
  getCurrentLanguage,
  setCurrentLanguage,
};
