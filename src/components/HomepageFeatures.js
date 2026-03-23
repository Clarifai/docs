import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Deploy Anywhere',
    description: (
      <>
        Run AI workloads on shared compute, dedicated cloud, on-premise, edge, or your own VPC — all from a single unified control plane.
      </>
    ),
  },
  {
    title: 'Build & Customize',
    description: (
      <>
        Label data, fine-tune models, build pipelines, and evaluate performance with a full suite of tools designed for the entire ML lifecycle.
      </>
    ),
  },
  {
    title: 'Govern & Scale',
    description: (
      <>
        Monitor usage, manage access, audit activity, and control costs across every AI resource in your organization.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
