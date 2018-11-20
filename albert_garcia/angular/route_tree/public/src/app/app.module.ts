import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './review/review.component';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductdetailComponent,
    BrandComponent,
    CategoryComponent,
    ReviewComponent,
    ReviewdetailComponent,
    AuthorComponent,
    AllreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
