import React from 'react'
import ComponentB from './ComponentB';

function ComponentA() {
  return (
    <div className='border p-5'>
      <h1>Component</h1>
      <ComponentB /> 
    </div>
  );
}

export default ComponentA;