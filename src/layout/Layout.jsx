import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../context/globalContext";

function Layout() {
  const { color, setActiveColor } = useContext(GlobalContext);
  return (
    <>
      <Navbar />
      <div className="align-elements py-3">
        <div className="row flex float-end gap-5">
          {color.map((item) => {
            return (
              <div
                onClick={() => setActiveColor(`${item}`)}
                className="rounded-full p-3 cursor-pointer"
                style={{ background: `${item}` }}
                key={item}
              ></div>
            );
          })}
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
