import { BallTriangle } from "react-loader-spinner";
import React from 'react';
import css from './Loader.module.css';

export const Spinner = () => {
  return (
    <div className={css.spinnerContainer}>
      <div className={css.spinner}>
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
    </div>
  );
}

