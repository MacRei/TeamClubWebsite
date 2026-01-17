import { Link } from "lucide-react";
import styles from "./page.module.css";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function DonationPage() {
    return(
        <section>
            <h1 className={styles.title}>How to Support Us</h1>
            <div className={styles.container}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Sunset2.jpeg"
                  alt="Lake Lanier Sunset"
                  width ={315}
                  height = {315}
                  className={styles.imageTwo}
                />
              </div>
            
              <div className={styles.textWrapper}>
                <p>
                  Donations directly support the University of Georgia Sailing Club and help keep sailing accessible for our members. Contributions fund team events and regattas, essential gear such as life vests and safety equipment, boat maintenance and upgrades, and travel to competitions throughout the region. Your support allows us to train, compete, and grow the sport of sailing while maintaining a safe, well-equipped program.
                </p>
                <br></br>
                <p>
                  All donations are handled directly through our club treasurer to ensure transparency and proper allocation of funds. If you're interested in supporting the team, please reach out using the contact information below and our treasurer will be happy to provide details on how to donate. We truly appreciate your support and investment in UGA Sailing.
                </p>
              </div>
            </div>
            <h1 className={styles.smallerTitle}>Current Treasurer Contact</h1>
              <a
                href="mailto:reilleymacguire@gmail.com"
                className={styles.link}
              >
                Reilleymacguire@gmail.com
              </a>
        </section>
    );
}