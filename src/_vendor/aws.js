/* Vendored with gratitude from https://github.com/aws/aws-sdk-js-v3 and used under the Apache 2.0 license */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function")
      throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn)
      context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access)
      context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_ = accept(result.get))
        descriptor.get = _;
      if (_ = accept(result.set))
        descriptor.set = _;
      if (_ = accept(result.init))
        initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field")
        initializers.unshift(_);
      else
        descriptor[key] = _;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m)
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
      __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function verb(n) {
    if (g[n])
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length)
      resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function")
      throw new TypeError("Object expected.");
    var dispose;
    if (async) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function")
      throw new TypeError("Object not disposable.");
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async)
          return Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError)
      throw env.error;
  }
  return next();
}
var extendStatics, __assign, __createBinding, __setModuleDefault, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p))
            d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources
    };
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/convertToAttr.js
var require_convertToAttr = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/convertToAttr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertToAttr = void 0;
    var convertToAttr2 = (data, options) => {
      var _a, _b, _c, _d, _e, _f;
      if (data === void 0) {
        throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
      } else if (data === null && typeof data === "object") {
        return convertToNullAttr();
      } else if (Array.isArray(data)) {
        return convertToListAttr(data, options);
      } else if (((_a = data === null || data === void 0 ? void 0 : data.constructor) === null || _a === void 0 ? void 0 : _a.name) === "Set") {
        return convertToSetAttr(data, options);
      } else if (((_b = data === null || data === void 0 ? void 0 : data.constructor) === null || _b === void 0 ? void 0 : _b.name) === "Map") {
        return convertToMapAttrFromIterable(data, options);
      } else if (((_c = data === null || data === void 0 ? void 0 : data.constructor) === null || _c === void 0 ? void 0 : _c.name) === "Object" || !data.constructor && typeof data === "object") {
        return convertToMapAttrFromEnumerableProps(data, options);
      } else if (isBinary(data)) {
        if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
          return convertToNullAttr();
        }
        return convertToBinaryAttr(data);
      } else if (typeof data === "boolean" || ((_d = data === null || data === void 0 ? void 0 : data.constructor) === null || _d === void 0 ? void 0 : _d.name) === "Boolean") {
        return { BOOL: data.valueOf() };
      } else if (typeof data === "number" || ((_e = data === null || data === void 0 ? void 0 : data.constructor) === null || _e === void 0 ? void 0 : _e.name) === "Number") {
        return convertToNumberAttr(data);
      } else if (typeof data === "bigint") {
        return convertToBigIntAttr(data);
      } else if (typeof data === "string" || ((_f = data === null || data === void 0 ? void 0 : data.constructor) === null || _f === void 0 ? void 0 : _f.name) === "String") {
        if (data.length === 0 && (options === null || options === void 0 ? void 0 : options.convertEmptyValues)) {
          return convertToNullAttr();
        }
        return convertToStringAttr(data);
      } else if ((options === null || options === void 0 ? void 0 : options.convertClassInstanceToMap) && typeof data === "object") {
        return convertToMapAttrFromEnumerableProps(data, options);
      }
      throw new Error(`Unsupported type passed: ${data}. Pass options.convertClassInstanceToMap=true to marshall typeof object as map attribute.`);
    };
    exports2.convertToAttr = convertToAttr2;
    var convertToListAttr = (data, options) => ({
      L: data.filter((item) => !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) || (options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && item !== void 0).map((item) => (0, exports2.convertToAttr)(item, options))
    });
    var convertToSetAttr = (set, options) => {
      const setToOperate = (options === null || options === void 0 ? void 0 : options.removeUndefinedValues) ? new Set([...set].filter((value) => value !== void 0)) : set;
      if (!(options === null || options === void 0 ? void 0 : options.removeUndefinedValues) && setToOperate.has(void 0)) {
        throw new Error(`Pass options.removeUndefinedValues=true to remove undefined values from map/array/set.`);
      }
      if (setToOperate.size === 0) {
        if (options === null || options === void 0 ? void 0 : options.convertEmptyValues) {
          return convertToNullAttr();
        }
        throw new Error(`Pass a non-empty set, or options.convertEmptyValues=true.`);
      }
      const item = setToOperate.values().next().value;
      if (typeof item === "number") {
        return {
          NS: Array.from(setToOperate).map(convertToNumberAttr).map((item2) => item2.N)
        };
      } else if (typeof item === "bigint") {
        return {
          NS: Array.from(setToOperate).map(convertToBigIntAttr).map((item2) => item2.N)
        };
      } else if (typeof item === "string") {
        return {
          SS: Array.from(setToOperate).map(convertToStringAttr).map((item2) => item2.S)
        };
      } else if (isBinary(item)) {
        return {
          BS: Array.from(setToOperate).map(convertToBinaryAttr).map((item2) => item2.B)
        };
      } else {
        throw new Error(`Only Number Set (NS), Binary Set (BS) or String Set (SS) are allowed.`);
      }
    };
    var convertToMapAttrFromIterable = (data, options) => ({
      M: ((data2) => {
        const map = {};
        for (const [key, value] of data2) {
          if (typeof value !== "function" && (value !== void 0 || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
            map[key] = (0, exports2.convertToAttr)(value, options);
          }
        }
        return map;
      })(data)
    });
    var convertToMapAttrFromEnumerableProps = (data, options) => ({
      M: ((data2) => {
        const map = {};
        for (const key in data2) {
          const value = data2[key];
          if (typeof value !== "function" && (value !== void 0 || !(options === null || options === void 0 ? void 0 : options.removeUndefinedValues))) {
            map[key] = (0, exports2.convertToAttr)(value, options);
          }
        }
        return map;
      })(data)
    });
    var convertToNullAttr = () => ({ NULL: true });
    var convertToBinaryAttr = (data) => ({ B: data });
    var convertToStringAttr = (data) => ({ S: data.toString() });
    var convertToBigIntAttr = (data) => ({ N: data.toString() });
    var validateBigIntAndThrow = (errorPrefix) => {
      throw new Error(`${errorPrefix} ${typeof BigInt === "function" ? "Use BigInt." : "Pass string value instead."} `);
    };
    var convertToNumberAttr = (num) => {
      if ([Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY].map((val) => val.toString()).includes(num.toString())) {
        throw new Error(`Special numeric value ${num.toString()} is not allowed`);
      } else if (num > Number.MAX_SAFE_INTEGER) {
        validateBigIntAndThrow(`Number ${num.toString()} is greater than Number.MAX_SAFE_INTEGER.`);
      } else if (num < Number.MIN_SAFE_INTEGER) {
        validateBigIntAndThrow(`Number ${num.toString()} is lesser than Number.MIN_SAFE_INTEGER.`);
      }
      return { N: num.toString() };
    };
    var isBinary = (data) => {
      const binaryTypes = [
        "ArrayBuffer",
        "Blob",
        "Buffer",
        "DataView",
        "File",
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
        "BigInt64Array",
        "BigUint64Array"
      ];
      if (data === null || data === void 0 ? void 0 : data.constructor) {
        return binaryTypes.includes(data.constructor.name);
      }
      return false;
    };
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/convertToNative.js
var require_convertToNative = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/convertToNative.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertToNative = void 0;
    var convertToNative2 = (data, options) => {
      for (const [key, value] of Object.entries(data)) {
        if (value !== void 0) {
          switch (key) {
            case "NULL":
              return null;
            case "BOOL":
              return Boolean(value);
            case "N":
              return convertNumber(value, options);
            case "B":
              return convertBinary(value);
            case "S":
              return convertString(value);
            case "L":
              return convertList(value, options);
            case "M":
              return convertMap(value, options);
            case "NS":
              return new Set(value.map((item) => convertNumber(item, options)));
            case "BS":
              return new Set(value.map(convertBinary));
            case "SS":
              return new Set(value.map(convertString));
            default:
              throw new Error(`Unsupported type passed: ${key}`);
          }
        }
      }
      throw new Error(`No value defined: ${JSON.stringify(data)}`);
    };
    exports2.convertToNative = convertToNative2;
    var convertNumber = (numString, options) => {
      if (options === null || options === void 0 ? void 0 : options.wrapNumbers) {
        return { value: numString };
      }
      const num = Number(numString);
      const infinityValues = [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
      if ((num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) && !infinityValues.includes(num)) {
        if (typeof BigInt === "function") {
          try {
            return BigInt(numString);
          } catch (error) {
            throw new Error(`${numString} can't be converted to BigInt. Set options.wrapNumbers to get string value.`);
          }
        } else {
          throw new Error(`${numString} is outside SAFE_INTEGER bounds. Set options.wrapNumbers to get string value.`);
        }
      }
      return num;
    };
    var convertString = (stringValue) => stringValue;
    var convertBinary = (binaryValue) => binaryValue;
    var convertList = (list, options) => list.map((item) => (0, exports2.convertToNative)(item, options));
    var convertMap = (map, options) => Object.entries(map).reduce((acc, [key, value]) => (acc[key] = (0, exports2.convertToNative)(value, options), acc), {});
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/marshall.js
var require_marshall = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/marshall.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.marshall = void 0;
    var convertToAttr_1 = require_convertToAttr();
    function marshall2(data, options) {
      const attributeValue = (0, convertToAttr_1.convertToAttr)(data, options);
      const [key, value] = Object.entries(attributeValue)[0];
      switch (key) {
        case "M":
        case "L":
          return (options === null || options === void 0 ? void 0 : options.convertTopLevelContainer) ? attributeValue : value;
        case "SS":
        case "NS":
        case "BS":
        case "S":
        case "N":
        case "B":
        case "NULL":
        case "BOOL":
        case "$unknown":
        default:
          return attributeValue;
      }
    }
    exports2.marshall = marshall2;
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/models.js
var require_models = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/models.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/unmarshall.js
var require_unmarshall = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/unmarshall.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.unmarshall = void 0;
    var convertToNative_1 = require_convertToNative();
    var unmarshall2 = (data, options) => {
      if (options === null || options === void 0 ? void 0 : options.convertWithoutMapWrapper) {
        return (0, convertToNative_1.convertToNative)(data, options);
      }
      return (0, convertToNative_1.convertToNative)({ M: data }, options);
    };
    exports2.unmarshall = unmarshall2;
  }
});

// node_modules/@aws-sdk/util-dynamodb/dist-cjs/index.js
var require_dist_cjs = __commonJS({
  "node_modules/@aws-sdk/util-dynamodb/dist-cjs/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_convertToAttr(), exports2);
    tslib_1.__exportStar(require_convertToNative(), exports2);
    tslib_1.__exportStar(require_marshall(), exports2);
    tslib_1.__exportStar(require_models(), exports2);
    tslib_1.__exportStar(require_unmarshall(), exports2);
  }
});

// vendor-aws-json-entry.mjs
var vendor_aws_json_entry_exports = {};
__export(vendor_aws_json_entry_exports, {
  convertToAttr: () => import_util_dynamodb.convertToAttr,
  convertToNative: () => import_util_dynamodb.convertToNative,
  marshall: () => import_util_dynamodb.marshall,
  unmarshall: () => import_util_dynamodb.unmarshall
});
module.exports = __toCommonJS(vendor_aws_json_entry_exports);
var import_util_dynamodb = __toESM(require_dist_cjs(), 1);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convertToAttr,
  convertToNative,
  marshall,
  unmarshall
});
