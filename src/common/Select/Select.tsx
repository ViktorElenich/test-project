import React, { FC } from 'react';
import styles from './Select.module.scss';

interface SelectProps {
  categories: string[];
  filterData: (value: string) => void;
}

const Select: FC<SelectProps> = ({categories, filterData}) => {
  const { select } = styles;
    
  return (
    <select 
      className={select} 
      onChange={(event) => filterData(event.currentTarget.value)}
    >
      {
        categories.map((cat, index) => 
            <option key={index} value={cat}>
              {cat}
            </option>
        )
      }
    </select>
  )
}

export default Select;