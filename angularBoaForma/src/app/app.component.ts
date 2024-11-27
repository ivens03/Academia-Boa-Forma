import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import de paginas e componentes.
import { LoginPagesComponent } from "./pages/login-pages/login-pages.component";
import { HomeAdministracaoPagesComponent } from "./pages/home-administracao-pages/home-administracao-pages.component";
import {RegistroProfessorPagesComponent } from "./pages/registro-professor-pages/registro-professor-pages.component"
import { GerenciamentoAlunosComponent } from "./pages/gerenciamento-alunos/gerenciamento-alunos.component";
import { HomeProfessorComponent } from "./pages/home-professor/home-professor.component";
import { FichaProntaComponent } from "./pages/ficha-pronta/ficha-pronta.component";
import { FichaPreSetComponent } from "./pages/ficha-pre-set/ficha-pre-set.component";
import { DemandasComponent } from "./pages/demandas/demandas.component";
import { CabecalhoGerenciamentoComponent } from "./components/cabecalho-gerenciamento/cabecalho-gerenciamento.component";
import { RegistroAlunosPagesComponent } from './pages/registro-alunos-pages/registro-alunos-pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPagesComponent, HomeAdministracaoPagesComponent, RegistroProfessorPagesComponent, GerenciamentoAlunosComponent, HomeProfessorComponent, FichaProntaComponent, FichaPreSetComponent, DemandasComponent,CabecalhoGerenciamentoComponent, RegistroAlunosPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angularBoaForma';
}
