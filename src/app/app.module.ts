import {AfterViewInit, ElementRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { IntroSliceComponent } from './intro-slice/intro-slice.component';
import { SectionComponent } from './section/section.component';
import { ProductSectionComponent } from './product-section/product-section.component';
import { BannerSectionStartComponent } from './banner-section-start/banner-section-start.component';
import { DealSectionComponent } from './deal-section/deal-section.component';


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
