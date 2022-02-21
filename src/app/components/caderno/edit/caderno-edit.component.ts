import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Caderno } from 'src/app/models/caderno.model';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-edit',
  templateUrl: './caderno-edit.component.html',
  styleUrls: ['./caderno-edit.component.css']
})
export class CadernoEditComponent implements OnInit {

  caderno: Caderno;

  constructor(private activateRoute: ActivatedRoute,
    private cadernoService: CadernoService,
    private router: Router) {
    console.log("CadernoEditComponent-constructor");
    this.caderno = new Caderno();
  }


  ngOnInit(): void {
    console.log("CadernoEditComponent-ngOnInit");
    const id: number = Number(this.activateRoute.snapshot.paramMap.get("id")); //this.activateRoute.snapshot.params["id"]
    console.log("Id = " + id);
    this.getById(id);
  }

  getById(id: number): void {
    console.log("CadernoEditComponent-getById-start");
    this.cadernoService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.caderno = data;
        console.log("Dados do caderno:" + this.caderno.Titulo);
      });
    console.log("CadernoEditComponent-getById-end");
  }

  goToIndex(): void {
    this.router.navigateByUrl("cadernos/caderno-index");
  }

  edit(): void {
    console.log("CadernoEditComponent-edit-start");
    this.cadernoService.put(this.caderno)
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.goToIndex();
      });
    console.log("CadernoEditComponent-edit-end");
  }
}
