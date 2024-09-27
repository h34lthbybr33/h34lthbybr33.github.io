'use client';

import React from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    beTracker?: {
      t: ({ hash }: { hash: string }) => void;
    };
  }
}

export interface MetricoolProps {
  hash: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Metricool: React.FC<MetricoolProps> = ({ hash }) => {
  const handleLoad = () => {
    window.beTracker?.t({ hash });
  };

  return (
    <>
      <Script
        id="_next-metricool"
        src="https://tracker.metricool.com/resources/be.js"
        onLoad={handleLoad}
      />
    </>
  );
};

Metricool.displayName = 'Metricool';

export default Metricool;

/* <script>
function loadScript(a){
  var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
  c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",
  c.onreadystatechange=a,
  c.onload=a,
  b.appendChild(c)
}
loadScript(function(){
  beTracker.t({hash:"d1ee97e16c3ad749e55205ef15e4805f"})
});
</script>
*/
