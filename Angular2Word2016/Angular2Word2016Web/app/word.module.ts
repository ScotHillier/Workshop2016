import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { WordComponent } from './word.component'

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [WordComponent],
    bootstrap: [WordComponent]
})
export class WordModule { }