import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();


  };
}
