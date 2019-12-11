import { Pipe, PipeTransform } from '@angular/core';
import { Emp } from './emp';

@Pipe({
  name: 'empFilter'
})
    export class EmpFilterPipe implements PipeTransform {

        transform(value: any, input: string) {

            if (input) {

                input = input.toLowerCase();
                return value.filter(function (el: any) {
                    
                    return el.name.toLowerCase().indexOf(input) > -1;
                })
            }
            return value;
        }
}