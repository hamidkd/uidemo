import React from 'react';
import styled from 'styled-components';
import DemoContent from './DemoContent';

export default function DemoPage ({children, className}) {

return (
    <DemoePageWrapper className={className}>
      <DemoContent />
    </DemoePageWrapper>
)};
const DemoePageWrapper = styled.div`
background-color: var(--default-background-color  );

&.dark {
    --default-background-color: #333;
    --default-text-color: white;
    outline: 5px solid red;
    
}

`