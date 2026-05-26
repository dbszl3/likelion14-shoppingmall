import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx"
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import ProductAdd from "./pages/ProductAdd/ProductAdd.jsx";
import ProductDelete from "./pages/ProductDelete/ProductDelete.jsx";
import ProductEdit from "./pages/ProductEdit/ProductEdit.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/add" element={<ProductAdd />} />
          <Route path="/product/:id/delete" element={<ProductDelete />} />
          <Route path="/product/:id/edit" element={<ProductEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;