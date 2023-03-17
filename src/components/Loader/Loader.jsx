import { BallTriangle } from 'react-loader-spinner';
import React from 'react';

export const Spinner = () => {
  return (
    <div>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3f51b5"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};
