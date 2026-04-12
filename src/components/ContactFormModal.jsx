import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function ContactFormModal({
  isOpen,
  onClose,
  initialSubject = "Project Inquiry",
  title = "Project Inquiry",
  recipientEmail = "jmbecerramtz@gmail.com",
}) {
  const [form, setForm] = useState({
    name: "",
    subject: initialSubject,
    message: "",
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm({
      name: "",
      subject: initialSubject,
      message: "",
    });
  }, [isOpen, initialSubject]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = form.subject.trim() || "Project Inquiry";
    const body = [
      `Name: ${form.name.trim()}`,
      "",
      "Message:",
      form.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Close contact form"
            className="fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-[70] pointer-events-none flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/30 bg-[rgba(10,10,12,0.82)] backdrop-blur-xl p-6 md:p-8 text-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/90 hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              <p className="mt-2 text-sm text-white/75">
                Send a quick message and your email app will open with this prefilled inquiry.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Project subject"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-sm text-white/85">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[rgba(155,92,255,0.65)]"
                    placeholder="Tell me a bit about what you need"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-full border border-[rgba(155,92,255,0.35)] bg-[rgba(155,92,255,0.9)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[rgba(155,92,255,1)]"
                >
                  Open Email Draft
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/25 px-5 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ContactFormModal;
