import React from 'react';

import Slider from '../components/organisms/Slider';
import SliderUnit from '../components/molecules/SliderUnit/SliderUnit';

const items = [
  {
    id: 'item0',
    itemType: 'post',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'first slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
    meta: {
      authors: ['Katja Hollaar'],
      publishDate: '23-10-2017',
      categories: ['category'],
      tags: ['tag'],
    },
  },
  {
    id: 'item1',
    itemType: 'page',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'second slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
  },
  {
    id: 'item2',
    itemType: 'event',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'third slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
    start: {
      day: 1,
      month: 6,
    },
    end: {
      day: 8,
      month: 12,
    },
    meta: {
      categories: ['category'],
      location: 'Voorhaven 31, Rotterdam',
    },
  },
  {
    id: 'item3',
    itemType: 'job',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'fourth slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
    meta: {
      categories: ['category'],
      location: 'Foxes HQ, The Hague',
    },
  },
  {
    id: 'item4',
    itemType: 'recipe',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'fifth slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
    meta: {
      categories: ['category'],
      tags: ['tofu', 'shmofu'],
    },
  },
  {
    id: 'item5',
    itemType: 'custom',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'sixth slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
  },
  {
    id: 'item6',
    itemType: 'recipe',
    imgSrc: {
      thumb: 'https://picsum.photos/1600/900/?random',
      full: 'https://picsum.photos/1600/900/?random',
    },
    caption: 'fifth slider item',
    summary: 'Red foxes are solitary hunters who feed on rodents, rabbits, birds, and other small game—but their diet can be as flexible as their home habitat.',
    meta: {
      categories: ['category'],
      tags: ['tofu', 'shmofu'],
    },
  },
];

export default function Portfilio(props) {
  return (
    <div>
      <header className="page-header">
        <h1>Portfolio</h1>
      </header>
      <div className="page-container">
        <div className="fc-item-slider-container">
          <Slider items={items} {...props}>
            {items.map((item, index) => (
              <SliderUnit
                key={`gallery-${item.id}`}
                index={index}
                items={items}
                {...item}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
