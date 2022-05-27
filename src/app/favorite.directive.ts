import { Directive, HostBinding/**/ } from "@angular/core";

@Directive({
  selector: '[mwFavorite]'
})
export class FavouriteDirective {
  //class trong chuỗi -> native dom property có trên elements
  //host binding nhắm đến properties
  @HostBinding('class.is-favorite') isFavorite = true;
}
