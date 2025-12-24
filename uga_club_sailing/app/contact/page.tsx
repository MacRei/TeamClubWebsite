"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Failed to send.");
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p style={{ marginBottom: 24, textAlign: "center" }}>
        Send us a message and we’ll get back to you.
      </p>

      <form onSubmit={onSubmit}>
        <label style={{ display: "block", marginBottom: 6 }}>Name</label>
        <input
          name="name"
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, border: "1px solid #444", borderRadius: 4 }}
        />

        <label style={{ display: "block", marginBottom: 6 }}>Email</label>
        <input
          name="email"
          type="email"
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, border: "1px solid #444", borderRadius: 4 }}
        />

        <label style={{ display: "block", marginBottom: 6 }}>Message</label>
        <textarea
          name="message"
          rows={6}
          required
          style={{ width: "100%", padding: 10, marginBottom: 14, border: "1px solid #444", borderRadius: 4 }}
        />

        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "10px 14px",
              cursor: "pointer",
              border: "1px solid #444",
              borderRadius: 4,
            }}
          >
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </div>

        {status === "sent" && (
          <p style={{ marginTop: 12 }}>✅ Message sent. Thank you!</p>
        )}
        {status === "error" && (
          <p style={{ marginTop: 12 }}>❌ {errorMsg}</p>
        )}
      </form>
    </main>
  );
}
