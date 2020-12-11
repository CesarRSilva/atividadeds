module.exports = class Tarefa{

    constructor(idtarefa, nometarefa, observacaotarefa, datacadastrotarefa, dataparaconclusaotarefa, 
        datadeconclusaotarefa, statustarefa ){
            this.idtarefa = idtarefa;
            this.nometarefa = nometarefa;
            this.observacaotarefa = observacaotarefa;
            this.datacadastrotarefa = datacadastrotarefa;
            this.dataparaconclusaotarefa = dataparaconclusaotarefa;
            this.datadeconclusaotarefa = datadeconclusaotarefa;
            this.statustarefa = statustarefa;
    }

}