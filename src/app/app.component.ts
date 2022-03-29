import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney-system';
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
      tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/04/2022', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Jóse'
    },
  ];
}
