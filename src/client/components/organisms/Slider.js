import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/lib/go';
import classNames from 'classnames';

import { sliderChangeActive } from '../../actions/actions';

import Button from '../atoms/Button/Button';

const mapStateToProps = state => ({
  activeItem: state.activeItem,
  lightboxOpen: state.lightboxShown,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onSliderChangeActive: activeImage => sliderChangeActive({ activeItem: activeImage }),
}, dispatch);

const withState = connect(mapStateToProps, mapDispatchToProps);

const mq = {
  desktop: '(min-width: 1025px)',
  tablet: '(min-width: 901px)',
};

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateWidth: 0,
      reachedEnd: false,
      translate: {},
    };

    this.setActiveItem = (activeImage) => {
      this.props.onSliderChangeActive(activeImage);
      this.setState({
        translate: this.setTranslation(activeImage),
      });
    };

    this.handlePrevClick = () => {
      const { activeItem } = this.props;
      let activeIndex = 0;
      if (activeItem > 0) {
        activeIndex = activeItem - 1;
      } else {
        activeIndex = this.props.items.length - 1;
      }
      this.setActiveItem(activeIndex);
    };

    this.handleNextClick = () => {
      const { activeItem } = this.props;
      let activeIndex = 0;
      if (activeItem < this.props.items.length - 1) {
        activeIndex = activeItem + 1;
      }
      this.setActiveItem(activeIndex);
    };

    this.getItemsInView = () => {
      let itemsInView = 1;
      if (window.matchMedia(mq.desktop).matches) {
        itemsInView = 4; // calculate translation based on how many items fit in view
      } else if (window.matchMedia(mq.tablet).matches) {
        itemsInView = 2;
      }
      return itemsInView;
    };

    this.calculateEnd = (activeImage) => {
      const count = this.props.items.length;
      const itemsInView = this.getItemsInView();
      return activeImage >= count - itemsInView;
    };

    this.setTranslation = (activeImage) => {
      let translateValue = 100; // 100%
      if (!this.props.lightboxOpen) {
        if (window.matchMedia(mq.desktop).matches) {
          translateValue = 100 / this.getItemsInView();
        }
      }
      const translateWidth = translateValue * activeImage;
      return {
        transform: `translateX(${translateWidth * -1}%)`,
      };
    };

    this.renderChildren = () => React.Children.map(this.props.children, (child) => {
      const newChild = React.cloneElement(child, {
        data: this.props,
      });
      return newChild;
    });
  }

  componentDidMount() {
    console.log(this.props.currentItem);
    this.setActiveItem(this.props.currentItem ? this.props.currentItem : 0);
  }

  componentWillReceiveProps(newProps) {
    const translate = this.setTranslation(newProps.activeItem);
    if (!this.calculateEnd(newProps.activeItem)) {
      this.setState({
        translate,
      });
    }
  }

  render() {
    return (
      <div className={classNames('slider-container', this.props.className)}>
        <Button
          type="button"
          text=""
          className="slider-button slider-prev-button"
          onClick={() => this.handlePrevClick()}
          disabled={this.props.activeItem === 0}
        >
          <GoTriangleLeft />
        </Button>
        <div className="slider-wrapper" style={this.state.translate}>
          {this.renderChildren()}
        </div>
        <Button
          type="button"
          text=""
          className="slider-button slider-next-button"
          onClick={() => this.handleNextClick()}
          disabled={this.calculateEnd(this.props.activeItem)}
        >
          <GoTriangleRight />
        </Button>
      </div>
    );
  }
}

export default withState(Slider);
