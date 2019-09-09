import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule
} from '@angular/material';
import { ComponentsModule } from 'app/components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        ToastrModule.forRoot({
            preventDuplicates: true,
            maxOpened: 1
        })
    ],
    declarations: [

    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatCheckboxModule,
        ToastrModule
    ]
})

export class SharedModule { }
