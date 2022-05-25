import { Component } from "@angular/core";

@Component(
    //Cần cung cấp 2 metadata properties at a minimum: selector + template
    {
        selector: 'app-root', // tên html element mới 
        template: '<h1>My App/h1>' // có thể link tới 1 file html khác
        
    }
)
export class AppComponent { }