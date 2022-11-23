import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    padding: 0 0 4px 8px;
    font-weight: 600;
    font-size: 13px;
    line-height: 150%;
    color: #000000;
  }

  input {
    height: 38px;
    width: 100%;
    padding: 14px 12px;
    border-radius: 4px;
    border: 1px solid #ced4da;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;

    &:hover::placeholder {
      color: #919eab;
    }

    &:hover {
      border-color: #000000;
    }

    &::placeholder {
      color: #c4cdd5;
    }

    &:focus {
      border: 1px solid #000000;
    }

    &:disabled {
      background-color: #dcd4d4;
    }
  }

  div {
    color: #fcfaf6;
    margin: 5px 0 0 5px;
  }
`
