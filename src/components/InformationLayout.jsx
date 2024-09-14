import styles from './informationLayout.module.css';
export function InformationLayout({state})  {
		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField}=state;

	return (
	<>
		{(isDraw ) && <div className={styles.information}>{`Ничья`}</div>}
		{(!isDraw && isGameEnded) && <div className={styles.information}>{`Победа: ${currentPlayer}`}</div>}
		{(!isDraw && !isGameEnded) && <div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>}
	</>)
}
