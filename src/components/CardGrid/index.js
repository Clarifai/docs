import React from 'react';

function Card({ icon, title, description, href, external }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <article className="col col--6" style={{ display: 'flex' }}>
      <a
        href={href}
        {...linkProps}
        style={{
          display: 'flex',
          flex: '1',
          textDecoration: 'none',
          color: 'var(--ifm-heading-color)',
        }}
      >
        <div
          className="card margin-bottom--lg padding--lg homepage-card-container fixed-height-card"
          style={{ color: 'var(--ifm-heading-color)', width: '100%' }}
        >
          {icon && <div className="card-icon">{icon}</div>}
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
}

export default function CardGrid({ cards }) {
  return (
    <div className="row">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}
    </div>
  );
}
