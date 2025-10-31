import { FiCheckCircle } from "react-icons/fi";
import { IoWarningOutline, IoClose } from "react-icons/io5";

const VARIANT_CONFIG = {
  success: {
    icon: <FiCheckCircle size={22} />,
    title: "Success",
  },
  warning: {
    icon: <IoWarningOutline size={22} />,
    title: "Heads up",
  },
};

const Toast = ({ message, variant, onDismiss }) => {
  const { icon, title } = VARIANT_CONFIG[variant] || VARIANT_CONFIG.success;

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F637CF] via-[#E3D876] to-[#4DD4C6]" />
      <div className="relative flex items-start gap-3 px-5 py-4 text-night">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-night backdrop-blur">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide">
            {title}
          </p>
          <p className="mt-1 text-sm font-medium leading-5 text-night/90">
            {message}
          </p>
        </div>
        <button
          onClick={onDismiss}
          aria-label="Close notification"
          className="rounded-full bg-white/70 p-1 text-night transition hover:bg-white"
        >
          <IoClose size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
