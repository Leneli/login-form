import * as constants from './CONSTANTS';

export default function (isValid) {
  if (this instanceof HTMLInputElement) {
    var parent = this.parentElement;
    var message = this.nextElementSibling && this.nextElementSibling.classList.contains(constants.FORM_MESSAGE_CLASS_NAME)
      ? this.nextElementSibling
      : null;

    if (isValid) {
      this.classList.add(constants.VALID_CLASS_NAME);
      this.classList.remove(constants.INVALID_CLASS_NAME);
      parent.classList.add(constants.VALID_CLASS_NAME);
      parent.classList.remove(constants.INVALID_CLASS_NAME);
      if (message) message.classList.add(constants.HIDE_CLASS_NAME);
    } else {
      this.classList.add(constants.INVALID_CLASS_NAME);
      this.classList.remove(constants.VALID_CLASS_NAME);
      parent.classList.add(constants.INVALID_CLASS_NAME);
      parent.classList.remove(constants.VALID_CLASS_NAME);
      if (message) message.classList.remove(constants.HIDE_CLASS_NAME);
    }
  }
}