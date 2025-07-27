/**
 * Peta kesalahan Supabase ke pesan dalam Bahasa Indonesia.
 * Key berupa bagian dari pesan error dari Supabase (lowercase),
 * dan value berupa terjemahan untuk pengguna.
 */
export const SUPABASE_AUTH_ERROR_MAP: { [pattern: string]: string } = {
  // Validasi email & pendaftaran
  "email address.*invalid": "Format email tidak valid.",
  "user already registered": "Email sudah terdaftar.",
  "email already registered": "Email sudah terdaftar.",
  "signup requires a valid email": "Alamat email tidak valid.",
  "signup requires a password": "Kata sandi wajib diisi.",

  // Login & kredensial
  "invalid login credentials": "Email atau kata sandi salah.",
  "user not found": "Akun dengan email tersebut tidak ditemukan.",
  "email not confirmed":
    "Email belum dikonfirmasi. Silakan periksa kotak masuk Anda.",
  "invalid or expired jwt": "Sesi Anda telah berakhir. Silakan login kembali.",

  // Verifikasi email & kode otorisasi
  "token has expired": "Token verifikasi sudah kedaluwarsa. Silakan coba lagi.",
  "invalid token": "Token verifikasi tidak valid.",
  "invalid grant": "Kode verifikasi tidak valid atau telah digunakan.",
  "authorization code has expired": "Kode verifikasi sudah kedaluwarsa.",
  "authorization code not found":
    "Kode verifikasi tidak ditemukan atau sudah digunakan.",

  // Reset password / recovery flow
  "auth session missing":
    "Sesi tidak ditemukan. Silakan ulang proses reset password.",
  "unable to process request": "Terjadi kesalahan saat mengirim email reset.",
  unexpected_failure: "Gagal mengirim email reset. Silakan coba lagi.",

  // Rate limit & abuse
  "rate limit": "Terlalu banyak percobaan. Silakan coba beberapa saat lagi.",
  "too many requests":
    "Terlalu banyak permintaan. Silakan coba beberapa saat lagi.",

  // Masalah session & token
  "session not found": "Sesi tidak ditemukan. Silakan login kembali.",
  "missing required cookie": "Cookie autentikasi hilang.",
  "jwt malformed": "Token autentikasi rusak.",
  "unexpected error":
    "Terjadi kesalahan yang tidak terduga. Silakan coba lagi.",

  // Fallback umum
  default: "Terjadi kesalahan. Silakan coba lagi.",
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
    if (regex.test(msg)) return translation;
  }

  return SUPABASE_AUTH_ERROR_MAP["default"];
};
