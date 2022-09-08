import { NgModule } from '@angular/core';
import { FormsModule } from './forms.module';
import { MaterialModule } from './material.module';



@NgModule({
  exports: [
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }
