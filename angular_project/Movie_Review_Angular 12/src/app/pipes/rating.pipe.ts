import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    return '⭐'.repeat(Math.round(value));
  }
}