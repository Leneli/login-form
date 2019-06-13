import * as constants from './CONSTANTS';
import inputValidateClasslist from './input-validate-classlist';

var Cleave = require('cleave.js');

export default function () {
  var inputs = document.querySelectorAll('input.' + constants.PTONE_MASK_CLASS_NAME);

  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];
    
    const cleave = new Cleave(inp, {
      delimiters: [' (', ') ', '-', '-', '-'],
      blocks: [1, 3, 3, 2, 2]
    });

    /** pattern only for no-js */
    inp.removeAttribute('pattern');

    /** only numbers for keypress */
    inp.addEventListener('keypress', function (event) {
      event = event || window.event;

      if (isNaN(event.key)) event.preventDefault()
    })

    /** validation */
    inp.addEventListener('input', function () {
      var value = this.value;
      var reg = /\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}/g;

      inputValidateClasslist.call(this, reg.test(value))
    })
  }
}
