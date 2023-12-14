'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var jsxRuntime = require('react/jsx-runtime');

function useAsyncEffect(callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    React.useEffect(function () {
        var promise = callback();
        var cleanup;
        promise.then(function (cleanupFn) {
            // @ts-ignore
            cleanup = cleanupFn;
        });
        return function () {
            cleanup && cleanup();
        };
    }, dependencies);
}

function useBatchHooks(hook, count) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (Array.isArray(hook)) {
        return hook.map(function (item) { return item.hook.apply(item, item.args); });
    }
    else {
        return Array.from({ length: count }, function () { return hook.apply(void 0, args); });
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function useBattery(onChargingChange, callbacks) {
    var _a = React.useState(null), batteryStatus = _a[0], setBatteryStatus = _a[1];
    var _callbacks = React.useMemo(function () {
        return __assign(__assign({}, callbacks), { onChargingChange: (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onChargingChange) || onChargingChange });
    }, [callbacks, onChargingChange]);
    React.useEffect(function () {
        var battery = null;
        navigator.getBattery().then(function (bat) {
            battery = bat;
            setBatteryStatus({
                charging: battery.charging,
                level: battery.level,
                chargingTime: battery.chargingTime,
                dischargingTime: battery.dischargingTime,
            });
            var updateAllBatteryInfo = function () {
                setBatteryStatus({
                    charging: battery.charging,
                    level: battery.level,
                    chargingTime: battery.chargingTime,
                    dischargingTime: battery.dischargingTime,
                });
            };
            var handleChargingChange = function () {
                updateAllBatteryInfo();
                if (_callbacks.onChargingChange) {
                    _callbacks.onChargingChange({
                        charging: battery.charging,
                        level: battery.level,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                    });
                }
            };
            var handleLevelChange = function () {
                updateAllBatteryInfo();
                if (_callbacks.onLevelChange) {
                    _callbacks.onLevelChange({
                        charging: battery.charging,
                        level: battery.level,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                    });
                }
            };
            var handleChargingTimeChange = function () {
                updateAllBatteryInfo();
                if (_callbacks.onChargingTimeChange) {
                    _callbacks.onChargingTimeChange({
                        charging: battery.charging,
                        level: battery.level,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                    });
                }
            };
            var handleDischargingTimeChange = function () {
                updateAllBatteryInfo();
                if (_callbacks.onDischargingTimeChange) {
                    _callbacks.onDischargingTimeChange({
                        charging: battery.charging,
                        level: battery.level,
                        chargingTime: battery.chargingTime,
                        dischargingTime: battery.dischargingTime,
                    });
                }
            };
            battery.addEventListener("chargingchange", handleChargingChange);
            battery.addEventListener("levelchange", handleLevelChange);
            battery.addEventListener("chargingtimechange", handleChargingTimeChange);
            battery.addEventListener("dischargingtimechange", handleDischargingTimeChange);
        });
        return function () {
            if (battery) {
                battery.onchargingchange = null;
                battery.onlevelchange = null;
                battery.onchargingtimechange = null;
                battery.ondischargingtimechange = null;
            }
        };
    }, [_callbacks]);
    return batteryStatus;
}

function useBeforeMount(callback) {
    var callbackRef = React.useRef(callback);
    // 在组件挂载前执行回调
    callbackRef.current();
    // 确保回调在组件卸载时不会再次执行
    React.useEffect(function () { }, []);
}

function useBroadcastChannel(channelName, messageHandler, parser) {
    if (parser === void 0) { parser = true; }
    var channelRef = React.useRef(null);
    React.useEffect(function () {
        channelRef.current = new BroadcastChannel(channelName);
        channelRef.current.onmessage = function (event) {
            var _data = event.data;
            if (parser) {
                if (typeof parser === "function") {
                    _data = parser(_data);
                }
                else {
                    try {
                        _data = JSON.parse(event.data);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            }
            messageHandler === null || messageHandler === void 0 ? void 0 : messageHandler(_data);
        };
        return function () {
            if (channelRef.current) {
                channelRef.current.close();
            }
        };
    }, [channelName, messageHandler]);
    var postMessage = function (message) {
        if (channelRef.current) {
            channelRef.current.postMessage(JSON.stringify(message));
        }
    };
    return postMessage;
}

function useClickAway(onClickAway) {
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClickAway]);
    return ref;
}

function getCookie(name) {
    if (typeof document === 'undefined') {
        return null;
    }
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}
function setCookie(name, value, days) {
    if (typeof document === 'undefined') {
        return;
    }
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function useCookie(name, initialValue, days) {
    var _a = React.useState(function () { return getCookie(name) || initialValue; }), value = _a[0], setValue = _a[1];
    React.useEffect(function () {
        setCookie(name, value, days);
    }, [name, value, days]);
    return [value, setValue];
}

function useConsoleLog() {
    var _a = React.useState([]), logs = _a[0], setLogs = _a[1];
    React.useEffect(function () {
        var originalLog = console.log;
        console.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // @ts-ignore
            setLogs(function (prevLogs) { return __spreadArray(__spreadArray([], prevLogs, true), [args.join(' ')], false); });
            originalLog.apply(void 0, args);
        };
        return function () {
            console.log = originalLog;
        };
    }, []);
    return logs;
}

function debounce(fn, delay, immediate, callback) {
    if (delay === void 0) { delay = 200; }
    if (immediate === void 0) { immediate = false; }
    // 1.定义一个定时器, 保存上一次的定时器
    var timer = null;
    var isInvoke = false;
    // 2.真正执行的函数
    var _debounce = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            // 取消上一次的定时器
            if (timer)
                clearTimeout(timer);
            // 判断是否需要立即执行
            if (immediate && !isInvoke) {
                // @ts-ignore
                var result = fn.apply(_this, args);
                if (callback)
                    callback(result);
                resolve(result);
                isInvoke = true;
            }
            else {
                // 延迟执行
                timer = setTimeout(function () {
                    // 外部传入的真正要执行的函数
                    // @ts-ignore
                    var result = fn.apply(_this, args);
                    if (callback)
                        callback(result);
                    resolve(result);
                    isInvoke = false;
                    timer = null;
                }, delay);
            }
        });
    };
    // 封装取消功能
    _debounce.cancel = function () {
        if (timer)
            clearTimeout(timer);
        timer = null;
        isInvoke = false;
    };
    return _debounce;
}
var emptyFn$1 = function () { };
function useDebounce(fn, delay, immediate, callback) {
    if (delay === void 0) { delay = 200; }
    if (immediate === void 0) { immediate = false; }
    if (typeof fn !== "function") {
        throw new Error("fn must be a function");
    }
    if (typeof delay !== "number") {
        throw new Error("delay must be a number");
    }
    if (delay < 0) {
        return emptyFn$1;
    }
    if (delay === 0) {
        return fn;
    }
    var debounceFn = React.useMemo(function () {
        return debounce(fn, delay, immediate, callback);
    }, [fn, delay, immediate, callback]);
    return debounceFn;
}

var UKey = function () {
    return Math.floor(Math.random() * Date.now().valueOf());
};

// 创建一个全局的事件监听器列表
var globalListeners = new Map();
// 创建一个 Context 来共享 globalListeners
var GlobalListenersContext = React.createContext(globalListeners);
// @ts-ignore
function useEventEmitter(name, initialEventName, 
// @ts-ignore
initialListener) {
    var globalListeners = React.useContext(GlobalListenersContext);
    // 如果没有传入 name，使用 Ukey 方法生成一个唯一的名称
    var listenerName = name || "_emitter_".concat(UKey());
    var emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        globalListeners.forEach(function (value, key) {
            if (key.startsWith(eventName)) {
                value.listener.apply(value, args);
            }
        });
    };
    var subscribe = function (eventName, listener) {
        var key = "".concat(eventName, "_").concat(listenerName);
        if (globalListeners.has(key)) {
            throw new Error("Listener ".concat(listenerName, " has already registered for event ").concat(eventName));
        }
        if (Array.from(globalListeners.values()).some(function (value) { return value.listenerName === listenerName; })) {
            throw new Error("Listener name ".concat(listenerName, " is already in use"));
        }
        globalListeners.set(key, { eventName: eventName, listenerName: listenerName, listener: listener });
    };
    var unsubscribe = function (eventName) {
        var key = "".concat(eventName, "_").concat(listenerName);
        globalListeners.delete(key);
    };
    var unsubscribeAll = function () {
        globalListeners.forEach(function (value, key) {
            if (key.endsWith("_".concat(listenerName))) {
                globalListeners.delete(key);
            }
        });
    };
    React.useEffect(function () {
        if (initialEventName && initialListener) {
            subscribe(initialEventName, initialListener);
        }
        return function () {
            globalListeners.forEach(function (value, key) {
                if (key.endsWith("_".concat(listenerName))) {
                    globalListeners.delete(key);
                }
            });
        };
    }, [initialEventName, initialListener]);
    return { name: listenerName, emit: emit, subscribe: subscribe, unsubscribe: unsubscribe, unsubscribeAll: unsubscribeAll };
}

function useEventListener(eventName) {
    var _a = useEventEmitter("_emitter_".concat(UKey())), subscribe = _a.subscribe, unsubscribe = _a.unsubscribe;
    var _b = React.useState(null), eventResult = _b[0], setEventResult = _b[1];
    var eventListener = React.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setEventResult(args);
    }, []);
    React.useEffect(function () {
        subscribe(eventName, eventListener);
        return function () {
            unsubscribe(eventName);
        };
    }, [eventName, eventListener]);
    var stopListening = React.useCallback(function () {
        unsubscribe(eventName);
    }, [eventName]);
    var startListening = React.useCallback(function () {
        subscribe(eventName, eventListener);
    }, [eventName, eventListener]);
    return [eventResult, stopListening, startListening];
}

function useEyeDropper () {
}

function useFetch(url, options, callbacks, deps) {
    var _this = this;
    if (deps === void 0) { deps = []; }
    var _a = React.useState({
        data: null,
        loading: true,
        error: null,
    }), state = _a[0], setState = _a[1];
    var abortController = new AbortController();
    var opts = __assign(__assign({}, options), { signal: abortController.signal });
    var fetchData = React.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, fetch(url, opts)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    if (!abortController.signal.aborted) {
                        setState({ data: data, loading: false, error: null });
                        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onResolve) {
                            callbacks.onResolve(data);
                        }
                    }
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    if (!abortController.signal.aborted) {
                        setState({ data: null, loading: false, error: error_1 });
                        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onReject) {
                            callbacks.onReject(error_1);
                        }
                    }
                    return [3 /*break*/, 5];
                case 4:
                    if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFinally) {
                        callbacks.onFinally();
                    }
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [url, opts, callbacks]);
    React.useEffect(function () {
        fetchData();
        return function () {
            abortController.abort();
        };
    }, __spreadArray([fetchData], deps, true));
    return state;
}

