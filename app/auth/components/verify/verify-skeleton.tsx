import { Loader2 } from "lucide-react";
import { VerifyContainer } from "./verify-container";
import { VerifyContent } from "./verify-content";
import { VerifyHeader } from "./verify-header";

export const VerifySkeleton = () => {
  return (
    <VerifyContainer>
      {/* Header */}
      <VerifyHeader icon={Loader2} background="danger" animate />

      {/* Content */}
      <VerifyContent
        title="Sedang memverifikasi email kamu"
        description="Mohon tunggu sementara kami memverifikasi alamat email kamu..."
      />
    </VerifyContainer>
  );
};
