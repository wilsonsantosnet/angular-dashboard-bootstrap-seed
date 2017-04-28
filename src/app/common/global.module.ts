import { Injectable } from '@angular/core'

@Injectable()
export class GlobalVariableService {
    public BASE_API_URL = 'http://177.153.18.87:8075/FranqueadorApi/api';
    public ACCESS_API_URL = 'http://177.153.18.87:8075/AccessApi/api';
    public REQUESTING = false;
};
