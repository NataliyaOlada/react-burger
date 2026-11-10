import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import styles from './burger-ingredients-item.module.css';

function BurgerIngredientsItem({ item, onClick }) {
  const [count] = useState(0);

  return (
    <li className={styles.ingredient} onClick={(event) => onClick(event, item)}>
      <img className={styles.image} src={item.image} alt={item.name} />
      <div className={styles.price}>
        <span className="mr-2">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <span className={styles.name}>{item.name}</span>
      {count ? <Counter count={count} /> : undefined}
    </li>
  );
}

export default BurgerIngredientsItem;
