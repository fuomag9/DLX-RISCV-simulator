import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { DLXDocumentation } from './documentation/dlx.documentation';
import { RV32IDocumentation } from './documentation/rv32i.documentation';
import { CanDeactivateGuard } from './guards/can-deactivate-guard';
import { DLXInterpreter } from './interpreters/dlx/dlx.interpreter';
import { RV32Interpreter } from './interpreters/rv32i.interpreter';
import { MainPageComponent } from './main-page/main-page.component';
import { DLXRegisters } from './registers/dlx.registers';
import { RV32IRegisters } from './registers/rv32i.registers';


const routes: Routes = [
  { path: '', redirectTo: '/dlx', pathMatch: 'full' },
  { 
    path: 'dlx',
    component: MainPageComponent,
    data: {
      interpreter: new DLXInterpreter(),
      editorMode: 'dlx',
      registers: new DLXRegisters(),
      documentation: DLXDocumentation
    },
    canDeactivate: [CanDeactivateGuard]
  },
  { 
    path: 'rv32i',
    component: MainPageComponent,
    data: {
      interpreter: new RV32Interpreter(),
      editorMode: 'rv32i',
      registers: new RV32IRegisters(),
      documentation: RV32IDocumentation
    },
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      editorMode: 'about',
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
