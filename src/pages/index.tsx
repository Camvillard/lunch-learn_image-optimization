import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  imageLandscapeBig,
  imageLandscapeSmall,
  imagePortrait,
} from "../shared/images/images.data";
import styles from "../styles/homepage/home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lunch & learn : image optimization</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.intro}>lunch & learn</p>
        <h1 className={styles.title}>image optimization examples</h1>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>1. img with srcset</h2>
          <div className={styles.imageWrapper}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>

            <img
              className={styles.image}
              src={imagePortrait}
              alt=""
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              srcSet={`${imagePortrait}?w=1920 1920w, ${imagePortrait}?w=1024 1024w, ${imagePortrait}?w=768 768w, ${imagePortrait}?w=464 464w, ${imagePortrait}?w=220 220w`}
            />

            <p className={`${styles.text} ${styles.lastText}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>2. picture + sources</h2>
          <div className={styles.imageWrapper}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>

            <picture className={styles.image}>
              <source
                type="image/webp"
                srcSet={`${imageLandscapeBig}?w=1920&fm=webp 1920w, ${imageLandscapeBig}?w=1024&fm=webp 1024w, ${imageLandscapeBig}?w=768&fm=webp 768w, ${imageLandscapeBig}?w=464&fm=webp 464w, ${imageLandscapeBig}?w=220&fm=webp 220w`}
                sizes="(min-width: 1024px) 33vw,(min-width: 768px) 50vw,  100vw"
              />
              <source
                type="image/avif"
                srcSet={`${imageLandscapeBig}?w=1920&fm=avif 1920w, ${imageLandscapeBig}?w=1024&fm=avif 1024w, ${imageLandscapeBig}?w=768&fm=avif 768w, ${imageLandscapeBig}?w=464&fm=avif 464w, ${imageLandscapeBig}?w=220&fm=avif 220w`}
                sizes="(min-width: 1024px) 33vw,(min-width: 768px) 50vw,  100vw"
              />
              <source
                type="image/png"
                srcSet={`${imageLandscapeBig}?w=1920&fm=png 1920w, ${imageLandscapeBig}?w=1024&fm=png 1024w, ${imageLandscapeBig}?w=768&fm=png 768w, ${imageLandscapeBig}?w=464&fm=png 464w, ${imageLandscapeBig}?w=220&fm=png 220w`}
                sizes="(min-width: 1024px) 33vw,(min-width: 768px) 50vw,  100vw"
              />
              <source
                type="image/png"
                srcSet={`${imageLandscapeBig}?w=1920&fm=jpg 1920w, ${imageLandscapeBig}?w=1024&fm=jpg 1024w, ${imageLandscapeBig}?w=768&fm=jpg 768w, ${imageLandscapeBig}?w=464&fm=jpg 464w, ${imageLandscapeBig}?w=220&fm=jpg 220w`}
                sizes="(min-width: 1024px) 33vw,(min-width: 768px) 50vw,  100vw"
              />
              <img alt="" src={imageLandscapeBig} />
            </picture>

            <p className={`${styles.text} ${styles.lastText}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.subtitle}>3. NextJS Image component</h2>
          <div className={`${styles.imageWrapper}`}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>
            <Image
              src={imageLandscapeSmall}
              layout="responsive"
              width={1500}
              height={1125}
              objectFit="cover"
            />

            <p className={`${styles.text} ${styles.lastText}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium, cumque molestiae similique pariatur, corrupti facere
              dolorum modi facilis consequatur voluptatibus quisquam inventore
              commodi voluptates repellat officia ratione aliquid
              exercitationem. Repellat. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium, cumque molestiae similique
              pariatur, corrupti facere dolorum modi facilis consequatur
              voluptatibus quisquam inventore commodi voluptates repellat
              officia ratione aliquid exercitationem. Repellat.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Camvillard/lunch-learn_image-optimization"
          target="_blank"
          rel="noopener noreferrer"
        >
          repo available in github
        </a>
      </footer>
    </div>
  );
};

export default Home;
