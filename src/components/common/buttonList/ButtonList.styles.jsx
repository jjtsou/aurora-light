import { styled } from '@material-ui/core/styles';
import styledComponent from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledButtonList = styledComponent.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)({
  margin: '11px',
});

export { StyledButtonList, StyledButton };
