import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {
  lancamentos = [
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/04/2022', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Jóse'
    },
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/04/2022', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Jóse'
    },
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/04/2022', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Jóse'
    },
    {
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/04/2022', dataPagamento: null, valor: 4.56, pessoa: 'Padaria do Jóse'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
