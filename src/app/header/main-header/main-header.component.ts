import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/service/authentication.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  inputModel: any;

  displayMenu = false;

  menuAnchor: any;

  constructor(public el: ElementRef,private loginService:AuthenticationService) {
  }

  ngOnInit() {
    this.menuAnchor = this.el.nativeElement;
  }
}
