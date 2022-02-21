import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Caderno } from 'src/app/models/caderno.model';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-index',
  templateUrl: './caderno-index.component.html',
  styleUrls: ['./caderno-index.component.css']
})
export class CadernoIndexComponent implements OnInit {

  cadernos: Caderno[];

  searchId: string;
  searchTitulo: string;

  constructor(private router: Router, private cadernoService: CadernoService) {
    console.log("CadernoIndexComponent.constructor");
    this.cadernos = new Array<Caderno>();
    this.searchId = "";
    this.searchTitulo = "";
  }

  ngOnInit(): void {
    console.log("CadernoIndexComponent.ngOnInit");
  }

  goToCreate(): void {
    //document.location = "caderno-create";
    this.router.navigateByUrl("cadernos/caderno-create");
  }

  clearList(): void {
    this.cadernos = [];
  }

  get(): void {
    console.log("CadernoIndexComponent.get");
    console.log("searchId = " + this.searchId);
    console.log("searchTitulo = " + this.searchTitulo);

    this.clearList();

    if (this.searchId !== "") {
      const id: number = Number(this.searchId);
      this.getById(id);
      return;
    }

    if (this.searchTitulo !== "") {
      this.getByTitulo(this.searchTitulo);
      return;
    }

    this.getAll();
  }

  getById(id: number): void {
    console.log("CadernoIndexComponent-getById-start");
    this.cadernoService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        console.log(data);
        if (data != null)
          this.cadernos.push(data);
      });
    console.log("CadernoIndexComponent-getById-end");
  }

  getByTitulo(titulo: string): void {
    console.log("CadernoIndexComponent.getByTitulo-start");
    this.cadernoService.getByTitulo(titulo)
      .subscribe(cadernos => {
        this.cadernos = cadernos;
      });
    console.log(this.cadernos);
    console.log("CadernoIndexComponent.getByTitulo-end");
  }

  getAll(): void {
    console.log("CadernoIndexComponent.getAll-start");
    this.cadernoService.getAll()
      .subscribe(cadernos => {
        this.cadernos = cadernos;
        console.log("Resposta chegou agora:");
        console.log(this.cadernos);
      });
    console.log(this.cadernos);
    console.log("CadernoIndexComponent.getAll-end");
  }

  goToEdit(id: number): void {
    this.router.navigate(["cadernos/caderno-edit", id]);
  }

  delete(id: number): void {
    console.log("CadernoIndexComponent.delete")
    console.log("Id = " + id);
    this.cadernoService.delete(id)
      .subscribe(() => {
        this.get();
      });
  }
}