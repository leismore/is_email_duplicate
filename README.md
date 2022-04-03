# is_email_duplicate

A Node.js application for testing if a user account exists and was activated

## Prerequisites

1. Deploying [auth_app_self](https://github.com/leismore/auth_app_self)
2. Configuring the CouchDB according to [is_email_duplicate_couchdb](https://github.com/leismore/is_email_duplicate_couchdb)

## Deployment

1. Configuring `src/config.json`
2. Configuring `src/corsOrigin.ts`
3. Configuring `src/credential/couchdb.json`
4. Configuring `src/credential/self.json`

## Test

1. Preparing the testing data according to LMOS-NodeJS-Apps Tester
2. Configuring `test/config.json`

`npm test`

## Dependencies

* LMOS CouchDB
* LMOS-NodeJS-Apps Tester

## Copyright

GNU Affero General Public License v3.0

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author / 03 April 2022)
