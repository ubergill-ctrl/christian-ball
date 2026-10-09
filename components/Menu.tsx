'use client';

import React from 'react';

const courses = [
  {
    name: 'Starters',
    dishes: [
      'Homemade soup, with roll and butter',
      'Brandy and orange infused pâté, served with warm toast',
      'Smoked salmon and cream cheese tart, served with dressed leaves',
    ],
  },
  {
    name: 'Mains',
    dishes: [
      'Roasted breast of chicken, served in a sauce of your choice',
      'Steak and kidney pie',
      'Pork loin, served in a wild mushroom sauce',
    ],
  },
  {
    name: 'Desserts',
    dishes: [
      'Apple and cinnamon crumble, with custard or ice cream',
      'Banana and Baileys trifle',
      'Profiteroles, with cream and warm chocolate',
    ],
  },
];

export default function Menu({ onOpenRsvp }: { onOpenRsvp: () => void }) {
  return (
    <section id="menu" className="section">
      <div className="container">
        <div className="sec-head">
          <span className="label">Dinner</span>
          <h2>The set menu</h2>
          <p>
            A three-course seated dinner, with a choice of dish per course,
            served with a coffee station. Choices and any dietary requirements
            are taken in advance of the evening, so the kitchen can prepare
            for exactly who is coming.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          {courses.map((course) => (
            <div key={course.name} className="panel tier">
              <span className="label label--quiet">{course.name}</span>
              <ul className="marked" style={{ marginTop: '1rem' }}>
                {course.dishes.map((dish) => (
                  <li key={dish}>{dish}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="panel panel--lead"
          style={{ marginTop: '2.5rem', textAlign: 'center' }}
        >
          <span className="label">Please read</span>
          <h3 style={{ margin: '0.5rem 0 0.75rem' }}>Confirm your menu choices</h3>
          <p className="muted" style={{ maxWidth: '52ch', marginInline: 'auto' }}>
            Once you have taken a place at table, come back here to tell us
            your choices and any dietary requirements, for every guest on
            your booking. If we have not heard from you, a meal will be
            chosen for you on the day.
          </p>
          <button
            onClick={onOpenRsvp}
            className="btn btn--fill"
            style={{ marginTop: '1.25rem' }}
          >
            Submit your menu choices
          </button>
        </div>
      </div>
    </section>
  );
}
