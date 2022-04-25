import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "pages/public";

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};
