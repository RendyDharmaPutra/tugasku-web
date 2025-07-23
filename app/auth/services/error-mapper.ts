/**
 * Peta kesalahan Supabase ke pesan dalam Bahasa Indonesia.
 * Key berupa bagian dari pesan error dari Supabase (lowercase),
 * dan value berupa terjemahan untuk pengguna.
 */
const SUPABASE_AUTH_ERROR_MAP: { [key: string]: string } = {
  "email address.*invalid": "Format email tidak valid.",
  "user already registered": "Email sudah terdaftar.",
  "email already registered": "Email sudah terdaftar.",
  "password should be at least":
    "Kata sandi terlalu pendek (minimal 6 karakter).",
  "invalid login credentials": "Email atau kata sandi salah.",
  "user not found": "Akun dengan email tersebut tidak ditemukan.",
  "email not confirmed":
    "Email belum dikonfirmasi. Silakan periksa kotak masuk Anda.",
  "token has expired": "Token verifikasi sudah kedaluwarsa. Silakan coba lagi.",
  "rate limit": "Terlalu banyak percobaan. Silakan coba beberapa saat lagi.",
  "too many requests":
    "Terlalu banyak percobaan. Silakan coba beberapa saat lagi.",
  "invalid or expired jwt": "Sesi Anda telah berakhir. Silakan login kembali.",
};

/**
 * Menerjemahkan pesan error dari Supabase Auth ke Bahasa Indonesia.
 *
 * @param message - Pesan error mentah dari Supabase
 * @returns string - Pesan error yang sudah diterjemahkan
 */
export const translateSupabaseAuthError = (message: string): string => {
  const msg = message.toLowerCase();

  for (const [pattern, translation] of Object.entries(
    SUPABASE_AUTH_ERROR_MAP
  )) {
    const regex = new RegExp(pattern, "i");
    if (regex.test(msg)) {
      return translation;
    }
  }

  return "Terjadi kesalahan saat memproses permintaan Anda.";
};
