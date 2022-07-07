import { useState } from "react";
export const MyInfo = () => {
  const [navId, setNavId] = useState(0);
  const handleNav = (navIdParam) => {
    setNavId(navIdParam);
  };
  return (
    <div>
      <div>
        <button onClick={() => handleNav(0)}>Subnav 0</button>
        <button onClick={() => handleNav(1)}>Subnav 1</button>
        <button onClick={() => handleNav(2)}>Subnav 2</button>
      </div>
      {navId === 0 && <p>Sub Page 0</p>}
      {navId === 1 && <p>Sub page 1</p>}
      {navId === 2 && <p>Sub page 2</p>}
    </div>
  );
};
