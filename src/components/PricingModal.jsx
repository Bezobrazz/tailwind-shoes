import ModalShell from "./ModalShell.jsx";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    frequency: "per visit",
    description:
      "Perfect for discovering ArcStep. Enjoy complimentary fittings, drop-in cleanings, and first-look notifications.",
    perks: ["On-site fit check", "Same-day cleaning add-on", "Launch alerts"],
  },
  {
    name: "Mover",
    price: "$29",
    frequency: "per month",
    description:
      "Keep your rotation ready with priority care, two deep refreshes a month, and access to members-only events.",
    perks: [
      "2 Rapid Refresh sessions",
      "Priority drop reservations",
      "Members-only community events",
    ],
    accent: "from-[#F637CF] via-[#E3D876] to-[#4DD4C6]",
  },
  {
    name: "Collector",
    price: "$79",
    frequency: "per month",
    description:
      "White-glove service for serious collectors—weekly upkeep, concierge pickups, and exclusive customizations.",
    perks: [
      "4 Rapid Refresh sessions",
      "Concierge pickup & return",
      "Quarterly customization credit",
    ],
  },
];

const PricingModal = ({ isOpen, onClose }) => {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="grid min-h-full max-h-full overflow-y-auto grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-12"
    >
      <div className="flex flex-col justify-between bg-gradient-to-br from-[#F637CF]/15 via-transparent to-[#4DD4C6]/20 px-8 pb-16 pt-20 md:px-12 md:py-16">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-300">
            Pricing
          </p>
          <h2 className="text-4xl font-black leading-tight text-night dark:text-white md:text-[44px]">
            Choose the Pace That Fits Your Lifestyle
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            Every ArcStep plan blends maintenance, styling, and concierge perks
            so your sneakers stay ready for whatever comes next. Scale up or
            down at any time.
          </p>
        </div>
        <div className="mt-10 text-sm text-gray-500 dark:text-gray-300">
          Cancel or upgrade anytime. Billed monthly, taxes included.
        </div>
      </div>
      <div className="flex max-h-[85vh] flex-col gap-8 px-8 pb-16 pt-20 md:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="group h-full rounded-[28px] bg-white/80 p-6 shadow-[0_18px_45px_-20px_rgba(13,17,32,0.35)] transition hover:shadow-[0_25px_55px_-20px_rgba(13,17,32,0.45)] dark:bg-night dark:shadow-none dark:hover:bg-night-50"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-night dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                    {plan.frequency}
                  </span>
                </div>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${plan.accent ? "bg-gradient-to-br " + plan.accent : "bg-night dark:bg-white"}`}
                    />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 w-full rounded-full border border-black/10 bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/80 dark:border-white/10 dark:bg-white dark:text-night dark:hover:bg-white/80"
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
        <div className="rounded-[24px] border border-dashed border-gray-300/80 p-6 text-sm leading-6 text-gray-600 dark:border-night-50 dark:text-gray-300">
          Questions about enterprise or team pricing? Contact{" "}
          <span className="font-semibold text-night dark:text-white">
            partnerships@arcstep.com
          </span>{" "}
          for tailored solutions.
        </div>
      </div>
    </ModalShell>
  );
};

export default PricingModal;
