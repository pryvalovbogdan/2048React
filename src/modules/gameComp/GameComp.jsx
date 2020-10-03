import React, { memo }  from "react";
import { Wrapper, GlobalStyles, Title, CustomCell, CustomRow } from "./styledComponents";
import useGameHook from "./useGameHook";
import { getColor } from "./logic";

export const GameComp = memo(() => {
  const { initialNumbers } = useGameHook();

    return (
      <Wrapper>
        <Wrapper.Component>
          <Title>2048</Title>
        </Wrapper.Component>
        <Wrapper.Component>
          {initialNumbers.map((row, i) => <CustomRow key={i}>
              {row.map((number) =>
                <CustomCell background={getColor(number)}>{number !== 0 ? number : ''}</CustomCell>)
              }
            </CustomRow>
          )}
        </Wrapper.Component>
        <GlobalStyles />
      </Wrapper>
    )
});


