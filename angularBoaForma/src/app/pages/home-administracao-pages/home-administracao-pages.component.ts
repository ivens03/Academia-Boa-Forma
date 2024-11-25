import { Component } from '@angular/core';
import { CabecalhoGerenciamentoComponent } from "../../components/cabecalho-gerenciamento/cabecalho-gerenciamento.component";

@Component({
  selector: 'app-home-administracao-pages',
  standalone: true,
  imports: [CabecalhoGerenciamentoComponent],
  templateUrl: './home-administracao-pages.component.html',
  styleUrl: './home-administracao-pages.component.css'
})
export class HomeAdministracaoPagesComponent {

}