var useForm = function (schema, formRef) {
    var formSchema = schema;
    var onSubmit = function (handler, validates) {
        return function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var fieldsTovalidate, formData;
            return __generator(this, function (_a) {
                e.preventDefault();
                fieldsTovalidate = validates;
                switch (typeof validates) {
                    case "boolean":
                        if (validates) {
                            fieldsTovalidate = undefined;
                        }
                        else {
                            fieldsTovalidate = [];
                        }
                        break;
                    case "string":
                        fieldsTovalidate = [validates];
                        break;
                    case "object":
                        fieldsTovalidate = fieldsTovalidate === null || fieldsTovalidate === void 0 ? void 0 : fieldsTovalidate.filter(function (field) {
                            return Object.keys(formSchema).includes(field);
                        });
                        break;
                }
                if (!formController.validates(fieldsTovalidate)) {
                    return [2 /*return*/];
                }
                formData = formController.gets();
                handler(formData);
                return [2 /*return*/];
            });
        }); };
    };
    var formController = {
        onSubmit: onSubmit,
        get: function (key, formData) {
            if (!formData) {
                formData = new FormData(formRef.current);
            }
            return formData.get(key);
        },
        set: function (key, value) {
            var _a, _b;
            if ("setter" in formSchema[key]) {
                (_b = (_a = formSchema[key]).setter) === null || _b === void 0 ? void 0 : _b.call(_a, value);
            }
        },
        sets: function (data) {
            Object.keys(data).forEach(function (key) {
                formController.set(key, data[key]);
            });
        },
        validate: function (key) {
            var validator = formSchema[key].validator;
            var value = formController.get(key);
            return new Promise(function (rs, rj) {
                if (value === undefined || value === null || "".concat(value).trim() === "") {
                    if (formSchema[key].required) {
                        console.warn("".concat(String(key), " is required"), "warning");
                        return rs(false);
                    }
                }
                if (validator) {
                    var error_1 = validator(value);
                    error_1
                        .then(function (v) {
                        if (v) {
                            console.warn(error_1, "warning");
                            return rs(false);
                        }
                        else {
                            return rs(true);
                        }
                    })
                        .catch(function (err) {
                        console.warn(error_1, "warning");
                        rs(false);
                    });
                    if (error_1) {
                        console.warn(error_1, "warning");
                        return false;
                    }
                }
                else {
                    rs(true);
                }
            });
        },
        validates: function (keys) { return __awaiter(void 0, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!keys) {
                            keys = Object.keys(formSchema);
                        }
                        if (!keys) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(keys.map(function (key) { return formController.validate(key); }))];
                    case 1:
                        results = _a.sent();
                        if (results.some(function (r) { return !r; })) {
                            return [2 /*return*/, Promise.resolve(false)];
                        }
                        else {
                            return [2 /*return*/, Promise.resolve(true)];
                        }
                    case 2: return [2 /*return*/, Promise.resolve(true)];
                    case 3: return [2 /*return*/];
                }
            });
        }); },
        gets: function (keys) {
            var data = new FormData(formRef.current);
            if (keys) {
                return keys.reduce(function (acc, key) {
                    acc[key] = formController.get(key, data);
                    return acc;
                }, {});
            }
            return Object.keys(formSchema).reduce(function (acc, key) {
                acc[key] = formController.get(key);
                return acc;
            }, {});
        },
        reset: function (keys) {
            if (keys) {
                keys.forEach(function (key) {
                    formController.set(key, undefined);
                });
                return;
            }
            Object.keys(formSchema).forEach(function (key) {
                formController.set(key, undefined);
            });
        },
    };
    return formController;
};

function useForceUpdate() {
    var _a = React.useState(0), set = _a[1];
    return function (callback) {
        set(function (pre) {
            callback === null || callback === void 0 ? void 0 : callback(pre);
            return pre + 1;
        });
    };
}

/**
 * ### Example
 * ```tsx
 * import React from 'react';
 * import { useGenerator } from './useGenerator';
 *
 * function* fetchData() {
 *   const response1 = yield fetch('/api/data1');
 *   const data1 = yield response1.json();
 *
 *   const response2 = yield fetch('/api/data2');
 *   const data2 = yield response2.json();
 *
 *   return [data1, data2];
 * }
 *
 * function MyComponent() {
 *   const { value, done, error } = useGenerator(fetchData);
 *
 *   if (error) {
 *     return <div>Error: {error.message}</div>;
 *   }
 *
 *   if (!done) {
 *     return <div>Loading...</div>;
 *   }
 *
 *   return (
 *     <div>
 *       <div>Data 1: {JSON.stringify(value[0])}</div>
 *       <div>Data 2: {JSON.stringify(value[1])}</div>
 *     </div>
 *   );
 * }
 *
 * export default MyComponent;
 * ```
 */
function useGenerator(generatorFn) {
    var _a = React.useState({
        value: undefined,
        done: false,
        error: null,
    }), state = _a[0], setState = _a[1];
    var execute = React.useCallback(function () {
        var generator = generatorFn();
        var handleResult = function (result) {
            if (result.done) {
                setState(function (prevState) { return (__assign(__assign({}, prevState), { done: true })); });
            }
            else {
                result.value
                    .then(function (value) { return setState({ value: value, done: false, error: null }); })
                    .catch(function (error) { return setState(function (prevState) { return (__assign(__assign({}, prevState), { error: error })); }); });
            }
        };
        var iterate = function (nextValue) {
            var result = generator.next(nextValue);
            handleResult(result);
        };
        iterate();
    }, [generatorFn]);
    execute();
    return state;
}

var createRoot$1 = function (parentDocument) {
    return {
        render: function (element) {
            ReactDOM.render(element, parentDocument);
        },
    };
};
if ("createRoot" in ReactDOM) {
    // Adapt to React 18
    createRoot$1 = ReactDOM.createRoot;
}
function useGuide(steps, callback, config) {
    var _a = React.useState(-1), step = _a[0], setStep = _a[1];
    React.useEffect(function () {
        var _a, _b;
        var currentStep = steps[step];
        // const rootDom = document.getElementById("root");
        var rootDom = document.body;
        var mask = document.createElement("div");
        mask.style.position = "fixed";
        mask.style.top = "0";
        mask.style.right = "0";
        mask.style.bottom = "0";
        mask.style.left = "0";
        mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        mask.style.zIndex = "999";
        mask.style.pointerEvents = "auto";
        var maskConfig = config === null || config === void 0 ? void 0 : config.maskConfig;
        if (maskConfig) {
            if (maskConfig.backgroundColor) {
                mask.style.backgroundColor = maskConfig.backgroundColor;
            }
            if (maskConfig.opacity) {
                mask.style.opacity = maskConfig.opacity.toString();
            }
            if (maskConfig.zIndex) {
                mask.style.zIndex = maskConfig.zIndex.toString();
            }
        }
        if (currentStep && rootDom) {
            rootDom.appendChild(mask);
        }
        (_a = currentStep === null || currentStep === void 0 ? void 0 : currentStep.ids) === null || _a === void 0 ? void 0 : _a.forEach(function (id) {
            var element = document.getElementById(id);
            if (element) {
                element.style.zIndex = "1000";
            }
        });
        var renders = (_b = currentStep === null || currentStep === void 0 ? void 0 : currentStep.renders) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
            var id = _a.id, render = _a.render, containerStyle = _a.containerStyle, containerClassName = _a.containerClassName;
            var parent = document.getElementById(id);
            var container = document.createElement("div");
            container.style.zIndex = "1001";
            container.style.position = "relative";
            if (config === null || config === void 0 ? void 0 : config.containerStyle) {
                Object.keys(config.containerStyle).forEach(function (key) {
                    // @ts-ignore
                    container.style[key] = config.containerStyle[key];
                });
            }
            if (containerStyle) {
                Object.keys(containerStyle).forEach(function (key) {
                    // @ts-ignore
                    container.style[key] = containerStyle[key];
                });
            }
            if (config === null || config === void 0 ? void 0 : config.containerClassName) {
                container.className = config.containerClassName;
            }
            if (containerClassName) {
                container.className = containerClassName;
            }
            // 默认位于父元素的最后
            parent === null || parent === void 0 ? void 0 : parent.appendChild(container);
            if (container && parent) {
                // @ts-ignore
                createRoot$1(container).render(render(id, currentStep.name, currentStep.data, currentStep.ids), container);
                return container;
            }
        });
        callback === null || callback === void 0 ? void 0 : callback(step, currentStep);
        return function () {
            if (currentStep && rootDom) {
                rootDom.removeChild(mask);
            }
            renders === null || renders === void 0 ? void 0 : renders.forEach(function (elem) { return elem === null || elem === void 0 ? void 0 : elem.remove(); });
        };
    }, [step, steps]);
    var start = React.useCallback(function () { return setStep(0); }, []);
    var stop = React.useCallback(function () { return setStep(-1); }, []);
    var next = React.useCallback(function () { return setStep(function (prev) { return Math.min(prev + 1, steps.length - 1); }); }, [steps]);
    var last = React.useCallback(function () { return setStep(function (prev) { return Math.max(prev - 1, 0); }); }, []);
    var go = React.useCallback(function (step) { return setStep(Math.max(0, Math.min(step, steps.length - 1))); }, [steps]);
    return [step, { start: start, stop: stop, next: next, last: last, go: go }];
}

function useHover(onHover) {
    var ref = React.useRef(null);
    React.useEffect(function () {
        var handleHover = function (event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onHover();
            }
        };
        document.addEventListener("mouseover", handleHover);
        return function () {
            document.removeEventListener("mouseover", handleHover);
        };
    }, [onHover]);
    return ref;
}

function useIndexedDB(dbName, version, upgradeCallback) {
    var _a = React.useState({ db: null, error: null }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        var request = indexedDB.open(dbName, version);
        request.onupgradeneeded = function (event) {
            upgradeCallback(request.result);
        };
        request.onsuccess = function () {
            setState({ db: request.result, error: null });
        };
        request.onerror = function () {
            setState({ db: null, error: request.error });
        };
    }, [dbName, version, upgradeCallback]);
    return state;
}

