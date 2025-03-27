import styles from './Heading.module.css'; // Use relative path for importing the CSS module

let Heading = () => {
  return (
    <>
      <h1 className={styles.heading}>Healthy Food</h1> {/* Use the correct class name */}
    </>
  );
};

export default Heading;
