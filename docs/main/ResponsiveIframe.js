// ResponsiveIframe.js
// 感谢 GitHub Copilot 写的这玩意, 你别说, 挺好使
import React, { useRef, useEffect } from 'react';

const ResponsiveIframe = ({ src, ratio = 1, width = "80%" }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        iframeRef.current.style.height = `${width * ratio}px`;
      }
    });

    resizeObserver.observe(iframeRef.current);

    return () => resizeObserver.disconnect();
  }, [ratio]);

  return <iframe ref={iframeRef} src={src} style={{ width: width }}></iframe>;
};

export default ResponsiveIframe;