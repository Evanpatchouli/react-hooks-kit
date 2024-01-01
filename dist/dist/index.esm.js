import { useRef, useEffect, useState, useCallback, useMemo, Fragment, useLayoutEffect, createContext, useContext } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import ReactDOM from 'react-dom';

function usePrevious(value) {
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}

function useToggle(initial, valueMap) {
    var _a, _b;
    var _c = useState(initial || false), toogle = _c[0], setToogle = _c[1];
    var switchToogle = function (bool) {
        if (typeof bool === "boolean") {
            setToogle(bool);
            return;
        }
        setToogle(function (pre) { return !pre; });
    };
    return [toogle ? (_a = valueMap === null || valueMap === void 0 ? void 0 : valueMap.true) !== null && _a !== void 0 ? _a : true : (_b = valueMap === null || valueMap === void 0 ? void 0 : valueMap.false) !== null && _b !== void 0 ? _b : false, switchToogle, setToogle];
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
    var _a = useState(formatLoadingState(loadingMap, options.boolify)), loading = _a[0], _setLoading = _a[1];
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
    var _a = useState(initialState), meta = _a[0], setState = _a[1];
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
    var _c = useState(
    // @ts-ignore
    __spreadArray([], initialItems, true).map(function (item) {
        var _a;
        return (__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a)));
    })), items = _c[0], setItems = _c[1];
    var _d = useState(__spreadArray([], initialItems, true)), originalItems = _d[0], setOriginalItems = _d[1];
    useEffect(function () {
        // 去除 唯一id 再设置
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"]) {
                delete _item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], newItems, true));
    }, dependencies || []);
    var save = useCallback(function () {
        var newItems = items.map(function (item) {
            var _item = __assign({}, item);
            if (_item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"]) {
                delete _item[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"];
            }
            return _item;
        });
        setOriginalItems(__spreadArray([], newItems, true));
    }, [items]);
    var addItem = useCallback(function (item) {
        // @ts-ignore
        setItems(function (prevItems) {
            var _a;
            return __spreadArray(__spreadArray([], prevItems, true), [__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a))], false);
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
            __spreadArray([], items, true).map(function (item) {
                var _a;
                return (__assign(__assign({}, item), (_a = {}, _a[(options === null || options === void 0 ? void 0 : options.idKey) || "_id"] = UKey(), _a)));
            }));
            return;
        }
        setItems(
        // @ts-ignore
        __spreadArray([], originalItems, true).map(function (item) {
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
    var sortedItems = __spreadArray([], items, true).sort((options === null || options === void 0 ? void 0 : options.sortFn) || (function () { return 0; }));
    var filteredItems = sortedItems.filter((options === null || options === void 0 ? void 0 : options.filterFn) || (function () { return true; }));
    var _e = useState(1), currentPage = _e[0], setCurrentPage = _e[1];
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
    var _a = useState(cloneDeep(initialTree)), tree = _a[0], setTree = _a[1];
    var _b = useState(null); _b[0]; var setFilteredTree = _b[1];
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
        var final = __spreadArray([result], childrenResults, true);
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
    var _a = useState(0), set = _a[1];
    return function (callback) {
        set(function (pre) {
            callback === null || callback === void 0 ? void 0 : callback(pre);
            return pre + 1;
        });
    };
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
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var Type = types_1[_i];
        var state_1 = _loop_1(Type);
        if (typeof state_1 === "object")
            return state_1.value;
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
            _this._state = newState instanceof Function ? newState(_this._state) : newState;
        };
        this._defaultValue = undefined;
        this._plugins = [];
        this._listeners = [];
        this._deepCloneWhenSet = false;
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
 * useReactor is a React Hook that returns a Reactor instance.
 * @param initialValue
 * @param plugins
 * @returns Reactor instance
 */
var useReactor = function (initialValue, plugins) {
    var _a = useState(initialValue), state = _a[0], setState = _a[1];
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
    var _a = useState(tickBy === "onSetState" ? 0 : -1), tick = _a[0], setTick = _a[1];
    var _b = useState(initialState), state = _b[0], _setState = _b[1];
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
    var _a = useState({
        idKey: UKey(),
        data: initialState,
    }), state = _a[0], setState = _a[1];
    var _b = useState([]), history = _b[0], setHistory = _b[1];
    var _c = useState([]), mementos = _c[0], setMementos = _c[1];
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

var useTicker = function (fn, durationOrOptions, options) {
    var duration;
    if (typeof durationOrOptions === "number") {
        duration = durationOrOptions;
    }
    else if (typeof durationOrOptions === "object") {
        options = durationOrOptions;
    }
    var _options = useMemo(function () {
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
    var _a = useState(0), tick = _a[0], setTick = _a[1];
    var _b = useState(_options.pauseAtFirst || false), isPaused = _b[0], setIsPaused = _b[1];
    var status = isPaused ? "off" : "on";
    var startDelay = 0;
    var intervalRef = useRef(null);
    var pause = useCallback(function () { return setIsPaused(true); }, []);
    var resume = useCallback(function () {
        setIsPaused(false);
        if ("first" === _options.immediate && tick === 0) {
            return fn(tick);
        }
    }, [_options.immediate, tick, fn]);
    var reset = function () { return setTick(0); };
    var mountedRef = useRef(false);
    useEffect(function () {
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
    useEffect(function () {
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
    useEffect(function () {
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
    var debounceFn = useMemo(function () {
        if (delay < 0) {
            return emptyFn$1;
        }
        if (delay === 0) {
            return fn;
        }
        return debounce(fn, delay, immediate, callback);
    }, [fn, delay, immediate, callback]);
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
    var throttleFn = useMemo(function () {
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
var listeners$1 = new Set();
window.addEventListener("popstate", function () {
    listeners$1.forEach(function (listener) { return listener(); });
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
    var _a = useState(getUrlInfo()), urlInfo = _a[0], setUrlInfo = _a[1];
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
        listeners$1.add(handlePopState);
        return function () {
            // 在组件卸载时注销回调函数
            listeners$1.delete(handlePopState);
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
    var _a = useState(initValue), value = _a[0], setValue = _a[1];
    var oldValueRef = useRef(value);
    var mountedRef = useRef(false);
    useEffect(function () {
        if (!mountedRef.current && immediate) {
            callback(value, oldValueRef.current);
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
            callback(newValue, oldValueRef.current);
            setValue(newValue);
            oldValueRef.current = newValue;
        }
    }, [object, path, callback]);
    return value; // PathValue<T, P> | undefined;
};

function WatchGetterAnimation(getter) {
    var _a = useState(getter()), value = _a[0], setValue = _a[1];
    useEffect(function () {
        var animationFrameId;
        var loop = function () {
            var newValue = getter();
            if (newValue !== value) {
                setValue(newValue);
            }
            animationFrameId = requestAnimationFrame(loop);
        };
        loop();
        return function () {
            cancelAnimationFrame(animationFrameId);
        };
    }, [getter, value]);
    return value;
}
function WatchGetterSetter(getter) {
    var setters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        setters[_i - 1] = arguments[_i];
    }
    var _a = useState(getter()), value = _a[0]; _a[1];
    useEffect(function () {
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
function useWatchGetter(getter) {
    var setters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        setters[_i - 1] = arguments[_i];
    }
    if (setters.length === 0) {
        return WatchGetterAnimation(getter);
    }
    else {
        return WatchGetterSetter.apply(void 0, __spreadArray([getter], setters, false));
    }
}

var useReactorListener = function (target, callback) {
    useEffect(function () {
        var unsubscribe = listen(target).then(callback);
        return function () { return unsubscribe(); };
    }, []);
};

function useResize(callback, ref) {
    var _a = useState({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    useEffect(function () {
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

function usePromise(promiseFn, callbacksOrDeps, deps) {
    var callbacks = {};
    if (Array.isArray(callbacksOrDeps)) {
        deps = callbacksOrDeps;
    }
    else if (callbacksOrDeps) {
        callbacks = callbacksOrDeps;
    }
    var _a = useState({
        status: "idle",
        data: null,
        error: null,
    }), state = _a[0], setState = _a[1];
    var abortController = new AbortController();
    var execute = useCallback(function () {
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
    useEffect(function () {
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

function useFetch(url, options, callbacks, deps) {
    var _this = this;
    if (deps === void 0) { deps = []; }
    var _a = useState({
        data: null,
        loading: true,
        error: null,
    }), state = _a[0], setState = _a[1];
    var abortController = new AbortController();
    var opts = __assign(__assign({}, options), { signal: abortController.signal });
    var fetchData = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
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
    useEffect(function () {
        fetchData();
        return function () {
            abortController.abort();
        };
    }, __spreadArray([fetchData], deps, true));
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
    var _a = useState({
        value: undefined,
        done: false,
        error: null,
    }), state = _a[0], setState = _a[1];
    var execute = useCallback(function () {
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

/**
 *
 * @example
 * ```ts
 * const { module, loading, error } = useLazy(() => import('./MyModule'));
 * ```
 */
function useLazy(importFunction) {
    var _a = useState(null), module = _a[0], setModule = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState(null), error = _c[0], setError = _c[1];
    useEffect(function () {
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
    var _h = useState(LazySourceBuilder($defaultSrc)), source = _h[0], setSource = _h[1];
    useEffect(function () {
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

var useMixRef = function (refs) {
    var setRefs = useCallback(function (node) {
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

// 全局的事件监听器
var listeners = new Set();
window.addEventListener("storage", function () {
    listeners.forEach(function (listener) { return listener(); });
});
function useLocalStorage(key, initialValue) {
    var _a = useState(function () {
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
    useEffect(function () {
        var handleStorageChange = function (e) {
            if (key && (Array.isArray(key) ? key : [key]).includes(e.key || "")) {
                setStoredValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
            }
        };
        // 在组件挂载时注册回调函数
        listeners.add(handleStorageChange);
        return function () {
            // 在组件卸载时注销回调函数
            listeners.delete(handleStorageChange);
        };
    }, [key, initialValue]);
    return [storedValue, setValue];
}

function useIndexedDB(dbName, version, upgradeCallback) {
    var _a = useState({ db: null, error: null }), state = _a[0], setState = _a[1];
    useEffect(function () {
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

function useBeforeMount(callback) {
    var callbackRef = useRef(callback);
    // 在组件挂载前执行回调
    callbackRef.current();
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
    useEffect(function () {
        return function () {
            callback();
        };
    }, []); // 空数组表示这个 useEffect 只会在组件挂载后执行一次
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

var useUpdateLayoutEffect = function (callback, dependencies) {
    var firstRenderRef = useRef(true);
    useLayoutEffect(function () {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
};

function useAsyncEffect(callback, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    useEffect(function () {
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
                var key = _a[0], value = _a[1];
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
                value.listener.apply(value, args);
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
        cb = eventNameOrOptions.callback;
        if (cb) {
            if (callback) {
                console.warn("[react-hooks-kit][useReceiver] callback is ignored when options.callback is set");
            }
            else {
                cb = callback;
            }
        }
    }
    var _a = useEmitter({
        name: name,
        namespace: namespace,
    }), subscribe = _a.subscribe, unsubscribe = _a.unsubscribe, emit = _a.emit;
    var _b = useState(true), isListening = _b[0], setIsListening = _b[1];
    var _c = useState(null), eventResult = _c[0], setEventResult = _c[1];
    var eventListener = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        setEventResult(args);
        cb === null || cb === void 0 ? void 0 : cb.apply(void 0, args);
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
    var _a = useReceiver({
        name: "__Inject::".concat(name, "_").concat(UKey()),
        eventName: "__Provider::".concat(name),
        namespace: (options === null || options === void 0 ? void 0 : options.namespace) || "__provide_inject__",
        callback: function (value) {
            var _a;
            (_a = options === null || options === void 0 ? void 0 : options.callback) === null || _a === void 0 ? void 0 : _a.call(options, value);
            return value;
        },
    }), result = _a[0], emit = _a[1].emit;
    var query = function () { return emit("__Inject::".concat(name, "::query"), true); };
    useEffect(function () {
        query();
    }, []);
    return [result === null || result === void 0 ? void 0 : result[0], result === null || result === void 0 ? void 0 : result[1]];
}

function useTheme(arg1, arg2) {
    var _a = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), theme = _a[0], setTheme = _a[1];
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
    var _a = useState(__assign(__assign({}, defaultConfig), config)), toastConfig = _a[0], setToastConfig = _a[1];
    var _b = useState(null); _b[0]; var setToastElement = _b[1];
    var toastRef = useRef(null);
    toastRef.current = useCallback(function (text, config) {
        if (config === void 0) { config = {}; }
        var _config = __assign(__assign(__assign({}, toastConfig), { text: text }), config);
        setToastConfig(_config);
        var element = document.createElement("div");
        setToastElement(element);
        document.body.appendChild(element);
        var root = createRoot$1(element);
        root.render(jsx("div", __assign({ style: __assign(__assign({ position: _config.position }, _config.style), { color: _config.color, left: "50%", top: _config.placement === "center" ? "50%" : "10%", transform: _config.placement === "center" ? "translate(-50%, -50%)" : "translateX(-50%)", backgroundColor: _config.bgColor, padding: "4px 12px", paddingBottom: "6px", borderRadius: "4px", fontSize: "14px" }), className: _config.className }, { children: _config.text })));
        setTimeout(function () {
            document.body.removeChild(element);
            setToastElement(null);
        }, _config.duration);
    }, [toastConfig]);
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
    return {
        render: function (element) {
            ReactDOM.render(element, targetDocument);
        },
    };
};
if ("createRoot" in ReactDOM) {
    // Adapt to React 18
    createRoot = ReactDOM.createRoot;
}
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
    mask.style.pointerEvents = "none !important";
    var maskConfig = config;
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
    return mask;
};
function useGuide(steps, callback, config) {
    var _a = useState(-1), step = _a[0], setStep = _a[1];
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
                createRoot(container).render(
                // @ts-ignore
                render(id, currentStep.name, currentStep.data, currentStep.ids));
                return container;
            }
        });
        callback === null || callback === void 0 ? void 0 : callback(step, currentStep);
        return function () {
            if (currentStep && rootDom && maskRef.current) {
                rootDom.removeChild(mask);
                maskRef.current = null;
            }
            renders === null || renders === void 0 ? void 0 : renders.forEach(function (elem) { return elem === null || elem === void 0 ? void 0 : elem.remove(); });
            // 当不再需要引导元素时，恢复原始的 zIndex
            zIndexes.current.forEach(function (zIndex, id) {
                var element = document.getElementById(id);
                if (element) {
                    element.style.zIndex = zIndex;
                }
            });
            zIndexes.current.clear();
        };
    }, [step, steps]);
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
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var loaderRef = useRef(null);
    var loadMore = useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
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
    useEffect(function () {
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
    ], (depths || []), true));
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
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
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
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            button.removeEventListener((_a = config.trigger) !== null && _a !== void 0 ? _a : "mousedown", handleClick);
            button.removeEventListener("mouseup", hiddenRipple);
            button.removeEventListener("mouseleave", hiddenRipple);
        };
    }, []);
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
        var _a;
        var element = ref.current;
        if (!element)
            return;
        var trigger = config.trigger || "mousedown";
        var duration = config.duration || 500;
        var color = config.color || null;
        var num = config.num || 10;
        var size = (_a = config.size) !== null && _a !== void 0 ? _a : 3;
        var animationFrameId = null;
        var handleTrigger = function (event) {
            if (!enable)
                return;
            var x = event.clientX - element.getBoundingClientRect().left;
            var y = event.clientY - element.getBoundingClientRect().top;
            var startTime = performance.now();
            console.log("x: ".concat(x, ", y: ").concat(y));
            element.style.setProperty("--particle-x", "".concat(x, "px"));
            element.style.setProperty("--particle-y", "".concat(y, "px"));
            element.style.setProperty("--particle-size", "".concat(size));
            element.style.setProperty("--particle-color", null === color ? null : color);
            element.style.setProperty("--particle-time", "".concat(performance.now() / duration)); // "0"
            element.style.setProperty("--particle-num", "".concat(num)); // "10"
            element.style.backgroundImage = "paint(particle)";
            var animate = function (time) {
                var _a;
                var progress = (time - startTime) / ((_a = config.duration) !== null && _a !== void 0 ? _a : 500); // Convert time to seconds
                element.style.setProperty("--particle-time", "".concat(progress));
                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animate);
                }
                else {
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            };
            animationFrameId = requestAnimationFrame(animate);
        };
        element.addEventListener(trigger, handleTrigger);
        return function () {
            element.removeEventListener(trigger, handleTrigger);
        };
    }, [ref, config]);
    return ref;
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

function useBattery(onChargingChange, callbacks) {
    var _a = useState(null), batteryStatus = _a[0], setBatteryStatus = _a[1];
    var _callbacks = useMemo(function () {
        return __assign(__assign({}, callbacks), { onChargingChange: (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onChargingChange) || onChargingChange });
    }, [callbacks, onChargingChange]);
    useEffect(function () {
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
    var _a = useState(function () { return getCookie(name) || initialValue; }), value = _a[0], setValue = _a[1];
    useEffect(function () {
        setCookie(name, value, days);
    }, [name, value, days]);
    return [value, setValue];
}

function useConsoleLog() {
    var _a = useState([]), logs = _a[0], setLogs = _a[1];
    useEffect(function () {
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

function useEyeDropper () {
}

function useHover(onHover) {
    var ref = useRef(null);
    useEffect(function () {
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

function useKeyPress(targetKey) {
    var _a = useState(false), keyPressed = _a[0], setKeyPressed = _a[1];
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
    var _a = useState(window.matchMedia(query).matches), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        var mediaQueryList = window.matchMedia(query);
        var documentChangeHandler = function () { return setMatches(mediaQueryList.matches); };
        mediaQueryList.addListener(documentChangeHandler);
        return function () {
            mediaQueryList.removeListener(documentChangeHandler);
        };
    }, [query]);
    return matches;
}

function useMousePosition(trigger) {
    if (trigger === void 0) { trigger = "mousemove"; }
    var _a = useState({ x: null, y: null }), mousePosition = _a[0], setMousePosition = _a[1];
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

/**
 * @hook useNetworkStatus
 * @description A react hook for getting network status
 * @param throttleInterval suggested to be greater than 16.67ms to avoid too much re-rendering
 * @returns {NetworkStatus}
 */
function useNetworkStatus(throttleInterval) {
    var _a = useState({
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
    useEffect(function () {
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
    var ref = useRef(null);
    var _a = useState(false), isOverflowing = _a[0], setIsOverflowing = _a[1];
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
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);
};

var useRafState = function (initialState) {
    var frame = useRef(0);
    var _a = useState(initialState), state = _a[0], setState = _a[1];
    var setRafState = useCallback(function (value) {
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
    var _a = useState(initialData), data = _a[0], setData = _a[1];
    var messages = useMemo(function () {
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
    var _a = useState({ x: 0, y: 0 }), position = _a[0], setPosition = _a[1];
    var handleScroll = function () {
        var newPosition = {
            x: window.scrollX,
            y: window.scrollY,
        };
        setPosition(newPosition);
        // 遍历 callbacks 数组并调用每个回调函数
        callbacks.forEach(function (cb) { return cb(newPosition); });
    };
    useEffect(function () {
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
    var _a = useState({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }), safeArea = _a[0], setSafeArea = _a[1];
    useEffect(function () {
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
    var instanceRef = useRef(null);
    if (instanceRef.current === null) {
        instanceRef.current = createInstance();
    }
    return instanceRef.current;
}

function useWhyDidYouUpdate(name, props) {
    var previousProps = useRef({});
    useEffect(function () {
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

export { useAsyncEffect, useBatchHooks, useBattery, useBeforeMount, useBroadcastChannel, useClickAway, useConsoleLog, useCookie, useDebounce, useEmitter, useEyeDropper, useFetch, useForceUpdate, useForm, useGenerator, useGuide, useHover, useIndexedDB as useIndexDB, useInject, useKeyPress, useLazy, useLazyImage, useList, useLoading, useLocalStorage, useMediaQuery, useMemento, useMeta, useMixRef, useMount, useMousePosition, useNetworkStatus as useNetwork, useOverflow, useParticle, usePrevious, usePromise, useProtect, useProvide, useRaf, useRafState, useReactive, useReactor, useReactorListener, useReceiver, useResize, useRipple, useSafeArea, useScroll, useSingleton, useTheme, useThrottle, useTickState, useTicker, useToast, useToggle, useTree, useUnmount as useUnMount, useUpdate, useUpdateEffect, useUpdateLayoutEffect, useUrl, useVirtualArea, useWatch, useWatchGetter, useWhyDidYouUpdate };
