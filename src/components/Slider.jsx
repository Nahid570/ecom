import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import styled from "styled-components";
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
  display: flex;
  overflow: hidden;
`;
const Arraow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.5;
  z-index: 2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 50px;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 5;
  letter-spacing: 3px;
  margin: 50px 0px;
`;
const Button = styled.button`
  padding: 10px;
  border: 2px solid lightgray;
  outline: none;
  background-color: teal;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSldeClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arraow direction="left" onClick={() => handleSldeClick("left")}>
        <ArrowBackIosOutlinedIcon />
      </Arraow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slideItem) => (
          <Slide key={slideItem.id} bg={slideItem.bg}>
            <ImageContainer>
              <Image src={slideItem.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{slideItem.title}</Title>
              <Desc>{slideItem.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arraow direction="right" onClick={() => handleSldeClick("right")}>
        <ArrowForwardIosOutlinedIcon />
      </Arraow>
    </Container>
  );
};

export default Slider;
