import { Pipe, PipeTransform} from '@angular/core';

// 'roundNum'la ten cua Pipe se su dung sau nay.
@Pipe({ name: 'roundNum'})

export class RoundPipe implements PipeTransform {
    // value: gia tri nhan vao
    // isUpper: tham so thu 2 truyen vao pipe
    // addValue: tham so thu 3 truyen vao pipe de cong them so
    transform(value: number, isUpper: boolean, addValue: number): number {
        if (isUpper) {return Math.ceil(value + addValue); }
        return Math.floor(value + addValue);
    }

}
