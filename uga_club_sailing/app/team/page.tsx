import styles from "./page.module.css";
import Image from "next/image";

const team = [
  { name: "Jesse Bridges", role: "President", year: "Fourth Year", major: "Management", img: "/officerPhoto4.JPG" },
  { name: "William Adams", role: "Commodore", year: "Third Year", major: "Civil Engineering", img: "/officerPhoto6.JPG" },
  { name: "Oliver Sobering", role: "Race Team Captain", year: "Second Year", major: "Mechanical Engineering", img: "/officerPhoto5.JPG" },
  { name: "Bales Brannon", role: "Race Team Captain", year: "Second Year", major: "Civil Engineering", img: "/officerPhoto8.JPG" },
  { name: "Macguire Reilley", role: "Treasurer", year: "Fourth Year", major: "Computer Science", img: "/officerPhoto7.JPG" },
  { name: "Jack Whittmore", role: "Merchandising Chair", year: "Second Year", major: "Ocean Science", img: "/officerPhoto1.JPG" },
  { name: "Mariam Kalathil", role: "Social Chair", year: "Third Year", major: "BCMB and French", img: "/officerPhoto2.JPG" },
  { name: "Abby Barnes", role: "Social Chair", year: "Third Year", major: "Ocean Science", img: "/officerPhoto3.JPG" },
];

export default function TeamPage() {
  return (
    <section>
      <div>
        <h1 className={styles.title}>Our Team</h1>
        <p className={styles.paragraph}>Meet the dedicated members of the UGA Club Sailing team! Our elected Executive Board officers for the 2025-2026 school year work closely together, meeting regularly to coordinate team activities and manage the operations of the club both on and off the water. If you'd like to connect with an officer or have any questions about the team, please don't hesitate to reach out.</p>
      </div>

      <div className={styles.grid}>
        {team.map((m) => (
          <div key={m.name} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={m.img}
                alt={`${m.name} headshot`}
                width={220}
                height={280}
                className={styles.image}
              />
            </div>

            <div className={styles.textWrapper}>
              <p className={styles.name}>{m.name}</p>
              <p className={styles.role}>{m.role}</p>
              <p className={styles.role}>{m.year}</p>
              <p className={styles.role}>{m.major}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}