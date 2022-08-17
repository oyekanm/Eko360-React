import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
          <Route path="/" element="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
