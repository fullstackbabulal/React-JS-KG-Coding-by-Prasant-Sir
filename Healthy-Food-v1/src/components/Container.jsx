import styles from './Container.module.css';

let Container = ({children}) => (
<div className={styles.container}>
{children}
</div>
);

export default Container;