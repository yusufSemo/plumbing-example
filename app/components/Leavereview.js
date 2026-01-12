// app/components/LeaveReview.jsx

"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/app/config/siteConfig";

export default function LeaveReview() {
  const { business } = siteConfig;
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Replace with your actual Google review URL
  const googleReviewUrl = "https://www.google.com/maps";

  const handleStarClick = (star) => {
    setRating(star);
    
    if (star >= 4) {
      // 4 or 5 stars - redirect to Google reviews
      window.open(googleReviewUrl, "_blank");
    } else {
      // 1-3 stars - show feedback form
      setShowForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success message
    // Later: send to API endpoint
    console.log("Feedback submitted:", { rating, ...formData });
    setSubmitted(true);
  };

  const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="transition-transform hover:scale-110 focus:outline-none"
    >
      <svg
        className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${
          filled ? "text-amber-400" : "text-slate-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
  );

  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-2xl">
        
        {/* Header */}
        <header className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How Was Your Experience?
          </h2>
          <p className="text-slate-600">
            Your feedback helps us serve you better.
          </p>
        </header>

        {/* Star Rating */}
        {!showForm && !submitted && (
          <div className="text-center">
            <p className="text-slate-600 mb-6">Tap a star to rate your service</p>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  filled={star <= (hoveredRating || rating)}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              {hoveredRating === 0 
                ? "Select your rating" 
                : hoveredRating >= 4 
                  ? "We&apos;re glad we could help!" 
                  : "We&apos;d love to hear how we can improve"}
            </p>
          </div>
        )}

        {/* Feedback Form (1-3 stars) */}
        {showForm && !submitted && (
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-6 h-6 ${star <= rating ? "text-amber-400" : "text-slate-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900 text-center mb-2">
              We&apos;re Sorry to Hear That
            </h3>
            <p className="text-slate-600 text-center mb-8">
              Please let us know what went wrong so we can make it right.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  What happened?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                  placeholder="Tell us about your experience with our plumbing service..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 hover:bg-sky-600 transition-all"
              >
                Submit Feedback
              </button>
            </form>

            <button
              onClick={() => { setShowForm(false); setRating(0); }}
              className="w-full mt-4 text-sm text-slate-500 hover:text-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go back and change rating
            </button>
          </div>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="text-center bg-slate-50 rounded-2xl p-10 border border-slate-200">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-6">
              <svg 
                className="w-8 h-8 text-sky-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Thank You for Your Feedback
            </h3>
            <p className="text-slate-600 mb-6">
              We appreciate you taking the time to help us improve. A member of our team will review your feedback and reach out if needed.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sky-500 font-medium hover:text-sky-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Home
            </Link>
          </div>
        )}

        {/* Additional info */}
        {!showForm && !submitted && (
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              Had a great experience? We&apos;d love for you to share it on Google!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
