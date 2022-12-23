import React from 'react';
// import PropagateLoader from 'react-spinners/PropagateLoader';
import images from '../../images/workout-gym.gif';
function loading() {
  return (
    <div>
      <div className="loader">
        <div className="row">
          <img src={images} alt="Sorry netwok error" />
        </div>

        {/* <PropagateLoader
          color={'#ED533B'}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </div>
      {/* <div className="row">
        <h3>Plase Wait...</h3>
      </div> */}
    </div>
  );
}

export default loading;
