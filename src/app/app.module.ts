import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { SelectImageFormComponent } from './select-image-form/select-image-form.component';
import { ImageModalComponent } from './image-modal/image-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        SelectImageFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ImageModalComponent
    ]
})

export class AppModule { }
