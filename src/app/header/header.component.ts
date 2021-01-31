import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  currentDate: string;

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();


  };
}
