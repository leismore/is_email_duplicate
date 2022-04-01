/**
 * POST Handler 4 - Checking existance of the user account by email
 */

import { unknown2error }                         from "@leismore/unknown2error";
import { Request, Response, NextFunction }       from 'express';
import { is_dup_email }                          from "../is_dup_email";
import { Input }                                 from '../type/Input';
import * as nano                                 from 'nano';
import { IEDResponse }                           from '../IEDResponse';

function post_handler4(_req:Request, res:Response, next:NextFunction):void
{
    const input:Input         = res.locals.input;
    const db:nano.ServerScope = res.locals.db;
    const resp                = new IEDResponse(res);
    
    is_dup_email(db, input.email).then(r => {
        resp.res200(r);
        return;
    }).catch(e => {
        const f = unknown2error(e);
        next(f);
        return;
    });
}

export { post_handler4 };
