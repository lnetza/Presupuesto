import React from 'react';

//Prop {mensaje}
const Error =({mensaje}) => (
<p className="alert alert-danger error">{mensaje}</p>
);

export default Error;