import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractListComponent } from '../../../abstract/component/list/component';

import { OfertaDisciplina } from '../../entity/entity';
import { OfertaDisciplinaDto } from '../../dto/dto';
import { OfertaDisciplinaService } from '../../service/service';

@Component({
  selector: 'app-oferta-disciplina-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class OfertaDisciplinaListComponent extends AbstractListComponent<OfertaDisciplina, OfertaDisciplinaDto, OfertaDisciplinaService> implements OnInit {

  constructor(protected service: OfertaDisciplinaService,
    protected router: Router) {
	super(service, router, 'oferta-disciplina');
  }

  ngOnInit() {
	super.ngOnInitSuper();
  }

}