/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchD } from '../../redux/thunk/api';
import DoctorCard from './DoctorCard';

const Doctor = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchD());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center text-bold text-2xl font-bold m-5">Available Doctors:</h1>
      <div>
        <div className="card-holder">
          <DoctorCard doctor={doctor} />
        </div>
        <div className="button-class flex justify-between inset-y-0">

        </div>
      </div>
    </>
  );
};

export default Doctor;
