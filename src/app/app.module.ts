import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';
import { UploadComponent } from './upload/upload.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports:      [ BrowserModule, FormsModule,FlexLayoutModule 
    ,MatToolbarModule, BrowserAnimationsModule, MatIconModule,],
  declarations: [ AppComponent, UploadComponent, HeaderComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
