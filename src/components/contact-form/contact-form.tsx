"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactService } from "@/shared/api/contact";
import type { ContactFormData } from "@/types/contact";

export default function ContactForm() {
  const t = useTranslations("Contact");

  const formSchema = z.object({
    name: z.string().min(1, t("namerequired")),
    email: z.email(t("invalidemail")),
    subject: z.string().min(1, t("subjectrequired")),
    message: z.string().min(1, t("messagerequired")),
    company: z.string().optional(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    const success = await contactService.sendContactForm(
      values as ContactFormData,
      {
        loading: t("loading"),
        success: t("emailsucess"),
        error: t("emailerror"),
      },
    );

    if (success) {
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-8"
      >
        <input
          type="text"
          name="company"
          style={{ display: "none" }}
          autoComplete="off"
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("name")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  autoComplete="name"
                  className="
                    rounded-none border-0 border-b border-border bg-transparent
                    px-0 py-3 text-base placeholder:text-muted-foreground/40
                    focus-visible:ring-0 focus-visible:border-foreground
                    transition-colors duration-200
                  "
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("email")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="email"
                  {...field}
                  autoComplete="email"
                  className="
                    rounded-none border-0 border-b border-border bg-transparent
                    px-0 py-3 text-base placeholder:text-muted-foreground/40
                    focus-visible:ring-0 focus-visible:border-foreground
                    transition-colors duration-200
                  "
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("subject")}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  autoComplete="off"
                  className="
                    rounded-none border-0 border-b border-border bg-transparent
                    px-0 py-3 text-base placeholder:text-muted-foreground/40
                    focus-visible:ring-0 focus-visible:border-foreground
                    transition-colors duration-200
                  "
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
                {t("message")}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  {...field}
                  autoComplete="off"
                  className="
                    rounded-none border-0 border-b border-border bg-transparent
                    px-0 py-3 text-base min-h-36 resize-none
                    placeholder:text-muted-foreground/40
                    focus-visible:ring-0 focus-visible:border-foreground
                    transition-colors duration-200
                  "
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="pt-4">
          <Button
            type="submit"
            variant="outline"
            className="
              group px-0 text-sm font-medium uppercase tracking-widest
              bg-transparent
              transition-all duration-300"
          >
            <span className="text-black relative">{t("submit")}</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 text-black">
              →
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
