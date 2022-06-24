import React, { useState } from 'react';
import Button from '../../../common/Button/Button';
import data from '../../../data';
import styles from './Content.module.scss';
import { DataInterface } from "../../../interface/interface";
import Select from '../../../common/Select/Select';

const allCategories = ['Show All', ...new Set(data.map(item => item.filter))];

const Content = () => {
  const { contentContainer, filterContainer, content, itemContainer, loadMore, fadeIn } = styles;
  const [visible, setVisible] = useState({count: 9});
  const [cards, setCards] = useState(data);
  const [buttons] = useState(allCategories);

  const loadMoreItems = () => {
    setVisible({count: visible.count + 9})
  }

  const filterData = (value: string) => {
    if (value === 'Show All') {
      setCards(data)
      return;
    }
    const filteredData = data.filter(item => item.filter === value);
    setCards(filteredData);
  }

  const deleteItem = (event: React.KeyboardEvent<HTMLButtonElement>, id: number) => {
    if (event.key === 'Delete') {
      setCards(data.filter(item => item.id !== id));
    }
  }

  return (
    <div className={contentContainer}>
      <div className={filterContainer}>
        <Button categories={buttons} filterData={filterData} />
        <Select categories={buttons} filterData={filterData} />
      </div>
      <div className={content}>
        {cards.slice(0, visible.count).map((item: DataInterface) => (
          <button
            type="button"
            key={item.id}
            className={`${itemContainer} ${fadeIn}`} 
            onKeyDown={(event) => deleteItem(event, item.id)}
            aria-hidden="true"
          >
            <img src={`images/${item.img}.png`} alt="img" />
            <button 
              type="button" 
              onClick={(event) => filterData(event.currentTarget.value)}
              value={item.filter}
            >
              {item.filter}
            </button>
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
      {visible.count < cards.length && 
        <button onClick={loadMoreItems} className={loadMore} type="button">Load More</button>
      }
    </div>
  )
}

export default Content