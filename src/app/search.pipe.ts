import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(item: any[], value: any) {
        return item.filter(item => {
            return item.text.includes(value)
        })
    }
}