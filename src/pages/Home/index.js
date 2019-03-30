import React, { useEffect } from 'react';
import './styles.scss';

import HeroWash from '../../components/HeroWash';
import logo from '../../components/HeroWash/media/PacificLife_BrandIcon_White.png';
import TextHero from '../../components/TextHero';
import CardGroup from '../../components/CardGroup';
import Search from '../../components/Search';
import Chart from '../../components/Chart';

const Home = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • Home`;
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HeroWash
        logo={logo}
        bgimage="https://www.pacificlife.com/content/dam/paclife/crp/images/brand/Brand_hero.jpg"
        tagline="You. Protected."
        line1="Our mission is protecting your financial future."
        line2="We’ve fulfilled that promise for 150 years."
      />
      <TextHero
        heading="PROTECTING WHAT MATTERS TO YOU MOST FOR MORE THAN 150 YEARS"
        text="When it comes to life, no two people are the same. You're unique and so are your financial goals. For more than 150 years, generations of families and businesses have harnessed the Power of Pacific to help them achieve their unique goals. Explore how Pacific Life can help you."
        link="https://www.pacificlife.com/home/life-goals.html"
      />
      <CardGroup />
      <Chart />
      <Search />
    </>
  );
};

export default Home;
