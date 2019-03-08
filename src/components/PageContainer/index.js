import styled from 'styled-components'

const golden = 1.618033;
const marginLeftPercent = (1-(1/golden)) / (1 + golden)

const PageContainer = styled.div`
  margin-top: ${props => props.marginTop || '0px'};
  position: relative;
  margin-left: ${marginLeftPercent*100}%;
  width: ${(golden - 1)*100}%;
  overflow: auto;

  @media (max-width: 768px) {
    margin-left: 8px;
    width: calc(100% - 16px);
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: ${marginLeftPercent/2*100}%;
    width: calc(100% - ${marginLeftPercent*golden*100}%);
  }
`;

export default PageContainer;
