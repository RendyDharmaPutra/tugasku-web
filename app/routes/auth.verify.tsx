import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { supabase } from "~/libs/supabase/supabase.client";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "TugasKu | Verifikasi" }];
};

export default function VerifyPage() {
  const [message, setMessage] = useState("Memverifikasi...");
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1); // hapus '#'
    const params = new URLSearchParams(hash);

    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    const type = params.get("type");

    if (
      typeof access_token === "string" &&
      access_token.trim() !== "" &&
      typeof refresh_token === "string" &&
      refresh_token.trim() !== "" &&
      type === "signup"
    ) {
      supabase.auth
        .setSession({ access_token, refresh_token })
        .then(({ error }) => {
          if (error) {
            setMessage("Verifikasi gagal: " + error.message);
          } else {
            setMessage("Verifikasi berhasil!");
          }
        });
    } else {
      setMessage("Token verifikasi tidak ditemukan.");
    }
  }, [navigate]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-semibold">{message}</h1>
    </div>
  );
}
