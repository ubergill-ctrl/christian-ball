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

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeGtchS3m07FFY9g629UVpxPQIN7-2UCUvLn5peJZr0nLY08A/viewform';

export default function Menu() {
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
            One form per guest, please, even if you have already written to
            us with choices. If you booked for a group, fill it in once for
            each person; you may do this on their behalf.
          </p>
          <p style={{ maxWidth: '52ch', marginInline: 'auto', marginTop: '0.75rem', color: 'var(--claret)', fontWeight: 500 }}>
            Deadline: Saturday 31 October. After that, choices go to the kitchen.
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--fill"
            style={{ marginTop: '1.25rem' }}
          >
            Submit your menu choices
          </a>
        </div>
      </div>
    </section>
  );
}
