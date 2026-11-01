import BurgerIngredientsItem from '@components/burger-ingredients-item/burger-ingredients-item.jsx';

import styles from './burger-ingredients-list.module.css';

function BurgerIngredientsList({ group }) {
  return (
    <div className={styles.group}>
      <h2>{group.name}</h2>
      <ul className={styles.ingredients}>
        {group.ingredients.map((item) => (
          <BurgerIngredientsItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default BurgerIngredientsList;