function useKeyPress(targetKey) {
    var _a = React.useState(false), keyPressed = _a[0], setKeyPressed = _a[1];
    function downHandler(_a) {
        var key = _a.key;
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    var upHandler = function (_a) {
        var key = _a.key;
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    React.useEffect(function () {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return function () {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, [targetKey]);
    return keyPressed;
}

/**
 *
 * @example
 * ```ts
 * const { module, loading, error } = useLazy(() => import('./MyModule'));
 * ```
 */
function useLazy(importFunction) {
    var _a = React.useState(null), module = _a[0], setModule = _a[1];
    var _b = React.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = React.useState(null), error = _c[0], setError = _c[1];
    React.useEffect(function () {
        importFunction()
            .then(function (mod) {
            setModule(mod);
            setLoading(false);
        })
            .catch(function (err) {
            setError(err);
            setLoading(false);
        });
    }, [importFunction]);
    return { module: module, loading: loading, error: error };
}

var LazySourceBuilder = function (src, loaded, error) {
    var _src = src;
    _src.loaded = loaded;
    _src.error = error;
    return _src;
};
var useLazyImage = function (src, defaultSrc, errorSrc, actions) {
    var _a, _b, _c, _d, _e, _f, _g;
    var $src = "";
    var $defaultSrc = "";
    var $errorSrc = "";
    var $actions = {};
    if (typeof src === "object") {
        $src = (_a = src.src) !== null && _a !== void 0 ? _a : "";
        $defaultSrc = (_b = src.defaultSrc) !== null && _b !== void 0 ? _b : "";
        $errorSrc = (_c = src.errorSrc) !== null && _c !== void 0 ? _c : "";
        $actions = (_d = src.actions) !== null && _d !== void 0 ? _d : {};
    }
    else if (typeof src === "string" && typeof defaultSrc !== "object") {
        $src = src;
        $defaultSrc = defaultSrc !== null && defaultSrc !== void 0 ? defaultSrc : "";
        $errorSrc = errorSrc !== null && errorSrc !== void 0 ? errorSrc : "";
        $actions = actions !== null && actions !== void 0 ? actions : {};
    }
    else if (typeof src === "string" && typeof defaultSrc === "object") {
        $src = src;
        $defaultSrc = (_e = defaultSrc.src) !== null && _e !== void 0 ? _e : "";
        $errorSrc = (_f = defaultSrc.errorSrc) !== null && _f !== void 0 ? _f : "";
        $actions = (_g = defaultSrc.actions) !== null && _g !== void 0 ? _g : {};
    }
    var _h = React.useState(LazySourceBuilder($defaultSrc)), source = _h[0], setSource = _h[1];
    React.useEffect(function () {
        var img = new Image();
        img.src = $src;
        img.onload = function () {
            var _a;
            setSource(LazySourceBuilder($src, true, false));
            (_a = actions === null || actions === void 0 ? void 0 : actions.onLoad) === null || _a === void 0 ? void 0 : _a.call(actions, true);
        };
        img.onerror = function () {
            var _a, _b;
            setSource(LazySourceBuilder((_a = ($errorSrc || $defaultSrc)) !== null && _a !== void 0 ? _a : "", false, true));
            (_b = $actions === null || $actions === void 0 ? void 0 : $actions.onError) === null || _b === void 0 ? void 0 : _b.call($actions, true);
        };
    }, [$src]);
    return source;
};

function useList(initialItems, dependencies, options) {
    var _a, _b;
    var _c = React.useState(
    // @ts-ignore
    __spreadArray([], initialItems, true).map(function (item) {
        var _a;
        return (__assign(__assign({}, item), (_a = {}, _a[options.idKey || "_id"] = UKey(), _a)));
    })), items = _c[0], setItems = _c[1];
    var _d = React.useState(__spreadArray([], initialItems, true)), originalItems = _d[0], setOriginalItems = _d[1];
    React.useEffect(function () {
        // 去除 唯一id 再设置
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[options.idKey || "_id"]) {
                delete _item[options.idKey || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], newItems, true));
    }, dependencies);
    var save = React.useCallback(function () {
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[options.idKey || "_id"]) {
                delete _item[options.idKey || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], newItems, true));
    }, [items]);
    var addItem = React.useCallback(function (item) {
        // @ts-ignore
        setItems(function (prevItems) {
            var _a;
            return __spreadArray(__spreadArray([], prevItems, true), [__assign(__assign({}, item), (_a = {}, _a[options.idKey || "_id"] = UKey(), _a))], false);
        });
    }, [options.idKey]);
    var removeItem = React.useCallback(function (id) {
        if (id === void 0 || id === null) {
            throw new Error("idKey is required to removeItem in list");
        }
        setItems(function (prevItems) { return prevItems.filter(function (item) { return item[options.idKey || "_id"] !== id; }); });
    }, [options.idKey]);
    var removeItems = React.useCallback(function (ids) {
        ids.forEach(function (id) {
            removeItem(id);
        });
    }, [options.idKey]);
    var reset = React.useCallback(function (items) {
        if (items !== void 0) {
            setItems(
            // @ts-ignore
            __spreadArray([], items, true).map(function (item) {
                var _a;
                return (__assign(__assign({}, item), (_a = {}, _a[options.idKey || "_id"] = UKey(), _a)));
            }));
            return;
        }
        setItems(
        // @ts-ignore
        __spreadArray([], originalItems, true).map(function (item) {
            var _a;
            return (__assign(__assign({}, item), (_a = {}, _a[options.idKey || "_id"] = UKey(), _a)));
        }));
    }, [originalItems]);
    var updateItems = React.useCallback(function (newItems) {
        if (newItems.some(function (item) { return [void 0, null].includes(item[options.idKey || "_id"]); })) {
            throw new Error("idKey is required to updateItem in list");
        }
        // @ts-ignore
        setItems(newItems);
    }, []);
    var sortedItems = __spreadArray([], items, true).sort(options.sortFn || (function () { return 0; }));
    var filteredItems = sortedItems.filter(options.filterFn || (function () { return true; }));
    var _e = React.useState(1), currentPage = _e[0], setCurrentPage = _e[1];
    var totalPage = React.useMemo(function () {
        var _a;
        return Math.max(1, Math.ceil(filteredItems.length / ((_a = options === null || options === void 0 ? void 0 : options.itemsPerPage) !== null && _a !== void 0 ? _a : 10)));
    }, [filteredItems.length, options.itemsPerPage]);
    var goToPage = React.useCallback(function (page) {
        if (page >= 1 && page <= totalPage) {
            setCurrentPage(page);
        }
    }, [totalPage]);
    var goLastPage = React.useCallback(function () {
        if (currentPage > 1) {
            setCurrentPage(function (page) { return page - 1; });
        }
    }, [currentPage]);
    var goNextPage = React.useCallback(function () {
        if (currentPage < totalPage) {
            setCurrentPage(function (page) { return page + 1; });
        }
    }, [currentPage, totalPage]);
    var pagedItems = filteredItems.slice((currentPage - 1) * ((_a = options.itemsPerPage) !== null && _a !== void 0 ? _a : 10), currentPage * ((_b = options.itemsPerPage) !== null && _b !== void 0 ? _b : 10));
    return [
        items,
        {
            updateItems: updateItems,
            addItem: addItem,
            removeItem: removeItem,
            removeItems: removeItems,
            save: save,
            reset: reset,
            filteredItems: filteredItems,
            originalItems: originalItems,
            render: function () {
                return (filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.length)
                    ? filteredItems.map(function (item, idx, array) {
                        return options.renderFn ? (jsxRuntime.jsx(React.Fragment, { children: options.renderFn(item, idx, array) }, item[options.idKey || "_id"])) : null;
                    })
                    : options.renderNoData
                        ? typeof options.renderNoData === "function"
                            ? options.renderNoData()
                            : options.renderNoData
                        : null;
            },
            pagedItems: pagedItems,
            currentPage: currentPage,
            totalPage: totalPage,
            goToPage: goToPage,
            goLastPage: goLastPage,
            goNextPage: goNextPage,
        },
    ];
}

function formatLoadingValue(value, zeroFalse) {
    if (zeroFalse === void 0) { zeroFalse = false; }
    if (value !== 0 || !zeroFalse) {
        return value;
    }
    return value === 0 ? false : value;
}
function formatLoadingState(values, zeroFalse) {
    if (values === void 0) { values = {}; }
    if (zeroFalse === void 0) { zeroFalse = false; }
    if (!zeroFalse) {
        return values;
    }
    var newValues = __assign({}, values);
    Object.keys(newValues).forEach(function (key) {
        newValues[key] = formatLoadingValue(newValues[key], zeroFalse);
    });
    return newValues;
}
var setTypeOptions = ["spread", "override"];
/**
 * #### 返回一个数组
 * - 0 loadings
 * - 1 setLoading
 * - 2 onLoading
 * - 3 unLoading
 * - 4 plusLoading
 * - 5 minusLoading
 */
// @ts-ignore
var useLoading = function (loadingMap, options) {
    if (options === void 0) { options = {
        setType: "override",
        zeroFalse: true,
    }; }
    var _a = React.useState(loadingMap), loading = _a[0], _setLoading = _a[1];
    var setLoading = function (args1, value) {
        if (value === void 0) { value = true; }
        if (typeof args1 === "object") {
            if (setTypeOptions.includes(value)) {
                if (value === "spread") {
                    _setLoading(function (pre) {
                        return formatLoadingState(__assign(__assign({}, pre), args1), options.zeroFalse);
                    });
                }
                else {
                    _setLoading(formatLoadingState(args1, options.zeroFalse));
                }
            }
            else {
                _setLoading(formatLoadingState(args1, options.zeroFalse));
            }
            return;
        }
        else if (typeof args1 === "function") {
            if (setTypeOptions.includes(value)) {
                if (value === "spread") {
                    _setLoading(function (pre) {
                        return formatLoadingState(__assign(__assign({}, pre), args1(pre)), options.zeroFalse);
                    });
                }
                else {
                    _setLoading(formatLoadingState(args1, options.zeroFalse));
                }
            }
            else {
                _setLoading(formatLoadingState(args1, options.zeroFalse));
            }
            return;
        }
        else {
            var key_1 = args1;
            if (typeof value === "function") {
                _setLoading(function (pre) {
                    var _a;
                    return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key_1] = value(pre[key_1]), _a)), options.zeroFalse);
                });
            }
            else {
                _setLoading(function (pre) {
                    var _a;
                    return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key_1] = value, _a)), options.zeroFalse);
                });
            }
        }
    };
    var onLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = 1, _a)), options.zeroFalse);
        });
    };
    var unLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = 0, _a)), options.zeroFalse);
        });
    };
    var plusLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = pre[key] + 1, _a)), options.zeroFalse);
        });
    };
    var minusLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = pre[key] - 1, _a)), options.zeroFalse);
        });
    };
    var returned = [
        loading,
        setLoading,
        onLoading,
        unLoading,
        plusLoading,
        minusLoading,
    ];
    returned.loading = loading;
    returned.setLoading = setLoading;
    returned.onLoading = onLoading;
    returned.unLoading = unLoading;
    returned.plusLoading = plusLoading;
    returned.minusLoading = minusLoading;
    return returned;
};

