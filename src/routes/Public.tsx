import { Route, Routes } from "react-router-dom";
import { Home, About } from "../pages/public";

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
