import React from 'react';
import styled from 'styled-components';

const HEIGHT = process.env.HEIGHT;

const Compo1 = () => {
  return (
    <div>
      Compo1
      <StyledCompo1 HEIGHT={HEIGHT} />
    </div>
  );
};

const StyledCompo1 = styled.div`
  background-color: aqua;
  width: 100px;
  height: ${({ HEIGHT }: { HEIGHT: string }) => HEIGHT};
`;

export default Compo1;
