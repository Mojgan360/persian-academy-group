import React from "react";
import styled from "styled-components";
import image from "../../assets/images/img1.svg";

// const Container = styled.section`
//   width: 100vw;
//   display: flex;
//   background-color: var(--clr-primary-1);
//   h1 {
//     color: var(--clr-primary-2);
//     font-size: 2rem;
//     letter-spacing: 2px;
//   }
//   p {
//     color: var(--clr-primary-4);
//     letter-spacing: 2px;
//   }
//   .info {
//     padding: 25px;
//     flex: 1;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-end;
//     flex-direction: column;
//   }
//   .image {
//     flex: 1;
//     display: flex;

//     img {
//       width: 500px;
//       height: 500px;
//     }
//   }
// `;

const Container = styled.section`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: var(--clr-primary-1);
  h1 {
    color: var(--clr-primary-2);
    font-size: 2rem;
    letter-spacing: 2px;
  }
  p {
    color: var(--clr-primary-4);
    letter-spacing: 2px;
  }
  .info {
    margin: 0 30px;
    grid-column: span 5;
    place-self: center;
  }
  .image {
    margin: 0 30px;
    grid-column: 6 / span 7;
    place-self: center;
    img {
      width: 500px;
      height: 500px;
      object-fit: cover;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <div className="info">
        <h1>Education ....</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sed
          velit sapiente modi ab quos aliquid ratione dolores eveniet,
          blanditiis sit culpa!
        </p>
      </div>
      <div className="image">
        <img src={image} alt="education" />
      </div>
    </Container>
  );
};

export default Home;
