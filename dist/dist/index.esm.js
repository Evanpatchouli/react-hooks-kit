import { useRef, useEffect, useState, useCallback, useMemo, Fragment, useLayoutEffect, createContext, useContext } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import ReactDom, { flushSync } from 'react-dom';
import ReactDomClient, { createRoot as createRoot$2 } from 'react-dom/client';

function usePrevious(value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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

function useToggle(initial, valueMap) {
    var _a, _b;
    var _c = __read(useState(initial || false), 2), toogle = _c[0], setToogle = _c[1];
    var switchToogle = function (bool) {
        if (typeof bool === "boolean") {
            setToogle(bool);
            return;
        }
        setToogle(function (pre) { return !pre; });
    };
    return [toogle ? (_a = valueMap === null || valueMap === void 0 ? void 0 : valueMap.true) !== null && _a !== void 0 ? _a : true : (_b = valueMap === null || valueMap === void 0 ? void 0 : valueMap.false) !== null && _b !== void 0 ? _b : false, switchToogle, setToogle];
}

function formatLoadingValue(value, boolify) {
    if (boolify === void 0) { boolify = false; }
    if (!boolify) {
        if (["number", "boolean"].includes(typeof value)) {
            if (typeof value === "number") {
                return value;
            }
            return value === true ? 1 : 0;
        }
        else {
            throw new Error("value must be number or boolean, but got ".concat(typeof value));
        }
    }
    if (["number", "boolean"].includes(typeof value)) {
        if (typeof value === "number") {
            if (value === 0) {
                return false;
            }
            else if (value == 1) {
                return true;
            }
            else {
                return value;
            }
        }
        return value === true ? true : false;
    }
    else {
        throw new Error("value must be number or boolean, but got ".concat(typeof value));
    }
}
function formatLoadingState(values, boolify) {
    if (values === void 0) { values = {}; }
    if (boolify === void 0) { boolify = false; }
    var newValues = __assign({}, values);
    Object.keys(newValues).forEach(function (key) {
        newValues[key] = formatLoadingValue(newValues[key], boolify);
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
        boolify: true,
    }; }
    var _a = __read(useState(formatLoadingState(loadingMap, options.boolify)), 2), loading = _a[0], _setLoading = _a[1];
    var setLoading = function (args1, value) {
        if (value === void 0) { value = true; }
        if (typeof args1 === "object") {
            if (setTypeOptions.includes(value)) {
                if (value === "spread") {
                    _setLoading(function (pre) {
                        return formatLoadingState(__assign(__assign({}, pre), args1), options.boolify);
                    });
                }
                else {
                    _setLoading(formatLoadingState(args1, options.boolify));
                }
            }
            else {
                _setLoading(formatLoadingState(args1, options.boolify));
            }
            return;
        }
        else if (typeof args1 === "function") {
            if (setTypeOptions.includes(value)) {
                if (value === "spread") {
                    _setLoading(function (pre) {
                        return formatLoadingState(__assign(__assign({}, pre), args1(pre)), options.boolify);
                    });
                }
                else {
                    _setLoading(formatLoadingState(args1, options.boolify));
                }
            }
            else {
                _setLoading(formatLoadingState(args1, options.boolify));
            }
            return;
        }
        else {
            var key_1 = args1;
            if (typeof value === "function") {
                _setLoading(function (pre) {
                    var _a;
                    return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key_1] = value(pre[key_1]), _a)), options.boolify);
                });
            }
            else {
                _setLoading(function (pre) {
                    var _a;
                    return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key_1] = value, _a)), options.boolify);
                });
            }
        }
    };
    var onLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = 1, _a)), options.boolify);
        });
    };
    var unLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = 0, _a)), options.boolify);
        });
    };
    var plusLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = pre[key] + 1, _a)), options.boolify);
        });
    };
    var minusLoading = function (key) {
        _setLoading(function (pre) {
            var _a;
            return formatLoadingState(__assign(__assign({}, pre), (_a = {}, _a[key] = pre[key] - 1, _a)), options.boolify);
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

function useRecord(initial) {
    if (initial && typeof initial !== "object") {
        throw new Error("Initial value must be an object");
    }
    var _a = __read(useState(initial || Object.create({})), 2), record = _a[0], setRecord = _a[1];
    function get(key) {
        // @ts-ignore
        return record[key];
    }
    function set() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            throw new Error("No arguments provided");
        }
        if (['string', 'number', 'symbol'].includes(typeof args[0])) {
            var key_1 = args[0];
            var value_1 = args[1];
            setRecord(function (prev) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[key_1] = typeof value_1 === 'function' ? value_1(prev[key_1]) : value_1, _a));
            });
        }
        else if (typeof args[0] === 'object') {
            var state_1 = args[0];
            var mode_1 = args[1] || 'rehydrate';
            setRecord(function (prev) {
                return mode_1 === 'override'
                    ? __assign({}, state_1) : __assign(__assign({}, prev), state_1);
            });
        }
        else if (typeof args[0] === 'function') {
            var setRecordAction_1 = args[0];
            var mode_2 = args[1] || 'rehydrate';
            setRecord(function (prev) {
                var instance = setRecordAction_1(prev);
                return mode_2 === 'override'
                    ? __assign({}, instance) : __assign(__assign({}, prev), instance);
            });
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
    return [record, set, get];
}

/**
 * **useMap** is a React Hook that manages a Map state with convenient methods for manipulation.
 * ### Parameters
 * - initialState: `T extends Object` - The initial state object that will be converted to a Map.
 * ---
 * ### Return (Object)
 * - map: `ReadonlyMap<T>` - The readonly Map instance (cannot use set/delete/clear directly).
 * - set: `function` - Set values in the map, has four overloads:
 *   + (key: K, value: Property<T, K>): void - Set a single key-value pair.
 *   + (key: K, setValueAction: (prev?: Property<T, K>) => Property<T, K>): void - Set value using a function.
 *   + (record: Partial<T>, mode?: 'rehydrate' | 'override'): void - Set multiple key-value pairs.
 *   + (setMapAction: (prev: Map<K, Property<T, K>>) => T | Map<K, Property<T, K>>, mode?: 'rehydrate' | 'override'): void - Set using a function that receives the previous Map.
 * - get: `(key: K) => Property<T, K>` - Get value by key.
 * - del: `(key: Hintable<keyof T>) => void` - Delete a key from the map.
 * - add: `(key: K, value: Property<T, K>) => void` - Add or update a key-value pair (alias for set).
 * ---
 * ### Usage
 * ```tsx
 * const { map, set, get, del, add } = useMap({
 *   name: "John",
 *   age: 18
 * });
 *
 * // Set single value
 * set("name", "Evan");
 *
 * // Set with function
 * set("age", (prev) => (prev || 0) + 1);
 *
 * // Set multiple values
 * set({ name: "Alice", age: 25 }, "rehydrate");
 *
 * // Get value
 * const name = get("name");
 *
 * // Delete key
 * del("age");
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useMap } from "@evanpatchouli/react-hooks-kit";
 *
 * const UserProfile = () => {
 *   const { map, set, get, del } = useMap({
 *     username: "john_doe",
 *     email: "john@example.com",
 *     age: 25
 *   });
 *
 *   return (
 *     <div>
 *       <p>Username: {get("username")}</p>
 *       <button onClick={() => set("age", (prev) => (prev || 0) + 1)}>
 *         Increment Age
 *       </button>
 *       <button onClick={() => del("email")}>
 *         Remove Email
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useMap instead of useState with Map?
 * - A: useMap provides convenient methods (set, get, del, add) and ensures immutability automatically.
 * ---
 * - Q: What's the difference between 'rehydrate' and 'override' mode?
 * - A: 'rehydrate' merges new values with existing ones, 'override' replaces the entire map.
 * ---
 * - Q: Can I use map.set() directly?
 * - A: No, the returned map is readonly. Use the provided set() method instead.
 */
var useMap = function (initialState) {
    var _a = __read(useState(new Map(Object.entries(initialState))), 2), map = _a[0], setMap = _a[1];
    // 实现
    function set() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0) {
            throw new Error("No arguments provided");
        }
        var firstArg = args[0];
        var secondArg = args[1];
        // 判断第一个参数是否为函数 - map action 模式
        if (typeof firstArg === "function") {
            var setMapAction_1 = firstArg;
            var mode_1 = secondArg || "override";
            setMap(function (prev) {
                var instance = setMapAction_1(prev);
                var newmap = instance instanceof Map
                    ? instance
                    : new Map(Object.entries(instance));
                if (mode_1 === "override") {
                    return newmap;
                }
                return new Map(__spreadArray(__spreadArray([], __read(prev), false), __read(newmap), false));
            });
        }
        // 判断第一个参数是否为对象（非基本类型） - record 模式
        else if (typeof firstArg === "object" && firstArg !== null) {
            var record_1 = firstArg;
            var mode_2 = secondArg || "rehydrate";
            setMap(function (prev) {
                if (mode_2 === "override") {
                    return new Map(Object.entries(record_1));
                }
                return new Map(__spreadArray(__spreadArray([], __read(prev), false), __read(Object.entries(record_1)), false));
            });
        }
        // key-value 模式（第一个参数是基本类型）
        else if (args.length === 2) {
            var key_1 = firstArg;
            // 判断第二个参数是否为函数 - key + setValueAction
            if (typeof secondArg === "function") {
                var setValueAction_1 = secondArg;
                setMap(function (prev) {
                    var prevValue = map.get(key_1);
                    return new Map(prev.entries()).set(key_1, setValueAction_1(prevValue));
                });
            }
            // key + value
            else {
                var value_1 = secondArg;
                setMap(function (prev) {
                    return new Map(prev.entries()).set(key_1, value_1);
                });
            }
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
    function get(key) {
        return map.get(key);
    }
    function del(key) {
        setMap(function (prev) {
            if (!prev.has(key)) {
                return prev;
            }
            prev.delete(key);
            return new Map(prev);
        });
    }
    function add(key, value) {
        setMap(function (prev) {
            if (prev.has(key) && prev.get(key) === value) {
                return prev;
            }
            var newMap = new Map(prev);
            newMap.set(key, value);
            return newMap;
        });
    }
    return {
        map: map,
        set: set,
        get: get,
        del: del,
        add: add,
    };
};

// import _cloneDeep from 'lodash.clonedeep';
function cloneDeep(target, map) {
    if (map === void 0) { map = new Map(); }
    if (typeof target === "object" && target !== null) {
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

function setTo(obj, path, val, deepClone, createIfNotExist) {
    if (deepClone === void 0) { deepClone = false; }
    if (createIfNotExist === void 0) { createIfNotExist = false; }
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
                keys = [path];
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
        if (!temp[key]) {
            if (createIfNotExist) {
                temp[key] = isNaN(Number(key)) ? {} : [];
            }
            else {
                return obj;
            }
        }
        temp = temp[key];
    });
    var newObj = __assign({}, obj);
    var temp2 = newObj;
    keys.forEach(function (key) {
        temp2 = temp2[key];
    });
    if ((lastKey || lastKey === 0) && temp2 && (createIfNotExist || lastKey in temp2)) {
        temp2[lastKey] = val;
    }
    return newObj;
}

function get(object, path, strict) {
    if (strict === void 0) { strict = false; }
    if (object === null || object === undefined)
        return undefined;
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
                path = [path];
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
 * **useMeta** is a React Hook that returns a meta state and a function to set the meta state.
 * ### Parameters
 * - initialState: `T extends object` - The initial state object of the meta state.
 * - options?: `{ deepSet?: boolean; createNonExist?: boolean }` - The options of the meta state.
 *   - deepSet : `boolean?` - Whether to use deep clone when setting the meta state. Defaults to `false`.
 *   - createNonExist : `boolean?` - Whether to create non-existent nodes when setting the meta state. Defaults to `false`.
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
var useMeta = function (initialState, options) {
    var _a = __read(useState(initialState), 2), meta = _a[0], setState = _a[1];
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
                    return setTo(pre, key_1, value(get(pre, key_1), pre), options === null || options === void 0 ? void 0 : options.deepSet, options === null || options === void 0 ? void 0 : options.createNonExist);
                });
            }
            else {
                setState(function (pre) {
                    return setTo(pre, key_1, value, options === null || options === void 0 ? void 0 : options.deepSet, options === null || options === void 0 ? void 0 : options.createNonExist);
                });
            }
        }
    };
    return [meta, setMeta];
};

var UKey = function () {
    return Math.floor(Math.random() * Date.now().valueOf());
};

