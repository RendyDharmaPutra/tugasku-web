export function generateCourseCode(courseName: string): string {
  // 1. Pisah nama kursus berdasarkan spasi
  const words = courseName.trim().toUpperCase().split(/\s+/); // pecah berdasarkan satu atau lebih spasi

  // 2. Ambil huruf pertama dari setiap kata (dan hanya huruf A-Z)
  const initials = words
    .map((word) => word[0])
    .filter((char) => /^[A-Z]$/.test(char)); // validasi hanya huruf

  // 3. Gabungkan huruf awal
  const codePart = initials.join("");

  // 4. Tambahkan angka random 2 digit
  const numberPart = Math.floor(Math.random() * 90 + 10); // antara 10–99

  return `${codePart}${numberPart}`;
}
