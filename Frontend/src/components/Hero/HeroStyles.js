import styled from 'styled-components';
import Link from 'next/link';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;


export const ButtonLink = styled(Link)`
  color: white;
  display:flex;
  alignItems:center;
`
