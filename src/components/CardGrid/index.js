import React from 'react';

function Card({ icon, title, description, href, external, variant }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
  const isMini = variant === 'mini';

  return (
    <article className={isMini ? 'col col--4' : 'col col--6'} style={{ display: 'flex' }}>
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
          className={`card padding--lg homepage-card-container ${isMini ? 'mini-card' : 'margin-bottom--lg fixed-height-card'}`}
          style={{ color: 'var(--ifm-heading-color)', width: '100%' }}
        >
          {icon && <div className="card-icon">{icon}</div>}
          <h3>{title}</h3>
          {!isMini && description && <p>{description}</p>}
        </div>
      </a>
    </article>
  );
}

export default function CardGrid({ cards, variant }) {
  return (
    <div className="row">
      {cards.map((card, idx) => (
        <Card key={idx} {...card} variant={variant} />
      ))}
    </div>
  );
}
