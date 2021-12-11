import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'OpenAPI',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Generate an OpenAPI specification from PHP attributes and <abbr title="Plain Old PHP Objects">POPOs</abbr>.
      </>
    ),
  },
  {
    title: 'Client SDK',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Generate Client SDKs based on the meta data which you have provided to describe your endpoints.
      </>
    ),
  },
  {
    title: 'Integration',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Generate your models in different languages and re-use them at the frontend.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
