import Link from "next/link";
import { Instagram } from "lucide-react";
import { Link2 } from "lucide-react";
import { Mail } from "lucide-react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.iconRow}>
            <Link
              href="https://www.instagram.com/ugasailing"
              target="_blank"
              aria-label="UGA Sailing Club Instagram"
            >
              <Instagram className={styles.icon} />
            </Link>
            <Link
              href="https://uga.campuslabs.com/engage/organization/sailingclubatuga"
              target="_blank"
              aria-label="UGA Sailing Club Involvment Network"
            >
              <Link2 className={styles.icon} />
            </Link>
            <a href="mailto:ugasailing@gmail.com" aria-label="Email UGA Sailing Club">
              <Mail className={styles.icon} />
            </a>
        </div>
    </footer>
  );
}