import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { routers } from "./routers/Routers";
import Home from "./pages/Home";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

function App() {
  const renderRoutes = () =>
    routers.map(({ path, id, element }) => (
      <Route key={id} path={path} element={element} />
    ));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {renderRoutes()}
      </Route>
    </Routes>
  );
}

export default App;
