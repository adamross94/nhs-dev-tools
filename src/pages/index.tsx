import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContainer}>
          <div className={styles.headerSection}>
            <h1>Documentation</h1>
            <p>Access all the documentation related to our open-source tools and technologies.</p>
            <Link className="button button--secondary" to="/docs">Go to Documentation</Link>
          </div>
          <div className={styles.headerSection}>
            <h1>Blog</h1>
            <p>Read our latest articles and updates on healthcare innovations and open-source projects.</p>
            <Link className="button button--secondary" to="/blog">Go to Blog</Link>
          </div>
          <div className={styles.headerSection}>
            <h1>Upcoming Projects</h1>
            <p>Stay tuned for our upcoming projects and initiatives in the healthcare sector.</p>
            <Link className="button button--secondary" to="/projects">Learn More</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
