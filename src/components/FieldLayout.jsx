import styles from './fieldLayout.module.css';

export function FieldLayout({state,clickField}) {
		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField} = state;

		return (
		<>
			<div className={styles["field-container"]}>
				{field.map((item, index) => {
					return (
						<div
							id={index}
							key={index}
							className={styles.field}
							onClick={() => {
								clickField(state, index)
							}}
						>
							{item}
						</div>
					)
				})}
			</div>
		</>
	);
}