// 全局的事件监听器
var listeners$1 = new Set();
window.addEventListener("storage", function () {
    listeners$1.forEach(function (listener) { return listener(); });
});
function useLocalStorage(key, initialValue) {
    var _a = React.useState(function () {
        try {
            if (!key)
                return initialValue;
            var keys = Array.isArray(key) ? key : [key];
            var item = keys.map(function (k) { return window.localStorage.getItem(k); });
            return item.every(function (i) { return i !== null; })
                ? JSON.parse(item.join(""))
                : initialValue;
        }
        catch (error) {
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = function (value) {
        try {
            setStoredValue(value);
            if (key) {
                var keys = Array.isArray(key) ? key : [key];
                keys.forEach(function (k) {
                    return window.localStorage.setItem(k, JSON.stringify(value));
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    React.useEffect(function () {
        var handleStorageChange = function (e) {
            if (key && (Array.isArray(key) ? key : [key]).includes(e.key || "")) {
                setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
            }
        };
        // 在组件挂载时注册回调函数
        listeners$1.add(handleStorageChange);
        return function () {
            // 在组件卸载时注销回调函数
            listeners$1.delete(handleStorageChange);
        };
    }, [key, initialValue]);
    return [storedValue, setValue];
}

function useMediaQuery(query) {
    var _a = React.useState(window.matchMedia(query).matches), matches = _a[0], setMatches = _a[1];
    React.useEffect(function () {
        var mediaQueryList = window.matchMedia(query);
        var documentChangeHandler = function () { return setMatches(mediaQueryList.matches); };
        mediaQueryList.addListener(documentChangeHandler);
        return function () {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);
    return matches;
}

function isEqual(a, b) {
    if (a === b)
        return true;
    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();
    if (a instanceof RegExp && b instanceof RegExp)
        return a.toString() === b.toString();
    if (a instanceof Function && b instanceof Function)
        return a.toString() === b.toString();
    if (a instanceof Map && b instanceof Map)
        return isEqual(Array.from(a), Array.from(b));
    if (a instanceof Set && b instanceof Set)
        return isEqual(Array.from(a), Array.from(b));
    if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
        return a === b;
    if (typeof a === "object" && typeof b === "object") {
        if (a.prototype !== b.prototype)
            return false;
        return Object.is(a, b);
    }
    return false;
}

/**
 * ### useMemento
 * #### Parameters
 * - initialState - The initial state.
 * - config - The config.
 * @returns [state, setState, mementoManager]
 */
var useMemento = function (initialState, config) {
    var _a = React.useState({
        idKey: UKey(),
        data: initialState,
    }), state = _a[0], setState = _a[1];
    var _b = React.useState([]), history = _b[0], setHistory = _b[1];
    var _c = React.useState([]), mementos = _c[0], setMementos = _c[1];
    var historySize = React.useMemo(function () {
        return typeof (config === null || config === void 0 ? void 0 : config.historySize) === "number"
            ? config.historySize
            : (config === null || config === void 0 ? void 0 : config.historySize) === void 0
                ? 10
                : (config === null || config === void 0 ? void 0 : config.historySize)
                    ? 10
                    : 0;
    }, [config === null || config === void 0 ? void 0 : config.historySize]);
    // When history size changed, slice the history to latest historySize.
    React.useEffect(function () {
        // 如果 historySize is not a integer, return error.
        if (historySize % 1 !== 0) {
            throw new Error("[react-hooks-kit][useMemento] historySize must be an integer");
        }
        if (historySize < 0) {
            throw new Error("[react-hooks-kit][useMemento] historySize must be a positive integer");
        }
        if (history.length > historySize) {
            setHistory(history.slice(-historySize));
        }
    }, [historySize]);
    var createMemento = function (name) {
        if (name === void 0) { name = null; }
        // If the current state is not in the history, that means it is a new stat and then add it to the history.
        if (!history.some(function (item) { return item.idKey === state.idKey; })) {
            setHistory(__spreadArray(__spreadArray([], history, true), [state], false));
        }
        setMementos(__spreadArray(__spreadArray([], mementos, true), [__assign(__assign({}, state), { name: name })], false));
    };
    var deleteMemento = function (idKey) {
        if (typeof idKey !== "number" && !idKey) {
            if (config === null || config === void 0 ? void 0 : config.strict) {
                throw new Error("[react-hooks-kit][useMemento] idKey is required to deleteMemento");
            }
            else {
                return console.error("[react-hooks-kit][useMemento] idKey is required to deleteMemento");
            }
        }
        if (typeof idKey === "number") {
            setMementos(mementos.filter(function (memento) { return memento.idKey !== idKey; }));
        }
        else {
            if (!Array.isArray(idKey)) {
                if (config === null || config === void 0 ? void 0 : config.strict) {
                    throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
                else {
                    return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
            }
            if (idKey.some(function (item) { return typeof item !== "number"; })) {
                if (config === null || config === void 0 ? void 0 : config.strict) {
                    throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
                else {
                    return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
            }
            setMementos(mementos.filter(function (memento) { return !idKey.includes(memento.idKey); }));
        }
    };
    var clearMementos = function () {
        setMementos([]);
    };
    var rollback = function () {
        var curIndex = history.findIndex(function (item) { return item.idKey === state.idKey; });
        if (curIndex < 0) {
            return setHistory(function (prev) {
                if (prev.length > 0) {
                    setState(prev[prev.length - 1]);
                    return __spreadArray(__spreadArray([], prev, true), [state], false);
                }
                return prev;
            });
        }
        if (curIndex > 0 && curIndex <= history.length - 1) {
            return setState(history[curIndex - 1]);
        }
    };
    var forward = function () {
        var curIndex = history.findIndex(function (item) { return item.idKey === state.idKey; });
        if (curIndex >= 0 && curIndex < history.length - 1) {
            return setState(history[curIndex + 1]);
        }
    };
    var goToHistory = function (idKey) {
        var historyItem = history.find(function (item) { return item.idKey === idKey; });
        if (historyItem) {
            setState(historyItem);
        }
        else {
            if (config === null || config === void 0 ? void 0 : config.strict) {
                throw new Error("[react-hooks-kit][useMemento] history with idKey ".concat(idKey, " not found"));
            }
            else {
                return console.error("[react-hooks-kit][useMemento] history with idKey ".concat(idKey, " not found"));
            }
        }
    };
    var goToMemento = function (idKey) {
        var memento = mementos.find(function (m) { return m.idKey === idKey; });
        if (memento) {
            setState(memento);
        }
        else {
            if (config === null || config === void 0 ? void 0 : config.strict) {
                throw new Error("[react-hooks-kit][useMemento] memento with idKey ".concat(idKey, " not found"));
            }
            else {
                return console.error("[react-hooks-kit][useMemento] memento with idKey ".concat(idKey, " not found"));
            }
        }
    };
    var deleteHistory = function (idKey) {
        if (typeof idKey !== "number" && !idKey) {
            if (config === null || config === void 0 ? void 0 : config.strict) {
                throw new Error("[react-hooks-kit][useMemento] idKey is required to deleteHistory");
            }
            else {
                return console.error("[react-hooks-kit][useMemento] idKey is required to deleteHistory");
            }
        }
        if (typeof idKey === "number") {
            setHistory(history.filter(function (item) { return item.idKey !== idKey; }));
        }
        else {
            if (!Array.isArray(idKey)) {
                if (config === null || config === void 0 ? void 0 : config.strict) {
                    throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
                else {
                    return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
            }
            if (idKey.some(function (item) { return typeof item !== "number"; })) {
                if (config === null || config === void 0 ? void 0 : config.strict) {
                    throw new Error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
                else {
                    return console.error("[react-hooks-kit][useMemento] idKey must be a number or an array of number");
                }
            }
            setHistory(history.filter(function (item) { return !idKey.includes(item.idKey); }));
        }
    };
    var clearHistory = function () {
        setHistory([]);
    };
    var calcNewState = function (newData, pre) {
        var newState;
        if (typeof newData !== "function") {
            newState = { idKey: UKey(), data: newData };
            if (isEqual(pre.data, newData)) {
                return {
                    idKey: pre.idKey,
                    data: newData,
                };
            }
        }
        else {
            var newDataFunc = newData;
            var newDataResult = newDataFunc(pre.data);
            newState = { idKey: UKey(), data: newDataResult };
            if (isEqual(pre.data, newDataResult)) {
                return {
                    idKey: pre.idKey,
                    data: newDataResult,
                };
            }
        }
        if (history.some(function (item) { return item.idKey === pre.idKey; })) {
            return newState;
        }
        setHistory(function (h) {
            if (history.length - 1 === historySize) {
                return __spreadArray(__spreadArray([], history.slice(1), true), [pre], false);
            }
            return __spreadArray(__spreadArray([], history, true), [pre], false);
        });
        return newState;
    };
    var setNewState = function (newData) {
        setState(function (pre) {
            return calcNewState(newData, pre);
        });
    };
    var clone = function (idKey) {
        var target = history.find(function (m) { return m.idKey === idKey; });
        if (target) {
            setNewState(target.data);
        }
        else {
            if (config === null || config === void 0 ? void 0 : config.strict) {
                throw new Error("[react-hooks-kit][useMemento] target to clone from idKey ".concat(idKey, " not found"));
            }
            else {
                return console.error("[react-hooks-kit][useMemento] target to clone from idKey ".concat(idKey, " not found"));
            }
        }
    };
    var clear = function () {
        setState({ idKey: UKey(), data: null });
        setHistory([]);
        setMementos([]);
    };
    return [
        state.data,
        setNewState,
        {
            idKey: state.idKey,
            createMemento: createMemento,
            deleteMemento: deleteMemento,
            clearMementos: clearMementos,
            rollback: rollback,
            forward: forward,
            goToHistory: goToHistory,
            goToMemento: goToMemento,
            deleteHistory: deleteHistory,
            clearHistory: clearHistory,
            clone: clone,
            clear: clear,
            history: history,
            mementos: mementos,
        },
    ];
};

function cloneDeep(target, map) {
    if (map === void 0) { map = new Map(); }
    if (typeof target === 'object' && target !== null) {
        var cloneTarget_1 = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget_1);
        var keys_1 = Array.isArray(target) ? undefined : Object.keys(target);
        // @ts-ignore
        forEach(keys_1 || target, function (value, key) {
            if (keys_1) {
                key = value;
            }
            // @ts-ignore
            cloneTarget_1[key] = cloneDeep(target[key], map);
        });
        // @ts-ignore
        return cloneTarget_1;
    }
    else {
        return target;
    }
}
function forEach(array, iteratee) {
    var index = -1;
    var length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function setTo(obj, path, val, deepClone) {
    if (deepClone === void 0) { deepClone = false; }
    var keys = [];
    if (!Array.isArray(path)) {
        switch (typeof path) {
            case "string":
                keys = path.split(".");
                break;
            case "number":
                keys = [path];
                break;
            case "symbol":
                keys = [path.toString()];
                break;
            default:
                throw new Error("Invalid path");
        }
    }
    else if (Array.isArray(path)) {
        keys = path;
    }
    if (deepClone) {
        var newObj_1 = cloneDeep(obj);
        var current = newObj_1;
        for (var i = 0; i < keys.length - 1; i++) {
            // @ts-ignore
            current = current[keys[i]];
        }
        // @ts-ignore
        current[keys[keys.length - 1]] = val;
        return newObj_1;
    }
    var lastKey = keys.pop();
    var temp = obj;
    keys.forEach(function (key) {
        if (!temp[key])
            temp[key] = {};
        temp = temp[key];
    });
    var newObj = __assign({}, obj);
    var temp2 = newObj;
    keys.forEach(function (key) {
        temp2 = temp2[key];
    });
    if (lastKey || lastKey === 0)
        temp2[lastKey] = val;
    return newObj;
}

/**
 * **useMeta** is a React Hook that returns a meta state and a function to set the meta state.
 * ### Parameters
 * - initialState: `T extends object` - The initial state object of the meta state.
 * - deepSet : `boolean?` - Whether to use deep clone when setting the meta state. Defaults to `false`.
 * ---
 * ### Return (Array)
 * - [0] state
 * - [1] stateSetter - there are four overloads:
 *   + (key: K, value?: PathValue<T, K>): void;
 *   + (key: K, setAction: (pre: PathValue<T, K>, preObj: T) => PathValue<T, K>): void;
 *   + (state: T): void;
 *   + (setAction: (pre: T) => T): void;
 * ---
 * ### Usage
 * ```tsx
 * const [meta, setMeta] = useMeta({
 *   name: "John",
 *   age: 18,
 *   more: { height: 180 }
 * });
 *
 * useEffect(() => {
 *   setMeta("name", "Evan");
 *   setMeta("age", 20);
 *   setMeta("age", (pre) => pre + 1);
 *   setMeta("more.height", 190);
 *   setMeta({ name: "Evan", age: 20, more: { height: 180 } });
 *   setMeta((pre) => ({ ...pre, name: "Evan", age: 20 }));
 * }, []);
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useMeta } from "@evanpatchouli/react-hooks-kit";
 *
 * const View = () => {
 *   const [obj, setObj] = useMeta({
 *     name: "John",
 *     age: 20,
 *     more: {
 *       address: "Taipei",
 *       score: 100,
 *     },
 *     messi: {
 *       game: {
 *         wordCup: {
 *           win: true,
 *         },
 *       },
 *     },
 *   });
 *   return (
 *     <>
 *       <Button
 *         onClick={() => {
 *           setObj("more.score", Math.random() * 100);
 *         }}
 *       >
 *         obj.age++
 *       </Button>
 *       <Button
 *         onClick={() => {
 *           obj.more.score++;
 *         }}
 *       >
 *         obj.more.score++ [lazy]
 *       </Button>
 *       <Button
 *         onClick={() => {
 *           obj.messi.game.wordCup.win = !obj.messi.game.wordCup.win;
 *         }}
 *       >
 *         (!obj.messi.game.wordCup.win) [lazy]
 *       </Button>
 *       <Code theme="oneLight" lang="json">
 *         {JSON.stringify(obj, null, 2)}
 *       </Code>
 *     </>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useMeta instead of useState?
 * - A: Because useMeta makes it easier to set deep properties of the state.
 * ---
 * - Q: What's the difference of deepSet or not?
 * - A: When deepSet is true, the state will be deep cloned when setting the state, otherwise it will be shallow cloned. Deepclone is slower than shallowclone, but it is safer.
 */
var useMeta = function (initialState, deepSet) {
    var _a = React.useState(initialState), meta = _a[0], setState = _a[1];
    var setMeta = function (args1, value) {
        if (value === void 0) { value = undefined; }
        if (typeof args1 === "object") {
            setState(function (pre) { return (__assign(__assign({}, pre), args1)); });
            return;
        }
        else if (typeof args1 === "function") {
            setState(function (pre) { return args1(pre); });
            return;
        }
        else {
            var key_1 = args1;
            if (typeof value === "function") {
                setState(function (pre) {
                    return setTo(pre, key_1, value(pre[key_1], pre), deepSet);
                });
            }
            else {
                setState(function (pre) { return setTo(pre, key_1, value, deepSet); });
            }
        }
    };
    return [meta, setMeta];
};

var useMixRef = function (refs) {
    var setRefs = React.useCallback(function (node) {
        // Refs expect a DOM node. Pass it if it exists.
        if (node) {
            refs.forEach(function (ref) {
                if (typeof ref === "function") {
                    ref(node);
                }
                else if (ref) {
                    // @ts-ignore
                    ref.current = node;
                }
            });
        }
    }, []);
    return setRefs;
};

var useMount = function (callback, arg2, arg3) {
    if (arg3 === void 0) { arg3 = []; }
    var deps = [];
    var onError;
    if (Array.isArray(arg2)) {
        deps = arg2;
    }
    else if (typeof arg2 === "function") {
        onError = arg2;
        deps = arg3;
    }
    React.useEffect(function () {
        try {
            var cleanup = callback();
            return cleanup instanceof Function ? cleanup : undefined;
        }
        catch (error) {
            if (onError) {
                onError(error);
            }
            else {
                console.error("useMount callback error:", error);
            }
        }
    }, deps);
};

function useMousePosition(trigger) {
    if (trigger === void 0) { trigger = "mousemove"; }
    var _a = React.useState({ x: null, y: null }), mousePosition = _a[0], setMousePosition = _a[1];
    React.useEffect(function () {
        var updateMousePosition = function (ev) {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener(trigger, updateMousePosition);
        return function () {
            window.removeEventListener(trigger, updateMousePosition);
        };
    }, [trigger]);
    return mousePosition;
}

function throttle(fn, interval, options) {
    if (interval === void 0) { interval = 200; }
    if (options === void 0) { options = { leading: true, trailing: false }; }
    // 1.记录上一次的开始时间
    var leading = options.leading, trailing = options.trailing, callback = options.callback;
    var lastTime = 0;
    var timer = null;
    // 2.事件触发时, 真正执行的函数
    var _throttle = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            // 2.1.获取当前事件触发时的时间
            var nowTime = new Date().getTime();
            if (!lastTime && !leading)
                lastTime = nowTime;
            // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
            var remainTime = interval - (nowTime - lastTime);
            if (remainTime <= 0) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                // 2.3.真正触发函数
                // @ts-ignore
                var result = fn.apply(_this, args);
                // @ts-ignore
                if (callback)
                    callback(result);
                resolve(result);
                // 2.4.保留上次触发的时间
                lastTime = nowTime;
                return;
            }
            if (trailing && !timer) {
                timer = setTimeout(function () {
                    timer = null;
                    lastTime = !leading ? 0 : new Date().getTime();
                    // @ts-ignore
                    var result = fn.apply(_this, args);
                    // @ts-ignore
                    if (callback)
                        callback(result);
                    resolve(result);
                }, remainTime);
            }
        });
    };
    _throttle.cancel = function () {
        if (timer)
            clearTimeout(timer);
        timer = null;
        lastTime = 0;
    };
    return _throttle;
}
var emptyFn = function () { };
function useThrottle(fn, interval, options) {
    if (interval === void 0) { interval = 200; }
    if (options === void 0) { options = { leading: true, trailing: false }; }
    if (typeof fn !== "function") {
        throw new Error("fn must be a function");
    }
    if (typeof interval !== "number") {
        throw new Error("interval must be a number");
    }
    if (typeof options !== "object") {
        throw new Error("options must be a object");
    }
    if (options.leading === false && options.trailing === false) {
        throw new Error("options.leading and options.trailing cannot be false at the same time");
    }
    if (options.callback && typeof options.callback !== "function") {
        throw new Error("options.callback must be a function");
    }
    var throttleFn = React.useMemo(function () {
        if (interval < 0) {
            return emptyFn;
        }
        if (interval === 0) {
            return fn;
        }
        return throttle(fn, interval, options);
    }, [fn, interval, options]);
    return throttleFn;
}

/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
function useNetworkStatus(throttleInterval) {
    var _a = React.useState({
        online: navigator.onLine,
        // @ts-ignore
        downlink: navigator.connection ? navigator.connection.downlink : 0,
        // @ts-ignore
        uplink: navigator.connection ? navigator.connection.uplink : 0,
    }), status = _a[0], setStatus = _a[1];
    var throttledUpdateStatus = useThrottle(function () {
        if ((throttleInterval !== null && throttleInterval !== void 0 ? throttleInterval : 0) < 17) {
            console.warn("throttleInterval is suggested to be greater than 16.67ms to avoid too much re-rendering");
        }
        if (!navigator.onLine) {
            setStatus({
                online: false,
                downlink: 0,
                uplink: 0,
                effectiveType: void 0,
                rtt: void 0,
            });
            return;
        }
        // @ts-ignore
        console.log("navigator.connection", navigator.connection);
        setStatus({
            online: navigator.onLine,
            // @ts-ignore
            downlink: navigator.connection ? navigator.connection.downlink : 0,
            // @ts-ignore
            uplink: navigator.connection ? navigator.connection.uplink : 0,
            // @ts-ignore
            effectiveType: navigator.connection
                ? // @ts-ignore
                    navigator.connection.effectiveType
                : void 0,
            // @ts-ignore
            rtt: navigator.connection ? navigator.connection.rtt : void 0,
        });
    }, throttleInterval !== null && throttleInterval !== void 0 ? throttleInterval : 0);
    React.useEffect(function () {
        window.addEventListener("online", throttledUpdateStatus);
        window.addEventListener("offline", throttledUpdateStatus);
        // @ts-ignore
        if (navigator.connection) {
            // @ts-ignore
            navigator.connection.addEventListener("change", throttledUpdateStatus);
        }
        return function () {
            window.removeEventListener("online", throttledUpdateStatus);
            window.removeEventListener("offline", throttledUpdateStatus);
            // @ts-ignore
            if (navigator.connection) {
                // @ts-ignore
                navigator.connection.removeEventListener("change", throttledUpdateStatus);
            }
        };
    }, [throttledUpdateStatus]);
    return status;
}

function useOverflow() {
    var ref = React.useRef(null);
    var _a = React.useState(false), isOverflowing = _a[0], setIsOverflowing = _a[1];
    React.useEffect(function () {
        var checkOverflow = function () {
            if (ref.current) {
                var isOverflow = ref.current.offsetWidth < ref.current.scrollWidth || ref.current.offsetHeight < ref.current.scrollHeight;
                setIsOverflowing(isOverflow);
            }
        };
        window.addEventListener("resize", checkOverflow);
        checkOverflow();
        return function () {
            window.removeEventListener("resize", checkOverflow);
        };
    }, []);
    return [ref, isOverflowing];
}

function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}

function usePromise(promiseFn, callbacksOrDeps, deps) {
    var callbacks = {};
    if (Array.isArray(callbacksOrDeps)) {
        deps = callbacksOrDeps;
    }
    else if (callbacksOrDeps) {
        callbacks = callbacksOrDeps;
    }
    var _a = React.useState({
        status: "idle",
        data: null,
        error: null,
    }), state = _a[0], setState = _a[1];
    var abortController = new AbortController();
    var execute = React.useCallback(function () {
        setState({ status: "pending", data: null, error: null });
        promiseFn()
            .then(function (data) {
            if (!abortController.signal.aborted) {
                setState({ status: "resolved", data: data, error: null });
                if (callbacks.onResolve) {
                    callbacks.onResolve(data);
                }
            }
        })
            .catch(function (error) {
            if (!abortController.signal.aborted) {
                setState({ status: "rejected", data: null, error: error });
                if (callbacks.onReject) {
                    callbacks.onReject(error);
                }
            }
        })
            .finally(function () {
            if (callbacks.onFinally) {
                callbacks.onFinally();
            }
        });
    }, [promiseFn, callbacks]);
    React.useEffect(function () {
        execute();
        return function () {
            abortController.abort();
        };
    }, __spreadArray([execute], (deps || []), true));
    /**
     * Abort the promise
     */
    var abort = function () {
        abortController.abort();
    };
    return [state, abort];
}

/**
 * ### useRaf
 * `useRaf` is a custom React Hook that uses the browser's `requestAnimationFrame` API to execute a callback function on each animation frame. This hook is primarily used for creating smooth animations or continuous dynamic updates.
 *
 * ---
 * #### Parameters
 * - `callback` - A callback function that is called on each animation frame. This function receives a parameter that represents the time from the start of the page load to when this callback is executed.
 *
 * ---
 * #### Return
 * - `void`
 *
 * ---
 * #### Example
 * ```tsx
 * import { useRaf } from "react-use";
 * const Demo = () => {
 *  useRaf((time) => {
 *   console.log(time);
 * });
 * return null;
 * };
 * ```
 *
 * ---
 * #### FAQs
 * - What is `requestAnimationFrame`?
 * + `requestAnimationFrame` is a function provided by the browser that is used to call a specific function before the next redraw — this is the best time to perform animations.
 */
var useRaf = function (callback) {
    var callbackRef = React.useRef(callback);
    var frameRef = React.useRef();
    React.useEffect(function () {
        callbackRef.current = callback;
    }, [callback]);
    React.useEffect(function () {
        var loop = function (time) {
            frameRef.current = requestAnimationFrame(loop);
            callbackRef.current(time);
        };
        frameRef.current = requestAnimationFrame(loop);
        // 在组件卸载时取消动画帧
        return function () {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);
};

var useRafState = function (initialState) {
    var frame = React.useRef(0);
    var _a = React.useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = React.useCallback(function (value) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
            setState(function (prevState) {
                return typeof value === "function"
                    ? value(prevState)
                    : value;
            });
        });
    }, []);
    return [state, setRafState];
};

function useProtect(initialData) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    var _a = React.useState(initialData), data = _a[0], setData = _a[1];
    var messages = React.useMemo(function () {
        return conditions
            .filter(function (condition) { return (typeof condition === "function" ? condition(data, data) : condition); })
            .map(function (result) { return (typeof result === "string" ? result : "Data is protected and cannot be modified."); });
    }, [JSON.stringify(data), conditions]);
    var updateData = function (newData) {
        if (messages.length) {
            messages.forEach(function (msg) {
                throw new Error(msg);
            });
        }
        if (typeof newData === "function") {
            // @ts-ignore
            newData = newData(data);
        }
        if (isEqual(data, newData))
            return;
        else {
            if (conditions.length) {
                conditions.forEach(function (condition) {
                    if (typeof condition === "function") {
                        // @ts-ignore
                        var result = condition(data, newData);
                        if (result) {
                            switch (typeof result) {
                                case "string":
                                    throw new Error(result);
                                case "boolean":
                                    throw new Error("Data is protected and cannot be modified.");
                            }
                        }
                    }
                });
            }
            setData(newData);
        }
    };
    return [data, updateData];
}

// 创建一个外部数组来存储所有的回调函数
var callbacks = [];
var useScroll = function (callback) {
    var _a = React.useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    var handleScroll = function () {
        var newPosition = {
            x: window.scrollX,
            y: window.scrollY,
        };
        setPosition(newPosition);
        // 遍历 callbacks 数组并调用每个回调函数
        callbacks.forEach(function (cb) { return cb(newPosition); });
    };
    React.useEffect(function () {
        if (callback) {
            // 将回调函数添加到 callbacks 数组
            callbacks.push(callback);
        }
        window.addEventListener("scroll", handleScroll, { passive: true });
        return function () {
            window.removeEventListener("scroll", handleScroll);
            if (callback) {
                // 在组件卸载时，移除该次调用注册的回调函数
                var index = callbacks.indexOf(callback);
                if (index > -1) {
                    callbacks.splice(index, 1);
                }
            }
        };
    }, [callback]);
    return position;
};

// @ts-ignore
var Reactive = /** @class */ (function () {
    function Reactive(obj, fsr) {
        var instance = new Proxy(obj, {
            // @ts-ignore
            get: function (target, prop) {
                var _a;
                return (_a = target[prop]) === null || _a === void 0 ? void 0 : _a.value;
            },
            // @ts-ignore
            set: function (target, prop, value) {
                if (!isEqual(target[prop]["value"], value)) {
                    var update = function () {
                        target[prop]["value"] = value; // unwrap(deProxy(target))
                        fsr === null || fsr === void 0 ? void 0 : fsr();
                    };
                    update();
                    // requestAnimationFrame(update);
                }
                return true;
            },
        });
        instance.toString = function () {
            return "[object Object]";
        };
        return instance;
    }
    return Reactive;
}());
function deepProxy(obj, fsr) {
    var proxyObj = {};
    for (var key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            proxyObj[key] = { value: deepProxy(obj[key], fsr) };
        }
        else {
            proxyObj[key] = { value: obj[key] };
        }
    }
    return new Reactive(proxyObj, fsr);
}
function shallowProxy(obj, fsr) {
    return new Proxy(obj, {
        get: function (target, prop) {
            // @ts-ignore
            return target[prop];
        },
        set: function (target, prop, value) {
            // @ts-ignore
            target[prop] = value;
            fsr === null || fsr === void 0 ? void 0 : fsr();
            return true;
        },
    });
}
/**
 * #### params
 * - **initialState** - Only supports object type as reactive data source.
 * If given a non-object type, it will return the original value
 * - **deep** - If the second parameter is typeof `boolean`, it means whether the object is deeply reactive.
 * If the second parameter is typeof `function`, it means that the callback function will be triggered when the state changes.
 * - **callback** - Watcher callback function, which will be triggered when the state changes
 * #### FAQs
 * - Why not use `useMemo`? Use `useMemo` to return a new object, which will cause the object to be re-rendered every time,
 * and the object will be re-rendered every time it is used.
 * - Why did not the state change when I change the property deconstructed from the state?
 * Because the deconstructed property is a copy of the original object, it will not trigger the state change.
 */
function useReactive(initialState, deep) {
    var callbacks = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        callbacks[_i - 2] = arguments[_i];
    }
    var fsr = useForceUpdate();
    var stateRef = React.useRef(initialState);
    React.useEffect(function () {
        if (typeof deep === "function") {
            callbacks.unshift(deep);
        }
        callbacks.forEach(function (callback) { return callback(stateRef.current); });
    }, [stateRef.current, callbacks]);
    React.useEffect(function () {
        var reactiveState = null;
        if (deep === false) {
            reactiveState = shallowProxy(initialState, fsr);
        }
        else {
            reactiveState = deepProxy(initialState, fsr);
        }
        stateRef.current = reactiveState;
        fsr();
    }, []);
    return stateRef.current;
}

function get(object, path, strict) {
    if (strict === void 0) { strict = false; }
    if (!path)
        return undefined;
    if (!Array.isArray(path)) {
        switch (typeof path) {
            case "string":
                path = path.split(".");
                break;
            case "number":
                path = [path];
                break;
            case "symbol":
                path = [path.toString()];
                break;
            default:
                throw new Error("Invalid path");
        }
    }
    if (!strict) {
        return path.reduce(
        //@ts-ignore
        function (obj, key) { return (obj && obj[key] !== "undefined" ? obj[key] : undefined); }, object);
    }
    var obj = object;
    for (var i = 0; i < path.length; i++) {
        var key = path[i];
        // @ts-ignore
        while (obj[key] === undefined && i + 1 < path.length) {
            // @ts-ignore
            key += "." + path[++i];
        }
        // @ts-ignore
        obj = obj[key];
    }
    return obj;
}

/**
 * Reactor is a state management tool based on React Hooks.
 * - Only invoke set or reassign value will cause the view to update.
 * - Directly change deep properties of the state will not cause the view to update, but it has been stored in memory, then last time the view is updated, the view will be updated.
 * - Reactor is a reactive object, which means that you can get the value of the state through the get method, and the value will be updated when the state changes.
 * - Reactor is a proxy object, which means that you can directly get the value of the state through the dot syntax, and the value will be updated when the state changes.
 * - Reactor is a cloneable object, which means that you can clone a Reactor object through the clone method, and the cloned object will have the same state as the original object.
 * - Reactor is a resettable object, which means that you can reset the state of the Reactor object to the default value through the reset method.
 * - Reactor is a dispatchable object, which means that you can dispatch an action through the dispatch method, and the action will be executed by the corresponding plugin.
 * - Reactor is a serializable object, which means that you can serialize the Reactor object through the toJSON method.
 * - Reactor is a subscribable object, which means that you can subscribe to the Reactor object through the subscribe method, and the listener will be called when the state changes.
 * - Reactor is a listenable object, which means that you can listen to the Reactor object through the listen method, and the listener will be called when the state changes.
 * - Reactor is a pluginable object, which means that you can add a plugin to the Reactor object through the use method, and the plugin will be executed when the state changes.
 *
 */
var Reactor = /** @class */ (function () {
    function Reactor(state, setState, plugins, deepSet) {
        if (deepSet === void 0) { deepSet = false; }
        var _this = this;
        this._setState = function (newState) {
            _this._state = newState;
        };
        this._defaultValue = undefined;
        this._plugins = [];
        this._listeners = [];
        this._deepCloneWhenSet = false;
        this.setValue = function (newState) {
            var _a;
            if (isEqual(_this._state, newState))
                return;
            (_a = _this._setState) === null || _a === void 0 ? void 0 : _a.call(_this, newState);
            _this._listeners.forEach(function (listener) { return listener(newState); });
            _this._plugins.forEach(function (plugin) {
                var _a;
                (_a = plugin.onStateChange) === null || _a === void 0 ? void 0 : _a.call(plugin, newState, _this);
            });
        };
        this._state = state;
        setState ? (this._setState = setState) : void 0;
        this._deepCloneWhenSet = deepSet;
        plugins ? (this._plugins = plugins) : void 0;
        // 绑定所有的 onAction 到每个 action 上，最后将 action 按照 plugn.name 绑定到 this
        this._plugins.forEach(function (plugin) {
            var originAction = plugin.action;
            plugin.action = function (action, payload, that) {
                var _a;
                if (!originAction)
                    return;
                var res = originAction(action, payload, that);
                (_a = plugin.onAction) === null || _a === void 0 ? void 0 : _a.call(plugin, action, _this);
                return res;
            };
        });
    }
    Object.defineProperty(Reactor.prototype, "value", {
        get: function () {
            return this._state;
        },
        set: function (newState) {
            this.setValue(newState);
        },
        enumerable: false,
        configurable: true
    });
    Reactor.prototype.subscribe = function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (l) { return l !== listener; });
        };
    };
    Reactor.prototype.dispatch = function (action, payload) {
        var _this = this;
        this._plugins.forEach(function (plugin) {
            var _a;
            if (plugin.name === action) {
                (_a = plugin.action) === null || _a === void 0 ? void 0 : _a.call(plugin, _this._state, payload, _this);
            }
        });
    };
    Reactor.prototype.toJSON = function () {
        return this._state;
    };
    Reactor.prototype.clone = function () {
        return new Reactor(this._state, this._setState, this._plugins);
    };
    Reactor.prototype.get = function (path, strict) {
        if (strict === void 0) { strict = true; }
        if (!path)
            return this._state;
        try {
            // @ts-ignore
            return get(this._state, path, strict !== null && strict !== void 0 ? strict : true);
        }
        catch (e) {
            console.warn(e);
            return undefined;
        }
    };
    Reactor.prototype.set = function (path, value, deepSet) {
        var newState = setTo(this._state, path, value, deepSet !== null && deepSet !== void 0 ? deepSet : this._deepCloneWhenSet);
        this.setValue(newState);
    };
    Reactor.prototype.cloneValue = function () {
        return cloneDeep(this._state);
    };
    Reactor.prototype.setDefaultValue = function (defaultValue) {
        this._defaultValue = defaultValue;
    };
    Reactor.prototype.reset = function () {
        if (this._defaultValue) {
            this.setValue(this._defaultValue);
        }
    };
    Reactor.isReactor = function (obj) {
        return Reactor.prototype.isPrototypeOf(obj);
    };
    return Reactor;
}());
/**
 * When store.state changes, call the given function.
 * @param target listened Reactive store
 * @returns unlistener
 */
function listen(target) {
    return {
        then: function () {
            var fns = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fns[_i] = arguments[_i];
            }
            var fn = function (value) { return fns.forEach(function (f) { return f(value); }); };
            var dispose = target.subscribe(fn);
            return dispose;
        },
    };
}
/**
 * useReactor is a React Hook that returns a Reactor instance.
 * @param initialValue
 * @param plugins
 * @returns Reactor instance
 */
var useReactor = function (initialValue, plugins) {
    var _a = React.useState(initialValue), state = _a[0], setState = _a[1];
    var observer = new Reactor(state, setState, plugins);
    return observer;
};

var useReactorListener = listen;

function useResize(callback, ref) {
    var _a = React.useState({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    React.useEffect(function () {
        var updateSize = function () {
            if (ref && ref.current) {
                setSize({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                });
            }
            else {
                setSize({ width: window.innerWidth, height: window.innerHeight });
            }
            callback();
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return function () { return window.removeEventListener("resize", updateSize); };
    }, [callback, ref]);
    return size;
}

/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 * @css
 * ```css
 * body {
 *   --safe-area-inset-top: env(safe-area-inset-top);
 *   --safe-area-inset-right: env(safe-area-inset-right);
 *   --safe-area-inset-bottom: env(safe-area-inset-bottom);
 *   --safe-area-inset-left: env(safe-area-inset-left);
 * }
 * ```
 */
function useSafeArea() {
    var _a = React.useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }), safeArea = _a[0], setSafeArea = _a[1];
    React.useEffect(function () {
        var computeSafeArea = function () {
            var style = getComputedStyle(document.body);
            setSafeArea({
                top: parseInt(style.getPropertyValue("--safe-area-inset-top"), 10),
                right: parseInt(style.getPropertyValue("--safe-area-inset-right"), 10),
                bottom: parseInt(style.getPropertyValue("--safe-area-inset-bottom"), 10),
                left: parseInt(style.getPropertyValue("--safe-area-inset-left"), 10),
            });
        };
        window.addEventListener("resize", computeSafeArea);
        computeSafeArea();
        return function () {
            window.removeEventListener("resize", computeSafeArea);
        };
    }, []);
    return safeArea;
}

function useSingleton(createInstance) {
    var instanceRef = React.useRef(null);
    if (instanceRef.current === null) {
        instanceRef.current = createInstance();
    }
    return instanceRef.current;
}

function useTheme(arg1, arg2) {
    var _a = React.useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), theme = _a[0], setTheme = _a[1];
    var handleThemeChange = React.useCallback(function (handler) {
        return function (e) {
            var newTheme = e.matches ? "dark" : "light";
            setTheme(newTheme);
            handler(newTheme);
        };
    }, []);
    React.useEffect(function () {
        var matcher = window.matchMedia("(prefers-color-scheme: dark)");
        var handler = null;
        if (typeof arg1 === "boolean") {
            if (arg1 && arg2) {
                handler = handleThemeChange(arg2);
                matcher.addEventListener("change", handler);
            }
        }
        else if (arg1) {
            handler = handleThemeChange(arg1);
            matcher.addEventListener("change", handler);
        }
        else {
            handler = handleThemeChange(function () { });
            matcher.addEventListener("change", handler);
        }
        return function () {
            if (handler) {
                matcher.removeEventListener("change", handler);
            }
        };
    }, [arg1, arg2, handleThemeChange]);
    return theme;
}

var useTicker = function (fn, durationOrOptions, options) {
    var duration;
    if (typeof durationOrOptions === "number") {
        duration = durationOrOptions;
    }
    else if (typeof durationOrOptions === "object") {
        options = durationOrOptions;
    }
    var _options = React.useMemo(function () {
        var _a, _b;
        var immediate = typeof (options === null || options === void 0 ? void 0 : options.immediate) === "boolean"
            ? options.immediate
                ? "all"
                : "none"
            : (_a = options === null || options === void 0 ? void 0 : options.immediate) !== null && _a !== void 0 ? _a : "none";
        var runAtFirst = (options === null || options === void 0 ? void 0 : options.callAtFirst) || true;
        var pauseAtFirst = (options === null || options === void 0 ? void 0 : options.pauseAtFirst) || false;
        var _duration = (_b = options === null || options === void 0 ? void 0 : options.duration) !== null && _b !== void 0 ? _b : duration;
        return { immediate: immediate, runAtFirst: runAtFirst, pauseAtFirst: pauseAtFirst, duration: _duration };
    }, [options]);
    if (_options.duration !== undefined && _options.duration >= 0) {
        duration = _options.duration;
    }
    var _a = React.useState(0), tick = _a[0], setTick = _a[1];
    var _b = React.useState(_options.pauseAtFirst || false), isPaused = _b[0], setIsPaused = _b[1];
    var status = isPaused ? "off" : "on";
    var startDelay = 0;
    var intervalRef = React.useRef(null);
    var pause = React.useCallback(function () { return setIsPaused(true); }, []);
    var resume = React.useCallback(function () {
        setIsPaused(false);
        if ("first" === _options.immediate && tick === 0) {
            return fn(tick);
        }
    }, [_options.immediate, tick, fn]);
    var reset = function () { return setTick(0); };
    var mountedRef = React.useRef(false);
    React.useEffect(function () {
        if (!mountedRef.current &&
            ["mounted", "all"].includes(_options.immediate)) {
            fn(tick);
        }
        mountedRef.current = true;
    }, [tick]);
    var delayedPause = function (delay) {
        setTimeout(function () {
            setIsPaused(true);
        }, delay);
    };
    var delayedResume = function (delay) {
        setTimeout(function () {
            setIsPaused(false);
        }, delay);
    };
    React.useEffect(function () {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        if (!isPaused) {
            intervalRef.current = setInterval(function () {
                setTick(function (pre) { return pre + 1; });
                if (_options.runAtFirst || tick === 0) {
                    fn(tick);
                }
            }, duration !== null && duration !== void 0 ? duration : 1000);
        }
        return function () {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, tick]);
    React.useEffect(function () {
        setTimeout(function () {
            if (options === null || options === void 0 ? void 0 : options.pauseAtFirst) {
                pause();
            }
            else {
                if (_options.immediate) {
                    fn(tick);
                }
                resume();
            }
        }, startDelay);
    }, [startDelay]);
    return {
        tick: tick,
        status: status,
        pause: pause,
        resume: resume,
        reset: reset,
        delayedPause: delayedPause,
        delayedResume: delayedResume,
    };
};

var useTickState = function (initialState) {
    var _a = React.useState(0), tick = _a[0], setTick = _a[1];
    var _b = React.useState(initialState), state = _b[0], _setState = _b[1];
    var setState = function (value) {
        _setState(value);
        setTick(function (pre) { return pre + 1; });
    };
    return [state, setState, tick];
};

var createRoot = function (parentDocument) {
    return {
        render: function (element) {
            ReactDOM.render(element, parentDocument);
        },
    };
};
if ("createRoot" in ReactDOM) {
    // Adapt to React 18
    createRoot = ReactDOM.createRoot;
}
var defaultConfig = {
    duration: 2000,
    delay: 0,
    text: "",
    color: "#fff",
    bgColor: "rgba(0, 0, 0, 0.75)",
    placement: "center",
    position: "fixed",
};
function useToast(config) {
    if (config === void 0) { config = {}; }
    var _a = React.useState(__assign(__assign({}, defaultConfig), config)), toastConfig = _a[0], setToastConfig = _a[1];
    var _b = React.useState(null); _b[0]; var setToastElement = _b[1];
    var toastRef = React.useRef(null);
    toastRef.current = React.useCallback(function (text, config) {
        if (config === void 0) { config = {}; }
        var _config = __assign(__assign(__assign({}, toastConfig), { text: text }), config);
        setToastConfig(_config);
        var element = document.createElement("div");
        setToastElement(element);
        document.body.appendChild(element);
        var root = createRoot(element);
        root.render(jsxRuntime.jsx("div", __assign({ style: __assign(__assign({ position: _config.position }, _config.style), { color: _config.color, left: "50%", top: _config.placement === "center" ? "50%" : "10%", transform: _config.placement === "center" ? "translate(-50%, -50%)" : "translateX(-50%)", backgroundColor: _config.bgColor, padding: "4px 12px", paddingBottom: "6px", borderRadius: "4px", fontSize: "14px" }), className: _config.className }, { children: _config.text })));
        setTimeout(function () {
            document.body.removeChild(element);
            setToastElement(null);
        }, _config.duration);
    }, [toastConfig]);
    var toast = React.useCallback(function (text, config) {
        var _a;
        if (config === void 0) { config = {}; }
        (_a = toastRef.current) === null || _a === void 0 ? void 0 : _a.call(toastRef, text, config);
    }, []);
    toast.top = function (text, config) {
        if (config === void 0) { config = {}; }
        return toast(text, __assign(__assign({}, config), { placement: "top" }));
    };
    toast.center = function (text, config) {
        if (config === void 0) { config = {}; }
        return toast(text, __assign(__assign({}, config), { placement: "center" }));
    };
    toast.bottom = function (text, config) {
        if (config === void 0) { config = {}; }
        return toast(text, __assign(__assign({}, config), { placement: "bottom" }));
    };
    return toast;
}

function useToggle(initial, valueMap) {
    var _a, _b;
    var _c = React.useState(initial || false), toogle = _c[0], setToogle = _c[1];
    var switchToogle = function (bool) {
        if (typeof bool === "boolean") {
            setToogle(bool);
            return;
        }
        setToogle(function (pre) { return !pre; });
    };
    return [toogle ? (_a = valueMap === null || valueMap === void 0 ? void 0 : valueMap.true) !== null && _a !== void 0 ? _a : true : (_b = valueMap === null || valueMap === void 0 ? void 0 : valueMap.false) !== null && _b !== void 0 ? _b : false, switchToogle, setToogle];
}

var useTree = function (initialTree, options) {
    if (options === void 0) { options = { idKey: "_id" }; }
    var _a = React.useState(initialTree), tree = _a[0], setTree = _a[1];
    var _b = React.useState(null); _b[0]; var setFilteredTree = _b[1];
    var idKey = options.idKey;
    var renderNode = options.renderNode || (function () { return null; });
    var filterFn = options.filterFn;
    if (!idKey && idKey !== 0) {
        throw new Error("You must provide an idKey to useTree");
    }
    var traverse = function (node, callback, level, parentNode) {
        if (level === void 0) { level = 0; }
        if (parentNode === void 0) { parentNode = null; }
        var result = callback(node, level, parentNode);
        var childrenResults = node.children.map(function (child) {
            return traverse(child, callback, level + 1, node);
        });
        var final = __spreadArray([result], childrenResults, true);
        return final;
    };
    var addNode = function (node, parentId) {
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === parentId) {
                currentNode.children.push(node);
            }
        });
        setTree(__assign({}, tree));
    };
    var removeNode = function (nodeId) {
        traverse(tree, function (currentNode) {
            currentNode.children = currentNode.children.filter(function (child) { return child[idKey] !== nodeId; });
        });
        setTree(__assign({}, tree));
    };
    var updateNode = function (nodeId, newNodeData) {
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === nodeId) {
                Object.assign(currentNode, newNodeData);
            }
        });
        setTree(__assign({}, tree));
    };
    /**
     * Only works for the first node found
     * @param nodeId
     * @returns
     */
    var findNode = function (nodeId) {
        var foundNode = null;
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === nodeId) {
                foundNode = currentNode;
            }
        });
        return foundNode;
    };
    /**
     * Get all nodes that match the filter
     * @param filter
     * @returns
     */
    var searchTree = function (filter) {
        var filterFn;
        if (typeof filter === "string") {
            filterFn = function (node) { return node[idKey] === filter; };
        }
        else {
            filterFn = filter;
        }
        var result = traverse(tree, function (node) {
            if (filterFn(node)) {
                return node;
            }
            else {
                return null;
            }
        });
        return result.filter(function (node) { return node !== null; });
    };
    /**
     * Move a node from one parent to another
     * @param sourceNodeId
     * @param targetNodeId
     */
    var moveNode = function (sourceNodeId, targetNodeId) {
        var sourceNode = null;
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === sourceNodeId) {
                sourceNode = currentNode;
            }
        });
        if (sourceNode === null) {
            throw new Error("Node with id ".concat(sourceNodeId, " does not exist"));
        }
        removeNode(sourceNodeId);
        addNode(sourceNode, targetNodeId);
    };
    /**
     * Render the tree
     */
    var render = React.useCallback(function () {
        if (!renderNode) {
            throw new Error("You must provide a renderNode function to useTree");
        }
        return traverse(tree, function (node, level, parentNode) {
            return renderNode(node, idKey, level, parentNode, tree);
        });
    }, [tree, renderNode]);
    React.useEffect(function () {
        if (filterFn) {
            var result = traverse(tree, function (node) {
                if (filterFn(node)) {
                    return node;
                }
                else {
                    return null;
                }
            });
            // @ts-ignore
            setFilteredTree(result.filter(function (node) { return node !== null; }));
        }
    }, [tree, filterFn]);
    return [
        tree,
        { addNode: addNode, removeNode: removeNode, updateNode: updateNode, findNode: findNode, moveNode: moveNode, searchTree: searchTree, render: render },
    ];
};

