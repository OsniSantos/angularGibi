import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.model';
import { DoceService } from 'src/app/services/doce/doce.service';


@Component({
  selector: 'app-doce-edit',
  templateUrl: './doce-edit.component.html',
  styleUrls: ['./doce-edit.component.css']
})
export class DoceEditComponent implements OnInit {

  doce: Doce;

  constructor(private activateRoute: ActivatedRoute,
    private doceService: DoceService,
    private router: Router) {
    console.log("DoceEditComponent-constructor");
    this.doce = new Doce();
  }


  ngOnInit(): void {
    console.log("DoceEditComponent-ngOnInit");
    const id: number = Number(this.activateRoute.snapshot.paramMap.get("id")); //this.activateRoute.snapshot.params["id"]
    console.log("Id = " + id);
    this.getById(id);
  }

  getById(id: number): void {
    console.log("DoceEditComponent-getById-start");
    this.doceService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.doce = data;
        console.log("Dados do doce:" + this.doce.Descricao);
      });
    console.log("DoceEditComponent-getById-end");
  }

  goToIndex(): void {
    this.router.navigateByUrl("doces/doce-index");
  }

  edit(): void {
    console.log("DoceEditComponent-edit-start");
    this.doceService.put(this.doce)
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.goToIndex();
      });
    console.log("DoceEditComponent-edit-end");
  }
}
