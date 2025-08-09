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

export function formatDetaofTime(isoString: string): string {
  const bulanMap = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const dt = new Date(isoString);
  const hari = dt.getDate();
  const bulan = bulanMap[dt.getMonth()];
  const tahun = dt.getFullYear();
  const jam = dt.getHours().toString().padStart(2, "0");
  const menit = dt.getMinutes().toString().padStart(2, "0");

  return `${hari} ${bulan} ${tahun} pukul ${jam}.${menit}`;
}
