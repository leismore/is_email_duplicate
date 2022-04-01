/**
 * The main script of this project
 */

// Import modules
import * as express                from 'express';
import { get_handler }             from '@leismore/get_handler';
import { error_handler_last }      from '@leismore/error_handler_last';
import * as config                 from './config.json';
import { all_handler1, cors_handler,
    post_handler1, post_handler2, post_handler3,
    post_handler4 } from './lib/handler/index';

// Init
let app = express();
app.use( express.json() );

// is-email-duplicate API
const IED_URL = config.api.baseURL + config.api.isEmailDuplicate.url;
app.use(     IED_URL, cors_handler );
app.all(     IED_URL, all_handler1 );
app.options( IED_URL, ()=>{} );
app.head(    IED_URL, get_handler );
app.get(     IED_URL, get_handler );
app.post(    IED_URL, post_handler1, post_handler2, post_handler3, post_handler4 );

// Error Handling
app.use(error_handler_last);

// Starting the server
app.listen( Number(config.app.port),
            config.app.host,
            config.app.backlog,
  () => {
    console.log(
      `[${config.app.projectName}]` + ` is working on ` +
      `<${config.app.host}:${config.app.port}>`
    );
  }
);
