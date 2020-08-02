import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Autorenew } from '@material-ui/icons'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingImage = styled.div`
  width: 200px;
  clip-path: circle(200px at center);
  animation: ${rotate} 2s linear infinite;
`;

const Centralize = styled.div`
  display: flex;
  justify-content: center;
`;

function Loading({ loading }) {
  return (
    <>
      {loading && (
      <Centralize>
        <LoadingImage>
          <Autorenew size={90}/>
        </LoadingImage>
      </Centralize>
      )}
    </>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
