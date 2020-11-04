import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217 217">
      <polygon
        points="14 217 109 122 204 217 217 204 122 109 217 14 204 0 109 95 14 0 0 14 95 109 0 204 14 217"
        fillRule="evenodd"
      />
    </svg>
  </CloseIconWrapper>
);
