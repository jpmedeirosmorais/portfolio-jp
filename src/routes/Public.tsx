import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, Portfolio } from "pages/public";
import { items } from "common/utils/itemsAbout";

export const Public = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About items={items} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
};
