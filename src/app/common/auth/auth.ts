import { Dto } from './../models/dto';
export class Auth extends Dto {
    public Email: string;
    public Password: string;
    public ImageCaptcha: any;
    public TextCaptcha: string;
    public TypeLoginId: number;
    public Token: string;
}
