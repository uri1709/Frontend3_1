// import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { useState } from 'react';

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
  ];


const gameStart = ({setCurrentPlayer, setIsGameEnded, setIsDraw, setField}) => {
	setCurrentPlayer('0');
	setIsGameEnded(false);
	setIsDraw(false);//ничья
	setField(['', '', '', '', '', '', '', '', '']);
}

const changeSetCurrentPlayer = ({currentPlayer,setCurrentPlayer}) => {
	if (currentPlayer === '0') {
		setCurrentPlayer('X');
	} else {
		setCurrentPlayer('0');
	}
}

// const clickField = (field, setField, index, currentPlayer,setCurrentPlayer,
// 	isDraw,setIsDraw,isGameEnded,setIsGameEnded) => {
// // const clickField = (currentPlayer, setCurrentPlayer, isGameEnded, setIsGameEnded,isDraw,setIsDraw,isDraw,field, setField,changeSetCurrentPlayer) => {
// 		if (isGameEnded) {
// 			return;
// 		}

// 	// console.log('click field currentPlayer=',currentPlayer);
// 	// console.log('click field field',field);
// 	// console.log('click field setField',setField);
// 	// console.log('click field index',index);
// 	// console.log('click field setIsGameEnded=',setIsGameEnded);
// 	if (field[index] === '') {
// 		const newField = [...field];
// 		newField[index] = currentPlayer;
// 		setField(newField);
// 		checkIsGameEnded({currentPlayer,setCurrentPlayer,setIsGameEnded,setIsDraw,newField});
// 		// changeSetCurrentPlayer({currentPlayer,setCurrentPlayer});
// 		// console.log('obj=',{currentPlayer,setCurrentPlayer,setIsGameEnded,setIsDraw,field, changeSetCurrentPlayer});
// 	}
// }
const clickField = (state, index) => {
	const {currentPlayer, setCurrentPlayer,
		isGameEnded, setIsGameEnded,
		isDraw, setIsDraw,
		field, setField} = state;

		if (isGameEnded) {
			return;
		}

	if (field[index] === '') {
		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		// checkIsGameEnded({currentPlayer,setCurrentPlayer,setIsGameEnded,setIsDraw,newField});
		checkIsGameEnded({state,newField});
	}
}


// const checkIsGameEnded = ({currentPlayer,setCurrentPlayer,setIsGameEnded,setIsDraw,newField}) => {
	const checkIsGameEnded = ({state,newField}) => {
		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField} = state;

	// console.log("Check is game ended currentPlayer=",currentPlayer);
	// console.log('Check is game ended setCurrentPlayer',setCurrentPlayer);
	// console.log('Check is game ended setIsGameEnded',setIsGameEnded);
	console.log('Check is game ended field=',field);
	console.log('Check is game ended newField=',newField);
	//  console.log('Check is game ended WIN_PATTERNS',WIN_PATTERNS);
	// console.log('checkIsGameEnded setIsGameEnded=',setIsGameEnded);
	// console.log('checkIsGameEnded setIsDraw=',setIsDraw);
	for(let i=0; i<WIN_PATTERNS.length; i++){
		const [a, b, c] = WIN_PATTERNS[i];

		if (newField[a]!=='' && newField[a] === newField[b] && newField[a] === newField[c]) {
			// if (Field[a]!=='' && Field[a] === Field[b] && Field[a] === Field[c]) {
				console.log('Игра окончена!!!',a, b, c, "победил:",currentPlayer);
			setIsGameEnded(true);
			return;
		}
	}

	if (!newField.includes('')) {
		setIsGameEnded(true);
		setIsDraw(true);
		console.log('Игра окончена!!!Ничья');
		return;
	}
	changeSetCurrentPlayer({currentPlayer,setCurrentPlayer});

}




export const Game = () => {

	const [currentPlayer, setCurrentPlayer] = useState('0');
	const [isGameEnded, setIsGameEnded] = useState(false);//игра окончена
	const [isDraw, setIsDraw] = useState(false);//ничья
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const state = {
		currentPlayer, setCurrentPlayer,
		isGameEnded, setIsGameEnded,
		isDraw, setIsDraw,
		field, setField,
	};
	// const gameStart = () => {
	// 	setCurrentPlayer('0');
	// 	setIsGameEnded(false);
	// 	setIsDraw(false);//ничья
	// 	setField(['', '', '', '', '', '', '', '', '']);
	// }

	// const changeSetCurrentPlayer = ({currentPlayer,setCurrentPlayer}) => {
	// 	if (currentPlayer === '0') {
	// 		setCurrentPlayer('X');
	// 	} else {
	// 		setCurrentPlayer('0');
	// 	}
	// }

	// const checkIsGameEnded = () => {
	// 	for(const i=0; i<WIN_PATTERNS.length; i++){
	// 		const [a, b, c] = WIN_PATTERNS[i];
	// 		if (field[a] && field[a] === field[b] && field[a] === field[c]) {
	// 			setIsGameEnded(true);
	// 			// setCurrentPlayer(field[a]);
	// 			setIsDraw(false);
	// 		} else{

	// 			if (field.includes('')) {
	// 				setIsGameEnded(false);
	// 				changeSetCurrentPlayer();
	// 				setIsDraw(false);
	// 			} else {
	// 				setIsGameEnded(true);
	// 				setIsDraw(true);
	// 			}
	// 		}
	// 	}
	// }

	// const clickField = (event) => {

	// 	console.log('event.target.id', event.target.id);
	// 	console.log('isGameEnded=', isGameEnded);
	// 	console.log('field=', field);
	// 	console.log('index', index);
	// 	console.log('currentPlayer', currentPlayer);
	// 	const index = Number(event.target.id) ;

	// 	if (field[index] === '') {
	// 		const newField = [...field];
	// 		newField[index] = currentPlayer;
	// 		setField(newField);
	// 		checkIsGameEnded();
	// 		// changeSetCurrentPlayer();
	// 	}
	// }

	return(

	<>
		<div>Game</div>
		 <GameLayout
		 	// currentPlayer={currentPlayer}
			// setCurrentPlayer={setCurrentPlayer}
			// isGameEnded={isGameEnded}
			// setIsGameEnded = {setIsGameEnded}
			// isDraw={isDraw}
			// setIsDraw={setIsDraw}
			// field={field}
			// setField={setField}
			state={state}

			gameStart={gameStart}
			// changeSetCurrentPlayer={changeSetCurrentPlayer}
			clickField={clickField}
			// checkIsGameEnded={checkIsGameEnded}
			/>
	</>);
}


