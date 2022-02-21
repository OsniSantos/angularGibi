import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.model';
import { DoceService } from 'src/app/services/doce/doce.service';

@Component({
  selector: 'app-doce-index',
  templateUrl: './doce-index.component.html',
  styleUrls: ['./doce-index.component.css']
})
export class DoceIndexComponent implements OnInit {

  doces: Doce[];

  searchId: string;
  searchDescricao: string;

  constructor(private router: Router, private doceService: DoceService) { 
    console.log("DoceIndexComponent.constructor");
    this.doces = new  Array<Doce>();
    this.searchId='';
    this.searchDescricao='';
  }

  ngOnInit(): void {
    console.log("DoceCreateComponent-ngOnInit");
  }

  goToCreate(): void {
    this.router.navigateByUrl("doces/doce-create");
  }

  clearList(): void {
    this.doces = [];
  }

  get(): void {
    console.log("DoceIndexComponent.get");
    console.log("searchId = " + this.searchId);
    console.log("searchDescricao = " + this.searchDescricao);

    this.clearList();

    if (this.searchId !== "") {
      const id: number = Number(this.searchId);
      this.getById(id);
      return;
    }

    if (this.searchDescricao !== "") {
      this.getByDescricao(this.searchDescricao);
      return;
    }

    this.getAll();
  }

  getById(id: number): void {
    console.log("DoceIndexComponent-getById-start");
    this.doceService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        console.log(data);
        if (data != null)
          this.doces.push(data);
      });
    console.log("DoceIndexComponent-getById-end");
  }

  getByDescricao(descricao: string): void {
    console.log("DoceIndexComponent.getByTitulo-start");
    this.doceService.getByDescricao(descricao)
      .subscribe(doces => {
        this.doces = doces;
      });
    console.log(this.doces);
    console.log("DoceIndexComponent.getByTitulo-end");
  }

  getAll(): void {
    console.log("DoceIndexComponent.getAll-start");
    this.doceService.getAll()
      .subscribe(doces => {
        this.doces = doces;
        console.log("Resposta chegou agora:");
        console.log(this.doces);
      });
    console.log(this.doces);
    console.log("DoceIndexComponent.getAll-end");
  }

  goToEdit(id: number): void {
    this.router.navigate(["doces/doce-edit", id]);
  }

  delete(id: number): void {
    console.log("DoceIndexComponent.delete")
    console.log("Id = " + id);
    this.doceService.delete(id)
      .subscribe(() => {
        this.get();
      });
  }

}
