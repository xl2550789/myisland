import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(id).offsetHeight;
      console.log("window.pageYOffset :>> ", window.pageYOffset);
      console.log("offsetSetHeight :>> ", offsetSetHeight);
      if (window.pageYOffset > offsetSetHeight * 0.9) {
        setAnimation(true);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return animation;
}
