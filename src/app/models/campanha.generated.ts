import { Dto } from '../common/models/dto';

export class CampanhaGenerated extends Dto {
    public CampanhaId: number;
    public Nome: string;
    public Ativo: boolean;
    public UserCreateId: number;
    public UserCreateDate: string;
    public UserAlterId?: number;
    public UserAlterDate: string;

}
