import { Tab } from '@krgaa/react-developer-burger-ui-components';

import BurgerIngredientsList from '@components/burger-ingredients-list/burger-ingredients-list.jsx';
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

  return (
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
          <BurgerIngredientsList key={group.id} group={group} />
        ))}
      </div>
    </section>
  );
};
