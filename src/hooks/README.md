# <h1 align="center">react-hooks-kit</h1>

<p align="center">
  <a href="#"><img alt="version" src="https://img.shields.io/badge/latest-1.2.1-yellowgreen.svg"/></a>
  <a href="#"><img alt="npm" src="https://img.shields.io/badge/npm-√-yellowgreen.svg"></a>
  <a href="#"><img alt="react" src="https://img.shields.io/badge/react-16+-yellowgreen.svg"></a>
  <a href="#"><img alt="lisence" src="https://img.shields.io/badge/lisence-MIT-yellowgreen.svg"></a>
</p>
<p align="center">
  <img alt="logo" width="200" src="./public//hook.svg">
</p>

## Overeview

@evanpatchouli/react-hooks-kit is library for making it easy to use react hooks.

## Documentation

- [API - SEE AT GITHUB](https://evanpatchouli.github.io/react-hooks-kit/)

## Introduction

**react-hooks-kit** is an open source library focused on making it easy to use react hooks.

It includes a comprehensive collection of hooks that empower you to accomplish any task in your application without being forced into a specific way of doing things.

react-hooks-kit is a lightweight library that doesn't require any dependencies. It's easy to use, and it's easy to learn.

## Advantages

- **<font color="#2196f3">Cosying</font>**: react-hooks-kit provides a simple API that makes it easy to use react hooks.
  Lightweight: It is a lightweight library without any dependencies.
- **<font color="#2196f3">Overall</font>**: It includes a comprehensive collection of hooks that empower you to accomplish different tasks in your application like store, parser, listeners, effects, etc.
- **<font color="#2196f3">Typescript support</font>**: It is developed with typescript and provides excellent typescript support and type inference support.
- **<font color="#2196f3">Innovation</font>**: It provides some innovative hooks like useWatch (partial listener), useRipple ([css houdini](https://developer.mozilla.org/en-US/docs/Web/Guide/Houdini) effect), etc.

## Progress

There are about **60** hooks in library, most of them are still experimental and not stable yet. In menu, only the hooks without prefix tag is
entirely stable. If a hook with prefix tag of **new**, it means it has passed tests; with a prefix tag of **cup** means experimental; a prefix tag of
**clock** means in plan.

- When a test for a hook or a feature of a hook passed, the z in version x.y.z should be increased by 1.
- When a hook pass all tests, it should be switched to **new**, and the y in version x.y.z should be increased by 1.
- When a module of hooks pass all tests, the x in version x.y.z should be increased by 1.
- After a module of hooks all pass tests for 3 decades, it should get retests, the hooks pass retests should be switched to **stable**.
- After a module of hooks all pass retests, and the x in version x.y.z should be increased by 1.
- Commonly, when a hook passes the first tests, the z should be increased by 1. If a hook is complex, it could increase with a feature passing tests.
- If a clock hook switch into **cup**, the y in version x.y.z should be increased by 1.
- If a new hook is created, the y in version x.y.z should be increased by 1.

## Report

- v1.3.0
 - migrate cra to vite
 - Pass tests for useMap
 - Pass tests for useReactor

- v1.2.3
  - Add new hook useFavicon

- v1.2.2
  - Add new hook useTitle

- v1.2.1
  - Pass tests for useWatch
  - Pass tests for useWatchGetter
