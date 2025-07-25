import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import { supabase } from "~/libs/supabase";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Verifikasi Email" }];
};

export default function VerifyPage() {
  const [message, setMessage] = useState("Memverifikasi...");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(location.search);
      const code = urlParams.get("code");

      if (!code) {
        setMessage("Kode verifikasi tidak ditemukan.");
        return;
      }

      try {
        const { data, error } = await supabase.auth.exchangeCodeForSession(
          code
        );

        if (error) {
          console.error("Verifikasi gagal:", error.message);
          setMessage("Verifikasi gagal: " + error.message);
        } else {
          console.log("Verifikasi berhasil!", data);
          setMessage("Verifikasi berhasil! Mengarahkan...");
          setTimeout(() => navigate("/dashboard"), 2000);
        }
      } catch (err: any) {
        console.error("Error tidak diketahui:", err);
        setMessage("Terjadi kesalahan saat verifikasi.");
      }
    };

    verifyEmail();
  }, [location.search, navigate]);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">{message}</h1>
    </div>
  );
}
