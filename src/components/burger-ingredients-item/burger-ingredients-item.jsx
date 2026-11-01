import { CurrencyIcon, Counter } from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import IngredientDetails from '@components/ingredient-details/ingredient-details.jsx';
import Modal from '@components/modal/modal.jsx';

import styles from './burger-ingredients-item.module.css';

function BurgerIngredientsItem({ item }) {
  const [count] = useState(0);

  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }

  return (
    <>
      <li className={styles.ingredient} onClick={handleClick}>
        <img className={styles.image} src={item.image} alt={item.name} />
        <div className={styles.price}>
          <span className="mr-2">{item.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <span className={styles.name}>{item.name}</span>
        {count ? <Counter count={count} /> : undefined}
      </li>
      {showModal && (
        <Modal title="Детали ингредиента" showModal={showModal} onClose={handleClick}>
          <IngredientDetails item={item} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredientsItem;
