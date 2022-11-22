import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const AboutUs = styled.main`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  flex-flow: column wrap;
  padding-top: 40px;
  margin: 0 auto;
  h1 {
    color: #000000;
    font-size: 40px;
    text-align: center;
  }
  p {
    font-size: 20px;
    color: #000000;
    text-align: justify;
    padding: 20px 50px 50px 50px;
  }
`
export const MakeTrip = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .div-form {
    background: #eaeaea;
    padding: 40px;
    width: 500px;
    height: 500px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.575);
  }
`
