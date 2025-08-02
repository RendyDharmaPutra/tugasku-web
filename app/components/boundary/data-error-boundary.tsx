import { AlertTriangle, RefreshCw } from "lucide-react";
import { ActionBtn } from "~/components/ui";
import { FeedbackState, FeedbackStateProps } from "./feedback-state";

interface DataErrorBoundaryProps
  extends Pick<FeedbackStateProps, "title" | "description"> {
  onRetry?: () => void;
}

export const DataErrorBoundary = ({
  title = "Terjadi kesalahan",
  description = "Gagal memuat data. Silakan coba beberapa saat lagi.",
  onRetry = () => window.location.reload(),
}: DataErrorBoundaryProps) => {
  return (
    <FeedbackState
      title={title}
      description={description}
      color="danger"
      icon={AlertTriangle}
    >
      <ActionBtn
        onClick={onRetry}
        className="px-4 py-2 flex flex-row items-center gap-2 text-primary-background"
      >
        <RefreshCw className="h-4 w-4" />
        Muat ulang
      </ActionBtn>
    </FeedbackState>
  );
};
