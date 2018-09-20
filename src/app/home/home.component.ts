import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(router: Router) {
    //son los anclas a otras partes concreta de este componente
router.events.subscribe(s => {
  if (s instanceof NavigationEnd) {
    const tree = router.parseUrl(router.url);
    console.log(tree)
    if (tree.fragment) {
      console.log(tree.fragment)
      const element = document.querySelector("#" + tree.fragment);
      if (element) { element.scrollIntoView(true); }
    }
  }
});
  }

  ngOnInit() {
  }

}
