import Nav from "./components/Nav";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constants";
import Sidebar from "./components/Sidebar";
import NewArrivalsSection from "./components/NewArrivalsSection";
import { useState } from "react";
import CartItem from "./components/CartItem";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[1]} />
        <CartItem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  );
}
