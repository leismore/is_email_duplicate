/**
 * IEDError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              not application/json
 * 2              CouchDB: connection failure
 * 3              invalid credential
 * 4              HTTP 405: Method Not Allowed
 * 5              authorization failure
 * 6              auth_app_self failure
 * 7              invalid input: email
 * 8              CouchDB (View): get_userID_email failure
 * 9              CouchDB (View): is_dup_userID failure
 * 10             CouchDB (Use database): user failure
 * 11             CouchDB (Use database): user_authentication failure
 */

import { LMError } from '@leismore/lmerror';
class    IEDError extends LMError {}
export { IEDError };
