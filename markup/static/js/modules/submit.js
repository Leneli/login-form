import { VALID_CLASS_NAME } from './CONSTANTS';

export default function () {
  var submit = document.getElementById('submit');
  var loginInp = document.getElementById('login');
  var passInp = document.getElementById('password');
  var validateMap = new Map();
  var config = { attributes: true };
  var observer;

  if (submit && loginInp && passInp) {
    validateMap
      .set(loginInp, false)
      .set(passInp, false)

    observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          validateMap.set(mutation.target, mutation.target.classList.contains(VALID_CLASS_NAME));

          if (validateMap.get(loginInp) && validateMap.get(passInp)) {
            submit.disabled = false;
          } else {
            submit.disabled = true;
          }
        }
      });    
    });
    
    observer.observe(loginInp, config);
    observer.observe(passInp, config);

    /** event handler */
    submit.addEventListener('click', function (event) {
      event = event || window.event;
      event.preventDefault();

      var data = new FormData(this.form);

      return fetch('/', {
        method: 'post',
        body: data
      })
        .then(response => {
          console.log(response.status)
          /** ...  */
        })
    })
  }
}