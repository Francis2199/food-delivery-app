const RestaurantShimmerPage = () => {
  const emptyDetails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='main'>
      <div className='main-cont'>
        <div className='rest-list-cont'>
          {emptyDetails.map(() => {
            return (
              <div className='rest-container'>
                <div className='img-cont'>
                  <div className='img bg-gray'></div>
                </div>
                <h3></h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantShimmerPage;
