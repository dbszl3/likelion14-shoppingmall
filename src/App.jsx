import { BrowseRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx"

function App() {
  return (
    <BrowseRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowseRouter>
  );
}

export default App;