import { profile } from "@/data/profile";
import { ArrowUp } from "./Icons";
import LocalTime from "./LocalTime";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__in">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
         <p className="footer__end">
          <span>
            {profile.location} · <LocalTime withZone />
          </span>
          <a href="#top" className="footer__top" data-magnetic="0.3">
            Top
            <ArrowUp className="btn__icon" />
          </a>
        </p>
      </div>
    </footer>
  );
}
