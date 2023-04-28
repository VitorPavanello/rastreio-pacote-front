import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {

  value = "";
  notFound: boolean = false;
  rastreios: any = [];

  constructor(private service: AppServiceService) { }

  rastrearPacote(): void {
    this.service.rastrearPacote(this.value).subscribe((response: any) => {
      console.log(response)
      if (response.length > 0) {
        this.rastreios = response;
        this.notFound = false;
      } else {
        this.rastreios = [];
        this.notFound = true;
      }
    })
  }

  onKey(event: any) {
    this.value = event.target.value;
  }
}
