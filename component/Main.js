import styled from "styled-components";
import Image from "next/image";

function Main() {
  return (
    <>
      <Container>
        <Tags>
          <Tag>
            <Tagline1>
              We create ideas that speak, inspire and innovate Creative
            </Tagline1>
          </Tag>
          <Tagimg>
            <Image src="/images/min.jpg" width="400%" height="50%" />
          </Tagimg>
        </Tags>
      </Container>
    </>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: column;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem;
    height: 40vh;
  }
`;
const Tags = styled.div`
  display: flex;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width:90%; 
  }
`;

const Tag = styled.div`
  width: 30vw;
  height: 55vh;
  background-color: #ffa726;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    width:70%;
    height: 35vh;
  }
`;

const Tagimg = styled.div`
  width: 30vw;
  height: 55vh;
  display: flex;

  @media (max-width: 768px) {
    width:80%;
    font-size: 1.2rem;
    height: 35vh;
  }
`;

const Tagline1 = styled.h3`
  color: #d8d8d8;
  font-size: 3rem;
  text-align: center;
  margin-top: 6rem;
  font-family: Livvic;
  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    margin-top: 4rem;
    margin: 1rem;
  }
`;
