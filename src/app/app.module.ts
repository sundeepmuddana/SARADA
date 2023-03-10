import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HeaderOneComponent } from './components/layouts/header-one/header-one.component';
import { OnepageNavbarComponent } from './components/layouts/onepage-navbar/onepage-navbar.component';
import { AboutOneComponent } from './components/pages/about-one/about-one.component';
import { AboutTwoComponent } from './components/pages/about-two/about-two.component';
import { PreventionComponent } from './components/pages/prevention/prevention.component';
import { DoctorsComponent } from './components/pages/doctors/doctors.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { SpreadComponent } from './components/pages/spread/spread.component';
import { OutbreakComponent } from './components/pages/outbreak/outbreak.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogOneComponent } from './components/pages/blog-one/blog-one.component';
import { BlogTwoComponent } from './components/pages/blog-two/blog-two.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { LiveTrackerComponent } from './components/pages/live-tracker/live-tracker.component';
import { LiveDataComponent } from './components/layouts/live-data/live-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FooterComponent,
    HomeOneComponent,
    HeaderOneComponent,   
    OnepageNavbarComponent,
    AboutOneComponent,
    AboutTwoComponent,
    PreventionComponent,
    DoctorsComponent,
    AppointmentComponent,
    SpreadComponent,
    OutbreakComponent,
    FaqComponent,
    ContactComponent,
    BlogOneComponent,
    BlogTwoComponent,
    BlogDetailsComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    ErrorComponent,
    ComingSoonComponent,
    LiveTrackerComponent,
    LiveDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
