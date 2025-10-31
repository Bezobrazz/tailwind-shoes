import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";
import Sidebar from "./components/Sidebar";
import NewArrivalsSection from "./components/NewArrivalsSection";
import { useState, useEffect, useRef } from "react";
import Cart from "./components/Cart.jsx";
import ToastContainer from "./components/ToastContainer.jsx";
import { nanoid } from "nanoid";
import ShoeDetailsModal from "./components/ShoeDetailsModal.jsx";
import AboutModal from "./components/AboutModal.jsx";
import ServicesModal from "./components/ServicesModal.jsx";
import PricingModal from "./components/PricingModal.jsx";
import ContactModal from "./components/ContactModal.jsx";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  const [toasts, setToasts] = useState([]);
  const toastTimersRef = useRef({});
  const [modalShoe, setModalShoe] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    return () => {
      const timers = toastTimersRef.current;
      Object.keys(timers).forEach((key) => {
        clearTimeout(timers[key]);
      });
    };
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const dismissToast = (id) => {
    const timers = toastTimersRef.current;
    if (timers[id]) {
      clearTimeout(timers[id]);
      delete timers[id];
    }
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = (message, variant = "success") => {
    const id = nanoid();
    setToasts((prevToasts) => [...prevToasts, { id, message, variant }]);

    const timeoutId = window.setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      delete toastTimersRef.current[id];
    }, 3200);

    toastTimersRef.current[id] = timeoutId;
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
        showToast(`${product.title} updated in cart`, "success");
      } else {
        updatedCartItems.push({ product, qty, size });
        showToast(`${product.title} added to cart`, "success");
      }
      setCartItems(updatedCartItems);
    } else {
      showToast("Select size and quantity before adding", "warning");
    }
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav
        onClickShoppingButton={() => setIsSidebarOpen(true)}
        cartItemsCount={cartItems.length}
        onClickAbout={() => setIsAboutOpen(true)}
        onClickServices={() => setIsServicesOpen(true)}
        onClickPricing={() => setIsPricingOpen(true)}
        onClickContact={() => setIsContactOpen(true)}
      />
      <ShoeDetail
        shoe={currentShoe}
        onClickAdd={addToCart}
        onClickDetails={(shoe) => setModalShoe(shoe)}
      />
      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
      <ShoeDetailsModal shoe={modalShoe} onClose={() => setModalShoe(null)} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ServicesModal
        isOpen={isServicesOpen}
        onClose={() => setIsServicesOpen(false)}
      />
      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <div className="fixed bottom-4 right-4 ">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />{" "}
        </button>
      </div>
    </div>
  );
}
