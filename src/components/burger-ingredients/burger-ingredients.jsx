import { Tab } from '@krgaa/react-developer-burger-ui-components';
import { useCallback, useState } from 'react';

import BurgerIngredientsList from '@components/burger-ingredients-list/burger-ingredients-list.jsx';
import { useModal } from '@components/hooks/useModal.js';
import IngredientDetails from '@components/ingredient-details/ingredient-details.jsx';
import Modal from '@components/modal/modal.jsx';
import { typeIngredients } from '@utils/type-ingredients.js';

import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ ingredients }) => {
  const groupsIngredients = typeIngredients.map((type) => {
    return {
      ...type,
      ingredients: ingredients.length
        ? ingredients?.filter((item) => item.type === type.type)
        : [],
    };
  });

  const [currentIngredient, setCurrentIngredient] = useState();

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleModalOpen = useCallback(
    (event, item) => {
      if (event.type === 'click') {
        setCurrentIngredient(item);
        openModal();
      }
    },
    [ingredients]
  );

  return (
    <>
      <section className={styles.burger_ingredients}>
        <nav>
          <ul className={styles.menu}>
            <Tab
              value="bun"
              active={true}
              onClick={() => {
                /* TODO */
              }}
            >
              Булки
            </Tab>
            <Tab
              value="main"
              active={false}
              onClick={() => {
                /* TODO */
              }}
            >
              Начинки
            </Tab>
            <Tab
              value="sauce"
              active={false}
              onClick={() => {
                /* TODO */
              }}
            >
              Соусы
            </Tab>
          </ul>
        </nav>
        <div className={styles.ingredients}>
          {groupsIngredients.map((group) => (
            <BurgerIngredientsList
              key={group.id}
              group={group}
              onClick={handleModalOpen}
            />
          ))}
        </div>
      </section>
      {isModalOpen && (
        <Modal title="Детали ингредиента" showModal={isModalOpen} onClose={closeModal}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </>
  );
};
