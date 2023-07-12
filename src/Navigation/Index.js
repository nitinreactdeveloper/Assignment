import React from 'react';
import {AuthProivder} from './AuthProvider';
import Route from './Route';
const Provider = () => {
  return (
    <AuthProivder>
      <Route />
    </AuthProivder>
  );
};
export default Provider;
