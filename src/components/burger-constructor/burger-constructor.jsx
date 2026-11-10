import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@krgaa/react-developer-burger-ui-components';
import { useState } from 'react';

import { useModal } from '@components/hooks/useModal.js';
import Modal from '@components/modal/modal.jsx';
import OrderDetails from '@components/order-details/order-details.jsx';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = ({ ingredients }) => {
  const [totalPrice] = useState(0);

  const filteredIngredients = Array.isArray(ingredients)
    ? ingredients.filter((item) => item.type !== 'bun')
    : [];

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className={styles.burger_constructor}>
      {ingredients.length && (
        <ConstructorElement
          extraClass={styles.itemTopBottom}
          price={ingredients[0].price}
          text={ingredients[0].name + ' (верх)'}
          thumbnail={ingredients[0].image}
          type="top"
          isLocked={true}
        />
      )}
      <div className={styles.components}>
        {filteredIngredients.map((item) => (
          <div className={styles.item} key={`item-${item._id}`}>
            <DragIcon type="primary" key={`icon-${item._id}`} />
            <ConstructorElement
              key={item._id}
              price={item.price}
              text={item.name}
              thumbnail={item.image}
            />
          </div>
        ))}
      </div>
      {ingredients.length && (
        <ConstructorElement
          extraClass={styles.itemTopBottom}
          price={ingredients[0].price}
          text={ingredients[0].name + ' (низ)'}
          thumbnail={ingredients[0].image}
          type="bottom"
          isLocked={true}
        />
      )}
      <div className={styles.total}>
        <div className={styles.price}>
          <span>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={openModal}>
          Оформить заказ
        </Button>
        {isModalOpen && (
          <Modal showModal={isModalOpen} onClose={closeModal}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
};
