import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        // local components
    ],
    imports: [
        // vendor
        CommonModule,
        RouterModule,
        // material
        MatToolbarModule,
        MatButtonModule,
    ],
    exports: [
        // vendor
        CommonModule,
        RouterModule,
        // material
        MatToolbarModule,
        MatButtonModule,
        // local
    ],
})
export class SharedModule {}
