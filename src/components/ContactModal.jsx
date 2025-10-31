import ModalShell from "./ModalShell.jsx";

const CONTACT_OPTIONS = [
  {
    label: "Visit",
    value: "ArcStep Flagship, Halytska St 5, Lviv",
  },
  {
    label: "Call",
    value: "+380 (32) 555-19-90",
  },
  {
    label: "Email",
    value: "hello@arcstep.com",
  },
];

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="grid min-h-full max-h-full overflow-y-auto grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
    >
      <div className="flex flex-col justify-between bg-gradient-to-br from-[#F637CF]/15 via-transparent to-[#4DD4C6]/20 px-8 pb-16 pt-20 md:px-12 md:py-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-300">
            Contact
          </p>
          <h2 className="text-4xl font-black leading-tight text-night dark:text-white md:text-[44px]">
            We are here to keep you moving
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Have a sizing question, looking for a rare drop, or want to plan a
            community event with ArcStep? Reach out and our crew will reply
            within one business day.
          </p>
        </div>
        <div className="mt-10 space-y-3 text-sm text-gray-600 dark:text-gray-300">
          {CONTACT_OPTIONS.map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                {label}
              </span>
              <span className="text-sm font-medium text-night dark:text-white">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex max-h-[85vh] flex-col gap-8 px-8 pb-16 pt-20 md:px-12">
        <form className="grid gap-5">
          <div className="grid gap-2 text-sm">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>
          <div className="grid gap-2 text-sm">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>
          <div className="grid gap-2 text-sm">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us how we can help"
              className="resize-none rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-700 placeholder:text-gray-400 focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-200 dark:placeholder:text-gray-500"
            />
          </div>
          <div className="grid gap-2 text-sm">
            <label className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
              Service Interest
            </label>
            <select
              className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-700 focus:border-night focus:outline-none dark:border-night-50 dark:bg-night dark:text-gray-200"
              defaultValue=""
            >
              <option value="" disabled hidden>
                Choose a service
              </option>
              <option value="custom-fitting">Custom Fitting Lab</option>
              <option value="rapid-refresh">Rapid Refresh</option>
              <option value="concierge">Drop Concierge</option>
              <option value="after-move">After-Move Care</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <button
            type="button"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80 dark:bg-white dark:text-night dark:hover:bg-white/80"
          >
            Send message
          </button>
        </form>
        <div className="rounded-[24px] border border-dashed border-gray-300/80 p-6 text-sm leading-6 text-gray-600 dark:border-night-50 dark:text-gray-300">
          Prefer in-person? Drop by Saturdays 12–4 PM for walk-in consultations
          and complimentary cleaning demos.
        </div>
      </div>
    </ModalShell>
  );
};

export default ContactModal;
