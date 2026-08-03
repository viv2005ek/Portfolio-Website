import React, { useEffect, useState } from 'react';

export default function HUD() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-30 font-mono text-[10px] text-[#d4af37]/40 select-none">
      {/* Top Left System status */}
      <div className="absolute top-6 left-8 flex flex-col space-y-1">
        <div>SYS_OS // VIVEK_OS_V2.0</div>
        <div>NET_ZONE // INTERACTIVE_PORTFOLIO</div>
        <div>SEC_LEVEL // OPTIMAL</div>
      </div>

      {/* Top Right Clock status */}
      <div className="absolute top-6 right-8 text-right flex flex-col space-y-1">
        <div>LOC_TIME // {time}</div>
        <div>STATUS // ACTIVE_NODE</div>
      </div>

      {/* Bottom Left Navigation Tracker */}
      <div className="absolute bottom-6 left-8 flex flex-col space-y-1">
        <div>SYS_COORDS // [LAT_CS_AIR_3839]</div>
        <div>SYS_FLOW // SMOOTH_OBSERVER</div>
      </div>

      {/* Bottom Right Mouse coordinates */}
      <div className="absolute bottom-6 right-8 text-right flex flex-col space-y-1">
        <div>MOUSE_X // {coords.x}PX</div>
        <div>MOUSE_Y // {coords.y}PX</div>
      </div>
    </div>
  );
}
