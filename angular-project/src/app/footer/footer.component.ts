import { Component, OnInit } from '@angular/core';
import { BottomNavLinksComponent } from '../bottom-nav-links/bottom-nav-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BottomNavLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  footerText:string = "footer text";
  constructor(){

  }
  ngOnInit(): void {
      
  }
}
