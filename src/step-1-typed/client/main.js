/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloMessage';

const mountNode = document.getElementById('mount');
// ERROR: Must be a ReactElement
// const element = 'just a string';
const element = <HelloMessage greeting="Hello"/>;
ReactDOM.render(element, mountNode);
