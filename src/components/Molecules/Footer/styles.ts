import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  footer {
    background-color: #595959;
  }
  .mais-info {
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    padding: 30px 0px;
  }
  .mais-info h1 {
    text-align: center;
    font-size: 20px;
    padding: 15px 0px;
    color: #ccc;
  }
  .mais-info svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 50px;
    width: 50px;
  }
  .mais-info p,
  .mais-info a {
    color: white;
    line-height: 1.5;
    text-decoration: none;
  }
  .redes {
    display: flex;
    justify-content: center;
  }
  .redes svg {
    height: 20px;
    width: 20px;
    color: white;
    margin: 0px 10px;
    cursor: pointer;
  }
  footer,
  h3 {
    font-size: 15px;
    color: #ccc;
    text-align: center;
    padding-bottom: 20px;
  }

  footer h3,
  .dev {
    font-size: 11px;
    text-align: center;
    padding-bottom: 20px;
  }
`
