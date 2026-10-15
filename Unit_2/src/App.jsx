import React from "react";
import Count from "./components/Count.jsx"
import Timer from "./components/Timer";
import WindowSize from "./components/WindowSize";
import UserSelector from "./components/UserSelector";
import UserSearch from "./components/UserSearch.jsx";
import FocusInput from "./components/RefDemo.jsx";
import Previous from "./components/Previous.jsx";
import StartCancelTimer from "./components/StartCancelTimer.jsx";
import IncreaseOrDecrease from "./components/IncreaseOrDecrease.jsx";
import ProductExplorer from "./Product-Explorer/main/ProductExplorer.jsx";
import ProductDetails from "./Product-Explorer/main/ProductDetails.jsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Count /> */}
      {/* <Timer/> */}
      {/* <WindowSize/> */}
      {/* <UserSelector/> */}
      {/* <UserSearch/> */}
      {/* <FocusInput /> */}
      {/* <IncreaseOrDecrease /> */}
      <Routes>
        <Route path="/products" element={<ProductExplorer />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      {/* <Previous /> */}
      {/* <StartCancelTimer /> */}
    </div>
  );
}
export default App;