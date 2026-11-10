import styles from './ingredient-details.module.css';

function IngredientDetails({ currentIngredient }) {
  return (
    <div className={styles.item}>
      <img
        className={styles.image}
        src={currentIngredient.image_large}
        alt={currentIngredient.name}
      />
      <h3 className={styles.name}>{currentIngredient.name}</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient.calories}
          </p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient.proteins}
          </p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient.fat}
          </p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {currentIngredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
