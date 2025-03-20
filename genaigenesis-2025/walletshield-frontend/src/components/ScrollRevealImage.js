import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import "../styles.css";

const ScrollRevealImage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(50px)",
    config: { duration: 600 }
  });

  return (
    <animated.div ref={ref} style={fadeIn} className="scroll-reveal">
      <a
        href="https://www.researchgate.net/figure/Kernel-density-curve-of-fraud-score-on-Kaggle-Credit-Card-Fraud-Detection-Dataset_fig3_371583927"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://www.researchgate.net/publication/371583927/figure/fig3/AS:11431281168370629@1686961752429/Kernel-density-curve-of-fraud-score-on-Kaggle-Credit-Card-Fraud-Detection-Dataset.png"
          alt="Fraud Score Analysis"
          className="article-image"
        />
        
      </a>
      <h2 className="article-caption">
      Our AI models analyze your transaction data to identify patterns distinguishing normal activity from potential fraud. This graph shows how fraud transactions (blue) often stand out with higher risk scores compared to normal transactions (red). By flagging anomalies, we help users proactively secure their wallets.
      </h2>

    </animated.div>
  );
};

export default ScrollRevealImage;
