import { getNextStaticProps } from '@faustjs/next';

import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import React from 'react';
import { CTA, Footer, Header, Hero, Posts } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';

export default function Page() {
  const { usePosts, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const posts = usePosts({
    first: 6,
    where: {
      categoryName: 'uncategorized',
    },
  });

  return (
    <>

      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <main className="content">
        <Hero
          title="Why The Iron Giant Is The Greatest Film Of All Time"
          bgImage="/images/iron_of_giant.gif"
          id={styles.home_hero}>
          <p>
	    This is the `Hero` section of the page so naturally we have to talk about the most super. He came to earth with the ability to destroy literally everything and he used his power to become the hero and friend we all needed. Oh, and he also stopped a nuclear winter and was voiced by Vin Diesel. Eat your heart out, Superman.
          </p>
        </Hero>
        <section className={styles.explore}>
          <div className="wrap">
            <h2>Examples of the Iron Giant being a total badass</h2>
            <p>
		The count is innumerable, but here are three crowning achievements of our beloved hero.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>He Has Shitloads of Lasers</h3>
                <p>
		  <img src="https://thumbs.gfycat.com/AdmirableFrenchDuckbillcat-size_restricted.gif" height="250px" width="350px"/>
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Patron of the Arts</h3>
                <p>
		  <img src="https://64.media.tumblr.com/66a0da9acf8f0ecfe725267899f5428d/tumblr_ojnr2bjiLO1tm0eroo9_r1_250.gifv" height="250px" width="350px"/>
                </p>
              </div>

              <div className={styles.feature}>
                <h3>No Atomo-- Superman</h3>
                <p>
		  <img src="https://c.tenor.com/Pxnd-PmN-Z4AAAAC/iron-giant-superman.gif" height="250px" width="350px"/>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Posts
          posts={posts.nodes}
          heading="Latest Posts"
          intro="Ramblings about the legend."
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
