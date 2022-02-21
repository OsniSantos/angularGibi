import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.model';
import { DoceService } from 'src/app/services/doce/doce.service';


@Component({
  selector: 'app-doce-create',
  templateUrl: './doce-create.component.html',
  styleUrls: ['./doce-create.component.css']
})
export class DoceCreateComponent implements OnInit {

  doce: Doce;

  constructor(private router: Router,
    private doceService: DoceService) {
    console.log("DoceCreateComponent-constructor");
    this.doce = new Doce();
  }

  ngOnInit(): void {
    console.log("DoceCreateComponent-ngOnInit");
  }

  goToIndex(): void {
    console.log("DoceCreateComponent-goToIndex");
    this.router.navigateByUrl("doces/doce-index");
  }

  create(): void {
    console.log("DoceCreateComponent-create");
    console.log("DoceEditComponent-edit-start");
    this.doceService.post(this.doce)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.doce = data;
        this.goToIndex();
      });
    console.log("DoceEditComponent-edit-end");
  }
}
