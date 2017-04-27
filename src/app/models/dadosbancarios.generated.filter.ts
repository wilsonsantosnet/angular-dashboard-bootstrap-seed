import { Filter } from '../common/models/filter';

export class DadosBancariosGeneratedFilter extends Filter {
    public DadosBancariosId: number;
    public BancoId: number;
    public Agencia: string;
    public DigitoVerificadorAgencia: string;
    public NumeroConta: string;
    public DigitoVerificador: string;

}
