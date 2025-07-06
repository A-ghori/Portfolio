// Contact.jsx
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xwpbjqpq"); // your form ID

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out —
          I'm always open to discussing new ideas and opportunities.
        </p>

        {/* Form or Success Message */}
        {state.succeeded ? (
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-2 text-primary">
              🚀 Message Sent Successfully!
            </h3>
            <p className="text-lg text-muted-foreground">
              Thank you for reaching out, explorer 🌌 <br />
              I’ll reply soon — until then, keep building awesome things!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-6 p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-md"
          >
            {/* ✅ Name Field */}
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-muted-foreground">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-md border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-muted-foreground">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-muted-foreground">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="What's on your mind?"
                className="w-full px-4 py-2 rounded-md border bg-background border-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition disabled:opacity-60"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}

        {/* Social Icons */}
        <div className="text-center mt-16 space-y-8">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Email Button */}
            <a
              href="mailto:shubhayubarua534@gmail.com"
              aria-label="Send Email"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition text-muted-foreground"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span>Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918697946016"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 hover:bg-green-200 transition text-green-700"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shubhayubarua/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 hover:bg-blue-200 transition text-blue-700"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/shubhayubarua"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-sky-100 hover:bg-sky-200 transition text-sky-600"
            >
              <FaTwitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
