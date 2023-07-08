/**
 * --------- Exit Popup --------------
 * Grab the user attention before they leave your website
 * 
 * Satpal Bhardwaj
 * https://sbsharma.com
 */
(function (global, moduleFactory) {
    // determine if the module loader supports the AMD (Asynchronous Module Definition) format
    if (typeof define === 'function' && define.amd) {
        define(moduleFactory);

        // checks if the environment supports CommonJS (exports and module.exports) and uses it to export the module
    } else if (typeof exports === 'object') {
        module.exports = moduleFactory(require, exports, module);

        //attaches the exitPopup function to the global root object (this in the global scope) for non-module environments.
    } else {
        global.exitPopup = moduleFactory();
    }
}(this, function (require, exports, module) {
    return function popupPlugin(element, customConfig) {
        "use strict";

        var pluginConfig = customConfig || {};
        var isAggressive = pluginConfig.aggressive || false;
        var sensitivity = setDefault(pluginConfig.sensitivity, 20);
        var timer = setDefault(pluginConfig.timer, 1000);
        var delay = setDefault(pluginConfig.delay, 0);
        var callback = pluginConfig.callback || function () { };
        var cookieExpire = setDefaultCookieExpire(pluginConfig.cookieExpire) || '';
        var cookieDomain = pluginConfig.cookieDomain ? ';domain=' + pluginConfig.cookieDomain : '';
        var cookieName = pluginConfig.cookieName ? pluginConfig.cookieName : 'viewedPopup';
        var sitewide = pluginConfig.sitewide === true ? ';path=/' : '';
        var delayTimer = null;
        var htmlElement = document.documentElement;

        function setDefault(property, defaultValue) {
            return typeof property === 'undefined' ? defaultValue : property;
        }

        function setDefaultCookieExpire(days) {
            var milliseconds = days * 24 * 60 * 60 * 1000;
            var date = new Date();
            date.setTime(date.getTime() + milliseconds);
            return "; expires=" + date.toUTCString();
        }

        function attachPopup() {
            if (isDisabled()) {
                return;
            }
            htmlElement.addEventListener('mouseleave', handleMouseExit);
            htmlElement.addEventListener('mouseenter', handleMouseEnter);
            htmlElement.addEventListener('keydown', handleKeyDown);
        }

        function handleMouseExit(e) {
            if (e.clientY > sensitivity) {
                return;
            }
            delayTimer = setTimeout(fire, delay);
        }

        function handleMouseEnter() {
            if (delayTimer) {
                clearTimeout(delayTimer);
                delayTimer = null;
            }
        }

        var isKeyDownDisabled = false;

        function handleKeyDown(e) {
            if (isKeyDownDisabled) {
                return;
            } else if (!e.metaKey || e.keyCode !== 76) {
                return;
            }
            isKeyDownDisabled = true;
            delayTimer = setTimeout(fire, delay);
        }

        function checkCookieValue(cookieName, value) {
            var cookies = parseCookies();
            return cookies[cookieName] === value;
        }

        function parseCookies() {
            var cookies = document.cookie.split('; ');
            var result = {};
            for (var i = cookies.length - 1; i >= 0; i--) {
                var cookie = cookies[i].split('=');
                result[cookie[0]] = cookie[1];
            }
            return result;
        }

        function isDisabled() {
            return checkCookieValue(cookieName, 'true') && !isAggressive;
        }

        function fire() {
            if (isDisabled()) {
                return;
            }
            if (element) {
                element.style.display = 'block';
            }
            callback();
            disable();
        }

        function disable(customOptions) {
            var options = customOptions || {};
            if (typeof options.cookieExpire !== 'undefined') {
                cookieExpire = setDefaultCookieExpire(options.cookieExpire);
            }
            if (options.sitewide === true) {
                sitewide = ';path=/';
            }
            if (typeof options.cookieDomain !== 'undefined') {
                cookieDomain = ';domain=' + options.cookieDomain;
            }
            if (typeof options.cookieName !== 'undefined') {
                cookieName = options.cookieName;
            }
            
            let _cookie = `${cookieName}=true${cookieExpire}${cookieDomain}${sitewide};SameSite=Strict`;

            document.cookie = _cookie;
            htmlElement.removeEventListener('mouseleave', handleMouseExit);
            htmlElement.removeEventListener('mouseenter', handleMouseEnter);
            htmlElement.removeEventListener('keydown', handleKeyDown);
        }

        setTimeout(attachPopup, timer); 

        return {
            fire: fire,
            disable: disable,
            isDisabled: isDisabled
        };
    };
}));

