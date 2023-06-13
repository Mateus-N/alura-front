import { NegiciacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public async obterNegociacoesDoDia(): Promise<Negociacao[]> {
        const res = await fetch('https://localhost:7190/dados');
        const dados: NegiciacoesDoDia[] = await res.json();
        return dados.map(dado => {
            return new Negociacao(
                new Date(),
                dado.vezes,
                dado.montante
            );
        });
    }
}