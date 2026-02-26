"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { TextAnimate } from "./magicui/text-animate";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// ─── Inline Toast Component ──────────────────────────────────────────────────
function Toast({
  message,
  type,
  visible,
}: {
  message: string;
  type: "success" | "error";
  visible: boolean;
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 20px",
        borderRadius: "14px",
        background: type === "success" ? "#203A61" : "#c0392b",
        color: "#fff",
        boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
        minWidth: "280px",
        maxWidth: "380px",
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: 1.4,
        // Slide-in / slide-out animation via inline transition
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Icon */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.15)",
          flexShrink: 0,
          fontSize: "15px",
        }}
      >
        {type === "success" ? "✓" : "✕"}
      </span>
      <span>{message}</span>
    </div>
  );
}

// ─── Spinner Component ───────────────────────────────────────────────────────
function Spinner() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "16px",
        height: "16px",
        border: "2px solid rgba(255,255,255,0.4)",
        borderTopColor: "#fff",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Custom toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to show toast notification
  const displayToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    // Auto-dismiss toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];
    const storedData = localStorage.getItem("submissionData");
    const submissionData = storedData
      ? JSON.parse(storedData)
      : { date: today, count: 0 };

    if (submissionData.date !== today) {
      submissionData.date = today;
      submissionData.count = 0;
    }

    if (submissionData.count >= 5) {
      displayToast(
        "You have reached the maximum number of submissions for today.",
        "error"
      );
      return;
    }

    submissionData.count += 1;
    localStorage.setItem("submissionData", JSON.stringify(submissionData));

    // ── Start loading ──
    setIsLoading(true);

    fetch("https://mlsa-server.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        displayToast("Form submitted successfully!", "success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        displayToast(
          "Failed to send your message. Please try again later.",
          "error"
        );
      })
      .finally(() => {
        // ── Stop loading regardless of outcome ──
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* Spinner keyframes injected once */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="min-h-screen w-full bg-white p-4 md:p-8" id="contact">
        {/* Mobile View Logo (Visible only on small screens) */}
        <div className="lg:hidden flex justify-center mb-6">
          <img
            src="mlsamietlogo1.png"
            alt="MLSA MIET Logo"
            className="w-32 h-32 rounded-[36px]"
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Left side illustration - Hidden on small screens */}
          <div className="relative hidden lg:block">
            <div className="absolute left-8 top-8 h-[400px] w-[400px] rounded-[40px] border bg-white p-4 shadow-sm">
              <img
                src="mlsamietlogo1.png"
                alt="Illustration"
                className="rounded-[36px]"
              />
            </div>
          </div>

          {/* Right side form */}
          <div className="relative rounded-[40px] bg-white p-8 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Phone No.
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="min-h-[120px] resize-none rounded-xl border-gray-300 bg-white secondary"
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#203A61] hover:bg-[#607da9] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minWidth: "110px",
                    justifyContent: "center",
                  }}
                >
                  {isLoading ? (
                    <>
                      <Spinner />
                      <span>Sending…</span>
                    </>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification — rendered outside the form container so it floats freely */}
      <Toast message={toastMessage} type={toastType} visible={showToast} />
    </>
  );
}