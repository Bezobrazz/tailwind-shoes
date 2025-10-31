import { twMerge } from "tw-merge";

const ModalShell = ({
  isOpen,
  onClose,
  children,
  contentClassName = "",
  overlayClassName = "",
  containerClassName = "",
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={twMerge(
        "fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-3 md:px-4",
        overlayClassName
      )}
    >
      <div
        className={twMerge(
          "relative w-full max-w-[min(70vw,1100px)] max-h-[85vh] overflow-y-auto overflow-x-hidden rounded-[32px] bg-white shadow-[0_30px_60px_-20px_rgba(13,17,32,0.55)] dark:bg-night-50",
          containerClassName
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-black/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-black transition hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          type="button"
        >
          Close
        </button>
        <div
          className={twMerge(
            "bg-gradient-to-br from-[#F637CF]/10 via-transparent to-[#4DD4C6]/10",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalShell;
