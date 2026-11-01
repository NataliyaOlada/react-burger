import styles from './ingredient-details.module.css';

function IngredientDetails({ item }) {
  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image_large} alt={item.name} />
      <h3 className={styles.name}>{item.name}</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">
            Калории, ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {item.calories}
          </p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {item.proteins}
          </p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">{item.fat}</p>
        </li>
        <li className={styles.listItem}>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">
            {item.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
