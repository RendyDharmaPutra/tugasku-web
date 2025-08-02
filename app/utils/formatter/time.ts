export function formatTimeShort(time: string) {
  const [hour, minute] = time.split(":");
  return `${hour}:${minute}`;
}

export function formatCourseSchedule(
  day: string,
  startTime: string,
  endTime: string
) {
  return `${day}, ${formatTimeShort(startTime)} - ${formatTimeShort(endTime)}`;
}
