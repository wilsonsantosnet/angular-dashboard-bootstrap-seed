import { Filter } from '../common/models/filter';

export class CampanhaGeneratedFilter extends Filter {
    public CampanhaId: number;
    public Nome: string;
    public Ativo: boolean;
    public UserCreateId: number;
    public UserCreateDateStart: string;
    public UserCreateDateEnd: string;
    public UserAlterId?: number;
    public UserAlterDateStart: string;
    public UserAlterDateEnd: string;

}
