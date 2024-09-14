import styles from './fieldLayout.module.css';

// export function FieldLayout({field, clickField, setField, currentPlayer,setCurrentPlayer,changeSetCurrentPlayer,isDraw,setIsDraw, setIsGameEnded}) {
export function FieldLayout({currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded,isDraw,setIsDraw,field, setField,clickField,changeSetCurrentPlayer}) {
		return (
		<>
			<div className={styles["field-container"]}>
				{field.map((item, index) => {
					return (
						<div
							id={index}
							key={index}
							className={styles.field}
							// onClick={clickField}
							onClick={() => {
								// console.log('field=', field);
								// console.log('setField=', setField);
								// console.log('index=', index);
								// console.log('currentPlayer=', currentPlayer);
								// console.log('setCurrentPlayer=', setCurrentPlayer);
								// console.log('changeSetCurrentPlayer=', changeSetCurrentPlayer);
								// console.log('field=', field);
								// console.log('setIsGameEnded=', setIsGameEnded);
								clickField(field, setField, index, currentPlayer,setCurrentPlayer,changeSetCurrentPlayer,isDraw,setIsDraw,setIsGameEnded)
								// clickField(currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded,isDraw,setIsDraw,isDraw,field, setField,changeSetCurrentPlayer);
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
