import styled from "styled-components";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

function Web() {
  return (
    <>
      <Container>
        <Headline>
          Web Design<Span> & Development</Span>
        </Headline>
        <Subhead>
          Every project begins with understanding the goal. We guide you through
          each step of our process while meeting deadlines and challenges set
          forth to accomplish these goals
        </Subhead>

        <Blocks>
          <Block>
            <Blockhead>GRAPHIC DESIGN</Blockhead>
            <Logo>
              <BorderColorIcon style={{ width: "4rem", height: "4rem" }} />
            </Logo>
            <Blocksub>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </Blocksub>
          </Block>

          <Block>
            <Blockhead>MARKETING</Blockhead>
            <Logo>
              <RecordVoiceOverIcon style={{ width: "4rem", height: "4rem" }} />
            </Logo>
            <Blocksub>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </Blocksub>
          </Block>
        </Blocks>

        <Blocks>
          <Block>
            <Blockhead>STRATEGY</Blockhead>
            <Logo>
              <TrendingUpIcon style={{ width: "4rem", height: "4rem" }} />
            </Logo>
            <Blocksub>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </Blocksub>
          </Block>

          <Block>
            <Blockhead>IDENTITY DESIGN</Blockhead>
            <Logo>
              <EmojiObjectsIcon style={{ width: "4rem", height: "4rem" }} />
            </Logo>
            <Blocksub>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident
            </Blocksub>
          </Block>
        </Blocks>
      </Container>
    </>
  );
}

export default Web;

const Container = styled.div`
  display: flex;
  background-color: #d8d8d8;
  align-items: center;
  display: block;
  font-family: Livvic;
  justify-content: center;
`;

const Headline = styled.h1`
  color: #ffa726;
  font-size: 5rem;
  font-family: Livvic;
  text-align: center;
  padding-top: 3rem;
`;

const Span = styled.span`
  color: #778696;
`;

const Subhead = styled.h3`
  color: #778696;
  text-align: center;
  position: relative;
  left: 25%;
  font-size: 2rem;
  width: 50vw;
  margin: 2rem;
  margin-bottom: 6rem;
  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    text-align: center;
    left: 20%;
    margin-bottom: 3rem;
  }
`;

const Blocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

const Block = styled.div`
  background-color: #ffa726;
  color: whitesmoke;
  width: 20vw;
  margin: 1rem;
  border-radius: 15%;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 3rem;
  }
`;

const Blockhead = styled.h1`
  font-family: Livvic;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
`;

const Blocksub = styled.h3`
  font-family: Livvic;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
`;

const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  left: 40%;
`;
