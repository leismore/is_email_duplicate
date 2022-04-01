/**
 * connect_db function: Connect to the CouchDB
 */

import * as nano         from 'nano';
import { IEDError }      from './IEDError';
import { unknown2error } from '@leismore/unknown2error';
import * as credential   from '../credential/couchdb.json';

/**
 * @throws {IEDError}
 */
function connect_db():nano.ServerScope
{
  const PROTOCOL = credential.ssl ? 'https' : 'http';

  try {
    return nano(
      PROTOCOL + '://' + credential.user     + ':' +
                         credential.password + '@' +
                         credential.host     + ':' +
                         credential.port
    );
  } catch (e) {
    const f      = unknown2error(e);
    let error    = { message: 'CouchDB: connection failure', code: '2' };
    let response = { statusCode:'500' };
    throw new IEDError(error, response, f);
  }
}

export { connect_db };
