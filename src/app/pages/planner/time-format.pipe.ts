import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string): string {
    const [hours, minutes] = value.split(':');

    // Convert hours to a number and get the meridiem (AM/PM)
    const hourNumber = +hours;
    const meridiem = hourNumber >= 12 ? 'PM' : 'AM';

    // Convert the hours to 12-hour format with leading zeros
    const formattedHours = this.formatWithLeadingZero(hourNumber % 12 || 12);

    // Format the time as "hh:mm a"
    const formattedTime = `${formattedHours}:${minutes} ${meridiem}`;

    return formattedTime;
  }

  private formatWithLeadingZero(value: number): string {
    return value.toString().padStart(2, '0');
  }
}