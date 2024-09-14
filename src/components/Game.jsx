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
		checkIsGameEnded({state,newField});
	}
}


const checkIsGameEnded = ({state,newField}) => {
		const {currentPlayer, setCurrentPlayer,
			isGameEnded, setIsGameEnded,
			isDraw, setIsDraw,
			field, setField} = state;

	for(let i=0; i<WIN_PATTERNS.length; i++){
		const [a, b, c] = WIN_PATTERNS[i];

		if (newField[a]!=='' && newField[a] === newField[b] && newField[a] === newField[c]) {
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

	return(

	<>
		 <GameLayout
			state={state}

			gameStart={gameStart}
			clickField={clickField}
			/>
	</>);
}


