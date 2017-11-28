import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { lightboxOpenClick } from '../../../actions/actions';

import Image from '../Image/Image';

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
  onClickOpen: () => lightboxOpenClick({
    contentType: 'slider',
    contentData: {
      items: ownProps.items,
    },
    data: ownProps.data,
    currentItem: ownProps.index,
  }),
}, dispatch);
const withState = connect(state => ({ open: state.lightboxShown }), mapDispatchToProps);

function FCSliderUnit(props) {
  const openLightbox = (e) => {
    e.preventDefault();
    props.onClickOpen();
  };
  console.log(props.index, props.index === props.data.activeItem);

  return (
    <a
      href={props.imgSrc.full}
      className={classNames('slider-unit', { active: props.index === props.data.activeItem })}
      onClick={e => openLightbox(e)}
    >
      <Image className="slider-image-container" src={props.imgSrc.thumb} descr="slider item" />
    </a>
  );
}

export default withState(FCSliderUnit);
