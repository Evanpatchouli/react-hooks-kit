# ChangeLog

## v1.0.0 2024/01/03

All stateful hooks got checked, which resulted for a release of **<font color="#2196f3">v1.0.0</font>**!

---

## v0.1.25 2024/01/02

- **<font color="#c09000">Pass tests</font>** for useMemento

## v0.1.24 2024/01/02

- **<font color="#c09000">Pass tests</font>** for useTickState

## v0.1.23 2024/01/01

- resolve issues of useReactor con-currency
- useTickState refactored

## v0.1.22 2023/12/29

- **<font color="red">Deprecated</font>** useReactorStore, useReactorStoreRef, useReactorStoreContext.
- check entry exports

## v0.1.21 2023/12/28

- **<font color="#c09000">Pass tests</font>** for useReactor
- **<font color="red">Warning : </font>** useReactor exists issues in case of con-currency and asynchronous.

## v0.1.20 2023/12/26

- **<font color="#c09000">Pass tests</font>** for useReactive for Array

## v0.1.19 2023/12/23

- **<font color="#c09000">Pass tests</font>** for useReactive for Date
- **<font color="#c09000">Pass tests</font>** for useReactive for Map
- **<font color="#c09000">Pass tests</font>** for useReactive for Set
- **<font color="#2196f3">Fix</font>** some special key accessing Map and Set
- **<font color="red">Test fails</font>** at useReactive for Array

## v0.1.18 2023/12/21

- **<font color="#c09000">Pass tests</font>** for useReactive for rest primitives
- **<font color="#c09000">Pass tests</font>** for type changing in primitives

## v0.1.17 2023/12/21

- **<font color="#c09000">Pass tests</font>** for useReactive for boolean

## v0.1.16 2023/12/21

- **<font color="#c09000">Pass tests</font>** for useReactive for string

## v0.1.15 2023/12/20

- **<font color="#c09000">Pass tests</font>** for useReactive for number

## v0.1.14 2023/12/20

- useReactive support primitive

## v0.1.13 2023/12/20

- useReactive support array

## v0.1.12 2023/12/19

- Pass tests for useTickState

## v0.1.11 2023/12/19

- Pass tests for useTree

## v0.1.10 2023/12/18

- Pass tests for useList

## v0.1.9 2023/12/18

- rename `renderNoData` to `renderEmpty` globally

## v0.1.8 2023/12/18

- Upgrade type infer of useTree
- Fill docs of useTree

## v0.1.7 2023/12/18

- Pass tests for useMeta
  - change 2rd param to options
- Pass tests for utils.setTo
  - Fix array-like node
  - Fix symbol key
  - Provide option for non-exists
- Pass tests for utils.getFrom
  - Fix none target
  - Fix symbol key

## v0.1.6 2023/12/17

- Refactor `useWatchGetter` to replace Interval with requestAnimation
- `Receiver` expands a property named `isListening`

## v0.1.5 2023/12/17

- Change `useEventEmitter` to `useEmitter`
- Change `useEventListener` to `useReceiver`

## v0.1.4 2023/12/15

- Pass tests for useLoading

## v0.1.3 2023/12/13

- Pass tests for usePrevious
- Pass tests for useToggle

## v0.1.2 2023/12/13

- New hook! usePrevious
- New hook! useToggle
- New hook! useDebounce (test-needless)
- New hook! useThrottle (test-needless)
- New hook! useMixRef (test-needless)
- New hook! useTheme (test-needless)
