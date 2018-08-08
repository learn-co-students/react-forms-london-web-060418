import React from 'react';
import ReactDOM from 'react-dom';

import ControlledInput from './components/ControlledInput.js'
import FormGoog from './components/FormGoog.js'

ReactDOM.render(
  <div>
    <ControlledInput/>
    <br></br>
    "this form will google 'react' + input in a new tab:"
    <FormGoog/>
  </div>,
  document.getElementById('root')
);
