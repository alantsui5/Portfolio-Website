import styled from 'styled-components';
import Button from '../../styles/GlobalComponents/Button';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const CallForAction = styled(Button)`
  @media ${(props) => props.theme.breakpoints.md} {
    width:90%;
  }
`