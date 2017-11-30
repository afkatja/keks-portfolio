import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { sliderChangeActive } from '../../actions/actions';

import SliderUnit from '../molecules/SliderUnit/SliderUnit';

const mapStateToProps = state => ({
  activeItem: state.activeItem,
  lightboxOpen: state.lightboxShown,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSliderChangeActive: activeImage => sliderChangeActive({ activeItem: activeImage }),
}, dispatch);

const withState = connect(mapStateToProps, mapDispatchToProps);

const Gallery = props => (
  <ul className="gallery-container list-plain">
    {props.items.map((item, index) => (
      <li key={item.id}>
        <SliderUnit
          index={index}
          items={props.items}
          data={props}
          className="gallery-item"
          {...item}
        />
      </li>))}
  </ul>
);

export default withState(Gallery);
