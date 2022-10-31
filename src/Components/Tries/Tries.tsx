import React from 'react';
import './Tries.css';

interface triesProps {
  name: string;
}

const Tries:React.FC<triesProps> = (props) => {
  return (
    <div className='tries'>
      {props.name}
    </div>
  );
};

export default Tries;