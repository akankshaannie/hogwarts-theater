import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration',
  standalone: true
})
export class MovieDurationPipe implements PipeTransform {
  transform(minutes?: number): string {
    let duration = '';
    if(minutes){
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;


      if (hours > 0) {
        duration += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      }

      if (remainingMinutes > 0) {
        if (duration !== '') {
          duration += ' and ';
        }
        duration += `${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'}`;
      }
    }
    return duration !== '' ? duration : '0 minutes';
  }
}
