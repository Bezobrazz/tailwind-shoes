import ModalShell from "./ModalShell.jsx";

const SERVICES = [
  {
    title: "Custom Fitting Lab",
    description:
      "Get biomechanical scans, gait analysis, and personalized insole shaping guided by our in-house specialists.",
  },
  {
    title: "Rapid Refresh",
    description:
      "Breathe new life into your kicks with deep cleaning, sole revival, and color touch-ups completed within 24 hours.",
  },
  {
    title: "Drop Concierge",
    description:
      "Early alerts, reservation help, and same-day pickup for limited releases so you never miss a pair.",
  },
  {
    title: "After-Move Care",
    description:
      "Keep your rotation ready with maintenance subscriptions tailored for runners, streetwear collectors, or athletes.",
  },
];

const ServicesModal = ({ isOpen, onClose }) => {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="grid min-h-full max-h-full overflow-y-auto grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
    >
      <div className="flex flex-col justify-between bg-gradient-to-br from-[#F637CF]/15 via-transparent to-[#4DD4C6]/20 px-8 pb-16 pt-20 md:px-12 md:py-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-300">
            Services
          </p>
          <h2 className="text-4xl font-black leading-tight text-night dark:text-white md:text-[44px]">
            Level Up Your Sneaker Experience
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Beyond the drops, ArcStep delivers hands-on services that keep your
            sneakers performing, looking fresh, and ready for whatever is next.
            Choose a concierge experience or design your routine with our team.
          </p>
        </div>
        <div className="mt-10 grid gap-4 text-sm text-gray-500 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-[#F637CF]" />
            <span>Certified Nike and adidas service partners</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-3 w-3 rounded-full bg-[#E3D876]" />
            <span>Pick up & return within Lviv in under 4 hours</span>
          </div>
        </div>
      </div>
      <div className="flex max-h-[85vh] flex-col gap-8 px-8 pb-16 pt-20 md:px-12">
        <div className="grid gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-[24px] bg-white/80 p-6 shadow-[0_18px_45px_-20px_rgba(13,17,32,0.35)] transition hover:shadow-[0_25px_55px_-20px_rgba(13,17,32,0.45)] dark:bg-night dark:shadow-none dark:hover:bg-night-50"
            >
              <h3 className="text-lg font-semibold text-night dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-[24px] border border-dashed border-gray-300/80 p-6 text-sm leading-6 text-gray-600 dark:border-night-50 dark:text-gray-300">
          Need something specific? Email{" "}
          <span className="font-semibold text-night dark:text-white">
            care@arcstep.com
          </span>{" "}
          with your request, and we will tailor a service package for you.
        </div>
      </div>
    </ModalShell>
  );
};

export default ServicesModal;
