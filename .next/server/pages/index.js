module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\laragon\\www\\octapia-practice\\nextjs-practice\\pages\\index.js";



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "section",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm-12 p-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              id: "rev_slider",
              className: "rev_slider fullscreenbanner",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  "data-transition": "fade",
                  "data-slotamount": "default",
                  "data-hideafterloop": "0",
                  "data-hideslideonmobile": "off",
                  "data-easein": "default",
                  "data-easeout": "default",
                  "data-masterspeed": "300",
                  "data-thumb": "images/slider/slider_100x50.jpg",
                  "data-rotate": "0",
                  "data-saveperformance": "off",
                  "data-title": "Slide",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/slider/slider_1920x1000.jpg",
                    alt: "",
                    "data-bgposition": "center center",
                    "data-bgfit": "cover",
                    "data-bgrepeat": "no-repeat",
                    className: "rev-slidebg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "tp-caption mer-56-400 gray tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['138','25','25','25']",
                    "data-y": "['middle','middle','middle','middle']",
                    "data-voffset": "['6','0','0','11']",
                    "data-fontsize": "['56','50','50','50']",
                    "data-lineheight": "['70','60','60','60']",
                    "data-fontweight": "['400','700','700','700']",
                    "data-color": "['rgb(171,171,171)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)']",
                    "data-width": "['591','601','601','425']",
                    "data-height": "['367','241','241','none']",
                    "data-whitespace": "normal",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: ["We are a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "creative film"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 23
                    }, undefined), " and ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "video"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 72
                    }, undefined), " production company based in Berlin & Hamburg"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-34-700 primary-color tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['119','119','119','119']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "01"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-12-400 white tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['186','186','186','186']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['125','125','125','125']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "/03"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption btn-01 rev-btn",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['718','718','718','718']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "button",
                    "data-responsive_offset": "on",
                    "data-responsive": "off",
                    "data-frames": "[{\"delay\":0,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"0\",\"ease\":\"Linear.easeNone\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;\",\"style\":\"c:rgb(255,255,255);bg:rgb(218,14,43);\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[12,12,12,12]",
                    "data-paddingright": "[35,35,35,35]",
                    "data-paddingbottom": "[12,12,12,12]",
                    "data-paddingleft": "[35,35,35,35]",
                    children: "hire us now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  "data-transition": "fade",
                  "data-slotamount": "default",
                  "data-hideafterloop": "0",
                  "data-hideslideonmobile": "off",
                  "data-easein": "default",
                  "data-easeout": "default",
                  "data-masterspeed": "300",
                  "data-thumb": "images/slider/slider_100x50.jpg",
                  "data-rotate": "0",
                  "data-saveperformance": "off",
                  "data-title": "Slide",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/slider/slider_1920x1000.jpg",
                    alt: "",
                    "data-bgposition": "center center",
                    "data-bgfit": "cover",
                    "data-bgrepeat": "no-repeat",
                    className: "rev-slidebg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "tp-caption mer-56-400 tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['138','25','25','25']",
                    "data-y": "['middle','middle','middle','middle']",
                    "data-voffset": "['6','0','0','11']",
                    "data-fontsize": "['56','50','50','50']",
                    "data-lineheight": "['70','60','60','60']",
                    "data-fontweight": "['400','700','700','700']",
                    "data-color": "['rgb(171,171,171)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)']",
                    "data-width": "['591','601','601','425']",
                    "data-height": "['367','241','241','none']",
                    "data-whitespace": "normal",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: ["There is ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "beautiful"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, undefined), " intention in the ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "process"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 81
                    }, undefined), " of shooting film"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-34-700 primary-color tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['119','119','119','119']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "02"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-12-400 white tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['186','186','186','186']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['125','125','125','125']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "/03"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption btn-01 rev-btn",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['718','718','718','718']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "button",
                    "data-responsive_offset": "on",
                    "data-responsive": "off",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"0\",\"ease\":\"Linear.easeNone\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;\",\"style\":\"c:rgb(255,255,255);bg:rgb(218,14,43);\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[12,12,12,12]",
                    "data-paddingright": "[35,35,35,35]",
                    "data-paddingbottom": "[12,12,12,12]",
                    "data-paddingleft": "[35,35,35,35]",
                    children: "hire us now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 11
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  "data-transition": "fade",
                  "data-slotamount": "default",
                  "data-hideafterloop": "0",
                  "data-hideslideonmobile": "off",
                  "data-easein": "default",
                  "data-easeout": "default",
                  "data-masterspeed": "300",
                  "data-thumb": "images/slider/slider_100x50.jpg",
                  "data-rotate": "0",
                  "data-saveperformance": "off",
                  "data-title": "Slide",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/slider/slider_1920x1000.jpg",
                    alt: "",
                    "data-bgposition": "center center",
                    "data-bgfit": "cover",
                    "data-bgrepeat": "no-repeat",
                    className: "rev-slidebg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                    className: "tp-caption mer-56-400 tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['138','25','25','25']",
                    "data-y": "['middle','middle','middle','middle']",
                    "data-voffset": "['5','0','0','11']",
                    "data-fontsize": "['72','50','50','50']",
                    "data-lineheight": "['100','60','60','60']",
                    "data-fontweight": "['400','700','700','700']",
                    "data-color": "['rgb(171,171,171)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)','rgba(30, 30, 30, 1)']",
                    "data-width": "['591','601','601','425']",
                    "data-height": "['367','241','241','none']",
                    "data-whitespace": "normal",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: ["Let\u2019s make ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "great"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 25
                    }, undefined), " things ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "white",
                      children: "together!"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 69
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-34-700 primary-color tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['119','119','119','119']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "03"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption mon-12-400 white tp-resizeme",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['186','186','186','186']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['125','125','125','125']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "text",
                    "data-responsive_offset": "on",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[0,0,0,0]",
                    "data-paddingright": "[0,0,0,0]",
                    "data-paddingbottom": "[0,0,0,0]",
                    "data-paddingleft": "[0,0,0,0]",
                    children: "/03"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 12
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "tp-caption btn-01 rev-btn",
                    "data-x": "['left','left','left','left']",
                    "data-hoffset": "['140','140','140','140']",
                    "data-y": "['top','top','top','top']",
                    "data-voffset": "['718','718','718','718']",
                    "data-width": "none",
                    "data-height": "none",
                    "data-whitespace": "nowrap",
                    "data-type": "button",
                    "data-responsive_offset": "on",
                    "data-responsive": "off",
                    "data-frames": "[{\"delay\":10,\"speed\":300,\"frame\":\"0\",\"from\":\"opacity:0;\",\"to\":\"o:1;\",\"ease\":\"Power3.easeInOut\"},{\"delay\":\"wait\",\"speed\":300,\"frame\":\"999\",\"to\":\"opacity:0;\",\"ease\":\"Power3.easeInOut\"},{\"frame\":\"hover\",\"speed\":\"0\",\"ease\":\"Linear.easeNone\",\"to\":\"o:1;rX:0;rY:0;rZ:0;z:0;\",\"style\":\"c:rgb(255,255,255);bg:rgb(218,14,43);\"}]",
                    "data-textAlign": "['inherit','inherit','inherit','inherit']",
                    "data-paddingtop": "[12,12,12,12]",
                    "data-paddingright": "[35,35,35,35]",
                    "data-paddingbottom": "[12,12,12,12]",
                    "data-paddingleft": "[35,35,35,35]",
                    children: "hire us now"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 12
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 11
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 10
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImEiLCJsYXlvdXQiLCJ3aWR0aHMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsInNpemVzIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyYyIsImkiLCJwYXJzZUludCIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxvRTs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFD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bEQ7QUFHRSxrQ0FBVyxNQUhiO0FBR29CLG1DQUFZLE1BSGhDO0FBR3VDLHVDQUFnQixRQUh2RDtBQUdnRSxpQ0FBVSxRQUgxRTtBQUlFLDhDQUF1QixJQUp6QjtBQUk4Qix1Q0FBZ0IsS0FKOUM7QUFLRSxtQ0FBWSx5WEFMZDtBQU1FLHNDQUFlLDJDQU5qQjtBQU02RCx1Q0FBZ0IsZUFON0U7QUFPRSx5Q0FBa0IsZUFQcEI7QUFPb0MsMENBQW1CLGVBUHZEO0FBUUUsd0NBQWlCLGVBUm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWxDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBMUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBdUpILENBeEpEOztBQXlKZUEsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMzSkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dClcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAnaW5oZXJpdCcgOiAnaGlkZGVuJyxcblxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIHAtMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInJldl9zbGlkZXJcIiBjbGFzc05hbWU9XCJyZXZfc2xpZGVyIGZ1bGxzY3JlZW5iYW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBkYXRhLXRyYW5zaXRpb249XCJmYWRlXCIgZGF0YS1zbG90YW1vdW50PVwiZGVmYXVsdFwiIGRhdGEtaGlkZWFmdGVybG9vcD1cIjBcIiBkYXRhLWhpZGVzbGlkZW9ubW9iaWxlPVwib2ZmXCIgZGF0YS1lYXNlaW49XCJkZWZhdWx0XCIgZGF0YS1lYXNlb3V0PVwiZGVmYXVsdFwiIGRhdGEtbWFzdGVyc3BlZWQ9XCIzMDBcIiBkYXRhLXRodW1iPVwiaW1hZ2VzL3NsaWRlci9zbGlkZXJfMTAweDUwLmpwZ1wiIGRhdGEtcm90YXRlPVwiMFwiIGRhdGEtc2F2ZXBlcmZvcm1hbmNlPVwib2ZmXCIgIGRhdGEtdGl0bGU9XCJTbGlkZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCJpbWFnZXMvc2xpZGVyL3NsaWRlcl8xOTIweDEwMDAuanBnXCIgYWx0PVwiXCIgZGF0YS1iZ3Bvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiIGRhdGEtYmdmaXQ9XCJjb3ZlclwiIGRhdGEtYmdyZXBlYXQ9XCJuby1yZXBlYXRcIiBjbGFzc05hbWU9XCJyZXYtc2xpZGViZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiBtZXItNTYtNDAwIGdyYXkgdHAtcmVzaXplbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiIGRhdGEtaG9mZnNldD1cIlsnMTM4JywnMjUnLCcyNScsJzI1J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCIgZGF0YS12b2Zmc2V0PVwiWyc2JywnMCcsJzAnLCcxMSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1mb250c2l6ZT1cIlsnNTYnLCc1MCcsJzUwJywnNTAnXVwiIGRhdGEtbGluZWhlaWdodD1cIlsnNzAnLCc2MCcsJzYwJywnNjAnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtZm9udHdlaWdodD1cIlsnNDAwJywnNzAwJywnNzAwJywnNzAwJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWNvbG9yPVwiWydyZ2IoMTcxLDE3MSwxNzEpJywncmdiYSgzMCwgMzAsIDMwLCAxKScsJ3JnYmEoMzAsIDMwLCAzMCwgMSknLCdyZ2JhKDMwLCAzMCwgMzAsIDEpJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXdpZHRoPVwiWyc1OTEnLCc2MDEnLCc2MDEnLCc0MjUnXVwiIGRhdGEtaGVpZ2h0PVwiWyczNjcnLCcyNDEnLCcyNDEnLCdub25lJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXdoaXRlc3BhY2U9XCJub3JtYWxcIiBkYXRhLXR5cGU9XCJ0ZXh0XCIgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRleHRBbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCIgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0V2UgYXJlIGEgPHNwYW4gY2xhc3NOYW1lPVwid2hpdGVcIj5jcmVhdGl2ZSBmaWxtPC9zcGFuPiBhbmQgPHNwYW4gY2xhc3NOYW1lPVwid2hpdGVcIj52aWRlbzwvc3Bhbj4gcHJvZHVjdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBhbnkgYmFzZWQgaW4gQmVybGluICZhbXA7IEhhbWJ1cmdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRwLWNhcHRpb24gbW9uLTM0LTcwMCBwcmltYXJ5LWNvbG9yIHRwLXJlc2l6ZW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCIgZGF0YS1ob2Zmc2V0PVwiWycxNDAnLCcxNDAnLCcxNDAnLCcxNDAnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCIgZGF0YS12b2Zmc2V0PVwiWycxMTknLCcxMTknLCcxMTknLCcxMTknXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXdpZHRoPVwibm9uZVwiIGRhdGEtaGVpZ2h0PVwibm9uZVwiIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiIGRhdGEtdHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtdGV4dEFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIiBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCI+MDFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIG1vbi0xMi00MDAgd2hpdGUgdHAtcmVzaXplbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIiBkYXRhLWhvZmZzZXQ9XCJbJzE4NicsJzE4NicsJzE4NicsJzE4NiddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIiBkYXRhLXZvZmZzZXQ9XCJbJzEyNScsJzEyNScsJzEyNScsJzEyNSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtd2lkdGg9XCJub25lXCIgZGF0YS1oZWlnaHQ9XCJub25lXCIgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCIgZGF0YS10eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIj4vMDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIGJ0bi0wMSByZXYtYnRuXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCIgZGF0YS1ob2Zmc2V0PVwiWycxNDAnLCcxNDAnLCcxNDAnLCcxNDAnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCIgZGF0YS12b2Zmc2V0PVwiWyc3MTgnLCc3MTgnLCc3MTgnLCc3MTgnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXdpZHRoPVwibm9uZVwiIGRhdGEtaGVpZ2h0PVwibm9uZVwiIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiIGRhdGEtdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIiBkYXRhLXJlc3BvbnNpdmU9XCJvZmZcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJmcmFtZVwiOlwiaG92ZXJcIixcInNwZWVkXCI6XCIwXCIsXCJlYXNlXCI6XCJMaW5lYXIuZWFzZU5vbmVcIixcInRvXCI6XCJvOjE7clg6MDtyWTowO3JaOjA7ejowO1wiLFwic3R5bGVcIjpcImM6cmdiKDI1NSwyNTUsMjU1KTtiZzpyZ2IoMjE4LDE0LDQzKTtcIn1dJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlsxMiwxMiwxMiwxMl1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMzUsMzUsMzUsMzVdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzEyLDEyLDEyLDEyXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXBhZGRpbmdsZWZ0PVwiWzM1LDM1LDM1LDM1XVwiPmhpcmUgdXMgbm93XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBkYXRhLXRyYW5zaXRpb249XCJmYWRlXCIgZGF0YS1zbG90YW1vdW50PVwiZGVmYXVsdFwiIGRhdGEtaGlkZWFmdGVybG9vcD1cIjBcIiBkYXRhLWhpZGVzbGlkZW9ubW9iaWxlPVwib2ZmXCIgZGF0YS1lYXNlaW49XCJkZWZhdWx0XCIgZGF0YS1lYXNlb3V0PVwiZGVmYXVsdFwiIGRhdGEtbWFzdGVyc3BlZWQ9XCIzMDBcIiBkYXRhLXRodW1iPVwiaW1hZ2VzL3NsaWRlci9zbGlkZXJfMTAweDUwLmpwZ1wiIGRhdGEtcm90YXRlPVwiMFwiIGRhdGEtc2F2ZXBlcmZvcm1hbmNlPVwib2ZmXCIgZGF0YS10aXRsZT1cIlNsaWRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9zbGlkZXIvc2xpZGVyXzE5MjB4MTAwMC5qcGdcIiAgYWx0PVwiXCIgZGF0YS1iZ3Bvc2l0aW9uPVwiY2VudGVyIGNlbnRlclwiIGRhdGEtYmdmaXQ9XCJjb3ZlclwiIGRhdGEtYmdyZXBlYXQ9XCJuby1yZXBlYXRcIiBjbGFzc05hbWU9XCJyZXYtc2xpZGViZ1wiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiBtZXItNTYtNDAwIHRwLXJlc2l6ZW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIiBkYXRhLWhvZmZzZXQ9XCJbJzEzOCcsJzI1JywnMjUnLCcyNSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS15PVwiWydtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnLCdtaWRkbGUnXVwiIGRhdGEtdm9mZnNldD1cIlsnNicsJzAnLCcwJywnMTEnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtZm9udHNpemU9XCJbJzU2JywnNTAnLCc1MCcsJzUwJ11cIiBkYXRhLWxpbmVoZWlnaHQ9XCJbJzcwJywnNjAnLCc2MCcsJzYwJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWZvbnR3ZWlnaHQ9XCJbJzQwMCcsJzcwMCcsJzcwMCcsJzcwMCddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1jb2xvcj1cIlsncmdiKDE3MSwxNzEsMTcxKScsJ3JnYmEoMzAsIDMwLCAzMCwgMSknLCdyZ2JhKDMwLCAzMCwgMzAsIDEpJywncmdiYSgzMCwgMzAsIDMwLCAxKSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aWR0aD1cIlsnNTkxJywnNjAxJywnNjAxJywnNDI1J11cIiBkYXRhLWhlaWdodD1cIlsnMzY3JywnMjQxJywnMjQxJywnbm9uZSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aGl0ZXNwYWNlPVwibm9ybWFsXCIgZGF0YS10eXBlPVwidGV4dFwiIGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFRoZXJlIGlzIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlXCI+YmVhdXRpZnVsPC9zcGFuPiBpbnRlbnRpb24gaW4gdGhlIDxzcGFuIGNsYXNzTmFtZT1cIndoaXRlXCI+cHJvY2Vzczwvc3Bhbj4gb2Ygc2hvb3RpbmcgZmlsbVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiBtb24tMzQtNzAwIHByaW1hcnktY29sb3IgdHAtcmVzaXplbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIiBkYXRhLWhvZmZzZXQ9XCJbJzE0MCcsJzE0MCcsJzE0MCcsJzE0MCddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIiBkYXRhLXZvZmZzZXQ9XCJbJzExOScsJzExOScsJzExOScsJzExOSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtd2lkdGg9XCJub25lXCIgZGF0YS1oZWlnaHQ9XCJub25lXCIgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCIgZGF0YS10eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXJlc3BvbnNpdmVfb2Zmc2V0PVwib25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1mcmFtZXM9J1t7XCJkZWxheVwiOjEwLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiMFwiLFwiZnJvbVwiOlwib3BhY2l0eTowO1wiLFwidG9cIjpcIm86MTtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn0se1wiZGVsYXlcIjpcIndhaXRcIixcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjk5OVwiLFwidG9cIjpcIm9wYWNpdHk6MDtcIixcImVhc2VcIjpcIlBvd2VyMy5lYXNlSW5PdXRcIn1dJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXBhZGRpbmdyaWdodD1cIlswLDAsMCwwXVwiIGRhdGEtcGFkZGluZ2JvdHRvbT1cIlswLDAsMCwwXVwiIGRhdGEtcGFkZGluZ2xlZnQ9XCJbMCwwLDAsMF1cIj4wMlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRwLWNhcHRpb24gbW9uLTEyLTQwMCB3aGl0ZSB0cC1yZXNpemVtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiIGRhdGEtaG9mZnNldD1cIlsnMTg2JywnMTg2JywnMTg2JywnMTg2J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiIGRhdGEtdm9mZnNldD1cIlsnMTI1JywnMTI1JywnMTI1JywnMTI1J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS13aWR0aD1cIm5vbmVcIiBkYXRhLWhlaWdodD1cIm5vbmVcIiBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIiBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXRleHRBbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCIgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiPi8wM1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRwLWNhcHRpb24gYnRuLTAxIHJldi1idG5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS14PVwiWydsZWZ0JywnbGVmdCcsJ2xlZnQnLCdsZWZ0J11cIiBkYXRhLWhvZmZzZXQ9XCJbJzE0MCcsJzE0MCcsJzE0MCcsJzE0MCddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteT1cIlsndG9wJywndG9wJywndG9wJywndG9wJ11cIiBkYXRhLXZvZmZzZXQ9XCJbJzcxOCcsJzcxOCcsJzcxOCcsJzcxOCddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtd2lkdGg9XCJub25lXCIgZGF0YS1oZWlnaHQ9XCJub25lXCIgZGF0YS13aGl0ZXNwYWNlPVwibm93cmFwXCIgZGF0YS10eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiIGRhdGEtcmVzcG9uc2l2ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJmcmFtZVwiOlwiaG92ZXJcIixcInNwZWVkXCI6XCIwXCIsXCJlYXNlXCI6XCJMaW5lYXIuZWFzZU5vbmVcIixcInRvXCI6XCJvOjE7clg6MDtyWTowO3JaOjA7ejowO1wiLFwic3R5bGVcIjpcImM6cmdiKDI1NSwyNTUsMjU1KTtiZzpyZ2IoMjE4LDE0LDQzKTtcIn1dJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlsxMiwxMiwxMiwxMl1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMzUsMzUsMzUsMzVdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzEyLDEyLDEyLDEyXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXBhZGRpbmdsZWZ0PVwiWzM1LDM1LDM1LDM1XVwiPmhpcmUgdXMgbm93XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBkYXRhLXRyYW5zaXRpb249XCJmYWRlXCIgZGF0YS1zbG90YW1vdW50PVwiZGVmYXVsdFwiIGRhdGEtaGlkZWFmdGVybG9vcD1cIjBcIiBkYXRhLWhpZGVzbGlkZW9ubW9iaWxlPVwib2ZmXCIgZGF0YS1lYXNlaW49XCJkZWZhdWx0XCIgZGF0YS1lYXNlb3V0PVwiZGVmYXVsdFwiIGRhdGEtbWFzdGVyc3BlZWQ9XCIzMDBcIiBkYXRhLXRodW1iPVwiaW1hZ2VzL3NsaWRlci9zbGlkZXJfMTAweDUwLmpwZ1wiIGRhdGEtcm90YXRlPVwiMFwiIGRhdGEtc2F2ZXBlcmZvcm1hbmNlPVwib2ZmXCIgZGF0YS10aXRsZT1cIlNsaWRlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltYWdlcy9zbGlkZXIvc2xpZGVyXzE5MjB4MTAwMC5qcGdcIiBhbHQ9XCJcIiBkYXRhLWJncG9zaXRpb249XCJjZW50ZXIgY2VudGVyXCIgZGF0YS1iZ2ZpdD1cImNvdmVyXCIgZGF0YS1iZ3JlcGVhdD1cIm5vLXJlcGVhdFwiIGNsYXNzTmFtZT1cInJldi1zbGlkZWJnXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIG1lci01Ni00MDAgdHAtcmVzaXplbWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiIGRhdGEtaG9mZnNldD1cIlsnMTM4JywnMjUnLCcyNScsJzI1J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXk9XCJbJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZScsJ21pZGRsZSddXCIgZGF0YS12b2Zmc2V0PVwiWyc1JywnMCcsJzAnLCcxMSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1mb250c2l6ZT1cIlsnNzInLCc1MCcsJzUwJywnNTAnXVwiIGRhdGEtbGluZWhlaWdodD1cIlsnMTAwJywnNjAnLCc2MCcsJzYwJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLWZvbnR3ZWlnaHQ9XCJbJzQwMCcsJzcwMCcsJzcwMCcsJzcwMCddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS1jb2xvcj1cIlsncmdiKDE3MSwxNzEsMTcxKScsJ3JnYmEoMzAsIDMwLCAzMCwgMSknLCdyZ2JhKDMwLCAzMCwgMzAsIDEpJywncmdiYSgzMCwgMzAsIDMwLCAxKSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aWR0aD1cIlsnNTkxJywnNjAxJywnNjAxJywnNDI1J11cIiBkYXRhLWhlaWdodD1cIlsnMzY3JywnMjQxJywnMjQxJywnbm9uZSddXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS13aGl0ZXNwYWNlPVwibm9ybWFsXCIgZGF0YS10eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10ZXh0QWxpZ249XCJbJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnXVwiIGRhdGEtcGFkZGluZ3RvcD1cIlswLDAsMCwwXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdExldOKAmXMgbWFrZSA8c3BhbiBjbGFzc05hbWU9XCJ3aGl0ZVwiPmdyZWF0PC9zcGFuPiB0aGluZ3MgPHNwYW4gY2xhc3NOYW1lPVwid2hpdGVcIj50b2dldGhlciE8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0cC1jYXB0aW9uIG1vbi0zNC03MDAgcHJpbWFyeS1jb2xvciB0cC1yZXNpemVtZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiIGRhdGEtaG9mZnNldD1cIlsnMTQwJywnMTQwJywnMTQwJywnMTQwJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiIGRhdGEtdm9mZnNldD1cIlsnMTE5JywnMTE5JywnMTE5JywnMTE5J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS13aWR0aD1cIm5vbmVcIiBkYXRhLWhlaWdodD1cIm5vbmVcIiBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIiBkYXRhLXR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcmVzcG9uc2l2ZV9vZmZzZXQ9XCJvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLWZyYW1lcz0nW3tcImRlbGF5XCI6MTAsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCIwXCIsXCJmcm9tXCI6XCJvcGFjaXR5OjA7XCIsXCJ0b1wiOlwibzoxO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifSx7XCJkZWxheVwiOlwid2FpdFwiLFwic3BlZWRcIjozMDAsXCJmcmFtZVwiOlwiOTk5XCIsXCJ0b1wiOlwib3BhY2l0eTowO1wiLFwiZWFzZVwiOlwiUG93ZXIzLmVhc2VJbk91dFwifV0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXRleHRBbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCIgZGF0YS1wYWRkaW5ndG9wPVwiWzAsMCwwLDBdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcGFkZGluZ3JpZ2h0PVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nYm90dG9tPVwiWzAsMCwwLDBdXCIgZGF0YS1wYWRkaW5nbGVmdD1cIlswLDAsMCwwXVwiPjAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiBtb24tMTItNDAwIHdoaXRlIHRwLXJlc2l6ZW1lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEteD1cIlsnbGVmdCcsJ2xlZnQnLCdsZWZ0JywnbGVmdCddXCIgZGF0YS1ob2Zmc2V0PVwiWycxODYnLCcxODYnLCcxODYnLCcxODYnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXk9XCJbJ3RvcCcsJ3RvcCcsJ3RvcCcsJ3RvcCddXCIgZGF0YS12b2Zmc2V0PVwiWycxMjUnLCcxMjUnLCcxMjUnLCcxMjUnXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXdpZHRoPVwibm9uZVwiIGRhdGEtaGVpZ2h0PVwibm9uZVwiIGRhdGEtd2hpdGVzcGFjZT1cIm5vd3JhcFwiIGRhdGEtdHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9XSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtdGV4dEFsaWduPVwiWydpbmhlcml0JywnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0J11cIiBkYXRhLXBhZGRpbmd0b3A9XCJbMCwwLDAsMF1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1wYWRkaW5ncmlnaHQ9XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdib3R0b209XCJbMCwwLDAsMF1cIiBkYXRhLXBhZGRpbmdsZWZ0PVwiWzAsMCwwLDBdXCI+LzAzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidHAtY2FwdGlvbiBidG4tMDEgcmV2LWJ0blwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXg9XCJbJ2xlZnQnLCdsZWZ0JywnbGVmdCcsJ2xlZnQnXVwiIGRhdGEtaG9mZnNldD1cIlsnMTQwJywnMTQwJywnMTQwJywnMTQwJ11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS15PVwiWyd0b3AnLCd0b3AnLCd0b3AnLCd0b3AnXVwiIGRhdGEtdm9mZnNldD1cIlsnNzE4JywnNzE4JywnNzE4JywnNzE4J11cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS13aWR0aD1cIm5vbmVcIiBkYXRhLWhlaWdodD1cIm5vbmVcIiBkYXRhLXdoaXRlc3BhY2U9XCJub3dyYXBcIiBkYXRhLXR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZGF0YS1yZXNwb25zaXZlX29mZnNldD1cIm9uXCIgZGF0YS1yZXNwb25zaXZlPVwib2ZmXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtZnJhbWVzPSdbe1wiZGVsYXlcIjoxMCxcInNwZWVkXCI6MzAwLFwiZnJhbWVcIjpcIjBcIixcImZyb21cIjpcIm9wYWNpdHk6MDtcIixcInRvXCI6XCJvOjE7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImRlbGF5XCI6XCJ3YWl0XCIsXCJzcGVlZFwiOjMwMCxcImZyYW1lXCI6XCI5OTlcIixcInRvXCI6XCJvcGFjaXR5OjA7XCIsXCJlYXNlXCI6XCJQb3dlcjMuZWFzZUluT3V0XCJ9LHtcImZyYW1lXCI6XCJob3ZlclwiLFwic3BlZWRcIjpcIjBcIixcImVhc2VcIjpcIkxpbmVhci5lYXNlTm9uZVwiLFwidG9cIjpcIm86MTtyWDowO3JZOjA7clo6MDt6OjA7XCIsXCJzdHlsZVwiOlwiYzpyZ2IoMjU1LDI1NSwyNTUpO2JnOnJnYigyMTgsMTQsNDMpO1wifV0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXRleHRBbGlnbj1cIlsnaW5oZXJpdCcsJ2luaGVyaXQnLCdpbmhlcml0JywnaW5oZXJpdCddXCIgZGF0YS1wYWRkaW5ndG9wPVwiWzEyLDEyLDEyLDEyXVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBkYXRhLXBhZGRpbmdyaWdodD1cIlszNSwzNSwzNSwzNV1cIiBkYXRhLXBhZGRpbmdib3R0b209XCJbMTIsMTIsMTIsMTJdXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGRhdGEtcGFkZGluZ2xlZnQ9XCJbMzUsMzUsMzUsMzVdXCI+aGlyZSB1cyBub3dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==