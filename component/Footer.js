import styled from "styled-components";

function Footer() {
  return (
    <>
      <Container>2021, Binary.in</Container>
    </>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: Livvic;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #778696;
  margin: 0.5rem;
`;
