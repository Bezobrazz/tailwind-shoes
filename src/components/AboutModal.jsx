import ModalShell from "./ModalShell.jsx";

const AboutModal = ({ isOpen, onClose }) => {
  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      contentClassName="grid h-full max-h-[85vh] grid-cols-1 gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
    >
      <div className="flex flex-col justify-between bg-gradient-to-br from-[#F637CF]/15 via-transparent to-[#4DD4C6]/20 px-8 py-16 md:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-300">
            About ArcStep
          </p>
          <h2 className="text-4xl font-black leading-tight text-night dark:text-white md:text-[44px]">
            Crafted For Motion,
            <br className="hidden md:block" /> Designed For You
          </h2>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
            ArcStep is an independent sneaker boutique blending bold gradients,
            future-forward silhouettes, and premium craftsmanship. From limited
            drops to everyday essentials, every pair in our collection is
            curated so you can move effortlessly while making a statement.
          </p>
        </div>
        <div className="mt-10 flex gap-6 text-sm text-gray-500 dark:text-gray-300">
          <div>
            <p className="text-2xl font-extrabold text-night dark:text-white">
              2017
            </p>
            <p className="mt-1 uppercase tracking-[0.25em]">Founded</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-night dark:text-white">
              120+
            </p>
            <p className="mt-1 uppercase tracking-[0.25em]">Exclusive drops</p>
          </div>
        </div>
      </div>
      <div className="flex max-h-[85vh] flex-col gap-8 overflow-y-auto px-8 pb-12 pt-20 md:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[24px] bg-white/80 p-6 shadow-[0_18px_45px_-20px_rgba(13,17,32,0.35)] dark:bg-night dark:shadow-none">
            <h3 className="text-lg font-semibold text-night dark:text-white">
              Elevated Experience
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Try on the latest tech-infused sneakers and limited collabs with
              stylists ready to match your stride.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/80 p-6 shadow-[0_18px_45px_-20px_rgba(13,17,32,0.35)] dark:bg-night dark:shadow-none">
            <h3 className="text-lg font-semibold text-night dark:text-white">
              Community First
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              We platform emerging artists, host neighborhood runs, and launch
              cause-driven releases that give back to the streets we call home.
            </p>
          </div>
        </div>
        <div className="rounded-[24px] border border-dashed border-gray-300/80 p-6 text-sm leading-6 text-gray-600 dark:border-night-50 dark:text-gray-300">
          Visit our flagship in downtown Lviv or shop online with worldwide
          shipping. Follow{" "}
          <span className="font-semibold text-night dark:text-white">
            @arcstep
          </span>{" "}
          to catch upcoming launches before they sell out.
        </div>
      </div>
    </ModalShell>
  );
};

export default AboutModal;
