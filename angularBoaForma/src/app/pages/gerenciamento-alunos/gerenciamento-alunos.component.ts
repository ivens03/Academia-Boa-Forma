import { Component } from '@angular/core';
import { CabecalhoGerenciamentoComponent } from "../../components/cabecalho-gerenciamento/cabecalho-gerenciamento.component";

@Component({
  selector: 'app-gerenciamento-alunos',
  standalone: true,
  imports: [CabecalhoGerenciamentoComponent],
  templateUrl: './gerenciamento-alunos.component.html',
  styleUrl: './gerenciamento-alunos.component.css'
})
export class GerenciamentoAlunosComponent {

}
