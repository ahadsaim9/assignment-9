import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const pramsID = useParams();
  const dataLoade = useLoaderData();

  const findData = dataLoade.find((td) => td.id == pramsID.id);
  const { name, img, Category, Overview, id } = findData;
  //    console.log(findData);

  const handlApply = (id) => {
    addToDb(id);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl md:px-20">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-titlem text-3xl text-red-700">{Category}</h2>
        <p className="text-justify">{Overview}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default JobDetails;
