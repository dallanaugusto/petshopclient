import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoriaListComponent } from './domain/categoria/component/list/component';
import { CategoriaViewComponent } from './domain/categoria/component/view/component';
import { CategoriaAddComponent } from './domain/categoria/component/add/component'; 
import { CategoriaEditComponent } from './domain/categoria/component/edit/component';
import { CategoriaService } from './domain/categoria/service/service';

import { CidadeListComponent } from './domain/cidade/component/list/component';
import { CidadeViewComponent } from './domain/cidade/component/view/component';
import { CidadeAddComponent } from './domain/cidade/component/add/component'; 
import { CidadeEditComponent } from './domain/cidade/component/edit/component';
import { CidadeService } from './domain/cidade/service/service';

import { ClienteListComponent } from './domain/cliente/component/list/component';
import { ClienteViewComponent } from './domain/cliente/component/view/component';
import { ClienteAddComponent } from './domain/cliente/component/add/component'; 
import { ClienteEditComponent } from './domain/cliente/component/edit/component';
import { ClienteService } from './domain/cliente/service/service';

import { EnderecoListComponent } from './domain/endereco/component/list/component';
import { EnderecoViewComponent } from './domain/endereco/component/view/component';
import { EnderecoAddComponent } from './domain/endereco/component/add/component'; 
import { EnderecoEditComponent } from './domain/endereco/component/edit/component';
import { EnderecoService } from './domain/endereco/service/service';

import { EspecieListComponent } from './domain/especie/component/list/component';
import { EspecieViewComponent } from './domain/especie/component/view/component';
import { EspecieAddComponent } from './domain/especie/component/add/component'; 
import { EspecieEditComponent } from './domain/especie/component/edit/component';
import { EspecieService } from './domain/especie/service/service';

import { EstadoListComponent } from './domain/estado/component/list/component';
import { EstadoViewComponent } from './domain/estado/component/view/component';
import { EstadoAddComponent } from './domain/estado/component/add/component'; 
import { EstadoEditComponent } from './domain/estado/component/edit/component';
import { EstadoService } from './domain/estado/service/service';

import { PessoaListComponent } from './domain/pessoa/component/list/component';
import { PessoaViewComponent } from './domain/pessoa/component/view/component';
import { PessoaAddComponent } from './domain/pessoa/component/add/component'; 
import { PessoaEditComponent } from './domain/pessoa/component/edit/component';
import { PessoaService } from './domain/pessoa/service/service';

import { PetListComponent } from './domain/pet/component/list/component';
import { PetViewComponent } from './domain/pet/component/view/component';
import { PetAddComponent } from './domain/pet/component/add/component'; 
import { PetEditComponent } from './domain/pet/component/edit/component';
import { PetService } from './domain/pet/service/service';

import { ProdutoListComponent } from './domain/produto/component/list/component';
import { ProdutoViewComponent } from './domain/produto/component/view/component';
import { ProdutoAddComponent } from './domain/produto/component/add/component'; 
import { ProdutoEditComponent } from './domain/produto/component/edit/component';
import { ProdutoService } from './domain/produto/service/service';

import { RacaListComponent } from './domain/raca/component/list/component';
import { RacaViewComponent } from './domain/raca/component/view/component';
import { RacaAddComponent } from './domain/raca/component/add/component'; 
import { RacaEditComponent } from './domain/raca/component/edit/component';
import { RacaService } from './domain/raca/service/service';

@NgModule({
  declarations: [
    AppComponent,

    CategoriaListComponent,
    CategoriaViewComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,

    CidadeListComponent,
    CidadeViewComponent,
    CidadeAddComponent,
    CidadeEditComponent,

    ClienteListComponent,
    ClienteViewComponent,
    ClienteAddComponent,
    ClienteEditComponent,

    EnderecoListComponent,
    EnderecoViewComponent,
    EnderecoAddComponent,
    EnderecoEditComponent,

    EspecieListComponent,
    EspecieViewComponent,
    EspecieAddComponent,
    EspecieEditComponent,

    EstadoListComponent,
    EstadoViewComponent,
    EstadoAddComponent,
    EstadoEditComponent,

    PessoaListComponent,
    PessoaViewComponent,
    PessoaAddComponent,
    PessoaEditComponent,

    PetListComponent,
    PetViewComponent,
    PetAddComponent,
    PetEditComponent,

    ProdutoListComponent,
    ProdutoViewComponent,
    ProdutoAddComponent,
    ProdutoEditComponent,

    RacaListComponent,
    RacaViewComponent,
    RacaAddComponent,
    RacaEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
	CategoriaService,
	CidadeService,
	ClienteService,
	EnderecoService,
	EspecieService,
	EstadoService,
	PessoaService,
	PetService,
	ProdutoService,
	RacaService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }