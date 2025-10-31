import Toast from "./Toast.jsx";

const ToastContainer = ({ toasts, onDismiss }) => {
  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[60] flex flex-col space-y-4">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          message={toast.message}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
