import { styled } from '@material-ui/core/styles';
import styledComponent from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledPriceChart = styledComponent.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  min-height: 40vh;

  @media only screen and (min-width: 768px) {
    min-height: 50vh;
    width: 70vw;
  }

  @media only screen and (min-width: 1200px) {
    min-height: 70vh;
    width: 70vw;
  }
`;

const StyledChartButtonContainer = styledComponent.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledChartButton = styled(Button)({
  margin: '11px',
});

export { StyledPriceChart, StyledChartButtonContainer, StyledChartButton };
