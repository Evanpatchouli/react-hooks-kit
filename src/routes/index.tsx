import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { lazy } from "react";
import { Lazy } from "./lazy";
import Header from "@/components/header";

const Home = lazy(() => import("@/views/home"));
const Docs = lazy(() => import("@/views/docs"));

function Routers() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          // element={<Home />}
          children={
            <>
              <Route
                path="home"
                element={
                  <Lazy>
                    <Home />
                  </Lazy>
                }
              />
              <Route
                path="docs"
                element={
                  <Lazy>
                    <Docs />
                  </Lazy>
                }
              />
            </>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </HashRouter>
  );
}

export default Routers;
