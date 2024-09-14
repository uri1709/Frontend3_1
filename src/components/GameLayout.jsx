 import styles from './gameLayout.module.css';
 import { InformationLayout } from './InformationLayout';
 import { FieldLayout } from './FieldLayout';

 export const GameLayout = ({currentPlayer, setCurrentPlayer,
	isGameEnded,setIsGameEnded, isDraw, setIsDraw,   field, setField,
	gameStart, changeSetCurrentPlayer, clickField}) => {
// export const GameLayout = ({currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded,isDraw,setIsDraw,isDraw,field, setField,clickField,changeSetCurrentPlayer}) => {

	// console.log('GameLayout currentPlayer=',currentPlayer);
	// console.log('GameLayout field',field);
	// console.log('GameLayout setField',setField);
	// console.log('GameLayout index',index);

	return (
		<>
			<div>GameLayout</div>
			<div className={styles.container}>
				<h1 className={styles.header}>«Крестики-Нолики»</h1>
				<button className={styles['button-start']}
					onClick={() =>{gameStart({setCurrentPlayer, setIsGameEnded, setIsDraw, setField})}}
				>Начать заново
				</button>
				<InformationLayout
					currentPlayer={currentPlayer}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
				/>

				<FieldLayout
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
					isGameEnded={isGameEnded}
					setIsGameEnded = {setIsGameEnded}
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					field={field}
					setField={setField}

					clickField={clickField}
					changeSetCurrentPlayer={changeSetCurrentPlayer}
				/>
			</div>

		</>
	);
}

