import inputValidateClasslist from './input-validate-classlist';

export default function () {
  var inputs = document.querySelectorAll('input[type="password"]');

  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];

    /** pattern only for no-js */
    inp.removeAttribute('pattern');
    
    /** validation */
    inp.addEventListener('input', function () {
      var value = this.value;

      inputValidateClasslist.call(this, value.length >= 5);
    })
  }
}