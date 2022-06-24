import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  categories: string[];
  filterData: (value: string) => void;
}

const Button: FC<ButtonProps> = ({categories, filterData}) => {
  const { btn } = styles;
  
  return (
    <>
      {categories.map((cat, index) => <button 
          key={index}
          type='button' 
          className={btn}
          value={cat}
          onClick={(event) => filterData(event.currentTarget.value)}
          >{cat}</button>)}
    </>
  )
}

export default Button;
