"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, LoaderCircle } from "lucide-react";
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
  "Spanish Certificate & Diploma",
  "Spanish Crash Course",
  "Spanish School-Oriented",
  "German Certificate & Diploma",
  "Not sure yet",
  "General enquiry",
] as const;

function resolveLanguage(raw: string | null) {
  if (!raw) return "";
  const lower = raw.toLowerCase();
  if (lower.includes("german")) return "German";
  if (lower.includes("both")) return "Both";
  if (lower.includes("spanish")) return "Spanish";
  return "";
}

function resolveCourse(raw: string | null) {
  if (!raw) return "";
  const lower = raw.toLowerCase();
  if (lower.includes("german")) return "German Certificate & Diploma";
  if (lower.includes("crash")) return "Spanish Crash Course";
  if (lower.includes("school")) return "Spanish School-Oriented";
  if (lower.includes("certificate") || lower.includes("diploma")) {
    return "Spanish Certificate & Diploma";
  }
  return "";
}

function openMailtoFallback(values: FormState) {
  const subject = encodeURIComponent(
    `Course enquiry from ${values.name} — ${values.language} / ${values.course}`,
  );
  const body = encodeURIComponent(
    `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nPreferred Language: ${values.language}\nPreferred Course: ${values.course}\n\nMessage:\n${values.message || "(none)"}`,
  );
  window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
}

function ContactFormFields({ className }: { className?: string }) {
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
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!values.language) next.language = "Please select a language.";
    if (!values.course) next.course = "Please select a course.";
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
          phone: form.phone.trim(),
          language: form.language,
          course: form.course,
          message: form.message.trim() || "No additional message",
          _subject: `ESA enquiry — ${form.language} / ${form.course} — ${form.name.trim()}`,
          _template: "table",
          _replyto: form.email.trim(),
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Unable to send enquiry right now.");

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
      <div
        className={cn(
          "flex h-full flex-col justify-center rounded-xl border border-esa-border bg-white p-6 text-center shadow-esa-soft sm:p-8",
          className,
        )}
      >
        <CheckCircle2 className="mx-auto h-11 w-11 text-esa-red" aria-hidden />
        <h3 className="mt-4 text-xl font-bold text-esa-navy">Enquiry sent</h3>
        <p className="mt-2 text-sm text-esa-muted">
          Thank you. We will get back to you soon at{" "}
          <a href={SITE.emailHref} className="font-semibold text-esa-red focus-esa">
            {SITE.email}
          </a>
          .
        </p>
        {submitError ? (
          <p className="mt-3 text-sm text-esa-muted">{submitError}</p>
        ) : null}
        <button
          type="button"
          className="mt-6 rounded-lg border border-esa-border px-4 py-2.5 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
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
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex h-full flex-col rounded-xl border border-esa-border bg-white p-6 shadow-esa-soft sm:p-8",
        className,
      )}
      noValidate
    >
      <h2 className="text-xl font-bold text-esa-navy sm:text-2xl">
        Send us an enquiry
      </h2>
      <p className="mt-1.5 text-sm text-esa-muted">
        We usually respond within a few hours.
      </p>

      <div className="mt-6 space-y-4">
        <Field
          label="Name"
          id="contact-name"
          error={errors.name}
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          required
          autoComplete="name"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Phone"
            id="contact-phone"
            type="tel"
            error={errors.phone}
            value={form.phone}
            onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
            required
            autoComplete="tel"
            inputMode="tel"
          />
          <Field
            label="Email"
            id="contact-email"
            type="email"
            error={errors.email}
            value={form.email}
            onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
            required
            autoComplete="email"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField
            label="Preferred Language"
            id="contact-language"
            error={errors.language}
            value={form.language}
            onChange={(value) => setForm((prev) => ({ ...prev, language: value }))}
            required
            placeholder="Select language"
            options={LANGUAGE_OPTIONS}
          />
          <SelectField
            label="Preferred Course"
            id="contact-course"
            error={errors.course}
            value={form.course}
            onChange={(value) => setForm((prev) => ({ ...prev, course: value }))}
            required
            placeholder="Select a course"
            options={COURSE_OPTIONS}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-semibold text-esa-navy"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={form.message}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, message: event.target.value }))
            }
            placeholder="Tell us your goal, level, or any questions."
            className={inputClass()}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2.5 sm:mt-auto sm:flex-row sm:flex-wrap sm:pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa disabled:opacity-70"
        >
          {submitting ? (
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />
          ) : null}
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
        <Link
          href="/book-demo"
          className="inline-flex items-center justify-center rounded-lg border border-esa-border bg-white px-5 py-3 text-sm font-semibold text-esa-navy transition hover:bg-esa-soft focus-esa"
        >
          Book a Demo
        </Link>
      </div>
    </form>
  );
}

export function ContactForm({ className }: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div
          className={cn(
            "rounded-xl border border-esa-border bg-white p-8 text-sm text-esa-muted shadow-esa-soft",
            className,
          )}
        >
          Loading enquiry form…
        </div>
      }
    >
      <ContactFormFields className={className} />
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
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
  inputMode,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-esa-navy">
        {label}
        {required ? <span className="text-esa-red"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(error)}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-esa-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  label,
  id,
  value,
  onChange,
  error,
  required,
  placeholder,
  options,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-esa-navy">
        {label}
        {required ? <span className="text-esa-red"> *</span> : null}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={inputClass(error)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-esa-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-esa-navy outline-none transition placeholder:text-esa-muted/70 focus:border-esa-red focus:ring-2 focus:ring-[var(--esa-ring)]",
    error ? "border-esa-red" : "border-esa-border hover:border-esa-navy/25",
  );
}
