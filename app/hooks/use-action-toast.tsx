// hooks/useActionToast.ts
import { useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { CustomToast } from "~/components/ui";
import { ActionResult } from "~/types/action-result";

export const useActionToast = (title: string) => {
  const actionData = useActionData<ActionResult<null>>();

  useEffect(() => {
    if (!actionData) return;

    if (actionData.success) {
      toast.custom((t) => (
        <CustomToast
          t={t}
          title={`Berhasil ${title}`}
          description={actionData.message}
          type="success"
        />
      ));
    } else {
      toast.custom((t) => (
        <CustomToast
          t={t}
          title={`Terjadi kesalahan saat ${title}`}
          description={actionData.message}
          type="error"
        />
      ));
    }
  }, [actionData, title]);
};
