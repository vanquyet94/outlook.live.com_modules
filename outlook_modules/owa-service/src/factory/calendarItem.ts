// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type CalendarItem from '../contract/CalendarItem';

export default function calendarItem(data: CalendarItem): CalendarItem {
    let result: CalendarItem = {
        __type: 'CalendarItem:#Exchange',
        ...data,
    };

    return result;
}
