import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement