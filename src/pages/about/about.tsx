import { useEffect } from "react";
import aboutCss from "./about-global.scss?inline";
// import "./about-global.scss";

const styleId = "about-global";

export function About() {
  useEffect(() => {
    if (document.querySelector(`style#${styleId}`) !== null) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = aboutCss;
    document.head.appendChild(style);

    return () => {
      const injectedStyle = document.querySelector(`style#${styleId}`);
      injectedStyle?.parentNode?.removeChild(injectedStyle);
    };
  }, []);

  return (
    <>
      <h1>About</h1>
      <p>This is the about page!</p>
    </>
  );
}
