import styled from "styled-components";
import Link from 'next/link';
import Contact from '../component/Contact'

function Header(){
  return (
    <>
      <Container>
        <Logo> Binary </Logo>
        <List>
          <Lists>
            <LI><Link href="/">Home</Link></LI>
            {/* <LI>Service</LI> */}
            <LI><a href="#About">About Us </a></LI>
            <LI> <a href="#Contact">Contact Us</a></LI>
          </Lists>
        </List>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  height: 8vh;
  background-color: #e8e8e8;
  color: #778696;
  align-items: center;
  position: sticky;
  box-sizing: border-box;
  font-family: Livvic;

  @media (max-width: 768px) { 
  }
`;

const Logo = styled.h1`
  color: gray;
  margin-left: 3rem;
`;

const List = styled.div`
  position: relative;
  position: absolute;
  right: 0%;
`;

const Lists = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: right;
`;

const LI = styled.div`
  display: inline;
  font-size: 1.5rem;
  margin: 1.5rem;
  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem;
  }
`;
