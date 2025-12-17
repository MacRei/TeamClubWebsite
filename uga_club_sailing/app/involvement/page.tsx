import styles from "./page.module.css";
import Image from "next/image";

export default function InvolvementPage() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Joining the Club</h1>

          <p>
            Getting involved with the UGA Sailing Club is easy, whether you're completely new to sailing or have years of experience. No prior sailing experience is required to join. The club offers a welcoming environment where members can get out on the water, build confidence, and sail alongside experienced teammates.
          </p>
          <br></br>
          <p>
            The club is made up of two teams to fit different interests and levels of commitment. The racing team competes in collegiate regattas throughout the Southeast, representing UGA at events where travel costs are included with dues. Racing team dues are $120 and cover transportation and participation in these competitions. The cruising team is focused on enjoying time on the water in a relaxed, non-competitive setting, with dues of $85.
          </p>
          <br></br>
          <p>
            We sail on Monday and Thursday evenings, providing consistent opportunities to get on the water during the week. At the beginning of each semester, the club also offers a trial period that allows prospective members to come out, sail with the team, and see if it's a good fit before paying dues.
          </p>
          <br></br>
            <p>
              In addition to sailing, the club hosts regular social events throughout the year,
              giving members the chance to connect off the water and be part of a fun, close-knit
              community. To get more information, email{" "}
              <a
                href="mailto:ugasailing@gmail.com"
                className={styles.link}
              >
                ugasailing@gmail.com
              </a>{" "}
              or visit the{" "}
              <a
                href="https://uga.campuslabs.com/engage/organization/sailingclubatuga"
                className={styles.link}
              >
                Involvement page
              </a>{" "}
              to join the club and request the most up-to-date details on schedules, dues, and events.
            </p>

        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/Involvement2.jpeg"
            alt="Two sailors on Lake Lanier"
            width={600}
            height={400}
            className={styles.imageTwo}
          />
            <Image
            src="/Involvement1.jpeg"
            alt="A group of sailors on the land"
            width={600}
            height={400}
            className={styles.imageTwo}
          />
            <Image
            src="/Involvement3.jpeg"
            alt="A group of sailors on the lake"
            width={600}
            height={400}
            className={styles.imageTwo}
          />
        </div>
      </div>
    </main>
  );
}