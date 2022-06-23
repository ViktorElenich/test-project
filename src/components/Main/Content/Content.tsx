import React, { useState } from 'react';
import Button from '../../../common/Button';
import data from '../../../data';
import styles from './Content.module.scss';
import { DataInterface } from "../../../interface/interface";

const allCategories = ['Show All', ...new Set(data.map(item => item.filter))];

const Content = () => {
  const { contentContainer, filterContainer, content, itemContainer, loadMore, fadeIn, active } = styles;
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

  const toggleItem = (event: React.MouseEvent) => {
    if (event.currentTarget.classList.contains(active)){
      event.currentTarget.classList.remove(active)
    } else {
      event.currentTarget.classList.add(active)
    }
  }

  return (
    <div className={contentContainer}>
      <div className={filterContainer}>
        <Button categories={buttons} filterData={filterData} />
      </div>
      <div className={content}>
        {cards.slice(0, visible.count).map((item: DataInterface) => (
          <div
            key={item.id}
            className={`${itemContainer} ${fadeIn}`} 
            onClick={(event) => toggleItem(event)}
            aria-hidden="true"
          >
            <img src={`images/${item.img}.png`} alt="img" />
            <span>{item.filter}</span>
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
      {visible.count < cards.length && 
        <button onClick={loadMoreItems} className={loadMore} type="button">Load More</button>
      }
    </div>
  )
}

export default Content