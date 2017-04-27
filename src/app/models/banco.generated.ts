import { Dto } from '../common/models/dto';

export class BancoGenerated extends Dto {
    public BancoId: number;
    public Nome: string;
    public Numero: string;
    public Digito: string;
    public BoletoSemRegistro: boolean;
    public BoletoComRegistro: boolean;
    public Ativo: boolean;
    public UserCreateId: number;
    public UserCreateDate: string;
    public UserAlterId?: number;
    public UserAlterDate: string;

}
