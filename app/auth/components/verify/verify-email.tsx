import { VerifyContent } from "./verify-content";
import { VerifyFooter } from "./verify-footer";
import { VerifyHeader } from "./verify-header";
import { ActionResult } from "~/types/action-result";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { VerifyContainer } from "./verify-container";
import { useLoaderData } from "@remix-run/react";

export const VerifyEmail = () => {
  const { success, message } = useLoaderData<ActionResult<null>>();

  return (
    <VerifyContainer>
      {/* Header */}
      <VerifyHeader
        icon={success ? CheckCircle : AlertTriangle}
        background={success ? "primary" : "danger"}
      />

      {/* Content */}
      <VerifyContent
        title={message}
        description={
          success
            ? "Email kamu sudah terverifikasi. Kamu sudah bisa masuk ke akunmu sekarang"
            : "Kode verifikasi tidak valid atau sudah digunakan. Silahkan coba daftar kembali"
        }
      />

      {/* Footer */}
      <VerifyFooter
        route={success ? "login" : "register"}
        content={
          success ? "Silahkan login" : "<- Kembali ke halaman registrasi"
        }
      />
    </VerifyContainer>
  );
};
