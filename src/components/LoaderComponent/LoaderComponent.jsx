import React from 'react';
import './LoaderComponent.scss';
import { quantum } from 'ldrs';

quantum.register()

const LoaderComponent = () => {
     return (
        <div className='loader'>
            <l-quantum
            size="100"
            speed="1.75"
            color="white" 
            ></l-quantum>
        </div>
  )
}
export default LoaderComponent