import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {CovalentLayoutModule} from "@covalent/core/layout";
import {CovalentStepsModule} from "@covalent/core/steps";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import {CovalentHttpModule} from "@covalent/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {AppComponent} from "./app.component";
import { BodyComponent } from './body/body.component';
import {CovalentSearchModule} from "@covalent/core/search";
import {CovalentCommonModule} from "@covalent/core/common";
import {CovalentCodeEditorModule} from "@covalent/code-editor";
import { ResourceRenderComponent } from './resource-render/resource-render.component';

@NgModule({
  declarations: [
      AppComponent,
    MainComponent,
    BodyComponent,
    ResourceRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
   // CovalentMarkdownModule,
   //  CovalentDynamicFormsModule,

    CovalentSearchModule,

    MatIconModule,
    //FlexLayoutModule,


    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    //   MatRadioModule,
    MatSelectModule,
    //  MatChipsModule,
    //  MatSortModule,
    MatToolbarModule,
    MatDialogModule,
    CovalentCommonModule,
    CovalentCodeEditorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
