import { useState } from "react";

import RestaurantMenuListItem from "./RestaurantMenuListItem";

import RestaurantSubCategory from "./ResturentSubCategory";

const RestaurantCategory = (props) => {
  const category = props.category;
  const expandHideCategoryParameter = props.expandHideCategoryParameter;
  const expandFunction = props.expandFunction;

  // const [showDetails, setShowDetails] = useState(false);
  // const [showSubCategory, setShowSubCategory] = useState(false);

  const shoHideDetailsMenu = () => {
    // setShowDetails(!showDetails);
    expandFunction();
  };

  // const showHideSubCategory = () => {
  //   setShowSubCategory(!showSubCategory);
  // };

  const [expandSubCategoryIndex, setExpandSubCategoryIndex] = useState(1);
  return (
    <div className="shadow-lg shadow-gray-400 mb-5">
      <div
        className="flex justify-between bg-gray-300 py-2 px-5 cursor-pointer"
        onClick={shoHideDetailsMenu}
      >
        <p className="font-semibold text-lg">
          {category.card.card.title}
          {category.card.card?.itemCards?.length
            ? " (" + category.card.card?.itemCards?.length + " )"
            : ""}
        </p>
        <p>⏬</p>
      </div>
      {expandHideCategoryParameter ? (
        <div>
          {category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div>
              {category.card.card.categories.map((subCategory, index) => {
                return (
                  <RestaurantSubCategory
                    expandSubCategoryParameter={
                      index === expandSubCategoryIndex ? true : false
                    }
                    expandFunction={() =>
                      setExpandSubCategoryIndex(
                        index === expandSubCategoryIndex ? null : index
                      )
                    }
                    subCategory={subCategory}
                  />
                );
              })}
            </div>
          ) : (
            category.card.card.itemCards.map((item) => {
              return (
                <RestaurantMenuListItem
                  key={item.card.info.id}
                  cardItems={item}
                />
              );
            })
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
