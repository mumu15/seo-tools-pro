'use client'
import { useEffect, useRef } from 'react'

export default function AdUnit({ slot, format = 'auto', layout, style }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (adRef.current && adRef.current.childNodes.length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {}
  }, []);

  return (
    <div className="my-6 w-full flex justify-center" style={style}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-8934829211507329"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layout ? { 'data-ad-layout': layout } : {})}
      />
    </div>
  );
}

// Anchor ad for bottom of page (sticky)
export function AnchorAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8934829211507329"
        data-ad-slot="ANCHOR_SLOT"
        data-ad-format="autorelaxed"
        data-full-width-responsive="true"
      />
    </div>
  );
}
