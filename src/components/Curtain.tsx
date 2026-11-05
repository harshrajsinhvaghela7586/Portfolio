/** Intro curtain. CSS only, so it never waits on JavaScript. Skipped on repeat visits (see layout script). */
export default function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <div className="curtain__mark">
        Harsh<span>.</span>
      </div>
      <div className="curtain__bar">
        <i />
      </div>
    </div>
  );
}
