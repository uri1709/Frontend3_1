import styles from './informationLayout.module.css';
// export function InformationLayout({isDraw, isGameEnded, currentPlayer})  {
	export function InformationLayout({state})  {
		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField}=state;
	// if (isDraw) {
	// 	return (
	// 		<div className={styles.information}>{`Ничья`}</div>
	// 	)
	// } else if (isGameEnded) {
	// 	return (
	// 		<div className={styles.information}>{`Победа: ${currentPlayer}`}</div>
	// 	)
	// } else {
	// 	return (
	// 		<div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>
	// 	)
	// }

	return (
	<>
		{/* <div>FieldLayout</div> */}
		{/* <div className={styles.information}>{`isGameEnded=${isGameEnded} isDraw=${isDraw} currentPlayer=${currentPlayer}`}</div> */}
		{(isDraw ) && <div className={styles.information}>{`Ничья`}</div>}
		{(!isDraw && isGameEnded) && <div className={styles.information}>{`Победа: ${currentPlayer}`}</div>}
		{(!isDraw && !isGameEnded) && <div className={styles.information}>{`Ходит: ${currentPlayer}`}</div>}

	</>)
}
