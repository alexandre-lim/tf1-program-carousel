import { useQuery, gql } from "@apollo/client";
import addProgram from "../../../add-program.svg";

import "./Program.css";

const GET_IMAGE = gql`
  query GetImage($id: uuid!) {
    image_by_pk(id: $id) {
      url
      alt
    }
  }
`;

interface ImageApi {
  image_by_pk: {
    alt: string;
    url: string;
  };
}

interface ImageVariables {
  id: string;
}

interface ProgramProps {
  name: string;
  imageId: string;
}

export const Program = ({ name, imageId }: ProgramProps) => {
  const { loading, error, data } = useQuery<ImageApi, ImageVariables>(
    GET_IMAGE,
    {
      variables: { id: imageId },
    }
  );

  if (loading) return <p>Loading...</p>;
  // On error we shoud use logging system
  if (error) return <p>Error !</p>;

  return (
    <div className="container-program">
      <img
        className="program-image"
        alt={data?.image_by_pk.alt}
        src={data?.image_by_pk.url}
      />
      <div className="add-program">
        <img src={addProgram} alt="Add program" />
      </div>
      {/* <span>{name}</span> */}
      <span className="program-title">Title</span>
    </div>
  );
};