function useUnmount(callback) {
    React.useEffect(function () {
        return function () {
            callback();
        };
    }, []); // 空数组表示这个 useEffect 只会在组件挂载后执行一次
}

var useUpdate = function (callback, dependencies) {
    var firstRenderRef = React.useRef(true);
    React.useEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

var useUpdateEffect = function (callback, dependencies) {
    var firstRenderRef = React.useRef(true);
    React.useEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

var useUpdateLayoutEffect = function (callback, dependencies) {
    var firstRenderRef = React.useRef(true);
    React.useLayoutEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

function getParams(url, mode, autoParams, stringifyParams, custom) {
    var _a;
    if (mode === void 0) { mode = "auto"; }
    if (autoParams === void 0) { autoParams = []; }
    if (stringifyParams === void 0) { stringifyParams = []; }
    if (custom === void 0) { custom = {}; }
    var params = {};
    // 先处理 custom 对象
    for (var key in custom) {
        var value = new URLSearchParams(url).get(key);
        params[key] = (_a = custom[key]) === null || _a === void 0 ? void 0 : _a.call(custom, value !== null && value !== void 0 ? value : undefined);
    }
    var questionMarkIndex = url.indexOf("?");
    if (questionMarkIndex !== -1) {
        var queryString = url.substring(questionMarkIndex + 1);
        var pairs = queryString.split("&");
        for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
            var pair = pairs_1[_i];
            var _b = pair.split("="), key = _b[0], value = _b[1];
            try {
                var decodedKey = decodeURIComponent(key);
                var decodedValue = decodeURIComponent(value);
                if (custom[decodedKey]) {
                    continue; // 如果这个键在 custom 对象中，我们已经处理过它了
                }
                if (stringifyParams.includes(decodedKey)) {
                    params[decodedKey] = decodedValue;
                }
                else if (autoParams.includes(decodedKey) || mode === "auto") {
                    if (decodedValue === "true") {
                        params[decodedKey] = true;
                    }
                    else if (decodedValue === "false") {
                        params[decodedKey] = false;
                    }
                    else if (decodedValue === "null") {
                        params[decodedKey] = null;
                    }
                    else if (decodedValue === "undefined") {
                        params[decodedKey] = undefined;
                    }
                    else if (!isNaN(Number(decodedValue))) {
                        params[decodedKey] = Number(decodedValue);
                    }
                    else {
                        params[decodedKey] = decodedValue;
                    }
                }
                else {
                    params[decodedKey] = decodedValue;
                }
            }
            catch (error) {
                console.error("Failed to decode URL parameter:", error);
            }
        }
    }
    return params;
}
// 全局的事件监听器
var listeners = new Set();
window.addEventListener("popstate", function () {
    listeners.forEach(function (listener) { return listener(); });
});
/**
 * ## useUrl hook
 * Converts a string to a query parameter object. Return an object merged with location, history, params and name.
 *
 * ### Parameters
 * - callback (?) - The **callback** to call when the url changes.
 * - name (?) - The name of the listener
 * - immediate (`false`) - Whether to call the callback immediately.
 * - config (?) - The configuration of the params parser.
 *   + mode (`"auto"`) - The mode of the params parser: `"string"` | `"auto"` = `"auto"`.
 *   + autoParams (?) - The parameters to treat as auto.
 *   + stringifyParams (?) - The parameters to treat as string.
 *   + custom (?) - The custom parser of certain query parameters.
 *
 * ### Type Parameters
 * - T - `string` or `object`.
 *   + The string to convert, like `"http://localhost?id=1&name=evan"`
 *   + object: object to inferred as, like `{ id: 1, name: "evan" }`
 * - Mode - The mode to use when converting: `"string"` | `"fuzzy"` | `"auto"` | `"strict"` | `"any"` = `"auto"`.
 * - StrictParams - The parameters to treat as strict.
 * - FuzzyParams - The parameters to treat as fuzzy.
 *
 * ### Notes
 * - Type infer mode is not associated with the mode parameter of parser.
 *
 * @return location merged with history, params and name.
 */
function useUrl(callback, name, immediate, config) {
    if (config === void 0) { config = {}; }
    function getUrlInfo() {
        return __assign(__assign({ params: getParams(window.location.href, config === null || config === void 0 ? void 0 : config.mode, config === null || config === void 0 ? void 0 : config.autoParams, config === null || config === void 0 ? void 0 : config.stringifyParams, config === null || config === void 0 ? void 0 : config.custom), name: name }, window.location), window.history);
    }
    var _a = React.useState(getUrlInfo()), urlInfo = _a[0], setUrlInfo = _a[1];
    var memoizedConfig = React.useMemo(function () { return config; }, [config.mode, config.autoParams, config.stringifyParams, config.custom]);
    React.useEffect(function () {
        if (immediate) {
            var urlInfo_1 = getUrlInfo();
            callback === null || callback === void 0 ? void 0 : callback(urlInfo_1);
            setUrlInfo(urlInfo_1);
        }
    }, [immediate, JSON.stringify(memoizedConfig), name]);
    React.useEffect(function () {
        var handlePopState = function () {
            var urlInfo = getUrlInfo();
            setUrlInfo(urlInfo);
            callback === null || callback === void 0 ? void 0 : callback(urlInfo);
        };
        // 在组件挂载时注册回调函数
        listeners.add(handlePopState);
        return function () {
            // 在组件卸载时注销回调函数
            listeners.delete(handlePopState);
        };
    }, [callback]);
    return urlInfo;
}

function useVirtualArea(_a, depths) {
    var _this = this;
    var loadMoreItems = _a.loadMoreItems, items = _a.items, hasMore = _a.hasMore, height = _a.height, containerStyle = _a.style, renderTop = _a.renderTop, renderItem = _a.renderItem, itemComponent = _a.itemComponent, itemComponentProps = _a.itemComponentProps, renderNoData = _a.renderNoData, renderLoader = _a.renderLoader, renderUnLoaded = _a.renderUnLoaded, loaderComponent = _a.loaderComponent, loaderComponentProps = _a.loaderComponentProps, containerComponent = _a.containerComponent, containerComponentProps = _a.containerComponentProps, renderBottom = _a.renderBottom, observerOptions = _a.observerOptions;
    var _b = React.useState(false), loading = _b[0], setLoading = _b[1];
    var loaderRef = React.useRef(null);
    var loadMore = React.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (loading || !hasMore)
                        return [2 /*return*/];
                    setLoading(true);
                    return [4 /*yield*/, loadMoreItems()];
                case 1:
                    _a.sent();
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); }, [loading, hasMore, loadMoreItems]);
    React.useEffect(function () {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        }, __assign(__assign({}, options), observerOptions));
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
        return function () { return observer.disconnect(); };
    }, [observerOptions, loadMore]);
    var Container = React.useMemo(function () { return containerComponent || "div"; }, [containerComponent]);
    var Item = React.useMemo(function () { return itemComponent || "div"; }, [itemComponent]);
    var Loader = React.useMemo(function () { return loaderComponent || "div"; }, [loaderComponent]);
    var _containerComponentProps = React.useMemo(function () {
        var _a = containerComponentProps !== null && containerComponentProps !== void 0 ? containerComponentProps : {}, style = _a.style, rest = __rest(_a, ["style"]);
        return __assign(__assign({}, rest), { style: __assign(__assign({ overflow: "auto", height: height }, containerStyle), style) });
    }, [containerComponentProps, height, containerStyle]);
    var render = React.useCallback(function () {
        return (jsxRuntime.jsxs(Container, __assign({}, _containerComponentProps, { children: [typeof renderTop === "function" ? renderTop() : renderTop, 
                /** @ts-ignore */
                (items || []).length === 0 &&
                    (typeof renderNoData === "function"
                        ? renderNoData()
                        : renderNoData === void 0
                            ? "No data"
                            : renderNoData), items.map(function (item, index) { return (jsxRuntime.jsx(Item, __assign({}, itemComponentProps, { children: typeof renderItem === "function" ? renderItem(item) : renderItem }), index)); }), jsxRuntime.jsxs(Loader, __assign({ ref: loaderRef }, loaderComponentProps, { children: [loading &&
                            (typeof renderLoader === "function"
                                ? renderLoader()
                                : renderLoader === void 0
                                    ? "Loading..."
                                    : renderLoader), !loading &&
                            !hasMore &&
                            (typeof renderUnLoaded === "function"
                                ? renderUnLoaded()
                                : renderUnLoaded === void 0
                                    ? "No more data"
                                    : renderUnLoaded)] })), typeof renderBottom === "function" ? renderBottom() : renderBottom] })));
    }, __spreadArray([
        _containerComponentProps,
        renderTop,
        items,
        Item,
        itemComponentProps,
        renderItem,
        loaderRef,
        loaderComponentProps,
        loading,
        renderLoader,
        hasMore,
        renderUnLoaded,
        renderBottom
    ], (depths || []), true));
    return [loaderRef, loading, items, render];
}

