import { initLocalStorage, initHashUrl, initGlobalMixin } from './init-app';

export function initApp(Vue) {
  initHashUrl();
  initLocalStorage();
  initGlobalMixin(Vue);
}
