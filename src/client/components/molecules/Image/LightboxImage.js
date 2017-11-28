import React from 'react';
import classNames from 'classnames';

import Image from './Image';

export default ({ index, data, className, caption, ...props }) => (
  <Image
    className={classNames(className, 'lightbox-slider-image', { active: index === data.activeItem })}
    descr={caption}
    {...props}
  />
);
