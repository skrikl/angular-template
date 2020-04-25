// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
    declarations: [MainLayoutComponent],
    imports: [
        // vendor
        BrowserModule,
        BrowserAnimationsModule,
    ],
    exports: [MainLayoutComponent],
})
export class CoreModule {}
