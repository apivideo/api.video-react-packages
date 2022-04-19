import styled from 'styled-components'

export const GlobalContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 40px;
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
  }
`

export const DisplayContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  box-shadow: rgb(11 15 23 / 5%) 0px 1px 10px 0px, rgb(11 15 23 / 10%) 0px 1px 3px 0px;
  border-radius: 5px;
  h3 {
    font-size: 20px;
    font-weight: 500;
  }
`
