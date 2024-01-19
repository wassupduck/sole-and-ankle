import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShowCardWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShowCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const ShowCardWrapper = styled.div`
  flex: 1;
  min-width: 340px;
`;

export default ShoeGrid;
