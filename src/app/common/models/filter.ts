export class Filter {

    public Id: number;
    public OrderFields: string[];
    public IsOrderByDynamic: boolean;
    public OrderByType: number;
    public PageSize: number;
    public PageIndex: number;
    public IsPaginate: boolean;
    public QueryOptimizerBehavior: string;

    constructor() {
        this.IsPaginate = true;
        this.PageIndex = 1;
        this.PageSize = 50;
    }

}
