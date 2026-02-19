import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    SMTP_EMAIL: z.email(),
    SMTP_PASSWORD: z.string(),
    SLACK_WEBHOOK_URL: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_WEBSITE_URL: z
      .string()
      .default("http://localhost:3000")
      .transform((url) => {
        if (url.startsWith("http://localhost:3000")) {
          return url;
        }
        return url.startsWith("http") ? url : `https://${url}`;
      }),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    SLACK_WEBHOOK_URL: process.env.SLACK_WEBHOOK_URL,
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});

export default env;
