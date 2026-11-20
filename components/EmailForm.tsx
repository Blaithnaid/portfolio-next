"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type SendStatus = "idle" | "success" | "error" | "sending";

const COOLDOWN_SECONDS = 60;
const STORAGE_KEY = "portfolio_last_email_sent";
const MIN_FILL_TIME_MS = 1500;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function EmailForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const mountTimeRef = useRef<number | null>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
    website: "", // Honeypot field
  });

  useEffect(() => {
    mountTimeRef.current = Date.now();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const getRemainingCooldown = (): number => {
    try {
      const lastSent = localStorage.getItem(STORAGE_KEY);
      if (!lastSent) return 0;
      const elapsedSeconds = Math.floor((Date.now() - parseInt(lastSent, 10)) / 1000);
      return Math.max(0, COOLDOWN_SECONDS - elapsedSeconds);
    } catch {
      return 0;
    }
  };

  const validate = (): string | null => {
    const name = formData.from_name.trim();
    const email = formData.reply_to.trim();
    const msg = formData.message.trim();

    if (!name || name.length < 2) {
      return "please enter your name (at least 2 characters)";
    }
    if (name.length > 100) {
      return "name must be 100 characters or fewer";
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return "please enter a valid email address";
    }
    if (email.length > 120) {
      return "email must be 120 characters or fewer";
    }

    if (!msg || msg.length < 5) {
      return "please enter a message (at least 5 characters)";
    }
    if (msg.length > 5000) {
      return "message must be 5000 characters or fewer";
    }

    const remainingCooldown = getRemainingCooldown();
    if (remainingCooldown > 0) {
      return `please wait ${remainingCooldown}s before sending another message`;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check (silent discard if bot filled hidden field)
    if (formData.website.trim() !== "") {
      console.warn("Honeypot triggered");
      setSendStatus("success");
      return;
    }

    // 2. Timing check (silent discard if submitted in less than 1.5s)
    if (
      mountTimeRef.current !== null &&
      Date.now() - mountTimeRef.current < MIN_FILL_TIME_MS
    ) {
      console.warn("Minimum fill time not met");
      setSendStatus("success");
      return;
    }

    // 3. Validation & rate limit check
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setSendStatus("error");
      return;
    }

    setSendStatus("sending");
    setErrorMessage("");

    if (!formRef.current) {
      console.log("No formRef, aborting send.");
      setSendStatus("error");
      setErrorMessage("form submission error");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Record timestamp for client-side rate limiting
      try {
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
      } catch {
        // localStorage unavailable in certain strict contexts
      }

      setSendStatus("success");
    } catch (error) {
      console.error("Email send error:", error);
      setSendStatus("error");
      setErrorMessage("whoops, something went wrong!");
    }
  };

  if (sendStatus === "success") {
    return (
      <div className="p-4 flex flex-col justify-center items-center text-white bg-black/80 -m-4 text-xl font-normal text-md min-h-52">
        <p>your message has been sent!</p>
        <p>thank you for reaching out :)</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-between gap-4 h-full px-px"
      noValidate
    >
      <div className="flex h-full flex-col gap-4">
        {/* Honeypot field: invisible to real users, catches automated spam bots */}
        <div
          className="absolute opacity-0 -z-50 pointer-events-none h-0 w-0 overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="form_website">Website</label>
          <input
            id="form_website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="from_name"
          placeholder="who are you?*"
          value={formData.from_name}
          onChange={handleChange}
          maxLength={100}
          className="w-full h-10 bg-white/30 border-2 border-white/50 text-white placeholder-slate-300 px-3 focus:outline-hidden"
          required
        />
        <input
          type="email"
          name="reply_to"
          placeholder="what's your email?*"
          value={formData.reply_to}
          onChange={handleChange}
          maxLength={120}
          className="w-full h-10 bg-white/30 border-2 border-white/50 text-white placeholder-slate-300 px-3 focus:outline-hidden"
          required
        />
        <textarea
          name="message"
          rows={12}
          placeholder="how can i help you?*"
          value={formData.message}
          onChange={handleChange}
          maxLength={5000}
          className="w-full h-max bg-white/20 border-2 border-white/50 text-white placeholder-slate-200 px-3 focus:outline-hidden pt-[5px]"
          required
        ></textarea>
      </div>

      <div className="flex justify-between items-end gap-2">
        <div className="min-h-6 flex items-center">
          {sendStatus === "error" && errorMessage && (
            <p className="text-coral font-medium text-sm">
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={`w-1/3 self-end h-12 bg-coral border-2 border-white/40 hover:bg-coral/80 active:bg-coral/60 transition-colors text-black font-bold ${
            sendStatus === "sending"
              ? "cursor-wait opacity-80"
              : "cursor-pointer"
          }`}
          disabled={sendStatus === "sending"}
        >
          {sendStatus === "sending" ? "sending..." : "send"}
        </button>
      </div>
    </form>
  );
}
