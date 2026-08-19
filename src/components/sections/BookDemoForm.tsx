"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/constants";

const LANGUAGES = ["Spanish", "German", "Not sure yet"] as const;
const COURSES = [
  "Spanish Certificate & Diploma",
  "Spanish Crash Course",
  "Spanish School-Oriented",
  "German Certificate & Diploma",
  "Not sure yet",
] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  language: string;
  course: string;
  date: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  language: "",
  course: "",
  date: "",
  message: "",
};

export function BookDemoForm({
  defaultInterest,
}: {
  defaultInterest?: string;
}) {
  const [form, setForm] = useState<FormState>({
    ...initial,
    course: defaultInterest ?? "",
    language: defaultInterest?.toLowerCase().includes("german")
      ? "German"
      : defaultInterest?.toLowerCase().includes("spanish")
        ? "Spanish"
        : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const mailtoBody = useMemo(() => {
    return [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred Language: ${form.language}`,
      `Preferred Course: ${form.course}`,
      `Preferred Date: ${form.date || "Not specified"}`,
      "",
      "Message:",
      form.message || "(none)",
    ].join("\n");
  }, [form]);

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }
    if (!form.language) next.language = "Please select a language.";
    if (!form.course) next.course = "Please select a course.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + SITE.email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Book a Demo — ${form.name}`,
          name: form.name,
          phone: form.phone,
          email: form.email,
          language: form.language,
          course: form.course,
          preferred_date: form.date || "Not specified",
          message: form.message || "No additional message",
        }),
      });

      if (!response.ok) throw new Error("submit failed");
      setStatus("sent");
      setForm(initial);
    } catch {
      window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
        `Book a Demo — ${form.name}`,
      )}&body=${encodeURIComponent(mailtoBody)}`;
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-esa-border bg-esa-bg p-6 text-center">
        <h3 className="text-lg font-bold text-esa-navy">Demo request sent</h3>
        <p className="mt-2 text-sm text-esa-muted">
          Thank you. We will get back to you soon about your demo enquiry.
        </p>
        <button
          type="button"
          className="mt-4 rounded-lg bg-esa-red px-4 py-2 text-sm font-semibold text-white focus-esa"
          onClick={() => setStatus("idle")}
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <Field label="Name" error={errors.name}>
        <input
          className={inputClass(errors.name)}
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          autoComplete="name"
          required
        />
      </Field>
      <Field label="Phone" error={errors.phone}>
        <input
          className={inputClass(errors.phone)}
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          autoComplete="tel"
          inputMode="tel"
          required
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          className={inputClass(errors.email)}
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          autoComplete="email"
          required
        />
      </Field>
      <Field label="Preferred Language" error={errors.language}>
        <select
          className={inputClass(errors.language)}
          value={form.language}
          onChange={(e) => setForm((f) => ({ ...f, language: e.target.value }))}
          required
        >
          <option value="">Select language</option>
          {LANGUAGES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred Course" error={errors.course}>
        <select
          className={inputClass(errors.course)}
          value={form.course}
          onChange={(e) => setForm((f) => ({ ...f, course: e.target.value }))}
          required
        >
          <option value="">Select course</option>
          {COURSES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred Date">
        <input
          type="date"
          className={inputClass()}
          value={form.date}
          onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
        />
      </Field>
      <Field label="Message">
        <textarea
          className={`${inputClass()} min-h-[7rem] resize-y`}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </Field>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-esa-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-esa-red-dark focus-esa disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Book My Demo"}
      </button>
      {status === "error" ? (
        <p className="text-sm text-esa-muted">
          If the form did not send, your email app should open as a fallback.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-esa-navy">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-esa-red">{error}</span> : null}
    </label>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-esa-navy outline-none transition focus:border-esa-red focus:ring-2 focus:ring-[var(--esa-ring)] ${
    error ? "border-esa-red" : "border-esa-border"
  }`;
}
