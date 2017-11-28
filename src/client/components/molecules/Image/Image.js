import React from 'react';

/**
 * Image - a generic image component, containing an image and a caption
 *
 * @param  {Object} props
 * @return {React Component}
 */
export default function Image(props) {
  return (
    <figure className={props.className}>
      {props.imgSize ?
        <img
          src={props.src}
          alt={props.descr}
          srcSet={`
            ${props.src}&w=${props.imgSize.small} ${props.imgSize.small}w,
            ${props.src}&w=${props.imgSize.medium} ${props.imgSize.medium}w,
            ${props.src}&w=${props.imgSize.large} ${props.imgSize.large}w
          `}
          sizes={`
            (max-width: 600px) 100vw,
            ${props.imgSize.large}px
          `}
        /> :
        <img
          src={props.src}
          alt={props.descr}
        />
      }
      {props.descr ? <figcaption className="image-caption">{props.descr}</figcaption> : null}
      {props.children}
    </figure>
  );
}
