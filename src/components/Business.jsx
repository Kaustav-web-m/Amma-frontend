
import { features } from "../constants";
import styles, { layout } from "../style";
import Button1 from "./Button1";
import Button2 from "./Button2";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the 
        <span className="font-bold font-poppins xs:text-[60px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          ISSUE.
        </span>
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
      Clients benefit from AMMA's proactive approach, 
      as it swiftly identifies and addresses issues, 
      ensuring timely resolution and minimizing disruptions 
      to their operations. With automated alerts and ticket creation, 
      clients can rest assured that their concerns are promptly acknowledged 
      and acted upon, leading to improved satisfaction and smoother business operations.
      </p>
      <div>
        <Button1 styles={`mt-10 mr-10`} />
        <Button2 styles={`mt-10`} />
      </div>
      
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
