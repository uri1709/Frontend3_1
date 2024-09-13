import { useState } from 'react';
import styles from './app.module.css';
import { FieldLayout } from './FieldLayout';
import { InformationLayout } from './InformationLayout';

export const App = () => {
	// const currentPlayer = undefined;
	const [currentPlayer, setCurrentPlayer] = useState('0');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>«Крестики-Нолики»</h1>
			{/* <div>loren111</div> */}
			{/* <div className={styles['field-container']}>
				<div key="1" className={styles['field']}>
					<p>1</p>
				</div>
				<div key="2" className={styles['field']}>
					2
				</div>
				<div key="3" className={styles['field']}>
					3
				</div>
				<div key="4" className={styles['field']}>
					4
				</div>
				<div key="5" className={styles['field']}>
					5
				</div>
				<div key="6" className={styles['field']}>
					6
				</div>
				<div key="7" className={styles['field']}>
					7
				</div>
				<div key="8" className={styles['field']}>
					8
				</div>
				<div key="9" className={styles['field']}>
					9
				</div>
			</div> */}
			<button className={styles['button-start']}>Начать заново</button>
			{/* <div className={styles['information']}>Ход нолика</div> */}
			<InformationLayout
				currentPlayer={currentPlayer}
				isDraw={isDraw}
				isGameEnded={isGameEnded}
			/>
			{/* <div className={styles['field-container']}>
				<div className={styles.field}>0</div>
				<div className={styles.field}>X</div>
				<div className={styles.field}>0</div>
				<div className={styles.field}>X</div>
				<div className={styles.field}>0</div>
				<div className={styles.field}>X</div>
				<div className={styles.field}>0</div>
				<div className={styles.field}>X</div>
				<div className={styles.field}>0</div>
			</div> */}
			<FieldLayout
				fields={field}
				style={styles.field}
				onClick={(index) => console.log(index)}
			/>
		</div>
	);
};
