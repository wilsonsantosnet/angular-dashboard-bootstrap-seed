import { Dto } from '../common/models/dto';

export class MidiaGenerated extends Dto {
    public MidiaId: number;
    public Nome: string;
    public Ativo: boolean;
    public UserCreateId: number;
    public UserCreateDate: string;
    public UserAlterId?: number;
    public UserAlterDate: string;

}
