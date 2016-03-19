# 5 minute live demo for HH React.js

Preparation
* In WebStorm 2016.1
* Start app:
  * Configure `step-1-typed`
  * in one terminal: `npm start`
  * open `http://localhost:3000/`
* Show code in `step-1-typed`
  * open `main.js`
  * open `HellowMessage.js`
* Start flow:
  * in another terminal: `npm run check`
  * starts flow server
* Enter presentation mode
  * Also show terminals using alt-F12
* open `http://flowtype.org/`

Steps:
* Show `http://flowtype.org/`
  * Flow is a static type checker, designed to quickly find errors in JavaScript applications
* Show app
* Run flow in terminal 2
  * displays: no errors
* in `main.js`
  * `/* @flow */`
  * no additional information
  * make element a string
  * re-run flow
  * show errors
* in `HelloMessage.js`
  * show type declarations/annotations
  * explain: annotations are just removed by babel, they have no effect
  * does not lead to error in WebStorm as we are in flow-mode
  * in ctor, access stuff from state that does not exist => error
* show more if time permits
  * static error in HelloMessage.propTypes
  * incompatibility between Props and State
