import { SIZES, QTY } from "../constants";

const ShoeDetailsModal = ({ shoe, onClose }) => {
  if (!shoe) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-3 md:px-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-[min(70vw,1100px)] max-h-[85vh] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_60px_-20px_rgba(13,17,32,0.55)] dark:bg-night-50">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-black/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          Close
        </button>
        <div className="grid h-full max-h-[85vh] grid-cols-1 gap-8 bg-gradient-to-br from-[#F637CF]/10 via-transparent to-[#4DD4C6]/10 md:grid-cols-[1fr_1.15fr] md:gap-12">
          <div className="flex items-center justify-center bg-gradient-to-br from-[#F637CF]/20 via-transparent to-[#4DD4C6]/20 p-6 md:p-12">
            <div className="relative flex aspect-[4/3] w-full max-w-sm items-center justify-center rounded-[28px] bg-gradient-to-br from-[#F637CF] from-10% via-[#E3D876] via-50% to-[#4DD4C6] p-6">
              <span className="absolute inset-0 rounded-[28px] border border-white/30 dark:border-night" />
              <img
                className="relative z-10 h-[65%] w-auto drop-shadow-[0_24px_30px_rgba(13,17,32,0.35)] md:h-[75%]"
                src={shoe.src}
                alt={shoe.title}
              />
            </div>
          </div>
          <div className="flex max-h-[85vh] flex-col gap-6 overflow-y-auto px-6 pb-8 pt-16 md:px-10 md:py-12">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-300">
                Featured sneaker
              </p>
              <h3 className="text-4xl font-black text-night dark:text-white md:text-5xl">
                {shoe.title}
              </h3>
              <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                {shoe.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-6 rounded-[24px] bg-white/70 px-6 py-5 shadow-inner dark:bg-night dark:shadow-none">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Price
                </p>
                <p className="text-3xl font-bold text-night dark:text-white">
                  {shoe.price} $
                </p>
              </div>
              <div>
                <p className="text-xs font-italic text-gray-500 dark:text-gray-400">
                  Style code
                </p>
                <p className="text-sm font-semibold text-night dark:text-white">
                  #{shoe.id.toString().padStart(3, "0")}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Available sizes
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {SIZES.map((size) => (
                    <span
                      key={size}
                      className="rounded-full bg-night/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white dark:bg-white dark:text-night"
                    >
                      EU {size}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                  Stock availability
                </p>
                <p className="mt-2 text-sm font-semibold text-night dark:text-white">
                  Up to {Math.max(...QTY)} pairs ready to ship now.
                </p>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-gray-500 dark:text-gray-300">
              <p>
                Crafted for comfort and performance. Switch between looks with
                bold color blocking that mirrors our hero gradient palette.
              </p>
              <p>
                Responsive cushioning keeps you light on your feet, whether you
                are hitting the streets or elevating your daily fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeDetailsModal;
