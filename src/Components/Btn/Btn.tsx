import React from 'react';
import './Btn.css';

interface BtnProps {
  button: React.MouseEventHandler;
  name: string;
}

const Btn:React.FC<BtnProps> = (props) => {
  return (
    <div>
      <button onClick={props.button}>{props.name}</button>
    </div>
  );
};

export default Btn;