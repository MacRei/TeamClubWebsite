import Image from "next/image";
import styles from "./homePage.module.css";

export default function Home() {
  return (
    <section>
      <div>
        <Image
          className={styles.image}
          src="/splashPageImageTwo.jpeg"
          alt="Two sailors on Lake Lanier"
          width={1920}
          height={1080}
        />
        <h1 className={styles.titles}>About</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/aboutUsImg.jpeg"
            alt="Seven sailors on Lake Lanier"
            width ={600}
            height = {400}
            className={styles.imageTwo}
          />
        </div>

        <div className={styles.textWrapper}>
          <p>
            We race, cruise, and chase sunsets across Lake Lanier. No experience
            required. Just wind and courage.
          </p>
        </div>
      </div>
    </section>
  );
}
