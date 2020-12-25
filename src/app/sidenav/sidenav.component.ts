import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  @Output() public sidenavToggle = new EventEmitter();
  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }


  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }

  logout(): void {


    this.router.navigate(['/logout']);
  }
}
