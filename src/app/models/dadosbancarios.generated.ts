import { Dto } from '../common/models/dto';

export class DadosBancariosGenerated extends Dto {
    public DadosBancariosId: number;
    public BancoId: number;
    public Agencia: string;
    public DigitoVerificadorAgencia: string;
    public NumeroConta: string;
    public DigitoVerificador: string;

}
