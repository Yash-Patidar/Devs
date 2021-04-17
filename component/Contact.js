import styled from "styled-components";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";

function Contact() {
  return (
    <>
      <Head>Contact Us</Head>
      <Container>
        <Block>
          <form>
            <label for="name">Your Name</label>
            <Select
              type="text"
              id="name"
              name="Name"
              placeholder="Your Name.."
            />

            <label for="ename">Email</label>
            <Select
              type="text"
              id="ename"
              name="email"
              placeholder="Your Email..."
            />

            <label for="msg">Massage</label>
            <Select
              style={{ height: "10vw" }}
              type="text"
              id="msg"
              name="Msg"
              placeholder="Your Massage..."
            />

            <Submit value="Submit" />
          </form>
        </Block>

        <Block>
          <Head> Contact With Us</Head>
          <Logos>
            <Logo>
              <WhatsAppIcon
                style={{ width: "4rem", height: "4rem", color: "green" }}
              />
            </Logo>
            <Logo>
              <EmailIcon
                style={{ width: "4rem", height: "4rem", color: "red" }}
              />
            </Logo>
            <Logo>
              <CallIcon
                style={{ width: "4rem", height: "4rem", color: "blue" }}
              />
            </Logo>
          </Logos>
          <Subhead>
          Binary.in
          </Subhead>
        </Block>
      </Container>
    </>
  );
}

export default Contact;

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Block = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 40vw;
  border-radius: 20px;
  margin: 2rem;

  @media (max-width: 768px) {
    width:90vw;
  }
`;

const Submit = styled.input`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Select = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Head = styled.h3`
  color: #778696;
  font-size: 2rem;
  margin: 2rem;
  text-align: center;
  &:hover {
    color: red;
  }
`;

const Logo = styled.div`
  padding: 2rem;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
`;

const Subhead = styled(Head)`
  font-size: 1.6rem;
  &:hover {
    color:red;
  }
`;
