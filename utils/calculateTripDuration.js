// calculate trip duration in days
export default function calculateTripDuration(start, end) {
  if (start && end) {
    const startObject = new Date(start); // transforms the "start" argument into Date format which is needed to make calculations with dates
    const endObject = new Date(end);
    const durationInMilliseconds = endObject - startObject; // Date calculation in milliseconds is best practice. In the next line I converted the milliseconds in days.
    const durationInDays = Math.floor(
      durationInMilliseconds / (1000 * 60 * 60 * 24) + 1 // the + 1 is needed to also count the day of the start date
    );
    return durationInDays;
  } else {
    return null;
  }
}
