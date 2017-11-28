/* eslint-disable no-prototype-builtins */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { GoX } from 'react-icons/lib/go';

import { lightboxCloseClick, lightboxOpenClick } from '../../actions/actions';
import Image from '../molecules/Image/Image';
import LightboxImage from '../molecules/Image/LightboxImage';
import Slider from './Slider';

const KEYS = { ESC: 27 };

const mapStateToProps = (state, ownProps) => ({
  open: ownProps.hasOwnProperty('open') ? ownProps.open : state.lightboxShown,
  contentType: state.lightbox.contentType,
  data: state.lightbox.data,
  contentData: state.lightbox.contentData,
  currentItem: state.lightbox.currentItem,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  onCloseClick: lightboxCloseClick,
  onOpenClick: lightboxOpenClick,
}, dispatch);
const withState = connect(mapStateToProps, mapDispatchToProps);

const typeComponentMap = (props) => {
  const { contentData, data } = props;
  switch (props.contentType) {
    case 'image': return (
      <Image
        className="lightbox-image"
        src={data.src}
        descr={data.descr}
      />
    );
    case 'slider': return (
      <Slider items={contentData.items} currentItem={props.currentItem} className="lightbox-slider">
        {contentData.items.map((item, index) => (
          <LightboxImage
            index={index}
            key={`gallery-${item.id}`}
            src={item.imgSrc.full}
            {...item}
          />
        ))}
      </Slider>
    );
    default: return null;
  }
};

class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = ({ keyCode }) => (keyCode === KEYS.ESC) && this.props.onCloseClick();
    this.handleContainerClick = e => e.stopPropagation();
  }

  componentDidMount() { document.addEventListener('keydown', this.handleKeyPress); }
  componentWillUnmount() { document.removeEventListener('keydown', this.handleKeyPress); }

  render() {
    const { open, ...props } = this.props;
    console.log('lightbox open?', open);
    return open ? (
      <div className={classNames('lightbox-wrapper', { open })} onClick={this.props.onCloseClick} role="none">
        <div className="lightbox-container" onClick={this.handleContainerClick} role="presentation">
          {typeComponentMap(props)}
        </div>
        <button
          type="button"
          className="icon-button close-button"
          onClick={() => props.onCloseClick()}
        >
          <GoX />
        </button>
      </div>
    )
      : null;
  }
}

export default withState(Lightbox);
