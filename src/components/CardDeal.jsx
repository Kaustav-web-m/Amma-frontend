import { card } from "../assets";
import styles, { layout } from "../style";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Purchase our service under a pay-as-you-go model.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Engage with our service through a flexible pay-as-you-go model, providing you with the freedom to utilize what you need, when you need it, without any long-term commitments.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
