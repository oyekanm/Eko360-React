import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SharedLayout from "./Pages/SharedLayout";
import SubmitDataset from "./Pages/SubmitDataset";
import Publications from "./Pages/Publications";
import PublicData from "./Pages/PublicData";
import About from "./Pages/About";
import Faqs from "./Pages/Faqs";
import Error from "./Pages/Error";
import Privacy from "./Pages/Privacy";
import WebResources from "./Pages/WebResources";
import Contact from "./Pages/Contact";
import Interactive from "./Pages/Interactive";
import SliceDice from "./Pages/SliceDice";
import Public from "./Pages/Public";
import ProductShared from "./Pages/ProductShared";
import DatasetsPage from "./Pages/Datasetspage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element="" />
          <Route path="submit-dataset" element={<SubmitDataset />} />
          <Route path="publications" element={<Publications />} />
          <Route path="public-data" element={<ProductShared />}>
            <Route index element={<PublicData />} />
            <Route path=":productId" element={<Public />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/web-resources" element={<WebResources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/slice&dice" element={<SliceDice />} />
          <Route path="/datasetspage" element={<DatasetsPage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
