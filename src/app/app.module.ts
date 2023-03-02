import {AfterViewInit, ElementRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroSliceComponent } from './home/intro-slice/intro-slice.component';
import { SectionComponent } from './home/section/section.component';
import { ProductSectionComponent } from './home/product-section/product-section.component';
import { BannerSectionStartComponent } from './home/banner-section-start/banner-section-start.component';
import { DealSectionComponent } from './home/deal-section/deal-section.component';
import { FooterComponent } from './home/footer/footer.component';
import { TestimonialBlogComponent } from './home/testimonial-blog/testimonial-blog.component';
import { MobiMenuComponent } from './home/mobi-menu/mobi-menu.component';
import { QuickViewComponent } from './home/quick-view-modal/quick-view.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroSliceComponent,
    SectionComponent,
    ProductSectionComponent,
    BannerSectionStartComponent,
    DealSectionComponent,
    FooterComponent,
    TestimonialBlogComponent,
    MobiMenuComponent,
    QuickViewComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
