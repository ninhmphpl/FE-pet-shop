import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef:ElementRef) {
  };

  ngAfterViewInit() {
      this.putScript("../assets/js/main.js")
  }
  putScript(src : string){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = src;
    this.elementRef.nativeElement.appendChild(s);
  }
}
