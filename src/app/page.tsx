"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import ReactFullpage from "@fullpage/react-fullpage";

export default function Home() {
  const SEL = styles.customSection;
  const SECTION_SEL = `.${SEL}`;

  const fullpages = [
    {
      text: "Section 1",
    },
    {
      text: "Section 2",
    },
    {
      text: "Section 3",
    },
  ];

  const originalColors = ["#ff5f45", "#0798ec", "#fc6c7c", "#435b71", "orange", "blue", "purple", "yellow"];
  return (
    <main className={styles.main}>
      <ReactFullpage
        debug /* Debug logging */
        // fullpage options
        licenseKey={"YOUR_KEY_HERE"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={["firstPage", "secondPage", "thirdPage"]}
        sectionSelector={SECTION_SEL}
        onLeave={() => {}}
        sectionsColor={originalColors}
        credits={{}}
        scrollingSpeed={300}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {fullpages.map(({ text }) => (
              <div key={text} className={SEL}>
                <div className={styles.slide}>
                  <div className={styles.innerContainer}>
                    <h3>{text}</h3>
                    <h3>{text}</h3>
                  </div>
                </div>
                <div className={styles.slide}>
                  <h3>{text}</h3>
                </div>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </main>
  );
}
