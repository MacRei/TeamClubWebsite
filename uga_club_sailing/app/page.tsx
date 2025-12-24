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
            The Sailing Club at the University of Georgia has been introducing students to the sport of sailing for over 40 years. The club provides opportunities to sail, train, and compete while building a strong community centered around time on the water. We practice and sail out of Lake Lanier in partnership with the Lake Lanier Sailing Club, giving our members access to a well-established sailing venue and a wide range of boats. 
          </p>
          <br />
          <p>
            UGA Sailing competes in the South Atlantic Intercollegiate Sailing Association (SAISA), traveling throughout the Southeast to race against other collegiate programs such as Georgia Tech, Vanderbilt, Duke, Florida, and Clemson. Alongside competition, the club emphasizes learning, skill development, and shared experience, with sailors of all backgrounds practicing together and learning from one another. Whether members are drawn to racing or simply enjoy being on the water, the UGA Sailing Club aims to foster a lasting appreciation for sailing and the community that surrounds it.
          </p>
        </div>
      </div>
    </section>
  );
}