const RestaurantShimmerPage = () => {
  const emptyDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-wrap mt-6">
      {emptyDetails.map((id) => {
        return (
          <div
            key={id}
            className="rest-container w-[280] mr-8 mb-8 rounded-2xl "
          >
            <div className="img-cont w-full h-[150] m-auto overflow-hidden rounded-2xl bg-gray-300"></div>
            <h3 className="font-semibold mt-4">&nbsp;</h3>
            <p>&nbsp;</p>
            <p className="">&nbsp;</p>
            <p className="">&nbsp;</p>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantShimmerPage;
