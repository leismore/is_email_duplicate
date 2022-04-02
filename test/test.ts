import { assert }                    from 'chai';
import axios                         from 'axios';
import * as configApp                from '../src/config.json';
import * as configTest               from './config.json';

const API = (
    (configApp.app.ssl ? 'https' : 'http') + '://' +
    `${configApp.app.domain}:${configApp.app.publicPort}${configApp.api.baseURL}${configApp.api.isEmailDuplicate.url}`
);

const EMAIL_NULL        = 'null@leismore.co';
const EMAIL_INACTIVATED = configTest.userInactivated.email;
const EMAIL_ACTIVATED   = configTest.userActivated.email;

describe('Is Email Duplicate', function(){

    it('1. Null Email', function(){
        return axios.post( API, {email: EMAIL_NULL}, { auth:
            { username: configTest.client.appID,
              password: configTest.client.token }, headers:{'Content-Type': 'application/json'} }
          )
          .then( res => {
            assert
            (
              ( res.status === 200 &&
                String(res.headers['content-type']).includes('application/json') &&
                res.data.result === false
              )
            );
          })
          .catch( () => {
            assert(false);
          });
    });

    it('2. Inactivated Email', function(){
      return axios.post( API, {email: EMAIL_INACTIVATED}, { auth:
          { username: configTest.client.appID,
            password: configTest.client.token }, headers:{'Content-Type': 'application/json'} }
        )
        .then( res => {
          assert
          (
            ( res.status === 200 &&
              String(res.headers['content-type']).includes('application/json') &&
              res.data.result === false
            )
          );
        })
        .catch( () => {
          assert(false);
        });
    });

    it('3. Activated Email', function(){
      return axios.post( API, {email: EMAIL_ACTIVATED}, { auth:
          { username: configTest.client.appID,
            password: configTest.client.token }, headers:{'Content-Type': 'application/json'} }
        )
        .then( res => {
          assert
          (
            ( res.status === 200 &&
              String(res.headers['content-type']).includes('application/json') &&
              res.data.result === true
            )
          );
        })
        .catch( () => {
          assert(false);
        });
    });

});
