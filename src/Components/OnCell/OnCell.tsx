import React from 'react';
import './OneCell.css';

interface OnCellTypes {
  clickBlock: React.MouseEventHandler;
  className: string;
}

const OnCell:React.FC<OnCellTypes> = (props) => {


  return (
    <div className={props.className} onClick={props.clickBlock}>

    </div>
  );
};

export default OnCell;