function useList(initialItems, options, dependencies) {
    var _a, _b;
    var _c = __read(useState(
    // @ts-ignore
    __spreadArray([], __read(initialItems), false).map(function (item) {
        var _a;
        return (__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a)));
    })), 2), items = _c[0], setItems = _c[1];
    var _d = __read(useState(__spreadArray([], __read(initialItems), false)), 2), originalItems = _d[0], setOriginalItems = _d[1];
    useEffect(function () {
        // 去除 唯一id 再设置
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"]) {
                delete _item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], __read(newItems), false));
    }, dependencies || []);
    var save = useCallback(function () {
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"]) {
                delete _item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], __read(newItems), false));
    }, [items]);
    var addItem = useCallback(function (item) {
        // @ts-ignore
        setItems(function (prevItems) {
            var _a;
            return __spreadArray(__spreadArray([], __read(prevItems), false), [__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a))], false);
        });
    }, [options === null || options === void 0 ? void 0 : options.idKey]);
    var removeItem = useCallback(function (id) {
        if (id === void 0 || id === null) {
            throw new Error("idKey is required to removeItem in list");
        }
        setItems(function (prevItems) { return prevItems.filter(function (item) { return item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] !== id; }); });
    }, [options === null || options === void 0 ? void 0 : options.idKey]);
    var removeItems = useCallback(function (ids) {
        ids.forEach(function (id) {
            removeItem(id);
        });
    }, [options === null || options === void 0 ? void 0 : options.idKey]);
    var reset = useCallback(function (items) {
        if (items !== void 0) {
            setItems(
            // @ts-ignore
            __spreadArray([], __read(items), false).map(function (item) {
                var _a;
                return (__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a)));
            }));
            return;
        }
        setItems(
        // @ts-ignore
        __spreadArray([], __read(originalItems), false).map(function (item) {
            var _a;
            return (__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a)));
        }));
    }, [originalItems]);
    var updateItems = useCallback(function (newItems) {
        if (newItems.some(function (item) { return [void 0, null].includes(item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"]); })) {
            throw new Error("idKey is required to updateItem in list");
        }
        // @ts-ignore
        setItems(newItems);
    }, []);
    var sortedItems = __spreadArray([], __read(items), false).sort((options === null || options === void 0 ? void 0 : options.sortFn) || (function () { return 0; }));
    var filteredItems = sortedItems.filter((options === null || options === void 0 ? void 0 : options.filterFn) || (function () { return true; }));
    var _e = __read(useState(1), 2), currentPage = _e[0], setCurrentPage = _e[1];
    var totalPage = useMemo(function () {
        var _a;
        return Math.max(1, Math.ceil(filteredItems.length / ((_a = options === null || options === void 0 ? void 0 : options.itemsPerPage) !== null && _a !== void 0 ? _a : 10)));
    }, [filteredItems.length, options === null || options === void 0 ? void 0 : options.itemsPerPage]);
    var goToPage = useCallback(function (page) {
        if (page >= 1 && page <= totalPage) {
            setCurrentPage(page);
        }
    }, [totalPage]);
    var goLastPage = useCallback(function () {
        if (currentPage > 1) {
            setCurrentPage(function (page) { return page - 1; });
        }
    }, [currentPage]);
    var goNextPage = useCallback(function () {
        if (currentPage < totalPage) {
            setCurrentPage(function (page) { return page + 1; });
        }
    }, [currentPage, totalPage]);
    var pagedItems = filteredItems.slice((currentPage - 1) * ((_a = options === null || options === void 0 ? void 0 : options.itemsPerPage) !== null && _a !== void 0 ? _a : 10), currentPage * ((_b = options === null || options === void 0 ? void 0 : options.itemsPerPage) !== null && _b !== void 0 ? _b : 10));
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
                        return (options === null || options === void 0 ? void 0 : options.renderFn) ? (jsx(Fragment, { children: options === null || options === void 0 ? void 0 : options.renderFn(item, idx, array) }, item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"])) : null;
                    })
                    : (options === null || options === void 0 ? void 0 : options.renderEmpty)
                        ? typeof (options === null || options === void 0 ? void 0 : options.renderEmpty) === "function"
                            ? options === null || options === void 0 ? void 0 : options.renderEmpty()
                            : options === null || options === void 0 ? void 0 : options.renderEmpty
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

var useTree = function (initialTree, options) {
    if (options === void 0) { options = { idKey: "_id" }; }
    var _a = __read(useState(cloneDeep(initialTree)), 2), tree = _a[0], setTree = _a[1];
    var _b = __read(useState(null), 2); _b[0]; var setFilteredTree = _b[1];
    var idKey = options.idKey;
    var renderNode = options.renderNode || (function () { return null; });
    var filterFn = options.filterFn;
    if (!idKey && idKey !== 0) {
        throw new Error("You must provide an idKey to useTree");
    }
    var traverse = function (node, callback, level, parentNode) {
        var _a;
        if (level === void 0) { level = 0; }
        if (parentNode === void 0) { parentNode = null; }
        var result = callback(node, level, parentNode);
        var childrenResults = ((_a = node.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
            return traverse(child, callback, level + 1, node);
        })) || [];
        var final = __spreadArray([result], __read(childrenResults), false);
        return final;
    };
    var errMsg = "[react-hooks-kit][useTree] Node cannot be its own parent";
    var addNode = function (node, parentId) {
        if (!node[idKey] && node[idKey] !== 0) {
            node[idKey] = "".concat(UKey());
        }
        // check node[idKey] not equal to parentId
        if (node[idKey] === parentId) {
            if (options.strict) {
                throw new Error(errMsg);
            }
            else {
                console.error(errMsg);
                return errMsg;
            }
        }
        var parentExists = false;
        var nodeExists = false;
        errMsg = "[react-hooks-kit][useTree] Node with id ".concat(node[idKey], " already exists");
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === node[idKey]) {
                nodeExists = true;
                if (options.strict) {
                    throw new Error(errMsg);
                }
            }
        });
        if (nodeExists) {
            console.error(errMsg);
            return errMsg;
        }
        traverse(tree, function (currentNode) {
            var _a;
            if (currentNode[idKey] === parentId) {
                parentExists = true;
                if (!Array.isArray(currentNode.children)) {
                    currentNode.children = [];
                }
                (_a = currentNode.children) === null || _a === void 0 ? void 0 : _a.push(node);
            }
        });
        errMsg = "[react-hooks-kit][useTree] Parent with id ".concat(parentId, " does not exist");
        if (!parentExists && options.strict) {
            throw new Error(errMsg);
        }
        else if (!parentExists) {
            console.error(errMsg);
            return errMsg;
        }
        setTree(__assign({}, tree));
    };
    var removeNode = function (nodeId) {
        var errMsg = "[react-hooks-kit][removeNode] You must provide a nodeId to removeNode";
        if (!nodeId && nodeId !== 0) {
            if (options.strict) {
                throw new Error(errMsg);
            }
            else {
                console.error(errMsg);
                return errMsg;
            }
        }
        var nodeExists = false;
        traverse(tree, function (currentNode) {
            var _a, _b;
            if (currentNode[idKey] === nodeId) {
                nodeExists = true;
            }
            if ((_a = currentNode.children) === null || _a === void 0 ? void 0 : _a.some(function (child) { return child[idKey] === nodeId; })) {
                nodeExists = true;
            }
            currentNode.children =
                ((_b = currentNode.children) === null || _b === void 0 ? void 0 : _b.filter(function (child) { return child[idKey] !== nodeId; })) || [];
        });
        if (!nodeExists) {
            errMsg = "[react-hooks-kit][useTree] Node to remove with id ".concat(nodeId, " does not exist");
            if (options.strict) {
                throw new Error(errMsg);
            }
            else {
                console.error(errMsg);
                return errMsg;
            }
        }
        setTree(__assign({}, tree));
    };
    var updateNode = function (nodeId, newNodeData) {
        var errMsg = "[react-hooks-kit][useTree] You must provide a nodeId to updateNode";
        if (!nodeId && nodeId !== 0) {
            if (options.strict) {
                throw new Error(errMsg);
            }
            else {
                console.error(errMsg);
                return errMsg;
            }
        }
        var nodeExists = false;
        traverse(tree, function (currentNode) {
            if (currentNode[idKey] === nodeId) {
                nodeExists = true;
                Object.assign(currentNode, newNodeData);
            }
        });
        if (!nodeExists) {
            errMsg = "[react-hooks-kit][useTree] Node to update with id ".concat(nodeId, " does not exist");
            if (options.strict) {
                throw new Error(errMsg);
            }
            console.error(errMsg);
            return errMsg;
        }
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
        var results = [];
        traverse(tree, function (node) {
            if (filterFn(node)) {
                //@ts-ignore
                results.push(node);
            }
        });
        return results;
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
            var errMsg_1 = "[react-hooks-kit][useTree] Node to move with id ".concat(sourceNodeId, " does not exist");
            if (options.strict) {
                throw new Error(errMsg_1);
            }
            else {
                console.error(errMsg_1);
                return errMsg_1;
            }
        }
        removeNode(sourceNodeId);
        addNode(sourceNode, targetNodeId);
    };
    /**
     * Render the tree
     */
    var render = useCallback(function () {
        if (!renderNode) {
            throw new Error("[react-hooks-kit][useTree] You must provide a renderNode function to useTree");
        }
        if (!tree || "{}" === JSON.stringify(tree)) {
            return options.renderEmpty
                ? typeof options.renderEmpty === "function"
                    ? options.renderEmpty()
                    : options.renderEmpty
                : null;
        }
        return traverse(tree, function (node, level, parentNode) {
            // @ts-ignore @TODO
            return renderNode(node, idKey, level, parentNode, tree);
        });
    }, [tree, renderNode]);
    var $traverse = function (callbackOrId, cb) {
        if (typeof callbackOrId === "string") {
            var nodeId = callbackOrId;
            // Find the node and traverse it
            var foundNode = findNode(nodeId);
            if (!foundNode) {
                return [];
            }
            else {
                var callback = cb;
                // @ts-ignore
                return traverse(foundNode, callback);
            }
        }
        else {
            var callback = callbackOrId;
            // @ts-ignore
            return traverse(tree, callback);
        }
    };
    useEffect(function () {
        if (filterFn) {
            var result = traverse(tree, function (node) {
                // @ts-ignore @TODO
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
        {
            addNode: addNode,
            removeNode: removeNode,
            updateNode: updateNode,
            findNode: findNode,
            moveNode: moveNode,
            searchTree: searchTree,
            traverse: $traverse,
            render: render,
        },
    ];
};

function useForceUpdate() {
    var _a = __read(useState(0), 2), set = _a[1];
    return useCallback(function (callback) {
        set(function (pre) {
            callback === null || callback === void 0 ? void 0 : callback(pre);
            return pre + 1;
        });
    }, []);
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

var Reactive = /** @class */ (function () {
    function Reactive(obj, fsr) {
        this.__isReactive = true;
        var instance = new Proxy(obj, {
            // @ts-ignore
            get: function (target, prop, receiver) {
                var _a;
                if (prop === "toJSON") {
                    // || prop === "valueOf" || prop === "toString"
                    return function () { return unwrap(target); };
                }
                // Handle special Types
                var specialMethodHandler = handleSpecialMethods(target, prop, fsr);
                if (specialMethodHandler) {
                    return specialMethodHandler;
                }
                // Special handling for the size property of Map objects
                if ((target instanceof Map || target instanceof Set) && prop === "size") {
                    return target.size;
                }
                if (target instanceof Array && prop === "length") {
                    return target.length;
                }
                return (_a = target[prop]) === null || _a === void 0 ? void 0 : _a.value;
            },
            // @ts-ignore
            set: function (target, prop, value) {
                if (target[prop] && !isEqual(target[prop]["value"], value)) {
                    var update = function () {
                        // target[prop]["value"] = value;
                        // @ts-ignore
                        target[prop]["value"] =
                            // @ts-ignore
                            typeof value === "object" ? reactive(value, fsr) : value; // unwrap(deProxy(target))
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
        // @ts-ignore
        instance.__isReactive = true;
        // @ts-ignore
        return instance;
    }
    Reactive.isReactive = function (target) {
        // @ts-ignore
        return target === null || target === void 0 ? void 0 : target.__isReactive;
    };
    return Reactive;
}());
function handleSpecialMethods(target, prop, fsr) {
    var e_1, _a;
    var types = [Array, Date, Map, Set];
    var nonMutatingArrayMethods = [
        "concat",
        "join",
        "indexOf",
        "lastIndexOf",
        "includes",
        "with",
        // "slice",
        // "find",
        // "filter",
        // "reduce",
        // "some",
        // "every",
        // "reverse",
    ];
    var _loop_1 = function (Type) {
        if (target instanceof Type && prop in Type.prototype) {
            // @ts-ignore
            if (typeof target[prop] === "function") {
                return { value: function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        if (target instanceof Array && nonMutatingArrayMethods.includes(prop)) {
                            // @ts-ignore
                            return Array.prototype[prop].apply(unwrap(target), args);
                        }
                        if (["push", "unshift", "fill"].includes(prop)) {
                            // @ts-ignore
                            args = args.map(function (arg) { return deepProxy(arg, fsr); });
                        }
                        // @ts-ignore
                        var result = Type.prototype[prop].apply(target, args);
                        fsr === null || fsr === void 0 ? void 0 : fsr();
                        return result;
                    } };
            }
            else {
                return { value: target[prop] };
            }
        }
    };
    try {
        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
            var Type = types_1_1.value;
            var state_1 = _loop_1(Type);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
function deepProxy(obj, fsr) {
    if (typeof obj !== "object" || obj === null) {
        var wrapObj = { value: obj };
        return reactive(wrapObj, fsr);
    }
    else {
        return reactive(obj, fsr);
    }
}
function reactive(obj, fsr) {
    var proxyObj;
    if (obj instanceof Date) {
        proxyObj = new Date(obj.getTime());
    }
    else if (obj instanceof Map) {
        proxyObj = new Map(obj);
    }
    else if (obj instanceof Set) {
        proxyObj = new Set(obj);
    }
    else if (Array.isArray(obj)) {
        proxyObj = [];
        Object.setPrototypeOf(proxyObj, Array.prototype);
    }
    else {
        proxyObj = {};
    }
    for (var key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            proxyObj[key] = { value: reactive(obj[key], fsr) };
        }
        else {
            proxyObj[key] = { value: obj[key] };
        }
    }
    return new Reactive(proxyObj, fsr);
}
function unwrap(obj) {
    if (typeof obj !== "object" || obj === null || Reactive.isReactive(obj)) {
        return obj;
    }
    if ("value" in obj) {
        var value = obj.value;
        if (typeof value !== "object" || value === null || Reactive.isReactive(obj)) {
            return value;
        }
    }
    var unwrappedObj = Array.isArray(obj) ? [] : {};
    for (var key in obj) {
        unwrappedObj[key] = obj[key].value;
    }
    return unwrappedObj;
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
 * - **initialState** - support **primitives**, **object**, **array**, **Date**, **Map** and **Set** types.
 * If given a non-object type, it will return the proxy wrapped with struct `{value: T}`.
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
    var stateRef = useRef(initialState);
    useEffect(function () {
        if (typeof deep === "function") {
            callbacks.unshift(deep);
        }
        callbacks.forEach(function (callback) { return callback(stateRef.current); });
    }, [stateRef.current, callbacks]);
    useLayoutEffect(function () {
        var reactiveState = null;
        reactiveState = deep !== false ? deepProxy(initialState, fsr) : shallowProxy(initialState, fsr);
        stateRef.current = reactiveState;
        fsr();
    }, []);
    //@ts-ignore
    return stateRef.current;
}

var eventBus = { events: {} };
/**
 * Reactor is a state management tool based on React Hooks with the following features:
 * - View updates are only triggered by set invocation or value reassignment.
 * - Direct changes to deep state properties won't trigger view updates but are stored in memory and applied on the next view update.
 * - Reactor is a reactive, proxy, cloneable, resettable, dispatchable, serializable, subscribable, listenable, and pluginable object.
 * ---
 */
var Reactor = /** @class */ (function () {
    function Reactor(state, setState, plugins, deepSet) {
        if (deepSet === void 0) { deepSet = false; }
        var _this = this;
        this._setState = function (newState) {
            _this._state =
                newState instanceof Function ? newState(_this._state) : newState;
        };
        this._defaultValue = undefined;
        this._plugins = [];
        this._listeners = [];
        this._deepCloneWhenSet = false;
        this._id = UKey();
        this._state = state;
        this._defaultValue = cloneDeep(state);
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
    Object.defineProperty(Reactor.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
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
    // @toFix concurrency and asynchronous issues
    Reactor.prototype.setValue = function (newState) {
        var _this = this;
        var _a;
        var state = this._state;
        if (isEqual(this._state, newState))
            return;
        (_a = this._setState) === null || _a === void 0 ? void 0 : _a.call(this, function (prevState) {
            state = newState instanceof Function ? newState(prevState) : newState;
            // state has already been overwritten by newState, so it doesn't point to this._state refernce again.
            // we need to update this._state by ourselves.
            _this._state = state;
            return state;
        });
        this._listeners.forEach(function (listener) { return listener(state); });
        this._plugins.forEach(function (plugin) {
            var _a;
            (_a = plugin.onStateChange) === null || _a === void 0 ? void 0 : _a.call(plugin, state, _this);
        });
    };
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
    /**
     * Emit a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
     */
    Reactor.prototype.emit = function (eventName, payload) {
        (eventBus.events[eventName] || []).forEach(function (listener) { return listener(payload); });
    };
    /**
     * Listen a custom event on the event bus (Only Reactor instance, not shared with other hooks like useEmitter, useReceiver.etc)
     */
    Reactor.prototype.on = function (eventName, listener) {
        if (!eventBus.events[eventName]) {
            eventBus.events[eventName] = [];
        }
        eventBus.events[eventName].push(listener);
        return function () {
            eventBus.events[eventName] = eventBus.events[eventName].filter(function (l) { return l !== listener; });
        };
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
        var _this = this;
        this.setValue(function (prev) {
            // @ts-ignore
            var newValue = get(prev, path, true);
            if (value instanceof Function) {
                newValue = value(newValue);
            }
            else {
                newValue = value;
            }
            var newState = setTo(prev, path, newValue, deepSet !== null && deepSet !== void 0 ? deepSet : _this._deepCloneWhenSet);
            return newState;
        });
    };
    Reactor.prototype.cloneValue = function () {
        return cloneDeep(this._state);
    };
    Reactor.prototype.setDefaultValue = function (defaultValue) {
        this._defaultValue = defaultValue;
    };
    Reactor.prototype.getDefaultValue = function () {
        return this._defaultValue;
    };
    Reactor.prototype.reset = function () {
        this.setValue(this._defaultValue);
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
 * **useReactor** is a React Hook that returns a Reactor instance for advanced state management.
 * ### Parameters
 * - initialValue: `T` - The initial state value.
 * - plugins?: `ReactorPlugin<T>[]` - Optional array of plugins to extend Reactor functionality.
 *   - Each plugin can have: name, action, onStateChange, onAction callbacks.
 * ---
 * ### Return (Reactor Instance)
 * A Reactor instance with the following properties and methods:
 * - **value**: `T` - Get or set the current state value.
 * - **subscribe**: `(listener: (state: T) => any) => () => void` - Subscribe to state changes.
 * - **get**: `(path?: string) => any` - Get value by path (e.g., "user.name").
 * - **set**: `(path: string, value: any) => void` - Set value by path.
 * - **setValue**: `(newState: T | ((prev: T) => T)) => void` - Update the entire state.
 * - **dispatch**: `(action: string, payload?: any) => void` - Dispatch plugin actions.
 * - **emit**: `(eventName: string, payload?: any) => void` - Emit custom events.
 * - **on**: `(eventName: string, listener: Function) => () => void` - Listen to custom events.
 * - **clone**: `() => Reactor<T>` - Clone the reactor instance.
 * - **reset**: `() => void` - Reset to initial value.
 * - **toJSON**: `() => T` - Serialize to JSON.
 * ---
 * ### Usage
 * ```tsx
 * const reactor = useReactor({ count: 0, user: { name: "John" } });
 *
 * // Direct value access
 * reactor.value.count; // 0
 * reactor.value = { count: 1, user: { name: "Alice" } };
 *
 * // Path-based access
 * reactor.get("user.name"); // "John"
 * reactor.set("count", 10);
 *
 * // Subscribe to changes
 * reactor.subscribe((state) => console.log(state));
 *
 * // Reset to initial value
 * reactor.reset();
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useReactor } from "@evanpatchouli/react-hooks-kit";
 *
 * const Counter = () => {
 *   const reactor = useReactor({ count: 0 });
 *
 *   return (
 *     <div>
 *       <p>Count: {reactor.value.count}</p>
 *       <button onClick={() => reactor.set("count", reactor.get("count") + 1)}>
 *         Increment
 *       </button>
 *       <button onClick={() => reactor.reset()}>
 *         Reset
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why useReactor instead of useState?
 * - A: Reactor provides advanced features like path-based access, subscriptions, plugins, and event system.
 * ---
 * - Q: When should I use plugins?
 * - A: Use plugins to add custom logic that runs on state changes or actions, like logging, validation, or side effects.
 * ---
 * - Q: Can I use Reactor outside of React components?
 * - A: Yes, you can create a Reactor instance directly using `new Reactor(initialValue)`, but it won't trigger React re-renders.
 */
var useReactor = function (initialValue, plugins) {
    var _a = __read(useState(initialValue), 2), state = _a[0], setState = _a[1];
    var reactorRef = useRef(null);
    // Reassign if initial value changes.
    // useEffect(() => {
    //   if (reactorRef.current) {
    //     reactorRef.current.setValue(initialValue);
    //     reactorRef.current.setDefaultValue(initialValue);
    //   }
    // }, [initialValue]);
    var reactor;
    if (reactorRef.current) {
        reactor = reactorRef.current;
        return reactor;
    }
    reactor = new Reactor(state, setState, plugins);
    reactorRef.current = reactor;
    return reactor;
};

/**
 * ### Parameters
 * - **initialState** - initial value of the state
 * - **tickBy**
 *   + **onSetState** - only when setState invoked will increment the tick
 *   + **onChange** - only when the dependencies change will increment the tick (useEffect)
 * - **dependencies** - default will be [state], you can pass a fn or an array:
 *
 * ---
 *
 * ```ts
 *
 * useTickState(0, "onChange", (state) => [state])
 * // or
 * // use other variables as dependencies
 * useTickState(0, "onChange", [num])
 * ```
 */
var useTickState = function (initialState, tickBy, dependencies) {
    if (tickBy === void 0) { tickBy = "onSetState"; }
    var _a = __read(useState(tickBy === "onSetState" ? 0 : -1), 2), tick = _a[0], setTick = _a[1];
    var _b = __read(useState(initialState), 2), state = _b[0], _setState = _b[1];
    var setState = function (value) {
        _setState(value);
        if (tickBy === "onSetState") {
            setTick(function (pre) { return pre + 1; });
        }
    };
    useEffect(function () {
        if (tickBy === "onChange") {
            setTick(function (pre) { return pre + 1; });
        }
    }, dependencies
        ? typeof dependencies === "function"
            ? dependencies(state)
            : dependencies
        : [state]);
    return [state, setState, tick];
};

/**
 * ### useMemento
 * #### Parameters
 * - initialState - The initial state.
 * - config - The config.
 * @returns [state, setState, mementoManager]
 */
var useMemento = function (initialState, config) {
    var _a = __read(useState({
        idKey: UKey(),
        data: initialState !== null && initialState !== void 0 ? initialState : null,
    }), 2), state = _a[0], setState = _a[1];
    var _b = __read(useState([state]), 2), history = _b[0], setHistory = _b[1];
    var _c = __read(useState([]), 2), mementos = _c[0], setMementos = _c[1];
    var historySize = useMemo(function () {
        return typeof (config === null || config === void 0 ? void 0 : config.historySize) === "number"
            ? config.historySize
            : (config === null || config === void 0 ? void 0 : config.historySize) === void 0
                ? 10
                : (config === null || config === void 0 ? void 0 : config.historySize)
                    ? 10
                    : 0;
    }, [config === null || config === void 0 ? void 0 : config.historySize]);
    // When history size changed, slice the history to latest historySize.
    useEffect(function () {
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
        setMementos(__spreadArray(__spreadArray([], __read(mementos), false), [__assign(__assign({}, state), { name: name })], false));
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
                    return __spreadArray(__spreadArray([], __read(prev), false), [state], false);
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
        return newState;
    };
    var setNewState = function (newData) {
        setState(function (pre) {
            var newState = calcNewState(newData, pre);
            if (!history.some(function (item) { return item.idKey === newState.idKey; })) {
                setHistory(function (h) {
                    if (history.length - 1 === historySize) {
                        return __spreadArray(__spreadArray([], __read(history.slice(1)), false), [newState], false);
                    }
                    return __spreadArray(__spreadArray([], __read(history), false), [newState], false);
                });
            }
            return newState;
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
    var clear = function (initialState) {
        setState({ idKey: Number.NaN, data: initialState !== null && initialState !== void 0 ? initialState : null });
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

function useReflect(initialValue) {
    var ref = useRef(initialValue);
    var fsr = useForceUpdate();
    return {
        get: function (prop) {
            if (prop === void 0 || ref.current === null) {
                // @ts-ignore
                return ref.current;
            }
            // @ts-ignore
            return Reflect.get(ref.current, prop);
        },
        set: function (key, val) {
            var res = Reflect.set(ref.current, key, val);
            fsr();
            return res;
        },
        has: function (key) {
            return Reflect.has(ref.current, key);
        },
        apply: function (func) {
            var result = Reflect.apply(func, ref.current, [ref.current]);
            fsr();
            return result;
        },
    };
}

/* -------------------------------------------------------------------------- */
/*                                implementation                              */
/* -------------------------------------------------------------------------- */
var useTicker = function (fn, durationOrOptions, options) {
    /* ------------------------- normalize arguments ------------------------- */
    var duration;
    if (typeof durationOrOptions === "number") {
        duration = durationOrOptions;
    }
    else if (typeof durationOrOptions === "object") {
        options = durationOrOptions;
    }
    var _options = useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        var immediate = typeof (options === null || options === void 0 ? void 0 : options.immediate) === "boolean"
            ? options.immediate
                ? "all"
                : "none"
            : ((_a = options === null || options === void 0 ? void 0 : options.immediate) !== null && _a !== void 0 ? _a : "none");
        return {
            immediate: immediate,
            callAtFirst: (_b = options === null || options === void 0 ? void 0 : options.callAtFirst) !== null && _b !== void 0 ? _b : true,
            pauseAtFirst: (_c = options === null || options === void 0 ? void 0 : options.pauseAtFirst) !== null && _c !== void 0 ? _c : false,
            duration: (_e = (_d = options === null || options === void 0 ? void 0 : options.duration) !== null && _d !== void 0 ? _d : duration) !== null && _e !== void 0 ? _e : 1000,
            delay: (_f = options === null || options === void 0 ? void 0 : options.delay) !== null && _f !== void 0 ? _f : 0,
        };
    }, [options, duration]);
    /* ----------------------------- state / refs ----------------------------- */
    var _a = __read(useState(0), 2), tick = _a[0], setTick = _a[1];
    var _b = __read(useState(_options.pauseAtFirst), 2), paused = _b[0], setPaused = _b[1];
    var tickRef = useRef(0);
    var timerRef = useRef(null);
    var fnRef = useRef(fn);
    fnRef.current = fn;
    var status = paused ? "off" : "on";
    /* ------------------------------- helpers ------------------------------- */
    var clear = useCallback(function () {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);
    /* ----------------------------- core ticker ----------------------------- */
    var schedule = useCallback(function () {
        clear();
        timerRef.current = setTimeout(function () {
            tickRef.current += 1;
            var next = tickRef.current;
            setTick(next);
            if (_options.callAtFirst || next > 0) {
                fnRef.current(next);
            }
            if (!paused) {
                schedule(); // recursion (NO interval, NO race)
            }
        }, _options.duration);
    }, [_options.duration, _options.callAtFirst, paused, clear]);
    /* ------------------------------ controls ------------------------------- */
    var pause = useCallback(function () {
        setPaused(true);
        clear();
    }, [clear]);
    var resume = useCallback(function () {
        setPaused(false);
    }, []);
    var reset = useCallback(function () {
        tickRef.current = 0;
        setTick(0);
    }, []);
    var delayedPause = useCallback(function (delay) {
        setTimeout(pause, delay);
    }, [pause]);
    var delayedResume = useCallback(function (delay) {
        setTimeout(resume, delay);
    }, [resume]);
    /* ------------------------------ lifecycle ------------------------------ */
    // start / resume
    useEffect(function () {
        if (!paused) {
            schedule();
        }
        return clear;
    }, [paused, schedule, clear]);
    // immediate behaviors
    useEffect(function () {
        var runImmediate = function () {
            if (_options.immediate === "mounted" || _options.immediate === "all") {
                fnRef.current(0);
            }
        };
        var id = setTimeout(runImmediate, _options.delay);
        return function () { return clearTimeout(id); };
    }, [_options.immediate, _options.delay]);
    /* ----------------------------------------------------------------------- */
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

function debounce$1(fn, delay, immediate, callback) {
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
                // 设置延迟来重置isInvoke状态
                timer = setTimeout(function () {
                    isInvoke = false;
                    timer = null;
                }, delay);
            }
            else {
                isInvoke = true;
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
    var fnRef = useRef(fn);
    var optionsRef = useRef({ immediate: immediate, callback: callback });
    fnRef.current = fn;
    optionsRef.current = { immediate: immediate, callback: callback };
    var debounceFn = useMemo(function () {
        if (delay < 0) {
            return emptyFn$1;
        }
        if (delay === 0) {
            return fnRef.current;
        }
        return debounce$1(fnRef.current, delay, optionsRef.current.immediate, optionsRef.current.callback);
    }, [delay]);
    return debounceFn;
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
            var nowTime = Date.now();
            if (!lastTime && !leading)
                lastTime = nowTime;
            // 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数
            var remainTime = interval - (nowTime - lastTime);
            if (remainTime <= 0 || remainTime > interval) {
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
                    lastTime = !leading ? 0 : Date.now();
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
    var fnRef = useRef(fn);
    var optionsRef = useRef(options);
    fnRef.current = fn;
    optionsRef.current = options;
    var throttleFn = useMemo(function () {
        if (interval < 0) {
            return emptyFn;
        }
        if (interval === 0) {
            return fnRef.current;
        }
        return throttle(fnRef.current, interval, optionsRef.current);
    }, [interval]);
    return throttleFn;
}

function getParams(url, mode, autoParams, stringifyParams, custom) {
    var _a;
    if (mode === void 0) { mode = "auto"; }
    if (autoParams === void 0) { autoParams = []; }
    if (stringifyParams === void 0) { stringifyParams = []; }
    if (custom === void 0) { custom = {}; }
    var params = {};
    var searchParams = new URL(url, window.location.href).searchParams;
    // 先处理 custom 对象
    for (var key in custom) {
        var value = searchParams.get(key);
        params[key] = (_a = custom[key]) === null || _a === void 0 ? void 0 : _a.call(custom, value !== null && value !== void 0 ? value : undefined);
    }
    searchParams.forEach(function (decodedValue, decodedKey) {
        if (custom[decodedKey]) {
            return;
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
            else if (decodedValue !== "" && !isNaN(Number(decodedValue))) {
                params[decodedKey] = Number(decodedValue);
            }
            else {
                params[decodedKey] = decodedValue;
            }
        }
        else {
            params[decodedKey] = decodedValue;
        }
    });
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
        var history = window.history;
        return __assign(__assign(__assign({ params: getParams(window.location.href, config === null || config === void 0 ? void 0 : config.mode, config === null || config === void 0 ? void 0 : config.autoParams, config === null || config === void 0 ? void 0 : config.stringifyParams, config === null || config === void 0 ? void 0 : config.custom), name: name }, window.location), history), { back: history.back.bind(history), forward: history.forward.bind(history), go: history.go.bind(history), pushState: history.pushState.bind(history), replaceState: history.replaceState.bind(history) });
    }
    var _a = __read(useState(getUrlInfo()), 2), urlInfo = _a[0], setUrlInfo = _a[1];
    var memoizedConfig = useMemo(function () { return config; }, [config.mode, config.autoParams, config.stringifyParams, config.custom]);
    useEffect(function () {
        if (immediate) {
            var urlInfo_1 = getUrlInfo();
            callback === null || callback === void 0 ? void 0 : callback(urlInfo_1);
            setUrlInfo(urlInfo_1);
        }
    }, [immediate, JSON.stringify(memoizedConfig), name]);
    useEffect(function () {
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
    var _a = __read(useState(initValue), 2), value = _a[0], setValue = _a[1];
    var oldValueRef = useRef(value);
    var mountedRef = useRef(false);
    useEffect(function () {
        if (!mountedRef.current && immediate) {
            callback === null || callback === void 0 ? void 0 : callback(value, oldValueRef.current);
            mountedRef.current = true;
        }
    }, []);
    useEffect(function () {
        var newValue = undefined;
        try {
            newValue = getter(object, path, strict);
        }
        catch (error) {
            console.error(error);
        }
        if (!isEqual(newValue, oldValueRef.current)) {
            callback === null || callback === void 0 ? void 0 : callback(newValue, oldValueRef.current);
            setValue(newValue);
            oldValueRef.current = newValue;
        }
    }, [object, path, callback]);
    return value; // PathValue<T, P> | undefined;
};

function WatchGetterAnimation(getter, callback, updater) {
    var _a = __read(useState(getter()), 2), value = _a[0], setValue = _a[1];
    var valueRef = useRef(value);
    useEffect(function () {
        var animationFrameId;
        var loop = function () {
            var newValue = getter();
            if (newValue !== valueRef.current) {
                valueRef.current = newValue;
                setValue(newValue);
                callback === null || callback === void 0 ? void 0 : callback(newValue);
            }
            animationFrameId = requestAnimationFrame(loop);
        };
        loop();
        return function () {
            cancelAnimationFrame(animationFrameId);
        };
    }, [getter]);
    var update = function () {
        var newValue = getter();
        if (newValue !== valueRef.current) {
            valueRef.current = newValue;
            setValue(newValue);
            callback === null || callback === void 0 ? void 0 : callback(newValue);
        }
    };
    // @ts-ignore
    return updater ? [value, update] : value;
}
function useWatchGetter(getter, callback, updater) {
    if (callback === void 0) { callback = function () { }; }
    if (updater === void 0) { updater = false; }
    return WatchGetterAnimation(getter, callback, updater);
}

/**
 *
 * @param target
 * @param callback
 * @param immediate
 */
var useReactorListener = function (target, callback, immediate) {
    if (immediate === void 0) { immediate = false; }
    useEffect(function () {
        var unsubscribe = listen(target).then(callback);
        if (immediate) {
            callback(target.value);
        }
        return function () { return unsubscribe(); };
    }, [target.id]);
};

function useResize(_a, deps) {
    var _b = _a === void 0 ? {} : _a, callback = _b.callback, target = _b.target;
    if (deps === void 0) { deps = []; }
    var _c = __read(useState({ width: 0, height: 0 }), 2), size = _c[0], setSize = _c[1];
    useLayoutEffect(function () {
        if (target) {
            var element_1 = typeof target === "string" ? document.getElementById(target) : target.current;
            if (element_1) {
                var resizeObserver_1 = new ResizeObserver(function (entries) {
                    entries.forEach(function (entry) {
                        setSize({ width: entry.target.clientWidth, height: entry.target.clientHeight });
                        callback === null || callback === void 0 ? void 0 : callback({
                            width: entry.target.clientWidth,
                            height: entry.target.clientHeight,
                        });
                    });
                });
                resizeObserver_1.observe(element_1);
                return function () {
                    resizeObserver_1.unobserve(element_1);
                };
            }
        }
        else {
            var updateSize_1 = function () {
                setSize({ width: window.innerWidth, height: window.innerHeight });
                callback === null || callback === void 0 ? void 0 : callback({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };
            window.addEventListener("resize", updateSize_1);
            updateSize_1();
            return function () { return window.removeEventListener("resize", updateSize_1); };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    return size;
}

function usePromise(promiseFn, callbacksOrDeps, deps) {
    var callbacks = {};
    if (Array.isArray(callbacksOrDeps)) {
        deps = callbacksOrDeps;
    }
    else if (callbacksOrDeps) {
        callbacks = callbacksOrDeps;
    }
    var _a = __read(useState({
        status: "idle",
        data: null,
        error: null,
    }), 2), state = _a[0], setState = _a[1];
    var promiseFnRef = useRef(promiseFn);
    var callbacksRef = useRef(callbacks);
    var requestIdRef = useRef(0);
    var activeRequestRef = useRef(null);
    promiseFnRef.current = promiseFn;
    callbacksRef.current = callbacks;
    var abort = useCallback(function () {
        var _a;
        (_a = activeRequestRef.current) === null || _a === void 0 ? void 0 : _a.controller.abort();
    }, []);
    var execute = useCallback(function () {
        var _a;
        (_a = activeRequestRef.current) === null || _a === void 0 ? void 0 : _a.controller.abort();
        var id = requestIdRef.current + 1;
        requestIdRef.current = id;
        var controller = new AbortController();
        activeRequestRef.current = { id: id, controller: controller };
        setState({ status: "pending", data: null, error: null });
        var promise;
        try {
            promise = promiseFnRef.current();
        }
        catch (error) {
            promise = Promise.reject(error);
        }
        Promise.resolve(promise)
            .then(function (data) {
            var _a, _b;
            var activeRequest = activeRequestRef.current;
            if (!controller.signal.aborted &&
                (activeRequest === null || activeRequest === void 0 ? void 0 : activeRequest.id) === id) {
                setState({ status: "resolved", data: data, error: null });
                (_b = (_a = callbacksRef.current).onResolve) === null || _b === void 0 ? void 0 : _b.call(_a, data);
            }
        })
            .catch(function (error) {
            var _a, _b;
            var activeRequest = activeRequestRef.current;
            if (controller.signal.aborted ||
                (activeRequest === null || activeRequest === void 0 ? void 0 : activeRequest.id) !== id) {
                return;
            }
            setState({ status: "rejected", data: null, error: error });
            (_b = (_a = callbacksRef.current).onReject) === null || _b === void 0 ? void 0 : _b.call(_a, error);
        })
            .finally(function () {
            var _a, _b;
            var activeRequest = activeRequestRef.current;
            if (!controller.signal.aborted &&
                (activeRequest === null || activeRequest === void 0 ? void 0 : activeRequest.id) === id) {
                (_b = (_a = callbacksRef.current).onFinally) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        });
    }, []);
    useEffect(function () {
        execute();
        return abort;
    }, __spreadArray([execute, abort], __read((deps || [])), false));
    return [state, abort, execute];
}

function useFetch(url, options, callbacks, deps) {
    var _this = this;
    if (deps === void 0) { deps = []; }
    var _a = __read(useState({
        data: null,
        loading: true,
        error: null,
    }), 2), state = _a[0], setState = _a[1];
    var optionsRef = useRef(options);
    var callbacksRef = useRef(callbacks);
    optionsRef.current = options;
    callbacksRef.current = callbacks;
    useEffect(function () {
        var abortController = new AbortController();
        var settled = false;
        setState(function (previousState) { return ({
            data: previousState.data,
            loading: true,
            error: null,
        }); });
        var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
            var requestOptions, response, error, data, error_1;
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _g.trys.push([0, 3, 4, 5]);
                        requestOptions = __assign(__assign({}, optionsRef.current), { signal: abortController.signal });
                        return [4 /*yield*/, fetch(url, requestOptions)];
                    case 1:
                        response = _g.sent();
                        if (!response.ok) {
                            error = {
                                status: response.status,
                                statusText: response.statusText,
                            };
                            throw error;
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = (_g.sent());
                        if (!abortController.signal.aborted) {
                            settled = true;
                            setState({ data: data, loading: false, error: null });
                            (_b = (_a = callbacksRef.current) === null || _a === void 0 ? void 0 : _a.onResolve) === null || _b === void 0 ? void 0 : _b.call(_a, data);
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _g.sent();
                        if (!abortController.signal.aborted) {
                            settled = true;
                            setState({ data: null, loading: false, error: error_1 });
                            (_d = (_c = callbacksRef.current) === null || _c === void 0 ? void 0 : _c.onReject) === null || _d === void 0 ? void 0 : _d.call(_c, error_1);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        if (!abortController.signal.aborted && !settled) {
                            settled = true;
                        }
                        if (!abortController.signal.aborted) {
                            (_f = (_e = callbacksRef.current) === null || _e === void 0 ? void 0 : _e.onFinally) === null || _f === void 0 ? void 0 : _f.call(_e);
                        }
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        void fetchData();
        return function () {
            abortController.abort();
        };
    }, __spreadArray([url], __read(deps), false));
    return state;
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
    var _a = __read(useState({
        value: undefined,
        done: false,
        error: null,
    }), 2), state = _a[0], setState = _a[1];
    useEffect(function () {
        var active = true;
        var generator = generatorFn();
        var handleError = function (error) {
            if (active) {
                setState(function (prevState) { return (__assign(__assign({}, prevState), { error: error })); });
            }
        };
        var iterate = function (nextValue) {
            var result;
            try {
                result = generator.next(nextValue);
            }
            catch (error) {
                handleError(error);
                return;
            }
            if (result.done) {
                if (active) {
                    setState(function (prevState) { return (__assign(__assign({}, prevState), { done: true })); });
                }
            }
            else {
                Promise.resolve(result.value).then(function (value) {
                    if (!active)
                        return;
                    setState({ value: value, done: false, error: null });
                    iterate(value);
                }, handleError);
            }
        };
        setState({ value: undefined, done: false, error: null });
        iterate();
        return function () {
            active = false;
        };
    }, [generatorFn]);
    return state;
}

var useForm = function (schema, formRef) {
    var formSchema = schema;
    var onSubmit = function (handler, validates) {
        return function (e) { return __awaiter(void 0, void 0, void 0, function () {
            var fieldsTovalidate, formData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, formController.validates(fieldsTovalidate)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        formData = formController.gets();
                        handler(formData);
                        return [2 /*return*/];
                }
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
            return new Promise(function (resolve) {
                if (value === undefined || value === null || "".concat(value).trim() === "") {
                    if (formSchema[key].required) {
                        console.warn("".concat(String(key), " is required"), "warning");
                        return resolve(false);
                    }
                }
                if (validator) {
                    Promise.resolve()
                        .then(function () { return validator(value); })
                        .then(function (errorMessage) {
                        if (errorMessage) {
                            console.warn(errorMessage, "warning");
                            resolve(false);
                        }
                        else {
                            resolve(true);
                        }
                    })
                        .catch(function (error) {
                        console.warn(error, "warning");
                        resolve(false);
                    });
                }
                else {
                    resolve(true);
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

/**
 *
 * @example
 * ```ts
 * const { module, loading, error } = useLazy(() => import('./MyModule'));
 * ```
 */
function useLazy(importFunction) {
    var _a = __read(useState(null), 2), module = _a[0], setModule = _a[1];
    var _b = __read(useState(true), 2), loading = _b[0], setLoading = _b[1];
    var _c = __read(useState(null), 2), error = _c[0], setError = _c[1];
    useEffect(function () {
        var active = true;
        importFunction()
            .then(function (mod) {
            if (!active)
                return;
            setModule(mod);
            setLoading(false);
        })
            .catch(function (err) {
            if (!active)
                return;
            setError(err);
            setLoading(false);
        });
        return function () {
            active = false;
        };
    }, []);
    return { module: module, loading: loading, error: error };
}

var LazySourceBuilder = function (src, loaded, error) {
    var _src = new String(src);
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
        $defaultSrc = (_e = defaultSrc.defaultSrc) !== null && _e !== void 0 ? _e : "";
        $errorSrc = (_f = defaultSrc.errorSrc) !== null && _f !== void 0 ? _f : "";
        $actions = (_g = defaultSrc.actions) !== null && _g !== void 0 ? _g : {};
    }
    var _h = __read(useState(LazySourceBuilder($defaultSrc)), 2), source = _h[0], setSource = _h[1];
    var defaultSrcRef = useRef($defaultSrc);
    var errorSrcRef = useRef($errorSrc);
    var actionsRef = useRef($actions);
    defaultSrcRef.current = $defaultSrc;
    errorSrcRef.current = $errorSrc;
    actionsRef.current = $actions;
    useEffect(function () {
        var active = true;
        var img = new Image();
        setSource(LazySourceBuilder(defaultSrcRef.current));
        img.onload = function () {
            var _a, _b;
            if (!active)
                return;
            setSource(LazySourceBuilder($src, true, false));
            (_b = (_a = actionsRef.current).onLoad) === null || _b === void 0 ? void 0 : _b.call(_a, true);
        };
        img.onerror = function () {
            var _a, _b;
            if (!active)
                return;
            setSource(LazySourceBuilder(errorSrcRef.current || defaultSrcRef.current, false, true));
            (_b = (_a = actionsRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, true);
        };
        img.src = $src;
        return function () {
            active = false;
            img.onload = null;
            img.onerror = null;
        };
    }, [$src]);
    return source;
};

var useMixRef = function (refs) {
    var setRefs = useCallback(function (node) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(node);
            }
            else if (ref) {
                ref.current = node;
            }
        });
    }, [refs]);
    return setRefs;
};

// 派发StorageEvent事件
var dispatchStorageEvent = function (key, newValue) {
    var event = new StorageEvent('storage', {
        key: key,
        newValue: newValue,
        oldValue: undefined,
        url: window.location.href,
    });
    window.dispatchEvent(event);
};
var readStoredValue = function (key, initialValue) {
    try {
        var item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
        console.error(error);
        return initialValue;
    }
};
function useLocalStorage(key, initialValue) {
    var initialValueRef = useRef(initialValue);
    initialValueRef.current = initialValue;
    var _a = __read(useState(function () {
        return readStoredValue(key, initialValue);
    }), 2), storedValue = _a[0], setStoredValue = _a[1];
    var setValue = useCallback(function (value) {
        try {
            var valueToStore = value === undefined ? null : JSON.stringify(value);
            window.localStorage.setItem(key, valueToStore);
            dispatchStorageEvent(key, valueToStore);
        }
        catch (error) {
            console.error(error);
        }
    }, [key]);
    useEffect(function () {
        setStoredValue(readStoredValue(key, initialValueRef.current));
        var handleStorageChange = function (event) {
            if (event.key === key) {
                if (!event.newValue) {
                    setStoredValue(initialValueRef.current);
                    return;
                }
                try {
                    setStoredValue(JSON.parse(event.newValue));
                }
                catch (error) {
                    console.error(error);
                    setStoredValue(initialValueRef.current);
                }
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return function () {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [key]);
    return [storedValue, setValue];
}

function useIndexedDB(dbName, version, upgradeCallback) {
    var _a = __read(useState({ db: null, error: null }), 2), state = _a[0], setState = _a[1];
    var upgradeCallbackRef = useRef(upgradeCallback);
    useEffect(function () {
        upgradeCallbackRef.current = upgradeCallback;
    }, [upgradeCallback]);
    useEffect(function () {
        var active = true;
        var db = null;
        var request = null;
        setState({ db: null, error: null });
        try {
            request = indexedDB.open(dbName, version);
        }
        catch (error) {
            setState({ db: null, error: error });
            return function () {
                active = false;
            };
        }
        request.onupgradeneeded = function (event) {
            upgradeCallbackRef.current(request.result);
        };
        request.onsuccess = function () {
            var openedDb = request.result;
            if (!active) {
                openedDb.close();
                return;
            }
            db = openedDb;
            setState({ db: openedDb, error: null });
        };
        request.onerror = function () {
            if (active) {
                setState({ db: null, error: request.error });
            }
        };
        return function () {
            active = false;
            db === null || db === void 0 ? void 0 : db.close();
            db = null;
        };
    }, [dbName, version]);
    return state;
}

function useBeforeMount(callback) {
    var callbackRef = useRef(callback);
    var hasRunRef = useRef(false);
    // 在组件挂载前执行回调
    if (!hasRunRef.current) {
        hasRunRef.current = true;
        callbackRef.current();
    }
    // 确保回调在组件卸载时不会再次执行
    useEffect(function () { }, []);
}

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
    useEffect(function () {
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

function useUnmount(callback) {
    var callbackRef = useRef(callback);
    callbackRef.current = callback;
    useEffect(function () {
        return function () {
            callbackRef.current();
        };
    }, []);
}

var useUpdate = function (callback, dependencies) {
    var firstRenderRef = useRef(true);
    useEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

var useUpdateEffect = function (callback, dependencies) {
    var firstRenderRef = useRef(true);
    useEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

function useAsyncEffect(effect, deps, options) {
    var _this = this;
    if (deps === void 0) { deps = []; }
    useEffect(function () {
        var active = true;
        var cleanup;
        var runEffect = function () { return __awaiter(_this, void 0, void 0, function () {
            var nextCleanup, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        return [4 /*yield*/, effect()];
                    case 1:
                        nextCleanup = _b.sent();
                        if (active) {
                            cleanup = nextCleanup;
                        }
                        else {
                            nextCleanup === null || nextCleanup === void 0 ? void 0 : nextCleanup();
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _b.sent();
                        if (options === null || options === void 0 ? void 0 : options.onError) {
                            options.onError(error_1);
                        }
                        else {
                            throw error_1;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        (_a = options === null || options === void 0 ? void 0 : options.onFinally) === null || _a === void 0 ? void 0 : _a.call(options);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        void runEffect();
        return function () {
            active = false;
            cleanup === null || cleanup === void 0 ? void 0 : cleanup();
            cleanup = undefined;
        };
    }, deps);
}

// 创建一个全局的事件监听器列表
var globalListeners = new Map();
// 创建一个 Context 来共享 globalListeners
var GlobalListenersContext = createContext(globalListeners);
// @ts-ignore
function useEmitter(nameOrConfig, initialEventNameOrConfig, 
// @ts-ignore
initialListener, config) {
    var globalListeners = useContext(GlobalListenersContext);
    // 根据参数类型确定实际的参数值
    var configActual = {};
    if (typeof nameOrConfig === "string") {
        configActual.name = nameOrConfig;
        if (typeof initialEventNameOrConfig === "string") {
            configActual.initialEventName = initialEventNameOrConfig;
            configActual.initialListener = initialListener;
        }
        else if (typeof initialEventNameOrConfig === "object") {
            Object.entries(initialEventNameOrConfig).map(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                if (value !== void 0) {
                    // @ts-ignore
                    configActual[key] = value;
                }
            });
        }
    }
    else {
        configActual = nameOrConfig || {};
    }
    if (!configActual.name) {
        configActual.name = "_emitter_".concat(UKey());
    }
    if (!configActual.namespace) {
        configActual.namespace = "default";
    }
    // 如果没有传入 name，使用 Ukey 方法生成一个唯一的名称
    var listenerName = configActual.name;
    var emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        globalListeners.forEach(function (value, key) {
            if (key.startsWith("".concat(configActual.namespace, "_").concat(eventName, "_"))) {
                value.listener.apply(value, __spreadArray([], __read(args), false));
            }
        });
    };
    var subscribe = function (eventName, listener) {
        var key = "".concat(configActual.namespace, "_").concat(eventName, "_").concat(listenerName);
        if (globalListeners.has(key)) {
            throw new Error("[react-hooks-kit][useEmitter] Listener ".concat(listenerName, " has already registered for event ").concat(eventName));
        }
        globalListeners.set(key, { eventName: eventName, listenerName: listenerName, listener: listener });
    };
    var unsubscribe = function (eventName) {
        var key = "".concat(configActual.namespace, "_").concat(eventName, "_").concat(listenerName);
        globalListeners.delete(key);
    };
    var unsubscribeAll = function () {
        var keysToDelete = [];
        globalListeners.forEach(function (value, key) {
            if (key.endsWith("_".concat(listenerName))) {
                keysToDelete.push(key);
            }
        });
        keysToDelete.forEach(function (key) {
            globalListeners.delete(key);
        });
    };
    useEffect(function () {
        if (configActual.initialEventName && configActual.initialListener) {
            subscribe(configActual.initialEventName, configActual.initialListener);
        }
        return function () {
            globalListeners.forEach(function (value, key) {
                if (key.endsWith("_".concat(listenerName))) {
                    globalListeners.delete(key);
                }
            });
        };
    }, [configActual.initialEventName, configActual.initialListener]);
    return { name: listenerName, emit: emit, subscribe: subscribe, unsubscribe: unsubscribe, unsubscribeAll: unsubscribeAll };
}

function useReceiver(eventNameOrOptions, callback) {
    var eventName;
    var name;
    var namespace;
    var cb;
    if (typeof eventNameOrOptions === "string") {
        eventName = eventNameOrOptions;
        name = "_receiver_".concat(UKey());
        namespace = "default";
        cb = callback;
    }
    else {
        eventName = eventNameOrOptions.eventName;
        name = eventNameOrOptions.name || "_receiver_".concat(UKey());
        namespace = eventNameOrOptions.namespace || "default";
        if (eventNameOrOptions.callback && callback) {
            console.warn("[react-hooks-kit][useReceiver] callback is ignored when options.callback is set");
        }
        cb = eventNameOrOptions.callback || callback;
    }
    var _a = useEmitter({
        name: name,
        namespace: namespace,
    }), subscribe = _a.subscribe, unsubscribe = _a.unsubscribe, emit = _a.emit;
    var _b = __read(useState(true), 2), isListening = _b[0], setIsListening = _b[1];
    var _c = __read(useState(null), 2), eventResult = _c[0], setEventResult = _c[1];
    var callbackRef = useRef(cb);
    callbackRef.current = cb;
    var eventListener = useCallback(function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setEventResult(args);
        (_a = callbackRef.current) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([callbackRef], __read(args), false));
    }, []);
    useEffect(function () {
        subscribe(eventName, eventListener);
        return function () {
            unsubscribe(eventName);
        };
    }, [eventName, eventListener]);
    var stopListening = useCallback(function () {
        unsubscribe(eventName);
        setIsListening(false);
    }, [eventName]);
    var startListening = useCallback(function () {
        subscribe(eventName, eventListener);
        setIsListening(true);
    }, [eventName, eventListener]);
    var reveiver = {
        stop: stopListening,
        start: startListening,
        reset: setEventResult,
        isListening: isListening,
        get emit() {
            return emit;
        },
    };
    return [eventResult, reveiver];
}

function useBroadcastChannel(channelName, messageHandler, parser) {
    if (parser === void 0) { parser = true; }
    var channelRef = useRef(null);
    useEffect(function () {
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

function useProvide(name, state, options) {
    var emitter = useEmitter("__Provider::".concat(name), {
        namespace: (options === null || options === void 0 ? void 0 : options.namespace) || "__provide_inject__",
        initialEventName: "__Inject::".concat(name, "::query"),
        initialListener: function () {
            emitter.emit("__Provider::".concat(name), state, options === null || options === void 0 ? void 0 : options.setState);
        },
    });
    useEffect(function () {
        emitter.emit("__Provider::".concat(name), state, options === null || options === void 0 ? void 0 : options.setState);
    }, [name, state, options === null || options === void 0 ? void 0 : options.setState, options === null || options === void 0 ? void 0 : options.namespace]);
}

/**
 * useInject is a hook that can be used to inject a value from a provider.
 *
 * ---
 * ### Parameters
 * - `name` - The name of the provider to inject from.
 *
 * ---
 * ### Returns
 * - [0]`value` - The value of the provider.
 * - [1]`setValue` - A function to set the value of the provider.
 */
function useInject(name, options) {
    // @ts-ignore
    var _a = __read(useReceiver({
        name: "__Inject::".concat(name, "_").concat(UKey()),
        eventName: "__Provider::".concat(name),
        namespace: (options === null || options === void 0 ? void 0 : options.namespace) || "__provide_inject__",
        callback: function (value) {
            var _a;
            (_a = options === null || options === void 0 ? void 0 : options.callback) === null || _a === void 0 ? void 0 : _a.call(options, value);
            return value;
        },
    }), 2), result = _a[0], emit = _a[1].emit;
    var query = function () { return emit("__Inject::".concat(name, "::query"), true); };
    useEffect(function () {
        query();
    }, []);
    return [result === null || result === void 0 ? void 0 : result[0], result === null || result === void 0 ? void 0 : result[1]];
}

function useTheme(arg1, arg2) {
    var _a = __read(useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), 2), theme = _a[0], setTheme = _a[1];
    var handleThemeChange = useCallback(function (handler) {
        return function (e) {
            var newTheme = e.matches ? "dark" : "light";
            setTheme(newTheme);
            handler(newTheme);
        };
    }, []);
    useEffect(function () {
        var matcher = window.matchMedia("(prefers-color-scheme: dark)");
        var handler = null;
        var shouldListen = typeof arg1 === "boolean" ? arg1 : true;
        var onThemeChange = typeof arg1 === "function" ? arg1 : arg2;
        if (!shouldListen) {
            return;
        }
        handler = handleThemeChange(onThemeChange !== null && onThemeChange !== void 0 ? onThemeChange : (function () { }));
        if (matcher.addEventListener) {
            matcher.addEventListener("change", handler);
        }
        else {
            matcher.addListener(handler);
        }
        return function () {
            if (handler) {
                if (matcher.removeEventListener) {
                    matcher.removeEventListener("change", handler);
                }
                else {
                    matcher.removeListener(handler);
                }
            }
        };
    }, [arg1, arg2, handleThemeChange]);
    return theme;
}

var createRoot$1 = function (parentDocument) {
    var root = {
        render: function (element) {
            ReactDom.render(element, parentDocument);
        },
        unmount: function () {
            ReactDom.unmountComponentAtNode(parentDocument);
        },
    };
    return root;
};
if ("createRoot" in ReactDomClient) {
    // Adapt to React 18
    createRoot$1 = ReactDomClient.createRoot;
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
    var _a = __read(useState(__assign(__assign({}, defaultConfig), config)), 2), toastConfig = _a[0], setToastConfig = _a[1];
    var toastRef = useRef(null);
    var activeToastsRef = useRef(new Set());
    var delayedToastsRef = useRef(new Set());
    toastRef.current = useCallback(function (text, config) {
        var _a;
        if (config === void 0) { config = {}; }
        var _config = __assign(__assign(__assign({}, toastConfig), config), (text !== undefined ? { text: text } : {}));
        setToastConfig(_config);
        var showToast = function () {
            var _a;
            var element = document.createElement("div");
            var root = createRoot$1(element);
            var instance = { element: element, root: root };
            var placement = _config.placement;
            var placementStyle = typeof placement === "object"
                ? {
                    left: "".concat(placement.x, "px"),
                    top: "".concat(placement.y, "px"),
                    transform: "none",
                }
                : placement === "center"
                    ? {
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }
                    : placement === "bottom"
                        ? {
                            left: "50%",
                            bottom: "10%",
                            transform: "translateX(-50%)",
                        }
                        : {
                            left: "50%",
                            top: "10%",
                            transform: "translateX(-50%)",
                        };
            var removeToast = function () {
                if (instance.timer !== undefined) {
                    clearTimeout(instance.timer);
                    instance.timer = undefined;
                }
                instance.root.unmount();
                if (instance.element.parentNode) {
                    instance.element.parentNode.removeChild(instance.element);
                }
                activeToastsRef.current.delete(instance);
            };
            document.body.appendChild(element);
            activeToastsRef.current.add(instance);
            flushSync(function () {
                root.render(jsx("div", __assign({ style: __assign(__assign(__assign({ position: _config.position }, placementStyle), _config.style), { color: _config.color, backgroundColor: _config.bgColor, padding: "4px 12px", paddingBottom: "6px", borderRadius: "4px", fontSize: "14px" }), className: _config.className }, { children: _config.text })));
            });
            instance.timer = setTimeout(removeToast, Math.max(0, (_a = _config.duration) !== null && _a !== void 0 ? _a : 0));
        };
        var delay = Math.max(0, (_a = _config.delay) !== null && _a !== void 0 ? _a : 0);
        if (delay === 0) {
            showToast();
        }
        else {
            var timer_1;
            timer_1 = setTimeout(function () {
                if (timer_1 !== undefined) {
                    delayedToastsRef.current.delete(timer_1);
                }
                showToast();
            }, delay);
            delayedToastsRef.current.add(timer_1);
        }
    }, [toastConfig]);
    useEffect(function () {
        return function () {
            delayedToastsRef.current.forEach(function (timer) { return clearTimeout(timer); });
            delayedToastsRef.current.clear();
            activeToastsRef.current.forEach(function (instance) {
                instance.root.unmount();
                if (instance.element.parentNode) {
                    instance.element.parentNode.removeChild(instance.element);
                }
            });
            activeToastsRef.current.clear();
        };
    }, []);
    var toast = useCallback(function (text, config) {
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

var createRoot = function (targetDocument) {
    var root = createRoot$2(targetDocument);
    return {
        render: function (element) {
            root.render(element);
        },
        unmount: function () {
            queueMicrotask(function () { return root.unmount(); });
        },
    };
};
var createMask = function (config) {
    var mask = document.createElement("div");
    mask.style.position = "fixed";
    mask.style.top = "0";
    mask.style.right = "0";
    mask.style.bottom = "0";
    mask.style.left = "0";
    mask.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    mask.style.zIndex = "999";
    mask.style.cursor = "default";
    mask.style.userSelect = "none";
    mask.style.webkitUserSelect = "none";
    mask.style.setProperty("pointer-events", "none", "important");
    var maskConfig = config;
    if (maskConfig) {
        if (maskConfig.backgroundColor !== undefined) {
            mask.style.backgroundColor = maskConfig.backgroundColor;
        }
        if (maskConfig.opacity !== undefined) {
            mask.style.opacity = maskConfig.opacity.toString();
        }
        if (maskConfig.zIndex !== undefined) {
            mask.style.zIndex = maskConfig.zIndex.toString();
        }
        if (maskConfig.pointerEvents !== undefined) {
            var pointerEvents = String(maskConfig.pointerEvents);
            var important = /\s*!important$/i.test(pointerEvents);
            mask.style.setProperty("pointer-events", pointerEvents.replace(/\s*!important$/i, ""), important ? "important" : "");
        }
    }
    return mask;
};
function useGuide(steps, callback, config) {
    var _a = __read(useState(-1), 2), step = _a[0], setStep = _a[1];
    var maskRef = useRef(null);
    var zIndexes = useRef(new Map());
    var registered = useRef(new Set());
    var register = useCallback(function (id) {
        registered.current.add(id);
    }, []);
    var unregister = useCallback(function (id) {
        registered.current.delete(id);
    }, []);
    useEffect(function () {
        var _a, _b;
        var currentStep = steps[step];
        var rootDom = document.body;
        var mask = createMask(config === null || config === void 0 ? void 0 : config.maskConfig);
        if (currentStep && rootDom) {
            rootDom.appendChild(mask);
            maskRef.current = mask;
        }
        (_a = currentStep === null || currentStep === void 0 ? void 0 : currentStep.ids) === null || _a === void 0 ? void 0 : _a.forEach(function (id) {
            var element = document.getElementById(id);
            if (element) {
                zIndexes.current.set(id, element.style.zIndex);
                element.style.zIndex = "1000";
            }
        });
        var renders = (_b = currentStep === null || currentStep === void 0 ? void 0 : currentStep.renders) === null || _b === void 0 ? void 0 : _b.map(function (_a) {
            var id = _a.id, render = _a.render, containerStyle = _a.containerStyle, containerClassName = _a.containerClassName;
            if (registered.current.has(id)) {
                // 如果已经注册，跳过渲染步骤
                return;
            }
            var target = document.getElementById(id);
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
            target === null || target === void 0 ? void 0 : target.appendChild(container);
            if (container && target) {
                // @ts-ignore
                var root = createRoot(container);
                root.render(
                // @ts-ignore
                render(id, currentStep.name, currentStep.data, currentStep.ids));
                return { container: container, root: root };
            }
        });
        if (currentStep) {
            callback === null || callback === void 0 ? void 0 : callback(step, currentStep);
        }
        return function () {
            var _a;
            if (currentStep && rootDom && ((_a = maskRef.current) === null || _a === void 0 ? void 0 : _a.parentNode) === rootDom) {
                rootDom.removeChild(mask);
                maskRef.current = null;
            }
            renders === null || renders === void 0 ? void 0 : renders.forEach(function (rendered) {
                rendered === null || rendered === void 0 ? void 0 : rendered.root.unmount();
                rendered === null || rendered === void 0 ? void 0 : rendered.container.remove();
            });
            // 当不再需要引导元素时，恢复原始的 zIndex
            zIndexes.current.forEach(function (zIndex, id) {
                var element = document.getElementById(id);
                if (element) {
                    element.style.zIndex = zIndex;
                }
            });
            zIndexes.current.clear();
        };
    }, [step, steps, callback, config]);
    var start = useCallback(function () { return setStep(0); }, []);
    var stop = useCallback(function () { return setStep(-1); }, []);
    var next = useCallback(function () { return setStep(function (prev) { return Math.min(prev + 1, steps.length - 1); }); }, [steps]);
    var last = useCallback(function () { return setStep(function (prev) { return Math.max(prev - 1, 0); }); }, []);
    var go = useCallback(function (step) { return setStep(Math.max(0, Math.min(step, steps.length - 1))); }, [steps]);
    return [
        step,
        {
            start: start,
            stop: stop,
            next: next,
            last: last,
            go: go,
            step: step,
            options: { steps: steps, callback: callback, config: config },
            register: register,
            unregister: unregister,
        },
    ];
}

function useVirtualArea(_a, depths) {
    var _this = this;
    var loadMoreItems = _a.loadMoreItems, items = _a.items, hasMore = _a.hasMore, height = _a.height, containerStyle = _a.style, renderTop = _a.renderTop, renderItem = _a.renderItem, itemComponent = _a.itemComponent, itemComponentProps = _a.itemComponentProps, renderEmpty = _a.renderEmpty, renderLoader = _a.renderLoader, renderUnLoaded = _a.renderUnLoaded, loaderComponent = _a.loaderComponent, loaderComponentProps = _a.loaderComponentProps, containerComponent = _a.containerComponent, containerComponentProps = _a.containerComponentProps, renderBottom = _a.renderBottom, observerOptions = _a.observerOptions;
    var _b = __read(useState(false), 2), loading = _b[0], setLoading = _b[1];
    var loaderRef = useRef(null);
    var loadingRef = useRef(false);
    var mountedRef = useRef(true);
    var loadMore = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (loadingRef.current || !hasMore)
                        return [2 /*return*/];
                    loadingRef.current = true;
                    setLoading(true);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, loadMoreItems()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    loadingRef.current = false;
                    if (mountedRef.current) {
                        setLoading(false);
                    }
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); }, [hasMore, loadMoreItems]);
    useEffect(function () {
        return function () {
            mountedRef.current = false;
        };
    }, []);
    useEffect(function () {
        var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0,
        };
        var observer = new IntersectionObserver(function (entries) {
            var _a;
            if ((_a = entries[0]) === null || _a === void 0 ? void 0 : _a.isIntersecting) {
                loadMore();
            }
        }, __assign(__assign({}, options), observerOptions));
        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }
        return function () { return observer.disconnect(); };
    }, [observerOptions, loadMore]);
    var Container = useMemo(function () { return containerComponent || "div"; }, [containerComponent]);
    var Item = useMemo(function () { return itemComponent || "div"; }, [itemComponent]);
    var Loader = useMemo(function () { return loaderComponent || "div"; }, [loaderComponent]);
    var _containerComponentProps = useMemo(function () {
        var _a = containerComponentProps !== null && containerComponentProps !== void 0 ? containerComponentProps : {}, style = _a.style, rest = __rest(_a, ["style"]);
        return __assign(__assign({}, rest), { style: __assign(__assign({ overflow: "auto", height: height }, containerStyle), style) });
    }, [containerComponentProps, height, containerStyle]);
    var render = useCallback(function () {
        return (jsxs(Container, __assign({}, _containerComponentProps, { children: [typeof renderTop === "function" ? renderTop() : renderTop, 
                /** @ts-ignore */
                (items || []).length === 0 &&
                    (typeof renderEmpty === "function" ? renderEmpty() : renderEmpty === void 0 ? "No data" : renderEmpty), items.map(function (item, index) { return (jsx(Item, __assign({}, itemComponentProps, { children: typeof renderItem === "function" ? renderItem(item) : renderItem }), index)); }), jsxs(Loader, __assign({ ref: loaderRef }, loaderComponentProps, { children: [loading &&
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
    ], __read((depths || [])), false));
    return [loaderRef, loading, items, render];
}

var rippleWorklet = URL.createObjectURL(new Blob([
    "try {\n    registerPaint(\n      \"ripple\",\n      class {\n        static get inputProperties() {\n          return [\"--ripple-x\", \"--ripple-y\", \"--ripple-color\", \"--ripple-time\", \"--ripple-alpha-min\"];\n        }\n        paint(ctx, geom, properties) {\n          const x = parseFloat(properties.get(\"--ripple-x\").toString());\n          const y = parseFloat(properties.get(\"--ripple-y\").toString());\n          const color = properties.get(\"--ripple-color\").toString();\n          const time = parseFloat(properties.get(\"--ripple-time\").toString());\n          const alphaMin = parseFloat(properties.get(\"--ripple-alpha-min\").toString());\n  \n          ctx.fillStyle = color;\n          ctx.globalAlpha = Math.max(Math.max(1 - time, alphaMin), 0);\n          ctx.arc(x, y, geom.width * time, 0, 2 * Math.PI);\n          ctx.fill();\n        }\n      }\n    );\n  } catch (error) {\n    if (err.name !== \"DOMException\") {\n      throw err;\n    }\n  }",
], {
    type: "application/javascript",
}));

var isWorkletRegistered$1 = false;
var useRipple = function (config) {
    if (config === void 0) { config = {
        color: "rgba(31, 143, 255, 0.5)",
        duration: 500,
        alphaMin: 0.3,
    }; }
    var ref = useRef(null);
    var mounted = useRef(false);
    useEffect(function () {
        if (mounted.current)
            return;
        try {
            if ("paintWorklet" in CSS && !isWorkletRegistered$1) {
                // @ts-ignore
                CSS.paintWorklet.addModule(rippleWorklet); // "houdini/ripple.js"
                isWorkletRegistered$1 = true;
            }
            else if (!isWorkletRegistered$1) {
                console.warn("Your browser doesn't support CSS Paint API");
            }
        }
        catch (error) {
            console.error(error);
        }
        mounted.current = true;
    }, []);
    useEffect(function () {
        var _a;
        var button = ref.current;
        if (!button)
            return;
        var animationFrameId = null;
        var handleClick = function (event) {
            var _a, _b;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            var rect = button.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            var alphaMin = (_a = config.alphaMin) !== null && _a !== void 0 ? _a : 0.3;
            var startTime = performance.now();
            button.style.setProperty("--ripple-color", (_b = config.color) !== null && _b !== void 0 ? _b : "rgba(31, 143, 255, 0.5)");
            button.style.setProperty("--ripple-x", "".concat(x, "px"));
            button.style.setProperty("--ripple-y", "".concat(y, "px"));
            button.style.setProperty("--ripple-time", "0");
            button.style.setProperty("--ripple-alpha-min", "".concat(alphaMin));
            button.style.setProperty("background-image", "paint(ripple)");
            var animate = function (time) {
                var _a;
                var progress = (time - startTime) / ((_a = config.duration) !== null && _a !== void 0 ? _a : 500); // Convert time to seconds
                button.style.setProperty("--ripple-time", "".concat(progress));
                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animate);
                }
                else {
                    if (animationFrameId !== null) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        };
        var hiddenRipple = function () { return button.style.setProperty("--ripple-alpha-min", "0"); };
        button.addEventListener((_a = config.trigger) !== null && _a !== void 0 ? _a : "mousedown", handleClick);
        button.addEventListener("mouseup", hiddenRipple);
        button.addEventListener("mouseleave", hiddenRipple);
        return function () {
            var _a;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
            button.removeEventListener((_a = config.trigger) !== null && _a !== void 0 ? _a : "mousedown", handleClick);
            button.removeEventListener("mouseup", hiddenRipple);
            button.removeEventListener("mouseleave", hiddenRipple);
        };
    }, [config]);
    return ref;
};

var particleWorklet = URL.createObjectURL(new Blob([
    "registerPaint(\n        \"particle\",\n        class {\n          static get inputProperties() {\n            return [\"--particle-x\", \"--particle-y\", \"--particle-size\", \"--particle-color\", \"--particle-time\", \"--particle-num\"];\n          }\n          paint(ctx, geom, properties) {\n            const x = parseFloat(properties.get(\"--particle-x\").toString());\n            const y = parseFloat(properties.get(\"--particle-y\").toString());\n            const size = parseFloat(properties.get(\"--particle-size\").toString());\n            const color = properties.get(\"--particle-color\").toString();\n            const time = parseFloat(properties.get(\"--particle-time\").toString());\n            const num = parseFloat(properties.get(\"--particle-num\").toString());\n\n            ctx.globalAlpha = Math.max(1 - Math.sin(time * Math.PI / 2), 0);\n            // \u521B\u5EFA num \u4E2A\u7C92\u5B50\n            for (let i = 0; i < num; i++) {\n              // \u7C92\u5B50\u7684\u989C\u8272\u968F\u673A\n              ctx.fillStyle = color ? color : `hsl(${Math.random() * 360}, 100%, 50%)`;\n              // \u7C92\u5B50\u7684\u4F4D\u7F6E\u4E0E --particle-time \u76F8\u5173\uFF0C\u8FD0\u52A8\u8F68\u8FF9\u662F\u4E00\u4E2A\u9876\u70B9\u5728\u4E0A\u7684\u4E8C\u6B21\u51FD\u6570\n              const particleX = x + time * 30 * Math.cos(i * Math.PI / 5); // \u589E\u52A0\u7C92\u5B50\u7684\u521D\u59CB\u901F\u5EA6\n              const particleY = y + time * 30 * Math.sin(i * Math.PI / 5) - time * time; // \u589E\u52A0\u7C92\u5B50\u7684\u521D\u59CB\u901F\u5EA6\n              // \u7ED8\u5236\u7C92\u5B50\n              ctx.beginPath();\n              ctx.arc(particleX, particleY, size ?? 3, 0, 2 * Math.PI);\n              ctx.fill();\n            }\n          }\n        }\n      );",
], {
    type: "application/javascript",
}));

var isWorkletRegistered = false;
function useParticle(config, enable) {
    if (config === void 0) { config = {}; }
    if (enable === void 0) { enable = true; }
    var ref = useRef(null);
    var mounted = useRef(false);
    useEffect(function () {
        if (mounted.current)
            return;
        try {
            if ("paintWorklet" in CSS && !isWorkletRegistered) {
                // @ts-ignore
                CSS.paintWorklet.addModule(particleWorklet); // "houdini/ripple.js"
                isWorkletRegistered = true;
            }
            else if (!isWorkletRegistered) {
                console.warn("Your browser doesn't support CSS Paint API");
            }
        }
        catch (error) {
            console.error(error);
        }
        mounted.current = true;
    }, []);
    useEffect(function () {
        var _a, _b, _c, _d, _e;
        var element = ref.current;
        if (!element)
            return;
        var trigger = (_a = config.trigger) !== null && _a !== void 0 ? _a : "mousedown";
        var duration = (_b = config.duration) !== null && _b !== void 0 ? _b : 500;
        var color = (_c = config.color) !== null && _c !== void 0 ? _c : null;
        var num = (_d = config.num) !== null && _d !== void 0 ? _d : 10;
        var size = (_e = config.size) !== null && _e !== void 0 ? _e : 3;
        var animationFrameId = null;
        var handleTrigger = function (event) {
            if (!enable)
                return;
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
            var x = event.clientX - element.getBoundingClientRect().left;
            var y = event.clientY - element.getBoundingClientRect().top;
            var startTime = performance.now();
            element.style.setProperty("--particle-x", "".concat(x, "px"));
            element.style.setProperty("--particle-y", "".concat(y, "px"));
            element.style.setProperty("--particle-size", "".concat(size));
            element.style.setProperty("--particle-color", color !== null && color !== void 0 ? color : "");
            element.style.setProperty("--particle-time", "0");
            element.style.setProperty("--particle-num", "".concat(num)); // "10"
            element.style.backgroundImage = "paint(particle)";
            var animate = function (time) {
                var progress = duration === 0 ? 1 : (time - startTime) / duration;
                element.style.setProperty("--particle-time", "".concat(progress));
                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animate);
                }
                else {
                    if (animationFrameId !== null) {
                        cancelAnimationFrame(animationFrameId);
                        animationFrameId = null;
                    }
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        };
        element.addEventListener(trigger, handleTrigger);
        return function () {
            element.removeEventListener(trigger, handleTrigger);
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [ref, config, enable]);
    return ref;
}

function useBatchHooks(hook, count) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (Array.isArray(hook)) {
        return hook.map(function (item) { return item.hook.apply(item, __spreadArray([], __read(item.args), false)); });
    }
    else {
        return Array.from({ length: count }, function () { return hook.apply(void 0, __spreadArray([], __read(args), false)); });
    }
}

function useBattery(onChargingChange, callbacks) {
    var _a = __read(useState(null), 2), batteryStatus = _a[0], setBatteryStatus = _a[1];
    var _callbacks = useMemo(function () {
        return __assign(__assign({}, callbacks), { onChargingChange: (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onChargingChange) || onChargingChange });
    }, [callbacks, onChargingChange]);
    useEffect(function () {
        var active = true;
        var battery = null;
        var handleChargingChange = null;
        var handleLevelChange = null;
        var handleChargingTimeChange = null;
        var handleDischargingTimeChange = null;
        navigator.getBattery().then(function (bat) {
            if (!active)
                return;
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
            handleChargingChange = function () {
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
            handleLevelChange = function () {
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
            handleChargingTimeChange = function () {
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
            handleDischargingTimeChange = function () {
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
            active = false;
            if (battery) {
                if (handleChargingChange) {
                    battery.removeEventListener("chargingchange", handleChargingChange);
                }
                if (handleLevelChange) {
                    battery.removeEventListener("levelchange", handleLevelChange);
                }
                if (handleChargingTimeChange) {
                    battery.removeEventListener("chargingtimechange", handleChargingTimeChange);
                }
                if (handleDischargingTimeChange) {
                    battery.removeEventListener("dischargingtimechange", handleDischargingTimeChange);
                }
            }
        };
    }, [_callbacks]);
    return batteryStatus;
}

function useClickAway(onClickAway) {
    var ref = useRef(null);
    useEffect(function () {
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

function decodeCookieValue(value) {
    try {
        return decodeURIComponent(value);
    }
    catch (_a) {
        return value;
    }
}
function getCookie(name) {
    if (typeof document === 'undefined') {
        return null;
    }
    var encodedName = encodeURIComponent(name);
    var cookie = document.cookie
        .split(";")
        .map(function (part) { return part.trim(); })
        .find(function (part) { return part.startsWith("".concat(encodedName, "=")); });
    if (!cookie)
        return null;
    return decodeCookieValue(cookie.slice(encodedName.length + 1));
}
function setCookie(name, value, days) {
    if (typeof document === 'undefined') {
        return;
    }
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = "".concat(encodeURIComponent(name), "=").concat(encodeURIComponent(value)).concat(expires, "; path=/");
}
function useCookie(name, initialValue, days) {
    var _a = __read(useState(function () { return getCookie(name) || initialValue; }), 2), value = _a[0], setValue = _a[1];
    useEffect(function () {
        setCookie(name, value, days);
    }, [name, value, days]);
    return [value, setValue];
}

var subscribers = new Set();
var originalLog = null;
var wrappedLog = null;
function subscribe(subscriber) {
    if (subscribers.size === 0) {
        originalLog = console.log;
        wrappedLog = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            subscribers.forEach(function (currentSubscriber) { return currentSubscriber(args); });
            originalLog === null || originalLog === void 0 ? void 0 : originalLog.apply(console, args);
        };
        console.log = wrappedLog;
    }
    subscribers.add(subscriber);
    return function () {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
            if (wrappedLog && console.log === wrappedLog && originalLog) {
                console.log = originalLog;
            }
            originalLog = null;
            wrappedLog = null;
        }
    };
}
function useConsoleLog() {
    var _a = __read(useState([]), 2), logs = _a[0], setLogs = _a[1];
    useEffect(function () {
        return subscribe(function (args) {
            setLogs(function (previousLogs) { return __spreadArray(__spreadArray([], __read(previousLogs), false), [args.join(" ")], false); });
        });
    }, []);
    return logs;
}

function useDimensions() {
    var ref = useRef(null);
    var _a = __read(useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    }), 2), dimensions = _a[0], setDimensions = _a[1];
    useEffect(function () {
        var observeTarget = ref.current;
        if (!observeTarget)
            return;
        var resizeObserver = new ResizeObserver(function (entries) {
            entries.forEach(function (entry) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                    top: entry.contentRect.top,
                    left: entry.contentRect.left,
                });
            });
        });
        resizeObserver.observe(observeTarget);
        return function () {
            resizeObserver.unobserve(observeTarget);
        };
    }, [ref]);
    return [ref, dimensions];
}

function useDimensionsById(id) {
    var _a = __read(useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
    }), 2), dimensions = _a[0], setDimensions = _a[1];
    useEffect(function () {
        var observeTarget = document.getElementById(id);
        if (!observeTarget)
            return;
        var resizeObserver = new ResizeObserver(function (entries) {
            entries.forEach(function (entry) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                    top: entry.contentRect.top,
                    left: entry.contentRect.left,
                });
            });
        });
        resizeObserver.observe(observeTarget);
        return function () {
            resizeObserver.unobserve(observeTarget);
        };
    }, [id]); // 每次id变化时重新获取
    return dimensions;
}

function getEyeDropperConstructor() {
    if (typeof window === "undefined")
        return undefined;
    return window.EyeDropper;
}
/**
 * Wraps the browser EyeDropper API in React state.
 *
 * The picker must be opened from a user interaction and is available only in
 * browsers that implement the experimental EyeDropper API.
 *
 * @example
 * ```tsx
 * const { isSupported, sRGBHex, open } = useEyeDropper({
 *   initialValue: "#ffffff",
 * });
 *
 * <button disabled={!isSupported} onClick={() => void open()}>
 *   Pick color: {sRGBHex}
 * </button>
 * ```
 */
function useEyeDropper(options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    var _a = options.initialValue, initialValue = _a === void 0 ? "" : _a;
    var _b = __read(useState(false), 2), isSupported = _b[0], setIsSupported = _b[1];
    var _c = __read(useState(initialValue), 2), sRGBHex = _c[0], setSRGBHex = _c[1];
    var mountedRef = useRef(false);
    useEffect(function () {
        mountedRef.current = true;
        setIsSupported(getEyeDropperConstructor() !== undefined);
        return function () {
            mountedRef.current = false;
        };
    }, []);
    var open = useCallback(function (openOptions) { return __awaiter(_this, void 0, void 0, function () {
        var EyeDropper, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    EyeDropper = getEyeDropperConstructor();
                    if (!EyeDropper)
                        return [2 /*return*/, undefined];
                    return [4 /*yield*/, new EyeDropper().open(openOptions)];
                case 1:
                    result = _a.sent();
                    if (mountedRef.current)
                        setSRGBHex(result.sRGBHex);
                    return [2 /*return*/, result];
            }
        });
    }); }, []);
    return { isSupported: isSupported, sRGBHex: sRGBHex, open: open };
}

function useHover(onHover) {
    var ref = useRef(null);
    useEffect(function () {
        var element = ref.current;
        if (!element)
            return;
        var handleHover = function () { return onHover(); };
        element.addEventListener("mouseenter", handleHover);
        return function () {
            element.removeEventListener("mouseenter", handleHover);
        };
    }, [onHover]);
    return ref;
}

function useKeyPress(targetKey) {
    var _a = __read(useState(false), 2), keyPressed = _a[0], setKeyPressed = _a[1];
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
    useEffect(function () {
        setKeyPressed(false);
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        return function () {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, [targetKey]);
    return keyPressed;
}

function useMediaQuery(query) {
    var _a = __read(useState(window.matchMedia(query).matches), 2), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        var mediaQueryList = window.matchMedia(query);
        var documentChangeHandler = function () { return setMatches(mediaQueryList.matches); };
        setMatches(mediaQueryList.matches);
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener("change", documentChangeHandler);
            return function () {
                mediaQueryList.removeEventListener("change", documentChangeHandler);
            };
        }
        mediaQueryList.addListener(documentChangeHandler);
        return function () {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);
    return matches;
}

function useMousePosition(trigger) {
    if (trigger === void 0) { trigger = "mousemove"; }
    var _a = __read(useState({ x: null, y: null }), 2), mousePosition = _a[0], setMousePosition = _a[1];
    useEffect(function () {
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

function getConnection() {
    return navigator.connection;
}
function readNetworkStatus() {
    var _a, _b;
    var connection = getConnection();
    if (!navigator.onLine) {
        return {
            online: false,
            downlink: 0,
            uplink: 0,
            effectiveType: undefined,
            rtt: undefined,
            saveData: undefined,
            type: undefined,
        };
    }
    return {
        online: true,
        downlink: (_a = connection === null || connection === void 0 ? void 0 : connection.downlink) !== null && _a !== void 0 ? _a : 0,
        uplink: (_b = connection === null || connection === void 0 ? void 0 : connection.uplink) !== null && _b !== void 0 ? _b : 0,
        effectiveType: connection === null || connection === void 0 ? void 0 : connection.effectiveType,
        rtt: connection === null || connection === void 0 ? void 0 : connection.rtt,
        saveData: connection === null || connection === void 0 ? void 0 : connection.saveData,
        type: connection === null || connection === void 0 ? void 0 : connection.type,
    };
}
/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
function useNetworkStatus(throttleInterval) {
    var _a = __read(useState(readNetworkStatus), 2), status = _a[0], setStatus = _a[1];
    var throttledUpdateStatus = useThrottle(function () {
        if ((throttleInterval !== null && throttleInterval !== void 0 ? throttleInterval : 0) < 17) {
            console.warn("throttleInterval is suggested to be greater than 16.67ms to avoid too much re-rendering");
        }
        setStatus(readNetworkStatus());
    }, throttleInterval !== null && throttleInterval !== void 0 ? throttleInterval : 0);
    useEffect(function () {
        var connection = getConnection();
        window.addEventListener("online", throttledUpdateStatus);
        window.addEventListener("offline", throttledUpdateStatus);
        if (connection === null || connection === void 0 ? void 0 : connection.addEventListener) {
            connection.addEventListener("change", throttledUpdateStatus);
        }
        return function () {
            window.removeEventListener("online", throttledUpdateStatus);
            window.removeEventListener("offline", throttledUpdateStatus);
            if (connection === null || connection === void 0 ? void 0 : connection.removeEventListener) {
                connection.removeEventListener("change", throttledUpdateStatus);
            }
        };
    }, [throttledUpdateStatus]);
    return status;
}

function useOverflow() {
    var ref = useRef(null);
    var _a = __read(useState(false), 2), isOverflowing = _a[0], setIsOverflowing = _a[1];
    useEffect(function () {
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
    var callbackRef = useRef(callback);
    var frameRef = useRef();
    useEffect(function () {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(function () {
        var loop = function (time) {
            frameRef.current = requestAnimationFrame(loop);
            callbackRef.current(time);
        };
        frameRef.current = requestAnimationFrame(loop);
        // 在组件卸载时取消动画帧
        return function () {
            if (frameRef.current !== undefined) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);
};

var useRafState = function (initialState) {
    var frame = useRef(null);
    var _a = __read(useState(initialState), 2), state = _a[0], setState = _a[1];
    var setRafState = useCallback(function (value) {
        if (frame.current !== null) {
            cancelAnimationFrame(frame.current);
        }
        frame.current = requestAnimationFrame(function () {
            frame.current = null;
            setState(function (prevState) {
                return typeof value === "function"
                    ? value(prevState)
                    : value;
            });
        });
    }, []);
    useEffect(function () {
        return function () {
            if (frame.current !== null) {
                cancelAnimationFrame(frame.current);
            }
        };
    }, []);
    return [state, setRafState];
};

function useProtect(initialData) {
    var conditions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        conditions[_i - 1] = arguments[_i];
    }
    var _a = __read(useState(initialData), 2), data = _a[0], setData = _a[1];
    var messages = useMemo(function () {
        return conditions
            .filter(function (condition) { return (typeof condition === "function" ? condition(data, data) : condition); })
            .map(function (result) { return (typeof result === "string" ? result : "Data is protected and cannot be modified."); });
    }, [data, conditions]);
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

function getScrollPosition() {
    return {
        x: window.scrollX,
        y: window.scrollY,
    };
}
var useScroll = function (callback) {
    var _a = __read(useState(getScrollPosition), 2), position = _a[0], setPosition = _a[1];
    var handleScroll = function () {
        var newPosition = getScrollPosition();
        setPosition(newPosition);
        callback === null || callback === void 0 ? void 0 : callback(newPosition);
    };
    useEffect(function () {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [callback]);
    return position;
};

// 防抖处理，避免 resize 频繁触发
function debounce(fn, delay) {
    var timer;
    var debounced = (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () { return fn.apply(void 0, __spreadArray([], __read(args), false)); }, delay);
    });
    debounced.cancel = function () {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
    };
    return debounced;
}
/**
 * @hook useSafeArea
 * @availability iOS Safari, Android Chrome
 */
function useSafeArea() {
    var _a = __read(useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }), 2), insets = _a[0], setInsets = _a[1];
    var compute = useCallback(function () {
        // 方案：动态创建 div 测量（不依赖 CSS 变量）+ 监听 resize
        var div = document.createElement("div");
        div.style.cssText = "\n      position: fixed;\n      padding: env(safe-area-inset-top) env(safe-area-inset-right) \n                env(safe-area-inset-bottom) env(safe-area-inset-left);\n      visibility: hidden;\n      pointer-events: none;\n    ";
        document.body.appendChild(div);
        var style = window.getComputedStyle(div);
        var parse = function (val) {
            var num = parseFloat(val);
            return isNaN(num) ? 0 : num;
        };
        setInsets({
            top: parse(style.paddingTop),
            right: parse(style.paddingRight),
            bottom: parse(style.paddingBottom),
            left: parse(style.paddingLeft),
        });
        document.body.removeChild(div);
    }, []);
    useEffect(function () {
        compute();
        // 防抖处理 resize，100ms 足够
        var debouncedCompute = debounce(compute, 100);
        window.addEventListener("resize", debouncedCompute);
        // iOS 方向变化可能需要 orientationchange
        window.addEventListener("orientationchange", compute);
        return function () {
            debouncedCompute.cancel();
            window.removeEventListener("resize", debouncedCompute);
            window.removeEventListener("orientationchange", compute);
        };
    }, [compute]);
    return insets;
}

var UNINITIALIZED = Symbol("useSingleton.uninitialized");
function useSingleton(createInstance) {
    var instanceRef = useRef(UNINITIALIZED);
    if (instanceRef.current === UNINITIALIZED) {
        instanceRef.current = createInstance();
    }
    return instanceRef.current;
}

function useWhyDidYouUpdate(name, props) {
    var previousProps = useRef(null);
    useEffect(function () {
        if (previousProps.current === null) {
            previousProps.current = props;
            return;
        }
        var allKeys = Object.keys(__assign(__assign({}, previousProps.current), props));
        var changesObj = {};
        allKeys.forEach(function (key) {
            var _a, _b;
            if (((_a = previousProps.current) === null || _a === void 0 ? void 0 : _a[key]) !== props[key]) {
                // @ts-ignore
                changesObj[key] = {
                    from: (_b = previousProps.current) === null || _b === void 0 ? void 0 : _b[key],
                    to: props[key],
                };
            }
        });
        if (Object.keys(changesObj).length) {
            console.log("[why-did-you-update]", name, changesObj);
        }
        previousProps.current = props;
    }, [props]);
}

/**
 * **useTitle** is a React Hook that manages and monitors the document title.
 * ### Parameters
 * - initialTitle?: `string` - The initial title to set when the component mounts. If not provided, uses the current document title.
 * ---
 * ### Return (Array)
 * - [0] title: `string` - The current document title (reactive to external changes)
 * - [1] setTitle: `(title: string) => void` - Function to update the document title
 * ---
 * ### Usage
 * ```tsx
 * const [title, setTitle] = useTitle("My App");
 *
 * // Update title
 * setTitle("New Title");
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useTitle } from "@evanpatchouli/react-hooks-kit";
 *
 * const View = () => {
 *   const [title, setTitle] = useTitle("Home Page");
 *
 *   return (
 *     <div>
 *       <h1>Current Title: {title}</h1>
 *       <button onClick={() => setTitle("Updated Title")}>
 *         Change Title
 *       </button>
 *     </div>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Will the original title be restored when the component unmounts?
 * - A: Yes, the hook automatically restores the original document title when the component unmounts.
 * ---
 * - Q: Can this hook detect title changes made by other components?
 * - A: Yes, the hook uses MutationObserver to monitor the title element and automatically syncs with external changes.
 */
function useTitle(initialTitle) {
    var _a = __read(useState(initialTitle !== null && initialTitle !== void 0 ? initialTitle : document.title), 2), title = _a[0], setTitle = _a[1];
    var originalTitle = useRef(document.title);
    var isInternalUpdate = useRef(false);
    useEffect(function () {
        if (initialTitle) {
            isInternalUpdate.current = true;
            document.title = initialTitle;
        }
    }, []);
    useEffect(function () {
        isInternalUpdate.current = true;
        document.title = title;
    }, [title]);
    useEffect(function () {
        var titleElement = document.querySelector("title");
        if (!titleElement)
            return;
        var savedOriginalTitle = originalTitle.current;
        var observer = new MutationObserver(function () {
            if (!isInternalUpdate.current) {
                setTitle(document.title);
            }
            isInternalUpdate.current = false;
        });
        observer.observe(titleElement, {
            childList: true,
            characterData: true,
            subtree: true,
        });
        isInternalUpdate.current = false;
        return function () {
            observer.disconnect();
            document.title = savedOriginalTitle;
        };
    }, []);
    return [title, setTitle];
}

function useFavicon(iconUrl, options) {
    var badge = useMemo(function () {
        var _a;
        if (typeof options === 'string' || typeof options === 'number') {
            return { content: options };
        }
        return (_a = options === null || options === void 0 ? void 0 : options.badge) !== null && _a !== void 0 ? _a : null;
    }, [options]);
    useEffect(function () {
        if (!iconUrl)
            return;
        // 没 badge 直接设置
        if (!badge) {
            setFavicon(iconUrl);
            return;
        }
        createFaviconWithBadge(iconUrl, badge)
            .then(setFavicon)
            .catch(function () { return setFavicon(iconUrl); });
    }, [
        iconUrl, badge,
    ]);
}
function setFavicon(href) {
    document.querySelectorAll("link[rel*='icon']").forEach(function (el) { return el.remove(); });
    var link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = href;
    document.head.appendChild(link);
}
/**
 * Creates a favicon with a badge overlay
 */
function createFaviconWithBadge(iconUrl, badge) {
    return __awaiter(this, void 0, void 0, function () {
        var content, _a, position, _b, bgColor, _c, textColor, _d, size;
        return __generator(this, function (_e) {
            content = badge.content, _a = badge.position, position = _a === void 0 ? "top-right" : _a, _b = badge.bgColor, bgColor = _b === void 0 ? "#ff3b30" : _b, _c = badge.textColor, textColor = _c === void 0 ? "#fff" : _c, _d = badge.size, size = _d === void 0 ? 0.5 : _d;
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var img = new Image();
                    img.onload = function () {
                        try {
                            var iconSize = Math.max(img.naturalWidth || 0, 64);
                            var canvas = document.createElement("canvas");
                            canvas.width = iconSize;
                            canvas.height = iconSize;
                            var ctx = canvas.getContext("2d");
                            if (!ctx)
                                return reject("ctx failed");
                            ctx.drawImage(img, 0, 0, iconSize, iconSize);
                            var badgeSize = Math.max(iconSize * size, 14);
                            var r = badgeSize / 2;
                            var padding = iconSize * 0.06;
                            var x = 0;
                            var y = 0;
                            switch (position) {
                                case "top-left":
                                    x = r + padding;
                                    y = r + padding;
                                    break;
                                case "bottom-left":
                                    x = r + padding;
                                    y = iconSize - r - padding;
                                    break;
                                case "bottom-right":
                                    x = iconSize - r - padding;
                                    y = iconSize - r - padding;
                                    break;
                                default:
                                    x = iconSize - r - padding;
                                    y = r + padding;
                            }
                            ctx.fillStyle = bgColor;
                            ctx.beginPath();
                            ctx.arc(x, y, r, 0, Math.PI * 2);
                            ctx.fill();
                            var text = String(content);
                            if (typeof content === "number" && content > 99) {
                                text = "99+";
                            }
                            ctx.fillStyle = textColor;
                            ctx.font = "bold ".concat(badgeSize * 0.65, "px system-ui, -apple-system, sans-serif");
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.fillText(text, x, y + 0.5);
                            resolve(canvas.toDataURL("image/png"));
                        }
                        catch (e) {
                            reject(e);
                        }
                    };
                    img.onerror = function () {
                        reject(new Error("Failed to load icon: ".concat(iconUrl)));
                    };
                    img.src = iconUrl;
                })];
        });
    });
}

var DEFAULT_CAMERA = {
    facingMode: { ideal: "environment" },
    width: { ideal: 1280 },
    height: { ideal: 720 },
};
var DEFAULT_FORMATS = ["qr_code"];
var scannerContainerSequence = 0;
var html5QrcodeModulePromise = null;
var loadDefaultHtml5Qrcode = function () {
    html5QrcodeModulePromise !== null && html5QrcodeModulePromise !== void 0 ? html5QrcodeModulePromise : (html5QrcodeModulePromise = import('html5-qrcode'));
    return html5QrcodeModulePromise;
};
var defaultIsWechatEnvironment = function () {
    return typeof navigator !== "undefined" && /MicroMessenger/i.test(navigator.userAgent);
};
var normalizeError$1 = function (error) {
    return error instanceof Error ? error : new Error(String(error));
};
/**
 * A per-hook QR code scanning service with a lazy HTML5 implementation and an optional
 * application-provided WeChat adapter.
 */
var QrcodeScanService = /** @class */ (function () {
    function QrcodeScanService(options) {
        if (options === void 0) { options = {}; }
        var _a, _b;
        this.scanner = null;
        this.currentMode = "none";
        this.isScanning = false;
        this.isPaused = false;
        this.operation = 0;
        this.cameraSwitchRequest = 0;
        this.abortController = null;
        this.lastHtml5Options = null;
        this.ownedContainers = new WeakMap();
        this.pendingScanners = new WeakSet();
        this.disposedScanners = new WeakSet();
        this.wechatAdapter = options.wechatAdapter;
        this.isWechatEnvironment =
            (_a = options.isWechatEnvironment) !== null && _a !== void 0 ? _a : defaultIsWechatEnvironment;
        this.loadHtml5Qrcode = (_b = options.loadHtml5Qrcode) !== null && _b !== void 0 ? _b : loadDefaultHtml5Qrcode;
    }
    /** Returns the mode that `auto` resolves to in the current environment. */
    QrcodeScanService.prototype.getRecommendedMode = function () {
        return this.isWechatAvailable() ? "wechat" : "html5";
    };
    /** Returns whether a requested concrete mode can run. */
    QrcodeScanService.prototype.validateMode = function (mode) {
        if (mode === "wechat" && !this.isWechatAvailable()) {
            return {
                valid: false,
                reason: "WeChat scanning requires a WeChat browser and an available wechatAdapter.",
            };
        }
        if (mode === "html5" && typeof document === "undefined") {
            return {
                valid: false,
                reason: "HTML5 scanning requires a browser document.",
            };
        }
        return { valid: true };
    };
    /** Starts a scan. A newer start or stop operation supersedes pending work. */
    QrcodeScanService.prototype.start = function (options) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var operation, abortController, mode, validation, error_1, normalizedError;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        operation = ++this.operation;
                        (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
                        abortController = new AbortController();
                        this.abortController = abortController;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 7, , 8]);
                        mode = options.mode === "auto" ? this.getRecommendedMode() : options.mode;
                        validation = this.validateMode(mode);
                        if (!validation.valid) {
                            throw new Error(validation.reason);
                        }
                        if (options.formats.length === 0) {
                            throw new Error("At least one scan format must be provided.");
                        }
                        if (mode === "html5") {
                            this.assertContainer(options.containerId);
                        }
                        return [4 /*yield*/, this.stopActiveScanner()];
                    case 2:
                        _c.sent();
                        if (!this.isCurrent(operation))
                            return [2 /*return*/];
                        this.currentMode = mode;
                        this.isScanning = true;
                        this.isPaused = false;
                        if (!(mode === "wechat")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.startWechat(options, abortController.signal, operation)];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.startHtml5(options, operation)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _c.sent();
                        if (!this.isCurrent(operation))
                            return [2 /*return*/];
                        normalizedError = normalizeError$1(error_1);
                        this.isScanning = false;
                        this.isPaused = false;
                        this.currentMode = "none";
                        (_b = options.onError) === null || _b === void 0 ? void 0 : _b.call(options, normalizedError);
                        throw normalizedError;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the active scanner. Calling `stop` while idle is safe. */
    QrcodeScanService.prototype.stop = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var mode, scannerStop, adapterStop;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        ++this.operation;
                        (_a = this.abortController) === null || _a === void 0 ? void 0 : _a.abort();
                        this.abortController = null;
                        mode = this.currentMode;
                        this.currentMode = "none";
                        this.isScanning = false;
                        this.isPaused = false;
                        scannerStop = this.stopActiveScanner();
                        adapterStop = mode === "wechat" && ((_b = this.wechatAdapter) === null || _b === void 0 ? void 0 : _b.cancel)
                            ? Promise.resolve(this.wechatAdapter.cancel())
                            : Promise.resolve();
                        return [4 /*yield*/, Promise.all([scannerStop, adapterStop])];
                    case 1:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Pauses an active HTML5 scanner and its video stream. */
    QrcodeScanService.prototype.pause = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
                    throw new Error("An active HTML5 scanner is required before pausing.");
                }
                this.scanner.pause(true);
                this.isPaused = true;
                return [2 /*return*/];
            });
        });
    };
    /** Resumes a paused HTML5 scanner. */
    QrcodeScanService.prototype.resume = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.currentMode !== "html5" || !this.scanner || !this.isPaused) {
                    throw new Error("A paused HTML5 scanner is required before resuming.");
                }
                this.scanner.resume();
                this.isPaused = false;
                return [2 /*return*/];
            });
        });
    };
    /** Switches to a requested camera, or cycles to the next available camera. */
    QrcodeScanService.prototype.switchCamera = function (cameraId) {
        return __awaiter(this, void 0, void 0, function () {
            var request, operation, runningScanner, cameras, target, runningCameraId_1, currentIndex, pendingStart, startedOperation, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.currentMode !== "html5" ||
                            !this.scanner ||
                            !this.isScanning ||
                            !this.lastHtml5Options) {
                            throw new Error("An active HTML5 scanner is required before switching cameras.");
                        }
                        request = ++this.cameraSwitchRequest;
                        operation = this.operation;
                        runningScanner = this.scanner;
                        return [4 /*yield*/, this.getCameras()];
                    case 1:
                        cameras = _a.sent();
                        this.assertCurrentCameraOperation(request, operation, runningScanner);
                        if (cameras.length === 0) {
                            throw new Error("No camera was found.");
                        }
                        if (cameraId) {
                            target = cameras.find(function (camera) { return camera.id === cameraId; });
                            if (!target) {
                                throw new Error("Camera ".concat(cameraId, " was not found."));
                            }
                        }
                        else {
                            if (cameras.length < 2) {
                                throw new Error("At least two cameras are required to switch cameras.");
                            }
                            runningCameraId_1 = this.getRunningCameraId();
                            currentIndex = cameras.findIndex(function (camera) { return camera.id === runningCameraId_1; });
                            target = cameras[(currentIndex + 1 + cameras.length) % cameras.length];
                        }
                        this.assertCurrentCameraOperation(request, operation, runningScanner);
                        pendingStart = this.start(__assign(__assign({}, this.lastHtml5Options), { mode: "html5", camera: target.id }));
                        startedOperation = this.operation;
                        return [4 /*yield*/, pendingStart];
                    case 2:
                        _a.sent();
                        if (request !== this.cameraSwitchRequest ||
                            !this.isCurrent(startedOperation) ||
                            this.currentMode !== "html5" ||
                            !this.isScanning) {
                            error = new Error("Camera switch was superseded by a newer operation.");
                            error.name = "AbortError";
                            throw error;
                        }
                        return [2 /*return*/, target];
                }
            });
        });
    };
    /** Returns browser cameras. Labels may be empty until camera permission is granted. */
    QrcodeScanService.prototype.getCameras = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Html5Qrcode, cameras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof navigator === "undefined") {
                            throw new Error("Camera enumeration requires a browser environment.");
                        }
                        return [4 /*yield*/, this.loadHtml5Qrcode()];
                    case 1:
                        Html5Qrcode = (_a.sent()).Html5Qrcode;
                        return [4 /*yield*/, Html5Qrcode.getCameras()];
                    case 2:
                        cameras = _a.sent();
                        return [2 /*return*/, cameras.map(function (_a) {
                                var id = _a.id, label = _a.label;
                                return ({ id: id, label: label });
                            })];
                }
            });
        });
    };
    /** Decodes one browser image file without requesting camera permission. */
    QrcodeScanService.prototype.scanImage = function (file, options) {
        var _a, _b;
        if (options === void 0) { options = {}; }
        try {
            this.assertImageFile(file, options.maxFileSize);
            if (((_a = options.formats) !== null && _a !== void 0 ? _a : DEFAULT_FORMATS).length === 0) {
                throw new Error("At least one scan format must be provided.");
            }
            this.assertImageContainer(options.containerId, (_b = options.showImage) !== null && _b !== void 0 ? _b : false);
        }
        catch (error) {
            return Promise.reject(normalizeError$1(error));
        }
        return this.scanImageInternal(file, options).catch(function (error) {
            throw normalizeError$1(error);
        });
    };
    QrcodeScanService.prototype.scanImageInternal = function (file, options) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var formats, operation, previousMode, scannerStop, adapterStop, module, showImage, container, scanner, rawResult, result, error_2;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        formats = (_a = options.formats) !== null && _a !== void 0 ? _a : DEFAULT_FORMATS;
                        operation = ++this.operation;
                        (_b = this.abortController) === null || _b === void 0 ? void 0 : _b.abort();
                        this.abortController = null;
                        previousMode = this.currentMode;
                        this.currentMode = "none";
                        this.isScanning = false;
                        this.isPaused = false;
                        scannerStop = this.stopActiveScanner();
                        adapterStop = previousMode === "wechat" && ((_c = this.wechatAdapter) === null || _c === void 0 ? void 0 : _c.cancel)
                            ? Promise.resolve(this.wechatAdapter.cancel())
                            : Promise.resolve();
                        return [4 /*yield*/, Promise.all([scannerStop, adapterStop])];
                    case 1:
                        _g.sent();
                        this.assertCurrentImageOperation(operation);
                        return [4 /*yield*/, this.loadHtml5Qrcode()];
                    case 2:
                        module = _g.sent();
                        this.assertCurrentImageOperation(operation);
                        showImage = (_d = options.showImage) !== null && _d !== void 0 ? _d : false;
                        container = this.resolveImageContainer(options.containerId, showImage);
                        try {
                            scanner = new module.Html5Qrcode(container.id, {
                                formatsToSupport: this.mapFormats(module, formats),
                                useBarCodeDetectorIfSupported: ((_e = options.useNativeDetector) !== null && _e !== void 0 ? _e : true) &&
                                    this.getSupportsNativeDetector(),
                                verbose: (_f = options.verbose) !== null && _f !== void 0 ? _f : false,
                            });
                        }
                        catch (error) {
                            if (container.owned)
                                container.element.remove();
                            throw normalizeError$1(error);
                        }
                        if (container.owned)
                            this.ownedContainers.set(scanner, container.element);
                        this.scanner = scanner;
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 12, , 14]);
                        this.pendingScanners.add(scanner);
                        rawResult = void 0;
                        _g.label = 4;
                    case 4:
                        _g.trys.push([4, , 6, 7]);
                        return [4 /*yield*/, scanner.scanFileV2(file, showImage)];
                    case 5:
                        rawResult = _g.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this.pendingScanners.delete(scanner);
                        return [7 /*endfinally*/];
                    case 7:
                        if (!!this.isActiveScanner(operation, scanner)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 8:
                        _g.sent();
                        this.assertCurrentImageOperation(operation);
                        _g.label = 9;
                    case 9:
                        result = this.normalizeResult(module, rawResult, "image");
                        if (!!showImage) return [3 /*break*/, 11];
                        if (this.scanner === scanner)
                            this.scanner = null;
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 10:
                        _g.sent();
                        _g.label = 11;
                    case 11: return [2 /*return*/, result];
                    case 12:
                        error_2 = _g.sent();
                        if (this.scanner === scanner)
                            this.scanner = null;
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 13:
                        _g.sent();
                        throw normalizeError$1(error_2);
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /** Returns camera capabilities for the active HTML5 video track. */
    QrcodeScanService.prototype.getCameraCapabilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var capabilities, settings, torchCapability, torchSupported, zoomCapability, zoomMin, zoomMax, zoomSupported;
            return __generator(this, function (_a) {
                if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
                    return [2 /*return*/, null];
                }
                try {
                    capabilities = this.scanner.getRunningTrackCapabilities();
                    settings = this.scanner.getRunningTrackSettings();
                    torchCapability = capabilities.torch;
                    torchSupported = Array.isArray(torchCapability)
                        ? torchCapability.indexOf(true) >= 0 &&
                            torchCapability.indexOf(false) >= 0
                        : torchCapability === true;
                    zoomCapability = capabilities.zoom;
                    zoomMin = this.finiteNumberOrNull(zoomCapability === null || zoomCapability === void 0 ? void 0 : zoomCapability.min);
                    zoomMax = this.finiteNumberOrNull(zoomCapability === null || zoomCapability === void 0 ? void 0 : zoomCapability.max);
                    zoomSupported = zoomMin !== null && zoomMax !== null && zoomMax >= zoomMin;
                    return [2 /*return*/, {
                            torch: {
                                supported: torchSupported,
                                enabled: typeof settings.torch === "boolean" ? settings.torch : null,
                            },
                            zoom: {
                                supported: zoomSupported,
                                value: this.finiteNumberOrNull(settings.zoom),
                                min: zoomSupported ? zoomMin : null,
                                max: zoomSupported ? zoomMax : null,
                                step: zoomSupported
                                    ? this.positiveFiniteNumberOrNull(zoomCapability === null || zoomCapability === void 0 ? void 0 : zoomCapability.step)
                                    : null,
                            },
                        }];
                }
                catch (error) {
                    throw normalizeError$1(error);
                }
                return [2 /*return*/];
            });
        });
    };
    /** Enables or disables the camera torch and returns the refreshed capabilities. */
    QrcodeScanService.prototype.setTorch = function (enabled) {
        return __awaiter(this, void 0, void 0, function () {
            var scanner, capabilities, advanced, refreshed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scanner = this.getActiveHtml5Scanner("torch");
                        return [4 /*yield*/, this.getCameraCapabilities()];
                    case 1:
                        capabilities = _a.sent();
                        if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities.torch.supported)) {
                            throw new Error("The active camera does not support torch control.");
                        }
                        advanced = { torch: enabled };
                        return [4 /*yield*/, scanner.applyVideoConstraints({ advanced: [advanced] })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getCameraCapabilities()];
                    case 3:
                        refreshed = _a.sent();
                        if (!refreshed) {
                            throw new Error("The active camera stopped before torch was applied.");
                        }
                        return [2 /*return*/, refreshed];
                }
            });
        });
    };
    /** Applies a camera zoom value and returns the refreshed capabilities. */
    QrcodeScanService.prototype.setZoom = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var scanner, capabilities, advanced, refreshed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Number.isFinite(value)) {
                            throw new Error("Camera zoom must be a finite number.");
                        }
                        scanner = this.getActiveHtml5Scanner("zoom");
                        return [4 /*yield*/, this.getCameraCapabilities()];
                    case 1:
                        capabilities = _a.sent();
                        if (!(capabilities === null || capabilities === void 0 ? void 0 : capabilities.zoom.supported)) {
                            throw new Error("The active camera does not support zoom control.");
                        }
                        if (value < capabilities.zoom.min || value > capabilities.zoom.max) {
                            throw new Error("Camera zoom must be between ".concat(capabilities.zoom.min, " and ").concat(capabilities.zoom.max, "."));
                        }
                        advanced = { zoom: value };
                        return [4 /*yield*/, scanner.applyVideoConstraints({ advanced: [advanced] })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getCameraCapabilities()];
                    case 3:
                        refreshed = _a.sent();
                        if (!refreshed) {
                            throw new Error("The active camera stopped before zoom was applied.");
                        }
                        return [2 /*return*/, refreshed];
                }
            });
        });
    };
    /** Returns the actual mode used by the current or most recent scan. */
    QrcodeScanService.prototype.getCurrentMode = function () {
        return this.currentMode;
    };
    /** Returns whether this service is starting, scanning, or paused. */
    QrcodeScanService.prototype.getIsScanning = function () {
        return this.isScanning;
    };
    /** Returns whether the current user agent is WeChat. */
    QrcodeScanService.prototype.getIsWechatEnv = function () {
        return this.isWechatEnvironment();
    };
    /** Returns whether the browser exposes the native BarcodeDetector API. */
    QrcodeScanService.prototype.getSupportsNativeDetector = function () {
        if (typeof window === "undefined")
            return false;
        var BarcodeDetectorConstructor = window.BarcodeDetector;
        if (typeof BarcodeDetectorConstructor !== "function")
            return false;
        try {
            new BarcodeDetectorConstructor({ formats: ["qr_code"] });
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    /** Releases the camera and invalidates all pending operations. */
    QrcodeScanService.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stop()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QrcodeScanService.prototype.isWechatAvailable = function () {
        var _a, _b, _c;
        return (this.getIsWechatEnv() &&
            Boolean(this.wechatAdapter) &&
            ((_c = (_b = (_a = this.wechatAdapter) === null || _a === void 0 ? void 0 : _a.isAvailable) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : true));
    };
    QrcodeScanService.prototype.assertContainer = function (containerId) {
        if (!containerId) {
            throw new Error("containerId is required for HTML5 scanning.");
        }
        if (!document.getElementById(containerId)) {
            throw new Error("Container #".concat(containerId, " does not exist."));
        }
    };
    QrcodeScanService.prototype.assertImageFile = function (file, maxFileSize) {
        if (typeof File === "undefined" || !(file instanceof File)) {
            throw new Error("scanImage requires a browser File object.");
        }
        if (file.type && !file.type.startsWith("image/")) {
            throw new Error("scanImage only accepts image files.");
        }
        if (maxFileSize !== undefined &&
            (!Number.isFinite(maxFileSize) || maxFileSize <= 0)) {
            throw new Error("maxFileSize must be a positive finite number.");
        }
        if (maxFileSize !== undefined && file.size > maxFileSize) {
            throw new Error("Image file size ".concat(file.size, " exceeds the ").concat(maxFileSize, " byte limit."));
        }
    };
    QrcodeScanService.prototype.resolveImageContainer = function (containerId, showImage) {
        var _a;
        if (typeof document === "undefined") {
            throw new Error("Image scanning requires a browser document.");
        }
        if (containerId) {
            var host = document.getElementById(containerId);
            if (!host) {
                throw new Error("Container #".concat(containerId, " does not exist."));
            }
            var element_1 = this.createOwnedScannerContainer(host, false);
            return { id: element_1.id, element: element_1, owned: true };
        }
        if (showImage) {
            throw new Error("containerId is required when showImage is true.");
        }
        var parent = (_a = document.body) !== null && _a !== void 0 ? _a : document.documentElement;
        if (!parent) {
            throw new Error("Image scanning requires an initialized browser document.");
        }
        var element = this.createOwnedScannerContainer(parent, true);
        return { id: element.id, element: element, owned: true };
    };
    QrcodeScanService.prototype.createOwnedScannerContainer = function (parent, hidden) {
        var element = document.createElement("div");
        element.id =
            "react-hooks-kit-qrcode-scanner-".concat(++scannerContainerSequence);
        element.hidden = hidden;
        parent.appendChild(element);
        return element;
    };
    QrcodeScanService.prototype.assertImageContainer = function (containerId, showImage) {
        if (typeof document === "undefined") {
            throw new Error("Image scanning requires a browser document.");
        }
        if (showImage && !containerId) {
            throw new Error("containerId is required when showImage is true.");
        }
        if (containerId && !document.getElementById(containerId)) {
            throw new Error("Container #".concat(containerId, " does not exist."));
        }
    };
    QrcodeScanService.prototype.assertCurrentImageOperation = function (operation) {
        if (this.isCurrent(operation))
            return;
        this.throwSupersededImageError();
    };
    QrcodeScanService.prototype.throwSupersededImageError = function () {
        var error = new Error("Image scan was superseded by a newer operation.");
        error.name = "AbortError";
        throw error;
    };
    QrcodeScanService.prototype.assertCurrentCameraOperation = function (request, operation, scanner) {
        if (request === this.cameraSwitchRequest &&
            this.isCurrent(operation) &&
            this.scanner === scanner &&
            this.currentMode === "html5" &&
            this.isScanning) {
            return;
        }
        var error = new Error("Camera switch was superseded by a newer operation.");
        error.name = "AbortError";
        throw error;
    };
    QrcodeScanService.prototype.getActiveHtml5Scanner = function (feature) {
        if (this.currentMode !== "html5" || !this.scanner || !this.isScanning) {
            throw new Error("An active HTML5 scanner is required before controlling camera ".concat(feature, "."));
        }
        return this.scanner;
    };
    QrcodeScanService.prototype.finiteNumberOrNull = function (value) {
        return typeof value === "number" && Number.isFinite(value) ? value : null;
    };
    QrcodeScanService.prototype.positiveFiniteNumberOrNull = function (value) {
        var number = this.finiteNumberOrNull(value);
        return number !== null && number > 0 ? number : null;
    };
    QrcodeScanService.prototype.createBasicResult = function (text, source) {
        return {
            text: text,
            source: source,
            format: null,
            formatName: null,
            contentType: null,
            bounds: null,
            decoderName: null,
            timestamp: Date.now(),
        };
    };
    QrcodeScanService.prototype.normalizeResult = function (module, rawResult, source) {
        var _a, _b, _c, _d;
        var result = rawResult.result;
        var bounds = result.bounds;
        return {
            text: rawResult.decodedText,
            source: source,
            format: result.format === undefined
                ? null
                : this.unmapFormat(module, result.format.format),
            formatName: (_b = (_a = result.format) === null || _a === void 0 ? void 0 : _a.formatName) !== null && _b !== void 0 ? _b : null,
            contentType: result.decodedTextType === undefined
                ? null
                : result.decodedTextType === 1
                    ? "url"
                    : "unknown",
            bounds: bounds
                ? {
                    x: bounds.x,
                    y: bounds.y,
                    width: bounds.width,
                    height: bounds.height,
                }
                : null,
            decoderName: (_d = (_c = result.debugData) === null || _c === void 0 ? void 0 : _c.decoderName) !== null && _d !== void 0 ? _d : null,
            timestamp: Date.now(),
        };
    };
    QrcodeScanService.prototype.startWechat = function (options, signal, operation) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.wechatAdapter.scan({
                            signal: signal,
                            formats: options.formats,
                        })];
                    case 1:
                        result = _b.sent();
                        if (!this.isCurrent(operation))
                            return [2 /*return*/];
                        this.isScanning = false;
                        this.currentMode = "none";
                        if (result === null) {
                            (_a = options.onCancel) === null || _a === void 0 ? void 0 : _a.call(options);
                        }
                        else {
                            options.onSuccess(result, this.createBasicResult(result, "wechat"));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QrcodeScanService.prototype.startHtml5 = function (options, operation) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var module, useNativeDetector, host, ownedContainer, scanner, camera, cameraIdOrConfig, configuration, error_3;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.loadHtml5Qrcode()];
                    case 1:
                        module = _b.sent();
                        if (!this.isCurrent(operation))
                            return [2 /*return*/];
                        useNativeDetector = options.useNativeDetector && this.getSupportsNativeDetector();
                        host = document.getElementById(options.containerId);
                        if (!host) {
                            throw new Error("Container #".concat(options.containerId, " does not exist."));
                        }
                        ownedContainer = this.createOwnedScannerContainer(host, false);
                        try {
                            scanner = new module.Html5Qrcode(ownedContainer.id, {
                                formatsToSupport: this.mapFormats(module, options.formats),
                                useBarCodeDetectorIfSupported: useNativeDetector,
                                verbose: options.verbose,
                            });
                        }
                        catch (error) {
                            ownedContainer.remove();
                            throw error;
                        }
                        this.ownedContainers.set(scanner, ownedContainer);
                        this.scanner = scanner;
                        this.lastHtml5Options = options;
                        camera = (_a = options.camera) !== null && _a !== void 0 ? _a : DEFAULT_CAMERA;
                        cameraIdOrConfig = typeof camera === "string" ? camera : { facingMode: "environment" };
                        configuration = {
                            fps: options.fps,
                            qrbox: options.qrbox,
                            aspectRatio: options.aspectRatio,
                            disableFlip: options.disableFlip,
                            videoConstraints: typeof camera === "string" ? undefined : camera,
                        };
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 9, , 11]);
                        this.pendingScanners.add(scanner);
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, , 5, 6]);
                        return [4 /*yield*/, scanner.start(cameraIdOrConfig, configuration, function (decodedText, rawResult) {
                                if (!_this.isActiveScanner(operation, scanner))
                                    return;
                                options.onSuccess(decodedText, _this.normalizeResult(module, rawResult, "camera"));
                                if (options.stopOnSuccess) {
                                    void _this.stop().catch(function (error) { var _a; return (_a = options.onError) === null || _a === void 0 ? void 0 : _a.call(options, normalizeError$1(error)); });
                                }
                            }, function (message) {
                                var _a;
                                if (_this.isActiveScanner(operation, scanner)) {
                                    (_a = options.onDecodeError) === null || _a === void 0 ? void 0 : _a.call(options, message);
                                }
                            })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.pendingScanners.delete(scanner);
                        return [7 /*endfinally*/];
                    case 6:
                        if (!!this.isActiveScanner(operation, scanner)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        error_3 = _b.sent();
                        if (this.scanner === scanner)
                            this.scanner = null;
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 10:
                        _b.sent();
                        throw error_3;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    QrcodeScanService.prototype.mapFormats = function (module, formats) {
        var supported = module.Html5QrcodeSupportedFormats;
        var formatMap = {
            qr_code: supported.QR_CODE,
            aztec: supported.AZTEC,
            codabar: supported.CODABAR,
            code_39: supported.CODE_39,
            code_93: supported.CODE_93,
            code_128: supported.CODE_128,
            data_matrix: supported.DATA_MATRIX,
            maxicode: supported.MAXICODE,
            itf: supported.ITF,
            ean_13: supported.EAN_13,
            ean_8: supported.EAN_8,
            pdf_417: supported.PDF_417,
            rss_14: supported.RSS_14,
            rss_expanded: supported.RSS_EXPANDED,
            upc_a: supported.UPC_A,
            upc_e: supported.UPC_E,
            upc_ean_extension: supported.UPC_EAN_EXTENSION,
        };
        return formats.map(function (format) { return formatMap[format]; });
    };
    QrcodeScanService.prototype.unmapFormat = function (module, format) {
        var _a;
        var supported = module.Html5QrcodeSupportedFormats;
        var formatMap = [
            [supported.QR_CODE, "qr_code"],
            [supported.AZTEC, "aztec"],
            [supported.CODABAR, "codabar"],
            [supported.CODE_39, "code_39"],
            [supported.CODE_93, "code_93"],
            [supported.CODE_128, "code_128"],
            [supported.DATA_MATRIX, "data_matrix"],
            [supported.MAXICODE, "maxicode"],
            [supported.ITF, "itf"],
            [supported.EAN_13, "ean_13"],
            [supported.EAN_8, "ean_8"],
            [supported.PDF_417, "pdf_417"],
            [supported.RSS_14, "rss_14"],
            [supported.RSS_EXPANDED, "rss_expanded"],
            [supported.UPC_A, "upc_a"],
            [supported.UPC_E, "upc_e"],
            [supported.UPC_EAN_EXTENSION, "upc_ean_extension"],
        ];
        var mappedFormat = formatMap.find(function (_a) {
            var _b = __read(_a, 1), value = _b[0];
            return value === format;
        });
        return (_a = mappedFormat === null || mappedFormat === void 0 ? void 0 : mappedFormat[1]) !== null && _a !== void 0 ? _a : null;
    };
    QrcodeScanService.prototype.getRunningCameraId = function () {
        var _a, _b;
        try {
            return (_a = this.scanner) === null || _a === void 0 ? void 0 : _a.getRunningTrackSettings().deviceId;
        }
        catch (_c) {
            var camera = (_b = this.lastHtml5Options) === null || _b === void 0 ? void 0 : _b.camera;
            return typeof camera === "string" ? camera : undefined;
        }
    };
    QrcodeScanService.prototype.isCurrent = function (operation) {
        return operation === this.operation;
    };
    QrcodeScanService.prototype.isActiveScanner = function (operation, scanner) {
        return this.isCurrent(operation) && this.scanner === scanner;
    };
    QrcodeScanService.prototype.stopActiveScanner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scanner, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scanner = this.scanner;
                        this.scanner = null;
                        if (!scanner)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.disposeScanner(scanner)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        if (!this.scanner)
                            this.scanner = scanner;
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QrcodeScanService.prototype.disposeScanner = function (scanner) {
        return __awaiter(this, void 0, void 0, function () {
            var ownedContainer_1, stopError, error_5, ownedContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.disposedScanners.has(scanner))
                            return [2 /*return*/];
                        if (this.pendingScanners.has(scanner)) {
                            ownedContainer_1 = this.ownedContainers.get(scanner);
                            if (ownedContainer_1)
                                ownedContainer_1.hidden = true;
                            return [2 /*return*/];
                        }
                        if (!scanner.isScanning) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, scanner.stop()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        stopError = error_5;
                        return [3 /*break*/, 4];
                    case 4:
                        try {
                            scanner.clear();
                        }
                        catch (error) {
                            stopError !== null && stopError !== void 0 ? stopError : (stopError = error);
                        }
                        if (stopError)
                            throw normalizeError$1(stopError);
                        ownedContainer = this.ownedContainers.get(scanner);
                        if (ownedContainer) {
                            this.ownedContainers.delete(scanner);
                            ownedContainer.remove();
                        }
                        this.disposedScanners.add(scanner);
                        return [2 /*return*/];
                }
            });
        });
    };
    return QrcodeScanService;
}());

