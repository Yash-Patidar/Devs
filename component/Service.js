import styled from "styled-components";

function Service() {
  return (
    <>
      <Container>
        <Header>Services</Header>
        <Subclass>
          <Subheader>Web Development</Subheader>
          <Subheader>App Development</Subheader>
          <Subheader>SEO</Subheader>
        </Subclass>
      </Container>
    </>
  );
}

export default Service;

const Container = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: #778696;
`;

const Subheader = styled.div`
  font-size: 3rem;
  text-align: center;
  color: #778696;
  margin-right:12rem;
`;

const Subclass = styled.div`
  display: flex;
  justify-content: center;
`;
