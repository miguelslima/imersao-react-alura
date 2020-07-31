/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;

    &:before {
      opacity: 2.5;
      font-size: 32px;
      color: ${(props) => props.arrow};
    }
  }

  .slick-prev {
    left: 0px;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children, arrow }) => (
  <Container arrow={arrow}>
    <SlickSlider
      {...{
        dots: false,
        infinite: true,
        speed: 600,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        initialSlide: 1,
        accessibility: true,
        focusOnSelect: true,
      }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
