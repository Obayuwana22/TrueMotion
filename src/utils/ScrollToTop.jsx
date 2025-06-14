import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldScrollRoutes = [/^\/car\/[^/]+$/];

    const shouldScroll = shouldScrollRoutes.some((route) =>
      route instanceof RegExp ? route.test(pathname) : route === pathname
    );

    if (shouldScroll) window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
