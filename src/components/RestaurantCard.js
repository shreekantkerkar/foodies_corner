import { CDN_URL } from "../resources/constants"

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, cloudinaryImageId, costForTwo, areaName, avgRating } =
    resData?.info;

  const { slaString } = resData?.info?.sla;

  const displayedCuisines = cuisines.length > 2 
    ? `${cuisines.slice(0, 2).join(" , ")} . . .`
    : cuisines.join(" , ");

  return (
    <div className="m-4 p-4 w-[300px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200 ">
      <img
        className="rounded-lg h-[50%] w-[100%]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <h3 className="font-bold font-[Poppins] py-4 text-xl ">{name}</h3>
      <h4 className="font-bold font-[Poppins] text-lg ">
        ✳️{avgRating} stars - {slaString}
      </h4>
      <h4 className="font-bold font-[Poppins] text-gray-400">
        {displayedCuisines}
      </h4>
      <h4 className="font-bold font-[Poppins] text-gray-400">{costForTwo}</h4>
      <h4 className="font-bold font-[Poppins] text-gray-400">{areaName}</h4>
    </div>
  );
};

// Higher Order Component
// input -> RestaurantCard  => RestaurantCard with "Open Now" Label

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 rounded-md font-[Poppins]">
          Open Now
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
