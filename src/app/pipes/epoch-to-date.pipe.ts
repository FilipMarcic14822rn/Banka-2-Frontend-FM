import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'epochToDate',
})
export class EpochToDatePipe implements PipeTransform {
	transform(epoch: string): Date | null {
		if (!epoch) {
			return null; // Return null if the epoch value is falsy
		}

		const epochMilliseconds = parseFloat(epoch) * 1000;
		const date = new Date(epochMilliseconds);
		return isNaN(date.getTime()) ? null : date;
	}
}
