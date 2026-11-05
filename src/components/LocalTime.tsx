"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

/** Live clock for the developer's own timezone. Renders nothing on the server to avoid a mismatch. */
export default function LocalTime({ withZone = false }: { withZone?: boolean }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: profile.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time className="localtime" suppressHydrationWarning>
      {time ? `${time}${withZone ? " IST" : ""}` : " "}
    </time>
  );
}
