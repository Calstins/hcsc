import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { SERVICES } from "../data/content";

// The clinic's inbox lives in an environment variable, never hard-coded here.
// Set VITE_CONTACT_EMAIL in a local .env file (see .env.example).
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

const initialState = { name: "", phone: "", email: "", service: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!CONTACT_EMAIL) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New enquiry from ${values.name || "the clinic website"}`,
          Name: values.name,
          Phone: values.phone,
          Email: values.email,
          "Service of interest": values.service || "Not specified",
          Message: values.message,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 rounded-3xl border border-brand-200 bg-brand-50 p-8"
      >
        <CheckCircle2 className="h-9 w-9 text-brand-600" strokeWidth={1.6} />
        <p className="font-display text-xl font-semibold text-navy-900">
          Message sent.
        </p>
        <p className="text-sm text-ink-soft">
          Thank you for reaching out. A member of our team will respond shortly.
          For anything urgent, please reach us directly on WhatsApp or by phone.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-brand-600 underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            required
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClasses}
          />
        </Field>
        <Field label="Phone number" required>
          <input
            required
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="080X XXX XXXX"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Email address" required>
        <input
          required
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </Field>

      <Field label="Service of interest">
        <select
          name="service"
          value={values.service}
          onChange={handleChange}
          className={`${inputClasses} appearance-none bg-white`}
        >
          <option value="">Select a service (optional)</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / not sure</option>
        </select>
      </Field>

      <Field label="Message" required>
        <textarea
          required
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us briefly what you'd like help with"
          className={`${inputClasses} resize-none`}
        />
      </Field>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-start gap-2.5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {CONTACT_EMAIL
                ? "Something went wrong sending your message. Please try again, or reach us directly on WhatsApp."
                : "This form isn't fully configured yet — set VITE_CONTACT_EMAIL in the project's .env file so messages have somewhere to go."}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send message
          </>
        )}
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-500/60 outline-none transition-colors focus:border-brand-500 focus:ring-4 focus:ring-brand-100";
