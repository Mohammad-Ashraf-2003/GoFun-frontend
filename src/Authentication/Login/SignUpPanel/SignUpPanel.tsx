import styles from "./SignUpPanel.module.scss";

const SignUpPanel = () => {
  return (
    <aside className={styles.signupPanel} aria-labelledby="signupTitle">
      <div className={styles.signupHeart} aria-hidden="true">
        &hearts;
      </div>
      <h2 className={styles.signupTitle} id="signupTitle">
        New here?
      </h2>
      <p className={styles.signupDescription}>
        Create your account and get the most out of GoFun.
      </p>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>Save your trips</li>
        <li className={styles.benefitItem}>View your trip history</li>
        <li className={styles.benefitItem}>Get personalized recommendations</li>
        <li className={styles.benefitItem}>Share your feedback</li>
      </ul>
      <div className={styles.signupDecoration} aria-hidden="true">
        <span className={styles.signupDecorationLine} />
        <span className={styles.signupDecorationText}>
          More trips
          <br />
          More stories
        </span>
      </div>
    </aside>
  );
};

export default SignUpPanel;
