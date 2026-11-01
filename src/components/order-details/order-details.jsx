import graphics from '../assets/graphics/graphics.png';

import styles from './order-details.module.css';
function OrderDetails() {
  return (
    <div className={styles.details}>
      <p className="text text_type_digits-large">034536</p>
      <p className="text text_type_main-medium mt-1">идентификатор заказа</p>
      <img
        className={styles.image}
        src={graphics}
        alt="Три фиолетовых круга с белой галочкой в центре"
      />
      <p className="text text_type_main-small mt-1">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mt-1">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
