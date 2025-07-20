import { init, browserTracingIntegration } from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

init({
    dsn: "https://df46b22ad20a700f8db52ed6ecb315fd@o4509683906314240.ingest.us.sentry.io/4509683921256448",
    tracesSampleRate: 1,

    integrations: [browserTracingIntegration({
      useEffect,
      useLocation,
      useMatches
    })]
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});