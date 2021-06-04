import * as consts from '@/common/constant';
import { debounce } from 'throttle-debounce';
import { Message } from 'element-plus';
import { setParam, getParam, removeParam } from '@/utils/url';
import { setRouteState, notification } from '@/utils';
import EventTracking from '@/utils/event-tracking';
import { ResourceService } from '@/api';
import { copyToClipboard } from '@/utils/functional';

/**
 * 初始化localstorage配置
 */
export function initLocalStorage() {
  if (!localStorage.getItem([consts.THUMBNAIL_COLS])) {
    localStorage.setItem([consts.THUMBNAIL_COLS], 6);
  }
  if (!localStorage.getItem([consts.THUMBNAIL_PIC_SIZE])) {
    localStorage.setItem([consts.THUMBNAIL_PIC_SIZE], 270);
  }
  if (!localStorage.getItem([consts.IMAGE_ORIGIN_TYPE])) {
    localStorage.setItem([consts.IMAGE_ORIGIN_TYPE], 'jpeg');
  }
  if (!localStorage.getItem([consts.LANDMARK_COLOR])) {
    localStorage.setItem([consts.LANDMARK_COLOR], '#0000ff');
  }
  if (!localStorage.getItem([consts.DATASET_INDEX_SORT_FIELD])) {
    localStorage.setItem([consts.DATASET_INDEX_SORT_FIELD], 'create_time');
  }
  if (!localStorage.getItem([consts.DATASET_INDEX_SORT_TYPE])) {
    localStorage.setItem([consts.DATASET_INDEX_SORT_TYPE], -1);
  }
}

/**
 * 兼容最早的hash模式路由的url
 */
export function initHashUrl() {
  if (location.href.indexOf('/#/') > 0) {
    location.href = location.href.replace('/#/', '/');
  }
}

/**
 * 初始化全局的mixin方法
 * @param {*} Vue
 */
export function initGlobalMixin(Vue) {
  const msg_warn = debounce(500, msg => {
    Message({
      type: 'warning',
      message: msg
    });
  });
  const msg_success = debounce(500, (msg = 'success') => {
    Message({
      type: 'success',
      message: msg
    });
  });
  Vue.mixin({
    methods: {
      warnMsg(msg) {
        return msg_warn(msg);
      },
      successMsg(msg, immediate) {
        if (immediate) {
          return Message({
            type: 'success',
            message: msg
          });
        } else {
          return msg_success(msg);
        }
      },
      _confirmOpts(msg, cb) {
        this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            cb();
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
      },
      _setRouteState(path) {
        setRouteState(path);
      },
      _notification(title, msg) {
        notification(title, msg);
      },
      _setParam(key, val, url) {
        return setParam(key, val, url);
      },
      _getParam(key) {
        return getParam(key);
      },
      _removeParam(key, url) {
        return removeParam(key, url);
      },
      _parseRouteParams(scope, _default) {
        if (this.$route.query[scope] !== undefined) {
          return this.$route.query[scope];
        } else {
          return _default;
        }
      },
      _eventTracking(route) {
        EventTracking.submit({
          route: route,
          stayTime: ''
        });
      },
      _copyShortUrl(url) {
        const href = url && typeof url === 'string' ? url : location.href;
        ResourceService.getShortLink({
          url: href
        }).then(data => {
          if (data.status > -1) {
            copyToClipboard(`${location.origin}/api/short/${data.data}`);
          }
        });
      }
    }
  });
}
