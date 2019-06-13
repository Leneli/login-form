'use strict';

import phoneMask from "./modules/phone-mask";
import password from "./modules/password";
import submitButton from "./modules/submit";
import { fixIE } from "./modules/fix";

/*
    This file can be used as entry point for webpack!
 */
phoneMask();
password();
submitButton();
fixIE();