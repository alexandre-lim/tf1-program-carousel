import { useQuery, gql } from "@apollo/client";
import { Program } from "./Program";
import carouselLeft from "../../../carousel-left.svg";
import carouselRight from "../../../carousel-right.svg";

import "./ProgramCarousel.css";

const GET_PROGRAMS = gql`
  query GetPrograms {
    program(limit: 6) {
      id
      name
      image_id
    }
  }
`;

interface ProgramAPIData {
  program: ProgramAPI[];
}

interface ProgramAPI {
  id: string;
  name: string;
  image_id: string;
}

export const ProgramCarousel = () => {
  const { loading, error, data } = useQuery<ProgramAPIData>(GET_PROGRAMS);

  if (loading) return <p className="program-loading">Programs loading...</p>;
  // On error we shoud use logging system
  console.log(error);
  if (error) return <p>Error !</p>;

  return (
    <section className="container-program-carousel">
      <div className="program-carousel-arrow">
        <CarouselLeftArrow />
      </div>
      {data &&
        data.program.map((program: ProgramAPI) => (
          <Program
            key={program.id}
            name={program.name}
            imageId={program.image_id}
          />
        ))}
      <div className="program-carousel-arrow">
        <CarouselRightArrow />
      </div>
    </section>
  );
};

const CarouselLeftArrow = () => (
  <img src={carouselLeft} alt="See previous programs" />
);

const CarouselRightArrow = () => (
  <img src={carouselRight} alt="See next programs" />
);
