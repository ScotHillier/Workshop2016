import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { SimpleComponent } from './simple.component';
import { TimeComponent } from './time.component';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        SimpleComponent,
        TimeComponent,
        ProductComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }