import { DateTime } from "luxon";

export const convertDateToHumanForm  = (data: Date | string) => {
    return DateTime.fromISO(data as string).toRelative();
}