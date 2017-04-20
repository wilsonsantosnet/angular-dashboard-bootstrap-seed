import { ValidationConfirm } from './validation-confirm';
import { HttpStatusCode } from './http-status-code';
import { Summary } from './summary';

export class HttpResult<T>{

    public Data: T;
    public DataList: T[];
    public Summary: Summary;
    public Errors: string[];
    public Warnings: string[];
    public StatusCode: HttpStatusCode;
    public Confirms: ValidationConfirm[];
}