var useWatch = function (object, path, callback, configOrStrict, immediate) {
    var strict = false;
    if (typeof configOrStrict === "boolean") {
        strict = configOrStrict;
    }
    else if (configOrStrict) {
        strict = configOrStrict.strict || false;
        immediate = configOrStrict.immediate;
    }
    var getter = get;
    if (path instanceof Function) {
        getter = path;
    }
    var initValue = undefined;
    try {
        initValue = getter(object, path, strict);
    }
    catch (error) {
        console.error(error);
    }
    var _a = React.useState(initValue), value = _a[0], setValue = _a[1];
    var oldValueRef = React.useRef(value);
    var mountedRef = React.useRef(false);
    React.useEffect(function () {
        if (!mountedRef.current && immediate) {
            callback(value, oldValueRef.current);
            mountedRef.current = true;
        }
    }, []);
    React.useEffect(function () {
        var newValue = undefined;
        try {
            newValue = getter(object, path, strict);
        }
        catch (error) {
            console.error(error);
        }
        if (!isEqual(newValue, oldValueRef.current)) {
            callback(newValue, oldValueRef.current);
            setValue(newValue);
            oldValueRef.current = newValue;
        }
    }, [object, path, callback]);
    return value; // PathValue<T, P> | undefined;
};

function WatchGetterInterval(getter, interval) {
    if (interval === void 0) { interval = 1000 / 60; }
    var _a = React.useState(getter()), value = _a[0], setValue = _a[1];
    React.useEffect(function () {
        var id = setInterval(function () {
            var newValue = getter();
            if (newValue !== value) {
                setValue(newValue);
            }
        }, interval);
        return function () {
            clearInterval(id);
        };
    }, [getter, interval, value]);
    return value;
}
function WatchGetterSetter(getter, interval) {
    if (interval === void 0) { interval = 1000; }
    var setters = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        setters[_i - 2] = arguments[_i];
    }
    var _a = React.useState(getter()), value = _a[0]; _a[1];
    React.useEffect(function () {
        var _setters = setters.map(function (setter) { return setter; });
        _setters.forEach(function (setter) {
        });
        return function () {
            _setters.forEach(function (setter) {
            });
        };
    }, [getter, setters]);
    return value;
}
function useWatchGetter(getter, interval) {
    if (interval === void 0) { interval = 1000; }
    var setters = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        setters[_i - 2] = arguments[_i];
    }
    if (typeof interval === "function") {
        setters.unshift(interval);
        interval = 1000;
    }
    if (setters.length === 0) {
        // @ts-ignore
        return WatchGetterInterval(getter, interval);
    }
    else {
        return WatchGetterSetter.apply(void 0, __spreadArray([getter, interval], setters, false));
    }
}

