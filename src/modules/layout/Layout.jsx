import React, { memo }  from "react";
import { Wrapper, GlobalStyles, Title } from "./styledComponents";

export const Layout = memo(() => {
    return (
      <Wrapper>
          <Title>
              Layout
          </Title>
          <GlobalStyles />
      </Wrapper>
    )
});


