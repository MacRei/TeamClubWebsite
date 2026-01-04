import styles from "./page.module.css";
import Image from "next/image";

export default function DonationPage() {
    return(
        <section>
            <h1 className={styles.title}>How to Support Us</h1>
            <div className={styles.container}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/aboutUsImg.jpeg"
                  alt="Seven sailors on Lake Lanier"
                  width ={600}
                  height = {300}
                  className={styles.imageTwo}
                />
              </div>
            
              <div className={styles.textWrapper}>
                <p>
                  Donations directly support the University of Georgia Sailing Club and help keep sailing accessible for our members. Contributions fund team events and regattas, essential gear such as life vests and safety equipment, boat maintenance and upgrades, and travel costs for competitions throughout the region. Your support allows us to train, compete, and grow the sport of sailing while maintaining a safe and well-equipped program. 
                </p>
              </div>
            </div>
            <h1 className={styles.smallerTitle}>Donation Link</h1>
        </section>
    );
}