import { Filter } from '../common/models/filter';

export class BancoGeneratedFilter extends Filter {
    public BancoId: number;
    public Nome: string;
    public Numero: string;
    public Digito: string;
    public BoletoSemRegistro: boolean;
    public BoletoComRegistro: boolean;
    public Ativo: boolean;
    public UserCreateId: number;
    public UserCreateDateStart: string;
    public UserCreateDateEnd: string;
    public UserAlterId?: number;
    public UserAlterDateStart: string;
    public UserAlterDateEnd: string;

}
