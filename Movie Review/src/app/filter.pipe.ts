import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(movies: any[], searchText: string, filterBy: string): any[] {
    if (!movies) return [];
    if (!searchText) return movies;

    searchText = searchText.toLowerCase();

    return movies.filter((movie) => {
      if (filterBy === 'title') {
        return movie.title.toLowerCase().includes(searchText);
      } else if (filterBy === 'rating') {
        return movie.rating.toString().includes(searchText);
      }
      return false;
    });
  }
}
