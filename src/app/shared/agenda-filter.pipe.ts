import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agendaFilter'
})
export class AgendaFilterPipe implements PipeTransform {
  transform(items: any[], sessionNumber: number): any {
    return items.filter(item => item.session === sessionNumber) ;
  }
}
