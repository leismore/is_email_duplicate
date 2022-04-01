/**
 * IEDResponse class
 * Refer to @leismore/response <https://www.npmjs.com/package/@leismore/response>
 */

import { LMResponse } from '@leismore/response';

class IEDResponse extends LMResponse
{
  public res200(result:boolean):void
  {
    this.send({
      statusCode: '200',
      headers:    { 'Content-Type'  : 'application/json',
                    'Cache-Control' : 'no-store' },
      body:       { 'result': result }
    });
  }
}

export { IEDResponse };
