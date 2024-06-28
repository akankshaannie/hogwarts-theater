import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieBudget',
  standalone: true
})
export class MovieBudgetPipe implements PipeTransform {
  transform(movieBudget?: string): string {
    if(movieBudget){
      return '$' + movieBudget + ' million'
    }
    return '';
  }
}