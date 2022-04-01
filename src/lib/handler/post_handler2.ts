/**
 * Post Handler 2 - Input validation (Formal)
 */

import * as EmailValidator  from 'email-validator';
import { IEDError }         from '../IEDError';
import { Request, Response, NextFunction } from 'express';
import { Input }            from '../type/Input';

function post_handler2(req:Request, res:Response, next:NextFunction):void
{
    let input:Input = req.body;

    // Test media type
    if ( req.is('application/json') === false )
    {
        let error    = { message: 'not application/json', code: '1' };
        let response = { statusCode: '415' };
        next( new IEDError(error, response) );
        return;
    }

    // Test input data
    if ( ( 'email' in input                     === false    ) ||
         ( typeof input.email                   !== 'string' ) ||
         ( EmailValidator.validate(input.email) === false    )
    )
    {
        let error    = { message: 'invalid input: email', code: '7' };
        let response = { statusCode:   '415' };
        next( new IEDError(error, response) );
        return;
    }
    else
    {
        input.email = input.email.toLowerCase();
    }

    // Save and next
    res.locals.input = input;
    next();
}

export { post_handler2 };
