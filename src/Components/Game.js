import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import '../Style/style.scss';
import _ from 'lodash';
import { compare, win, touchVibe } from '../Misc/utils'


const Game = () => {
    // eslint-disable-next-line
    const [password, setPassword] = useState(_.sampleSize([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4))
    const [num, setNum] = useState([0, 0, 0, 0]);
    const [leds, setLeds] = useState([0, 0, 0, 0]);
    const [attempt, setAttempt] = useState(9);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);
    const [guesses, setGuesses] = useState([{ num: '----', leds: null }, { num: '----', leds: null }, { num: '----', leds: null }, { num: '----', leds: null }]);
    const [showGuess, setShowGuess] = useState(true);

    useEffect(() => {
        console.log('ENTROU GAME', password);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        console.log('GAME OVER');
        if (gameOver && winner)
            setAttempt(attempt - 1)
        // eslint-disable-next-line
    }, [gameOver]);

    const verifyNumber = () => {
        touchVibe(80);
        if (!gameOver) {
            setLeds(compare(password, num))
            const winFlag = win(compare(password, num));
            setWinner(winFlag);

            if (!winFlag && attempt > 0) {
                setAttempt(attempt - 1)
            }

            if (attempt === 1) {
                setGameOver(true);
            }

            if (winFlag) {
                setGameOver(true);
            }
            const guess = { num: num.join('').toString(), leds: compare(password, num) }
            setGuesses([guess, ...guesses])
        } else {
            console.log('GAME OVER (VERIFY)');
        }



    }

    const upNumber = i => {
        touchVibe();
        if (!gameOver) {
            const nAux = [...num]
            if (nAux[i] < 9)
                nAux[i]++;
            else
                nAux[i] = 0;

            setNum(nAux)
        }

    }

    const downNumber = i => {
        touchVibe();
        if (!gameOver) {
            const nAux = [...num]
            if (nAux[i] > 0)
                nAux[i]--;
            else
                nAux[i] = 9;

            setNum(nAux)
        }

    }

    const colorDisplay = gameOver ? winner ? 'winner' : 'loser' : ''
    return (
        <div className='body-game'>
            <div className='header'>
                <Link to='/' onClick={() => touchVibe()}><button type="button" className="nes-btn is-small">{'< BACK'}</button></Link>
                <div className='attempts'>
                    <span className='attempt-number'>{attempt}/9</span>
                </div>
            </div>
            <div className={`game-stage ${!gameOver && 'space-stage'}`}>


                {!gameOver && <div className='gui-row'>
                    <div className='gui'>
                        <div className='leds-group'>
                            {leds.map((el, i) =>
                                <Led key={i} type={el} />
                            )}
                        </div>

                    </div>
                    <div className='guesses nes-pointer' onClick={() => { touchVibe(); setShowGuess(!showGuess); }} >
                        <span>GUESSES</span>

                        {guesses.slice(0, 4).map(g => <span>{showGuess ? <span className='group-guess-led'>{g.num}<div className='mini-leds-group'>
                            {g.leds && g.leds.map((el, i) =>
                                <MiniLed key={i} type={el} />
                            )}
                        </div></span> : <span>x x x x</span>}</span>)}


                    </div>
                </div>}
                {gameOver && (winner ? <span className='your-text'>YOU WIN</span> : <span className='your-text'>YOURS:</span>)}
                <div className='display'>

                    {num.map((n, i) =>
                        <div className='number-group' key={i}>
                            {!gameOver && <button className={`nes-btn ${gameOver ? 'opacity' : ''}`} onClick={() => upNumber(i)} ><i className="nes-icon caret-up"></i></button>}
                            <span className={`number ${colorDisplay}`}>{n}</span>
                            {!gameOver && <button className={`nes-btn ${gameOver ? 'opacity' : ''}`} onClick={() => downNumber(i)}><i className="nes-icon caret-down"></i></button>}
                        </div>)}
                </div>
                {!gameOver && <button className='nes-btn verify' onClick={verifyNumber}>G U E S S</button>}
                {gameOver && <Final win={winner} password={password} />}


            </div>

        </div>
    )
}

const Led = ({ type }) => {
    switch (type) {
        case 0:
            return <div className="led"></div>
        case 1:
            return <div className="led semi"></div>
        case 2:
            return <div className="led right"></div>
        default:
            return <div className="led"></div>

    }
}

const MiniLed = ({ type }) => {
    switch (type) {
        case 0:
            return <div className="mini-led"></div>
        case 1:
            return <div className="mini-led semi"></div>
        case 2:
            return <div className="mini-led right"></div>
        default:
            return <div className="mini-led"></div>

    }
}

const Final = ({ win, password }) => {
    if (!win) {
        return <div className='gui'>
            <span className='color-loser'>PASSWORD:</span>
            <div className='group-password'>{password.map((p, i) => <span key={i} className='lost-password'>{p}</span>)}</div>
        </div >
    } else {
        return null;
    }

}

export default Game