function useWhyDidYouUpdate(name, props) {
    var previousProps = React.useRef({});
    React.useEffect(function () {
        if (previousProps.current) {
            var allKeys = Object.keys(__assign(__assign({}, previousProps.current), props));
            var changesObj_1 = {};
            allKeys.forEach(function (key) {
                if (previousProps.current[key] !== props[key]) {
                    // @ts-ignore
                    changesObj_1[key] = {
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            });
            if (Object.keys(changesObj_1).length) {
                console.log("[why-did-you-update]", name, changesObj_1);
            }
        }
        previousProps.current = props;
    }, [props]);
}

exports.useAsyncEffect = useAsyncEffect;
exports.useBatchHooks = useBatchHooks;
exports.useBattery = useBattery;
exports.useBeforeMount = useBeforeMount;
exports.useBroadcastChannel = useBroadcastChannel;
exports.useClickAway = useClickAway;
exports.useConsoleLog = useConsoleLog;
exports.useCookie = useCookie;
exports.useDebounce = useDebounce;
exports.useEventEmitter = useEventEmitter;
exports.useEventListener = useEventListener;
exports.useEyeDropper = useEyeDropper;
exports.useFetch = useFetch;
exports.useForceUpdate = useForceUpdate;
exports.useForm = useForm;
exports.useGenerator = useGenerator;
exports.useGuide = useGuide;
exports.useHover = useHover;
exports.useIndexDB = useIndexedDB;
exports.useKeyPress = useKeyPress;
exports.useLazy = useLazy;
exports.useLazyImage = useLazyImage;
exports.useList = useList;
exports.useLoading = useLoading;
exports.useLocalStorage = useLocalStorage;
exports.useMediaQuery = useMediaQuery;
exports.useMemento = useMemento;
exports.useMeta = useMeta;
exports.useMixRef = useMixRef;
exports.useMount = useMount;
exports.useMousePosition = useMousePosition;
exports.useNetwork = useNetworkStatus;
exports.useOverflow = useOverflow;
exports.usePrevious = usePrevious;
exports.usePromise = usePromise;
exports.useProtect = useProtect;
exports.useRaf = useRaf;
exports.useRafState = useRafState;
exports.useReactive = useReactive;
exports.useReactor = useReactor;
exports.useReactorListener = useReactorListener;
exports.useResize = useResize;
exports.useSafeArea = useSafeArea;
exports.useScroll = useScroll;
exports.useSingleton = useSingleton;
exports.useTheme = useTheme;
exports.useThrottle = useThrottle;
exports.useTickState = useTickState;
exports.useTicker = useTicker;
exports.useToast = useToast;
exports.useToggle = useToggle;
exports.useTree = useTree;
exports.useUnMount = useUnmount;
exports.useUpdate = useUpdate;
exports.useUpdateEffect = useUpdateEffect;
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
exports.useUrl = useUrl;
exports.useVirtualArea = useVirtualArea;
exports.useWatch = useWatch;
exports.useWatchGetter = useWatchGetter;
exports.useWhyDidYouUpdate = useWhyDidYouUpdate;