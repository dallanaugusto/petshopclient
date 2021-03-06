import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AbstractEntity } from '../../entity/entity';
import { AbstractDto } from '../../dto/dto';
import { AbstractService } from '../../service/service';

export abstract class AbstractListComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>> {
	
  protected service: S;
  protected router: Router;

  routerPrefix: string;

  entities!: E[];

  constructor(service: S, router: Router, routerPrefix: string) {
	this.service = service;
	this.router = router;
	this.routerPrefix = routerPrefix;
  }

  ngOnInitSuper() {
	this.reloadData();  
  }

  reloadData() {
	this.service.findAll().subscribe(data => {
	  this.entities = this.service.makeEntityArrayFromDtoArray(data);
    });  
  }

  view(id: number){
    this.router.navigate(['/' + this.routerPrefix + '/view', id]);
  }

  edit(id: number){
    this.router.navigate(['/' + this.routerPrefix + '/edit', id]);
  }

  remove(id: number){
    this.service.delete(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  askRemove(entity: E) {
	if (confirm('Remover "' + entity.toString() + '"?')) {
      this.remove(entity.id);
    }
  }

}