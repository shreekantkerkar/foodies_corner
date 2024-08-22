import { CDN_URL } from "../resources/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../resources/cartSlice"

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    //Dispatch an addItem action which is in cardSlice.js
    //whatever we add in this addItem(this will go to reducer function as action.payload)
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between "
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
            </div>
            <span className="font-bold">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-gray-400">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-.4">
            <div className="absolute text-white ">
              <button
                className="p-2 mx-16 bg-black shadow-lg m-auto rounded-lg hover:bg-black-50"
                onClick={() => handleAdditem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-md "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
