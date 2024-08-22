import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div className="w-6/12 bg-gray-100 shadow-xl p-4 mx-auto my-4 hover:bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg font-[Poppins]">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
