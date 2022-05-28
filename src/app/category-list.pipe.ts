import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'categoryList',
  //pure: stateless(default) or stateful -> take data and return it without side effect
})
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');
  }
}
