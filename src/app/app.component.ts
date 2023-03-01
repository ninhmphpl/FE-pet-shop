import {AfterViewInit, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  constructor(private elementRef:ElementRef) {
  };
  array = [
    "../assets/js/vendor/popper.min.js",
    "../assets/js/vendor/bootstrap.min.js",
    "../assets/js/vendor/jquery-3.6.0.min.js",
    "../assets/js/vendor/jquery-migrate-3.3.2.min.js",
    "../assets/js/vendor/modernizr-3.11.2.min.js",
    "../assets/js/plugins/aos.min.js",
    "../assets/js/plugins/jquery.ajaxchimp.min.js",
    "../assets/js/plugins/jquery-ui.min.js",
    "../assets/js/plugins/nice-select.min.js",
    "../assets/js/plugins/swiper-bundle.min.js",
    "../assets/js/plugins/countdown.min.js",
    "../assets/js/plugins/lightgallery-all.min.js",
    "../assets/js/main.js",
  ]

  ngAfterViewInit() {
    for (let i = 0 ; i < this.array.length ; i++) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = this.array[i];
      this.elementRef.nativeElement.appendChild(s);
    }
  }
}
