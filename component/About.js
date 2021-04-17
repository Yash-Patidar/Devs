import styled from "styled-components";
import Image from "next/image";

function About() {
  return (
    <>
      <Container>
        <Head>About Us</Head>
        <Subhead>
          Our website developers provide expert web application development and
          web design services to our clients. Binary offers a variety of website
          design and development services, from creating mobile web development
          solutions and responsive website designs, to building custom
          e-commerce and experiences using the latest web technologies.
        </Subhead>

        <Head>Portfolio</Head>

        <Blocks>
          <Block>
            <Subhead>LoOk.in</Subhead>
            <Image src="/images/looks.png" width="300vw" height="220vh" />
          </Block>
        </Blocks>
      </Container>
    </>
  );
}

export default About;

const Container = styled.div`
  display: flex;
  background-color: #d8d8d8;
  font-family: Livvic;
  flex-direction: column;
  justify-content: center;
`;

const Head = styled.h1`
  color: #778696;
  font-size: 2rem;
  text-align: center;
  &:hover {
    color: red;
  }
`;

const Subhead = styled(Head)`
  color: gray;
`;

const Blocks = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
`;

const Block = styled.div`
  background-color: #ffa726;
  color: whitesmoke;
  width: 30vw;
  height: 35vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80vw;
    height: 20vh;
    margin-bottom: 3rem;
  }
`;

const Tagimg = styled.div``;
