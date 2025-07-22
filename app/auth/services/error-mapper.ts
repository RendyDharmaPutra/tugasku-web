/**
 * Menerjemahkan pesan error dari Supabase Auth ke Bahasa Indonesia
 * untuk ditampilkan ke pengguna.
 *
 * @param message - Pesan error mentah dari Supabase
 * @returns string - Pesan error yang sudah diterjemahkan
 */
export const translateSupabaseAuthError = (message: string): string => {
  const msg = message.toLowerCase();

  if (msg.includes("email address") && msg.includes("invalid")) {
    return "Format email tidak valid.";
  }

  if (msg.includes("user already registered")) {
    return "Email sudah terdaftar.";
  }

  if (msg.includes("password should be at least")) {
    return "Kata sandi terlalu pendek (min. 6 karakter).";
  }

  return "Terjadi kesalahan saat memproses akun.";
};