var DEFAULT_OPTIONS = {
    fps: 10,
    qrbox: 250,
    aspectRatio: 1,
    disableFlip: false,
    formats: ["qr_code"],
    useNativeDetector: true,
    verbose: false,
    stopOnSuccess: false,
};
var normalizeError = function (error) {
    return error instanceof Error ? error : new Error(String(error));
};
var createFallbackScanResult = function (text, source) { return ({
    text: text,
    source: source,
    format: null,
    formatName: null,
    contentType: null,
    bounds: null,
    decoderName: null,
    timestamp: Date.now(),
}); };
var queryCameraPermission = function () { return __awaiter(void 0, void 0, void 0, function () {
    var status_1;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (typeof navigator === "undefined" ||
                    !navigator.mediaDevices ||
                    !((_b = navigator.permissions) === null || _b === void 0 ? void 0 : _b.query)) {
                    return [2 /*return*/, { state: "unsupported", status: null }];
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, navigator.permissions.query({
                        name: "camera",
                    })];
            case 2:
                status_1 = _c.sent();
                return [2 /*return*/, {
                        state: status_1.state,
                        status: status_1,
                    }];
            case 3:
                _c.sent();
                return [2 /*return*/, { state: "unsupported", status: null }];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getInitialCameraPermissionState = function () {
    var _a;
    return typeof navigator === "undefined" ||
        !navigator.mediaDevices ||
        !((_a = navigator.permissions) === null || _a === void 0 ? void 0 : _a.query)
        ? "unsupported"
        : "unknown";
};
var validateImageScanRequest = function (file, options) {
    var _a;
    if (typeof File === "undefined" || !(file instanceof File)) {
        throw new Error("scanImage requires a browser File object.");
    }
    if (file.type && !file.type.startsWith("image/")) {
        throw new Error("scanImage only accepts image files.");
    }
    if (options.maxFileSize !== undefined &&
        (!Number.isFinite(options.maxFileSize) || options.maxFileSize <= 0)) {
        throw new Error("maxFileSize must be a positive finite number.");
    }
    if (options.maxFileSize !== undefined &&
        file.size > options.maxFileSize) {
        throw new Error("Image file size ".concat(file.size, " exceeds the ").concat(options.maxFileSize, " byte limit."));
    }
    if (((_a = options.formats) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        throw new Error("At least one scan format must be provided.");
    }
    if (typeof document === "undefined") {
        throw new Error("Image scanning requires a browser document.");
    }
    if (options.showImage && !options.containerId) {
        throw new Error("containerId is required when showImage is true.");
    }
    if (options.containerId &&
        !document.getElementById(options.containerId)) {
        throw new Error("Container #".concat(options.containerId, " does not exist."));
    }
};
var isScanningStatus = function (status) {
    return status === "starting" || status === "scanning" || status === "paused";
};
/**
 * **useQrcodeScan** is a React Hook that scans QR codes and barcodes from a
 * camera, an image file, or an application-provided WeChat adapter.
 * ### Parameters
 * - options?: `UseQrcodeScanOptions | QrcodeScanMode` - Shared scanner options, or a mode string for concise usage.
 *   - mode: `"auto" | "wechat" | "html5"?` - The preferred live scanner mode. Defaults to `"auto"`.
 *   - wechatAdapter: `QrcodeScanWechatAdapter?` - An application-owned WeChat JS-SDK bridge.
 *   - service: `QrcodeScanServiceLike?` - A stable custom scanner service. The first value is used for the Hook lifetime.
 *   - onSuccess: `((result: string, details?: QrcodeScanResult) => void)?` - The default success callback for live and image scans.
 *   - onError: `((error: Error) => void)?` - The default operational error callback.
 *   - onCancel: `(() => void)?` - The default WeChat cancellation callback.
 *   - onDecodeError: `((message: string) => void)?` - Receives non-fatal per-frame decode misses.
 * ---
 * ### Return (Object)
 * - status: `QrcodeScanStatus` - The lifecycle state, including `decoding` for image files.
 * - isScanning: `boolean` - Whether a live scanner is starting, running, or paused.
 * - isPaused: `boolean` - Whether an HTML5 camera scan is paused.
 * - isDecodingImage: `boolean` - Whether an image file is currently being decoded.
 * - result: `string | null` - The latest decoded text, retained for backwards compatibility.
 * - scanResult: `QrcodeScanResult | null` - The normalized result source, format, bounds, content type, decoder, and timestamp.
 * - error: `Error | null` - The latest operational or device-control error.
 * - mode: `"wechat" | "html5" | "none"` - The active live scanner mode. Image decoding keeps this as `none`.
 * - cameraCapabilities: `QrcodeCameraCapabilities | null` - Torch and zoom support for the active camera track.
 * - cameraPermission: `QrcodeCameraPermissionState` - The observable camera permission without prompting on mount.
 * - isWechatEnv: `boolean` - Whether the current user agent is WeChat.
 * - supportsNativeDetector: `boolean` - Whether the native BarcodeDetector API is exposed.
 * - start: `(options?: QrcodeScanStartOptions) => Promise<void>` - Starts a live scan. Per-scan callbacks override shared callbacks.
 * - stop: `() => Promise<void>` - Stops scanning, clears image previews, and releases the camera.
 * - pause: `() => Promise<void>` - Pauses an HTML5 camera scan.
 * - resume: `() => Promise<void>` - Resumes a paused HTML5 camera scan.
 * - switchCamera: `(cameraId?: string) => Promise<QrcodeCamera>` - Selects a camera or cycles to the next one.
 * - getCameras: `() => Promise<QrcodeCamera[]>` - Requests access when needed and lists browser cameras.
 * - scanImage: `(file: File, options?: QrcodeImageScanStartOptions) => Promise<QrcodeScanResult>` - Decodes one image after stopping any live scan.
 * - refreshCameraCapabilities: `() => Promise<QrcodeCameraCapabilities | null>` - Refreshes the active camera feature snapshot.
 * - setTorch: `(enabled: boolean) => Promise<QrcodeCameraCapabilities>` - Applies torch state when supported.
 * - setZoom: `(value: number) => Promise<QrcodeCameraCapabilities>` - Applies an in-range zoom value when supported.
 * - refreshCameraPermission: `() => Promise<QrcodeCameraPermissionState>` - Re-queries camera permission without requesting it.
 * - clearResult: `() => void` - Clears both text and structured results.
 * - clearError: `() => void` - Clears the latest error without stopping an active scanner.
 * - reset: `() => Promise<void>` - Stops scanning and clears session result and error state.
 * ---
 * ### Usage
 * ```tsx
 * const scanner = useQrcodeScan({ mode: "auto" });
 *
 * await scanner.start({ containerId: "qr-reader" });
 * const capabilities = await scanner.refreshCameraCapabilities();
 * if (capabilities?.torch.supported) await scanner.setTorch(true);
 * if (capabilities?.zoom.supported && capabilities.zoom.min !== null) {
 *   await scanner.setZoom(capabilities.zoom.min);
 * }
 *
 * const imageResult = await scanner.scanImage(file, {
 *   formats: ["qr_code"],
 *   maxFileSize: 8 * 1024 * 1024,
 * });
 * ```
 * ---
 * ### Example
 * ```tsx
 * import { useQrcodeScan } from "@evanpatchouli/react-hooks-kit";
 *
 * const Scanner = () => {
 *   const scanner = useQrcodeScan({
 *     onSuccess: (_text, details) => console.log(details),
 *   });
 *
 *   return (
 *     <section>
 *       <div id="qr-reader" />
 *       <button
 *         onClick={() => void scanner.start({ containerId: "qr-reader" })}
 *       >
 *         Start camera
 *       </button>
 *       <input
 *         type="file"
 *         accept="image/*"
 *         onChange={(event) => {
 *           const file = event.currentTarget.files?.[0];
 *           if (file) void scanner.scanImage(file);
 *         }}
 *       />
 *       <p>Permission: {scanner.cameraPermission}</p>
 *       {scanner.scanResult ? <p>{scanner.scanResult.text}</p> : null}
 *     </section>
 *   );
 * };
 * ```
 * ---
 * ### FAQs
 * - Q: Why does camera scanning fail on an HTTP page?
 * - A: Camera access requires a secure context such as HTTPS or localhost. Image scanning does not request camera permission.
 * ---
 * - Q: Why are format, bounds, or content type sometimes null?
 * - A: The selected browser decoder does not always provide every metadata field.
 * ---
 * - Q: Why are torch or zoom unsupported on a device with a camera?
 * - A: Support is reported by the currently active camera track and can change after switching cameras.
 * ---
 * - Q: Does `granted` guarantee that camera startup will succeed?
 * - A: No. Device availability, browser policy, and concurrent camera use can still prevent startup.
 * ---
 * - Q: Does the Hook configure the WeChat JS-SDK?
 * - A: No. Inject a `wechatAdapter` so the application can own its app ID, signature API, and SDK readiness.
 */
var useQrcodeScan = function (options) {
    var _a;
    if (options === void 0) { options = {}; }
    var config = typeof options === "string" ? { mode: options } : options;
    var requestedMode = (_a = config.mode) !== null && _a !== void 0 ? _a : "auto";
    var callbacksRef = useRef({
        onSuccess: config.onSuccess,
        onError: config.onError,
        onCancel: config.onCancel,
        onDecodeError: config.onDecodeError,
    });
    callbacksRef.current = {
        onSuccess: config.onSuccess,
        onError: config.onError,
        onCancel: config.onCancel,
        onDecodeError: config.onDecodeError,
    };
    var _b = __read(useState(function () {
        var _a;
        return (_a = config.service) !== null && _a !== void 0 ? _a : new QrcodeScanService({ wechatAdapter: config.wechatAdapter });
    }), 1), service = _b[0];
    var _c = __read(useState("idle"), 2), status = _c[0], setStatus = _c[1];
    var _d = __read(useState(null), 2), result = _d[0], setResult = _d[1];
    var _e = __read(useState(null), 2), scanResult = _e[0], setScanResult = _e[1];
    var _f = __read(useState(null), 2), error = _f[0], setError = _f[1];
    var _g = __read(useState("none"), 2), mode = _g[0], setMode = _g[1];
    var _h = __read(useState(null), 2), cameraCapabilities = _h[0], setCameraCapabilities = _h[1];
    var _j = __read(useState(getInitialCameraPermissionState), 2), cameraPermission = _j[0], setCameraPermission = _j[1];
    var _k = __read(useState(function () { return ({
        isWechatEnv: service.getIsWechatEnv(),
        supportsNativeDetector: service.getSupportsNativeDetector(),
    }); }), 1), environment = _k[0];
    var mountedRef = useRef(false);
    var operationRef = useRef(0);
    var controlOperationRef = useRef(0);
    var permissionOperationRef = useRef(0);
    var permissionListenerRef = useRef(null);
    useEffect(function () {
        mountedRef.current = true;
        return function () {
            mountedRef.current = false;
            ++operationRef.current;
            void service.destroy().catch(function () { return undefined; });
        };
    }, [service]);
    var isCurrent = useCallback(function (operation) {
        return mountedRef.current && operation === operationRef.current;
    }, []);
    var replacePermissionListener = useCallback(function (permissionStatus) {
        var currentListener = permissionListenerRef.current;
        if (currentListener) {
            currentListener.status.removeEventListener("change", currentListener.listener);
            permissionListenerRef.current = null;
        }
        if (!permissionStatus)
            return;
        var listener = function () {
            if (mountedRef.current) {
                setCameraPermission(permissionStatus.state);
            }
        };
        permissionStatus.addEventListener("change", listener);
        permissionListenerRef.current = { status: permissionStatus, listener: listener };
    }, []);
    var refreshCameraPermission = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var operation, permission;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    operation = ++permissionOperationRef.current;
                    return [4 /*yield*/, queryCameraPermission()];
                case 1:
                    permission = _a.sent();
                    if (mountedRef.current &&
                        operation === permissionOperationRef.current) {
                        replacePermissionListener(permission.status);
                        setCameraPermission(permission.state);
                    }
                    return [2 /*return*/, permission.state];
            }
        });
    }); }, [replacePermissionListener]);
    useEffect(function () {
        void refreshCameraPermission();
        return function () {
            ++permissionOperationRef.current;
            replacePermissionListener(null);
        };
    }, [refreshCameraPermission, replacePermissionListener]);
    var start = useCallback(function (startOptions) {
        if (startOptions === void 0) { startOptions = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var operation, controlOperation, perScanCallbacks, errorWasReported, terminalSuccessHandled, scanOptions, pendingStart, activeMode, capabilities, startError_1, normalizedError;
            var _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        operation = ++operationRef.current;
                        controlOperation = ++controlOperationRef.current;
                        perScanCallbacks = {
                            onSuccess: startOptions.onSuccess,
                            onError: startOptions.onError,
                            onCancel: startOptions.onCancel,
                            onDecodeError: startOptions.onDecodeError,
                        };
                        errorWasReported = false;
                        terminalSuccessHandled = false;
                        if (mountedRef.current) {
                            setError(null);
                            setResult(null);
                            setScanResult(null);
                            setCameraCapabilities(null);
                            setStatus("starting");
                            setMode("none");
                        }
                        scanOptions = __assign(__assign(__assign({}, DEFAULT_OPTIONS), startOptions), { mode: (_b = startOptions.mode) !== null && _b !== void 0 ? _b : requestedMode, formats: (_c = startOptions.formats) !== null && _c !== void 0 ? _c : DEFAULT_OPTIONS.formats, onSuccess: function (decodedValue, decodedDetails) {
                                var _a, _b;
                                if (!isCurrent(operation))
                                    return;
                                if (scanOptions.stopOnSuccess && terminalSuccessHandled)
                                    return;
                                terminalSuccessHandled = scanOptions.stopOnSuccess;
                                var fallbackSource = service.getCurrentMode() === "wechat" ||
                                    scanOptions.mode === "wechat" ||
                                    (scanOptions.mode === "auto" && service.getIsWechatEnv())
                                    ? "wechat"
                                    : "camera";
                                var details = decodedDetails
                                    ? decodedDetails.text === decodedValue
                                        ? decodedDetails
                                        : __assign(__assign({}, decodedDetails), { text: decodedValue })
                                    : createFallbackScanResult(decodedValue, fallbackSource);
                                setResult(decodedValue);
                                setScanResult(details);
                                if (scanOptions.stopOnSuccess) {
                                    ++controlOperationRef.current;
                                    setStatus("idle");
                                    setMode("none");
                                    setCameraCapabilities(null);
                                }
                                else {
                                    setStatus("scanning");
                                    setMode(service.getCurrentMode());
                                }
                                (_b = ((_a = perScanCallbacks.onSuccess) !== null && _a !== void 0 ? _a : callbacksRef.current.onSuccess)) === null || _b === void 0 ? void 0 : _b(decodedValue, details);
                            }, onError: function (scanError) {
                                var _a, _b;
                                if (!isCurrent(operation))
                                    return;
                                errorWasReported = true;
                                setError(scanError);
                                setStatus("error");
                                setMode("none");
                                setCameraCapabilities(null);
                                (_b = ((_a = perScanCallbacks.onError) !== null && _a !== void 0 ? _a : callbacksRef.current.onError)) === null || _b === void 0 ? void 0 : _b(scanError);
                            }, onCancel: function () {
                                var _a, _b;
                                if (!isCurrent(operation))
                                    return;
                                setStatus("idle");
                                setMode("none");
                                setCameraCapabilities(null);
                                (_b = ((_a = perScanCallbacks.onCancel) !== null && _a !== void 0 ? _a : callbacksRef.current.onCancel)) === null || _b === void 0 ? void 0 : _b();
                            }, onDecodeError: function (message) {
                                var _a, _b;
                                if (!isCurrent(operation))
                                    return;
                                (_b = ((_a = perScanCallbacks.onDecodeError) !== null && _a !== void 0 ? _a : callbacksRef.current.onDecodeError)) === null || _b === void 0 ? void 0 : _b(message);
                            } });
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 8, , 9]);
                        pendingStart = service.start(scanOptions);
                        return [4 /*yield*/, Promise.resolve()];
                    case 2:
                        _f.sent();
                        if (isCurrent(operation) &&
                            service.getCurrentMode() === "wechat" &&
                            service.getIsScanning()) {
                            setMode("wechat");
                            setStatus("scanning");
                        }
                        return [4 /*yield*/, pendingStart];
                    case 3:
                        _f.sent();
                        if (!isCurrent(operation))
                            return [2 /*return*/];
                        activeMode = service.getCurrentMode();
                        setMode(activeMode);
                        setStatus(service.getIsScanning() ? "scanning" : "idle");
                        if (!(activeMode === "html5" && service.getIsScanning())) return [3 /*break*/, 7];
                        setCameraPermission("granted");
                        void refreshCameraPermission();
                        if (!service.getCameraCapabilities) return [3 /*break*/, 7];
                        _f.label = 4;
                    case 4:
                        _f.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, service.getCameraCapabilities()];
                    case 5:
                        capabilities = _f.sent();
                        if (isCurrent(operation) &&
                            controlOperation === controlOperationRef.current) {
                            setCameraCapabilities(capabilities);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        _f.sent();
                        if (isCurrent(operation) &&
                            controlOperation === controlOperationRef.current) {
                            setCameraCapabilities(null);
                        }
                        return [3 /*break*/, 7];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        startError_1 = _f.sent();
                        normalizedError = normalizeError(startError_1);
                        if (isCurrent(operation)) {
                            setError(normalizedError);
                            setStatus("error");
                            setMode("none");
                            setCameraCapabilities(null);
                            if (normalizedError.name === "NotAllowedError") {
                                setCameraPermission("denied");
                                void refreshCameraPermission();
                            }
                            if (!errorWasReported) {
                                (_e = ((_d = perScanCallbacks.onError) !== null && _d !== void 0 ? _d : callbacksRef.current.onError)) === null || _e === void 0 ? void 0 : _e(normalizedError);
                            }
                        }
                        throw normalizedError;
                    case 9: return [2 /*return*/];
                }
            });
        });
    }, [isCurrent, refreshCameraPermission, requestedMode, service]);
    var stop = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var operation, stopError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = ++operationRef.current;
                    ++controlOperationRef.current;
                    if (mountedRef.current) {
                        setStatus("stopping");
                        setCameraCapabilities(null);
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, service.stop()];
                case 2:
                    _c.sent();
                    if (!isCurrent(operation))
                        return [2 /*return*/];
                    setStatus("idle");
                    setMode("none");
                    setCameraCapabilities(null);
                    return [3 /*break*/, 4];
                case 3:
                    stopError_1 = _c.sent();
                    normalizedError = normalizeError(stopError_1);
                    if (isCurrent(operation)) {
                        setError(normalizedError);
                        setStatus("error");
                        setMode("none");
                        setCameraCapabilities(null);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [isCurrent, service]);
    var pause = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var operation, pauseError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = operationRef.current;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, service.pause()];
                case 2:
                    _c.sent();
                    if (isCurrent(operation))
                        setStatus("paused");
                    return [3 /*break*/, 4];
                case 3:
                    pauseError_1 = _c.sent();
                    normalizedError = normalizeError(pauseError_1);
                    if (isCurrent(operation)) {
                        setError(normalizedError);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [isCurrent, service]);
    var resume = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var operation, resumeError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = operationRef.current;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, service.resume()];
                case 2:
                    _c.sent();
                    if (isCurrent(operation))
                        setStatus("scanning");
                    return [3 /*break*/, 4];
                case 3:
                    resumeError_1 = _c.sent();
                    normalizedError = normalizeError(resumeError_1);
                    if (isCurrent(operation)) {
                        setError(normalizedError);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [isCurrent, service]);
    var switchCamera = useCallback(function (cameraId) { return __awaiter(void 0, void 0, void 0, function () {
        var lifecycleOperation, controlOperation, camera, capabilities, switchError_1, normalizedError, capabilities;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    lifecycleOperation = operationRef.current;
                    controlOperation = ++controlOperationRef.current;
                    if (mountedRef.current)
                        setCameraCapabilities(null);
                    _e.label = 1;
                case 1:
                    _e.trys.push([1, 7, , 13]);
                    return [4 /*yield*/, service.switchCamera(cameraId)];
                case 2:
                    camera = _e.sent();
                    if (!isCurrent(lifecycleOperation)) return [3 /*break*/, 6];
                    setError(null);
                    setMode(service.getCurrentMode());
                    setStatus("scanning");
                    setCameraPermission("granted");
                    void refreshCameraPermission();
                    if (!service.getCameraCapabilities) return [3 /*break*/, 6];
                    _e.label = 3;
                case 3:
                    _e.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, service.getCameraCapabilities()];
                case 4:
                    capabilities = _e.sent();
                    if (isCurrent(lifecycleOperation) &&
                        controlOperation === controlOperationRef.current) {
                        setCameraCapabilities(capabilities);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    _e.sent();
                    if (isCurrent(lifecycleOperation) &&
                        controlOperation === controlOperationRef.current) {
                        setCameraCapabilities(null);
                    }
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, camera];
                case 7:
                    switchError_1 = _e.sent();
                    normalizedError = normalizeError(switchError_1);
                    if (!isCurrent(lifecycleOperation)) return [3 /*break*/, 12];
                    setError(normalizedError);
                    if (normalizedError.name === "NotAllowedError") {
                        setCameraPermission("denied");
                        void refreshCameraPermission();
                    }
                    if (!(service.getCameraCapabilities && service.getIsScanning())) return [3 /*break*/, 11];
                    _e.label = 8;
                case 8:
                    _e.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, service.getCameraCapabilities()];
                case 9:
                    capabilities = _e.sent();
                    if (isCurrent(lifecycleOperation) &&
                        controlOperation === controlOperationRef.current) {
                        setCameraCapabilities(capabilities);
                    }
                    return [3 /*break*/, 11];
                case 10:
                    _e.sent();
                    return [3 /*break*/, 11];
                case 11:
                    (_d = (_c = callbacksRef.current).onError) === null || _d === void 0 ? void 0 : _d.call(_c, normalizedError);
                    _e.label = 12;
                case 12: throw normalizedError;
                case 13: return [2 /*return*/];
            }
        });
    }); }, [isCurrent, refreshCameraPermission, service]);
    var getCameras = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var cameras, cameraError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, service.getCameras()];
                case 1:
                    cameras = _c.sent();
                    if (mountedRef.current) {
                        setError(null);
                        setCameraPermission("granted");
                        void refreshCameraPermission();
                    }
                    return [2 /*return*/, cameras];
                case 2:
                    cameraError_1 = _c.sent();
                    normalizedError = normalizeError(cameraError_1);
                    if (mountedRef.current) {
                        setError(normalizedError);
                        if (normalizedError.name === "NotAllowedError") {
                            setCameraPermission("denied");
                            void refreshCameraPermission();
                        }
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 3: return [2 /*return*/];
            }
        });
    }); }, [refreshCameraPermission, service]);
    var scanImage = useCallback(function (file, imageOptions) {
        if (imageOptions === void 0) { imageOptions = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var imageSuccess, imageError, serviceOptions, normalizedError, operation, details, imageScanError_1, normalizedError;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        imageSuccess = imageOptions.onSuccess, imageError = imageOptions.onError, serviceOptions = __rest(imageOptions, ["onSuccess", "onError"]);
                        try {
                            validateImageScanRequest(file, imageOptions);
                            if (!service.scanImage) {
                                throw new Error("The configured QR code scan service does not support image scanning.");
                            }
                        }
                        catch (validationError) {
                            normalizedError = normalizeError(validationError);
                            if (mountedRef.current) {
                                setError(normalizedError);
                                (_a = (imageError !== null && imageError !== void 0 ? imageError : callbacksRef.current.onError)) === null || _a === void 0 ? void 0 : _a(normalizedError);
                            }
                            throw normalizedError;
                        }
                        operation = ++operationRef.current;
                        ++controlOperationRef.current;
                        if (mountedRef.current) {
                            setError(null);
                            setResult(null);
                            setScanResult(null);
                            setCameraCapabilities(null);
                            setMode("none");
                            setStatus("decoding");
                        }
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, service.scanImage(file, serviceOptions)];
                    case 2:
                        details = _d.sent();
                        if (!isCurrent(operation))
                            return [2 /*return*/, details];
                        setResult(details.text);
                        setScanResult(details);
                        setStatus("idle");
                        setMode("none");
                        (_b = (imageSuccess !== null && imageSuccess !== void 0 ? imageSuccess : callbacksRef.current.onSuccess)) === null || _b === void 0 ? void 0 : _b(details.text, details);
                        return [2 /*return*/, details];
                    case 3:
                        imageScanError_1 = _d.sent();
                        normalizedError = normalizeError(imageScanError_1);
                        if (isCurrent(operation)) {
                            setError(normalizedError);
                            setStatus("error");
                            setMode("none");
                            (_c = (imageError !== null && imageError !== void 0 ? imageError : callbacksRef.current.onError)) === null || _c === void 0 ? void 0 : _c(normalizedError);
                        }
                        throw normalizedError;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }, [isCurrent, service]);
    var refreshCameraCapabilities = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var operation, capabilities, capabilityError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = ++controlOperationRef.current;
                    if (!service.getCameraCapabilities) {
                        if (mountedRef.current)
                            setCameraCapabilities(null);
                        return [2 /*return*/, null];
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, service.getCameraCapabilities()];
                case 2:
                    capabilities = _c.sent();
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setCameraCapabilities(capabilities);
                        setError(null);
                    }
                    return [2 /*return*/, capabilities];
                case 3:
                    capabilityError_1 = _c.sent();
                    normalizedError = normalizeError(capabilityError_1);
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setError(normalizedError);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [service]);
    var setTorch = useCallback(function (enabled) { return __awaiter(void 0, void 0, void 0, function () {
        var operation, capabilities, torchError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = ++controlOperationRef.current;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    if (!service.setTorch) {
                        throw new Error("The configured QR code scan service does not support torch control.");
                    }
                    return [4 /*yield*/, service.setTorch(enabled)];
                case 2:
                    capabilities = _c.sent();
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setCameraCapabilities(capabilities);
                        setError(null);
                    }
                    return [2 /*return*/, capabilities];
                case 3:
                    torchError_1 = _c.sent();
                    normalizedError = normalizeError(torchError_1);
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setError(normalizedError);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [service]);
    var setZoom = useCallback(function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var operation, capabilities, zoomError_1, normalizedError;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    operation = ++controlOperationRef.current;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    if (!service.setZoom) {
                        throw new Error("The configured QR code scan service does not support zoom control.");
                    }
                    return [4 /*yield*/, service.setZoom(value)];
                case 2:
                    capabilities = _c.sent();
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setCameraCapabilities(capabilities);
                        setError(null);
                    }
                    return [2 /*return*/, capabilities];
                case 3:
                    zoomError_1 = _c.sent();
                    normalizedError = normalizeError(zoomError_1);
                    if (mountedRef.current &&
                        operation === controlOperationRef.current) {
                        setError(normalizedError);
                        (_b = (_a = callbacksRef.current).onError) === null || _b === void 0 ? void 0 : _b.call(_a, normalizedError);
                    }
                    throw normalizedError;
                case 4: return [2 /*return*/];
            }
        });
    }); }, [service]);
    var clearResult = useCallback(function () {
        setResult(null);
        setScanResult(null);
    }, []);
    var clearError = useCallback(function () {
        setError(null);
        setStatus(function (currentStatus) {
            return currentStatus === "error"
                ? service.getIsScanning()
                    ? "scanning"
                    : "idle"
                : currentStatus;
        });
    }, [service]);
    var reset = useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stop()];
                case 1:
                    _a.sent();
                    if (mountedRef.current) {
                        setResult(null);
                        setScanResult(null);
                        setError(null);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [stop]);
    return {
        status: status,
        isScanning: isScanningStatus(status),
        isPaused: status === "paused",
        isDecodingImage: status === "decoding",
        result: result,
        scanResult: scanResult,
        error: error,
        mode: mode,
        cameraCapabilities: cameraCapabilities,
        cameraPermission: cameraPermission,
        isWechatEnv: environment.isWechatEnv,
        supportsNativeDetector: environment.supportsNativeDetector,
        start: start,
        stop: stop,
        pause: pause,
        resume: resume,
        switchCamera: switchCamera,
        getCameras: getCameras,
        scanImage: scanImage,
        refreshCameraCapabilities: refreshCameraCapabilities,
        setTorch: setTorch,
        setZoom: setZoom,
        refreshCameraPermission: refreshCameraPermission,
        clearResult: clearResult,
        clearError: clearError,
        reset: reset,
    };
};

export { QrcodeScanService, useAsyncEffect, useBatchHooks, useBattery, useBeforeMount, useBroadcastChannel, useClickAway, useConsoleLog, useCookie, useDebounce, useDimensions, useDimensionsById, useEmitter, useEyeDropper, useFavicon, useFetch, useForceUpdate, useForm, useGenerator, useGuide, useHover, useIndexedDB as useIndexDB, useInject, useKeyPress, useLazy, useLazyImage, useList, useLoading, useLocalStorage, useMap, useMediaQuery, useMemento, useMeta, useMixRef, useMount, useMousePosition, useNetworkStatus as useNetwork, useOverflow, useParticle, usePrevious, usePromise, useProtect, useProvide, useQrcodeScan, useRaf, useRafState, useReactive, useReactor, useReactorListener, useReceiver, useRecord, useReflect, useResize, useRipple, useSafeArea, useScroll, useSingleton, useTheme, useThrottle, useTickState, useTicker, useTitle, useToast, useToggle, useTree, useUnmount as useUnMount, useUpdate, useUpdateEffect, useUrl, useVirtualArea, useWatch, useWatchGetter, useWhyDidYouUpdate };
