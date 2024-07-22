import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

type FeatureItem = {
  title: string;
  lightSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  darkSvg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Getting Started',
    lightSvg: require('@site/static/img/light/undraw_programming.svg').default,
    darkSvg: require('@site/static/img/dark/undraw_programming.svg').default,
    description: (
      <>
        This project focuses on quickly familiarizing NHS staff with various open-source technologies and tools to boost their efficiency and capabilities.
      </>
    ),
  },
  {
    title: 'Collaborative Innovation',
    lightSvg: require('@site/static/img/light/undraw_engineering_team.svg').default,
    darkSvg: require('@site/static/img/dark/undraw_engineering_team.svg').default,
    description: (
      <>
        Our approach to collaboration emphasizes the power of teamwork and innovation. By utilizing advanced open-source tools and fostering a culture of shared knowledge, we aim to spark creativity and drive impactful solutions within the NHS.
      </>
    ),
  },
  {
    title: 'Built on Open Standards',
    lightSvg: require('@site/static/img/light/undraw_instant_analysis.svg').default,
    darkSvg: require('@site/static/img/dark/undraw_instant_analysis.svg').default,
    description: (
      <>
        We prioritize open-source methodologies to ensure that healthcare solutions are freely accessible and can be collectively improved. By sharing resources openly, we aim to prevent redundant problem-solving and enhance collective progress in the healthcare sector.
      </>
    ),
  },
];

function useTheme() {
  const { colorMode } = useColorMode();
  return colorMode;
}

function Feature({ title, lightSvg: LightSvg, darkSvg: DarkSvg, description }: FeatureItem) {
  const theme = useTheme();

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {theme === 'dark' ? <DarkSvg className={styles.featureSvg} role="img" /> : <LightSvg className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

