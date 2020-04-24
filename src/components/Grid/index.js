import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const GridImage = styled.div`
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
  width: 100%;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
`;

const GridItemWrapper = styled.div`
  display: flex;
  :before {
    content: "";
    display: table;
    padding-top: 100%;
  }
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);