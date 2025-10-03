import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme36 from "./Theme36/Theme36";
// import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Theme36 />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
