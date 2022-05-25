import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {AppComponent} from "./app.component";

//Dùng để apply cho class bên dưới -> không có dấu ;
@NgModule(
    //Metadata
    {
        //import modules that needed by this module
        imports: [BrowserModule],
        //make components, directives, pipes available to module that don't come from another module - module bậc 1
        declarations: [AppComponent],
        //root module -> which component will be starting point for the bootstrap process
        bootstrap: [AppComponent]

    })
//export để có thể import trong file khác
export class AppModule { }