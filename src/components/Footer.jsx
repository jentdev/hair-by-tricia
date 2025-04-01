import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Footer = () => {

  const { currentPage } = useContext(AppContext);
  return (
    <footer>
        {
          currentPage === ''
          ? <>
            <div className="slogan">「 Elevating your beauty with style 」</div>
            <div className="white-rect"></div>
          </>
          : ''
        }
        
    </footer>
  );
};

{
  /* <div className="slogan">
<div className="body"></div>
<div className="headline">
「 Elevating your beauty with style 」
</div>
<div className="white-rect"></div>
</div> */
}
