import React, {lazy, Suspense} from 'react';
import {NavBar} from "./components/NavBar/NavBar";
import {Loader} from "./components/Loader/Loader";

const Explore = lazy(() => import("./pages/Explore/Explore"))

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Suspense fallback={<Loader/>}>
          <Explore/>
        </Suspense>
      </main>
    </>
  );
}

export default App;
