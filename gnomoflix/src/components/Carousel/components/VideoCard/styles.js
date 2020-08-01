import styled from 'styled-components';

export const VideoCardContainer = styled.a`

  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 360px;
  height: 260px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: auto;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 0px;
  margin: 15px auto;

  transition: transform 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.06);
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    width: 320px;
    height: 220px;
  }
`;

  VideoCardContainer.Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #000000a3;
  ${VideoCardContainer}:hover &{
    opacity: 2;
  }
`;

  VideoCardContainer.Title.Text = styled.div`
  color: var(--white);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
