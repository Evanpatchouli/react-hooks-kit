import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { lazy } from "react";
import { Lazy } from "./lazy";
import Header from "@/components/header";
import Tests from "@/views/tests";

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
              <Route
                path="test"
                children={
                  <>
                    <Route path="UseReactive" element={<Tests.UseReactive />} />
                    <Route path="UseReactor" element={<Tests.UseReactor />} />
                    <Route path="UseReactorListener" element={<Tests.UseReactorListener />} />
                    <Route path="UseParticle" element={<Tests.UseParticle />} />
                  </>
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
