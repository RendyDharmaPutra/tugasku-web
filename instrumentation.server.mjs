import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://df46b22ad20a700f8db52ed6ecb315fd@o4509683906314240.ingest.us.sentry.io/4509683921256448",
    tracesSampleRate: 1
})