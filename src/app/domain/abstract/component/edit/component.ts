import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AbstractEntity } from '../../entity/entity';
import { AbstractDto } from '../../dto/dto';
import { AbstractService } from '../../service/service';

export abstract class AbstractEditComponent<E extends AbstractEntity, DTO extends AbstractDto<E>, S extends AbstractService<E, DTO>> {

  protected service: S;
  protected router: Router;
  protected route: ActivatedRoute;

  routerPrefix: string;

  id!: number;
  entity!: E;

  constructor(service: S, router: Router, route: ActivatedRoute, routerPrefix: string) {
	this.service = service;
	this.router = router;
	this.route = route;
	this.routerPrefix = routerPrefix;
  }

  ngOnInitSuper() {
    this.id = this.route.snapshot.params['id'];
    
    this.service.findById(this.id).subscribe(data => {
      console.log(data)
      this.entity = this.service.makeEntityFromDto(data);
    }, error => console.log(error));
  }

  onSubmit() {
	var dto = this.service.newDtoInstance();
	dto.copyFromEntity(this.entity);
    this.service.update(this.id, dto).subscribe(result => this.list());
  }

  list(){
    this.router.navigate(['/' + this.routerPrefix + '/list']);
  }

}