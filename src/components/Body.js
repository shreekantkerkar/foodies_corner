import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const RestaurantCardPromoted = withOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(data);

      const restaurants =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const filteredRes = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filteredRes);
  };

  
  const handleSearchClick = () => {
    const filteredRes = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(filteredRes);
  };

  const handleTopRatedClick = () => {
    const topRated = restaurantList.filter((res) => res.info.avgRating > 4.5);
    setFilteredList(topRated);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="m-4 p-4 font-[Poppins] italic">
          <input
            size={40}
            placeholder="Search for restaurants and food"
            type="text"
            className="border h-[40px] w-[440px] border-solid border-black font-bold px-3"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button
            className="px-4 py-2 rounded-lg bg-green-200 hover:bg-green-100 m-4 font-[Poppins] font-bold"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-200 rounded-lg hover:bg-green-100 font-[Poppins] font-bold"
            onClick={handleTopRatedClick}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {loading ? (
          <Shimmer /> 
        ) : (
          filteredList.map((restaurant) => (
            <Link
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
