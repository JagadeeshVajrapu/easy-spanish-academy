"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  language: string;
  course: string;
  message: string;
};

const LANGUAGE_OPTIONS = ["Spanish", "German", "Both", "Not sure yet"] as const;

const COURSE_OPTIONS = [
  "Certificate / Diploma Pathway",
  "Crash Course",
  "School-Oriented Course",
  "General enquiry",
] as const;

function resolveLanguage(raw: string | null) {
  if (!raw) return "Spanish";
  const lower = raw.toLowerCase();
  if (lower.includes("german")) return "German";
  if (lower.includes("both")) return "Both";
  if (lower.includes("spanish")) return "Spanish";
  return "Spanish";
}

function resolveCourse(raw: string | null) {
  if (!raw) return "General enquiry";
  const lower = raw.toLowerCase();
  if (lower.includes("crash")) return "Crash Course";
  if (lower.includes("school")) return "School-Oriented Course";
  if (lower.includes("certificate") || lower.includes("diploma")) {
    return "Certificate / Diploma Pathway";
  }
  return "General enquiry";
}

function openMailtoFallback(values: FormState) {
  const subject = encodeURIComponent(
    `Course enquiry from ${values.name} — ${values.language} / ${values.course}`,
  );
  const body = encodeURIComponent(
    `Name: ${values.name}\nPhone: ${values.phone || "Not provided"}\nEmail: ${values.email}\nPreferred Language: ${values.language}\nPreferred Course: ${values.course}\n\nMessage:\n${values.message}`,
  );
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

function ContactFormFields() {
  const searchParams = useSearchParams();
  const interest = searchParams.get("interest");

  const [form, setForm] = useState<FormState>(() => ({
    name: "",
    phone: "",
    email: "",
    language: resolveLanguage(interest),
    course: resolveCourse(interest),
    message: "",
  }));
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!values.message.trim()) next.message = "Please share a short message.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || "Not provided",
          language: form.language,
          course: form.course,
          message: form.message.trim(),
          _subject: `ESA enquiry — ${form.language} / ${form.course} — ${form.name.trim()}`,
          _template: "table",
          _replyto: form.email.trim(),
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send enquiry right now.");
      }

      const result = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;

      if (result && result.success === false) {
        throw new Error(result.message || "Unable to send enquiry right now.");
      }

      setSubmitted(true);
    } catch {
      openMailtoFallback(form);
      setSubmitError(
        `If your email app did not open, please write to ${SITE.email} directly.`,
      );
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-esa-border bg-esa-surface p-8 text-center shadow-esa-soft transition hover:shadow-esa-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-esa-red" aria-hidden />
        <h3 className="mt-4 font-display text-2xl font-semibold text-esa-navy">
          Enquiry sent
        </h3>
        <p className="mt-3 text-esa-muted">
          Your enquiry is on its way to{" "}
          <a
            className="font-semibold text-esa-red underline-offset-2 transition hover:underline"
            href={SITE.emailHref}
          >
            {SITE.email}
          </a>
          . We will get back to you soon.
        </p>
        {submitError ? (
          <p className="mt-3 text-sm text-esa-muted">{submitError}</p>
        ) : null}
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setSubmitError(null);
            setForm({
              name: "",
              phone: "",
              email: "",
              language: resolveLanguage(interest),
              course: resolveCourse(interest),
              message: "",
            });
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-esa-border bg-esa-surface p-6 shadow-esa-soft transition duration-300 hover:border-esa-red/15 hover:shadow-esa-card sm:p-8"
      noValidate
    >
      <div className="mb-6">
        <h2 className="font-display text-2xl font-semibold text-esa-navy">
          Enquiry form
        </h2>
        <p className="mt-2 text-sm text-esa-muted">
          Share your details and preferred course. Your enquiry is sent to{" "}
          <span className="font-medium text-esa-navy">{SITE.email}</span>.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          error={errors.name}
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          required
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          error={errors.email}
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          required
          className="sm:col-span-2"
        />
        <div>
          <label htmlFor="language" className="mb-2 block text-sm font-semibold text-esa-navy">
            Preferred Language
          </label>
          <select
            id="language"
            value={form.language}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, language: event.target.value }))
            }
            className="h-12 w-full rounded-xl border border-esa-border bg-white px-4 text-esa-navy transition hover:border-esa-navy/25 focus-esa"
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="course" className="mb-2 block text-sm font-semibold text-esa-navy">
            Preferred Course
          </label>
          <select
            id="course"
            value={form.course}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, course: event.target.value }))
            }
            className="h-12 w-full rounded-xl border border-esa-border bg-white px-4 text-esa-navy transition hover:border-esa-navy/25 focus-esa"
          >
            {COURSE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-esa-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className={cn(
            "w-full rounded-xl border bg-white px-4 py-3 text-esa-navy transition hover:border-esa-navy/25 focus-esa",
            errors.message ? "border-esa-red" : "border-esa-border",
          )}
          placeholder="Tell us about your goals, level, or any questions."
          required
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-esa-red">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={submitting}>
        {submitting ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {submitting ? "Sending…" : "Send Enquiry"}
      </Button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="rounded-2xl border border-esa-border bg-esa-surface p-8 text-esa-muted shadow-esa-soft">
          Loading enquiry form…
        </div>
      }
    >
      <ContactFormFields />
    </Suspense>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  className?: string;
};

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  required,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-esa-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-12 w-full rounded-xl border bg-white px-4 text-esa-navy transition hover:border-esa-navy/25 focus-esa",
          error ? "border-esa-red" : "border-esa-border",
        )}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-esa-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
