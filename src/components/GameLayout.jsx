 import styles from './gameLayout.module.css';
 import { InformationLayout } from './InformationLayout';
 import { FieldLayout } from './FieldLayout';

export const GameLayout = ({state,
		gameStart,  clickField}) => {

		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField} = state;

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.header}>«Крестики-Нолики»</h1>
				<button className={styles['button-start']}
					onClick={() =>{
						gameStart({setCurrentPlayer, setIsGameEnded, setIsDraw, setField})
					}}
				>Начать заново
				</button>
				<InformationLayout
					state={state}
				/>

				<FieldLayout
					state={state}

					clickField={clickField}
				/>
			</div>

		</>
	);
}

