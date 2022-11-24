import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const AboutUs = styled.main`
  width: 100%;
  background-color: #ffffff;
  flex-flow: column wrap;
  padding-top: 40px;
  margin: 0 auto;

  p {
    font-size: 20px;
    color: #000000;
    text-align: justify;
    padding: 20px 50px 50px 50px;
  }
`

export const Title = styled.h1`
  color: #000000;
  font-size: 40px;
  text-align: center;
`
export const MakeTrip = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px;
  align-items: center;
  background: #ffffffff;

  form {
    margin-top: 20px;
    width: 100%;
    height: 100%;

    @media (min-width: 1024px) {
      width: 70%;
      height: 70%;
    }
  }
`
