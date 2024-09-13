import styles from './informationLayout.module.css';
export function InformationLayout({isDraw, isGameEnded, currentPlayer})  {

	if (isDraw) {
		return (
			<div className={styles.information}>{`Ничья`}</div>
		)
	} else if (isGameEnded) {
		return (
			<div className={styles.information}>{`Победа: ${currentPlayer}`}</div>
		)
	} else {
		return (
			<div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>
		)
	}

}
