import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 32rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 23rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 18rem;
  }
`
