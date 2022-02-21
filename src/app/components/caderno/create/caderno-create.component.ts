import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Caderno } from 'src/app/models/caderno.model';
import { CadernoService } from 'src/app/services/caderno/caderno.service';

@Component({
  selector: 'app-caderno-create',
  templateUrl: './caderno-create.component.html',
  styleUrls: ['./caderno-create.component.css']
})
export class CadernoCreateComponent implements OnInit {

  caderno: Caderno;

  constructor(private router: Router,
    private cadernoService: CadernoService) {
    console.log("CadernoCreateComponent-constructor");
    this.caderno = new Caderno();
  }

  ngOnInit(): void {
    console.log("CadernoCreateComponent-ngOnInit");
  }

  goToIndex(): void {
    console.log("CadernoCreateComponent-goToIndex");
    this.router.navigateByUrl("cadernos/caderno-index");
  }

  create(): void {
    console.log("CadernoCreateComponent-create");
    console.log("CadernoEditComponent-edit-start");
    this.cadernoService.post(this.caderno)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.caderno = data;
        this.goToIndex();
      });
    console.log("CadernoEditComponent-edit-end");
  }
}
