import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 受控组件:在这种情况下，Board 组件完全控制了 Square 组件。
// class Square extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: null,
//         }
//     }
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => {
//                     // this.state.value = 'X' ??
//                     console.log(this.props)
//                     this.props.onClick()
//                 }}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

// 函数组件
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => {
                    this.handleClick(i)
                }}
            />
        )
    }

    handleClick(i) {
        console.log(this)
        this.normalFun()
        const squares = this.state.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({ squares, xIsNext: !this.state.xIsNext })
    }
    normalFun() {
        console.error(`-------------------normal-fun----------------------`)
    }
    render() {
        console.log(this)
        this.normalFun()
        const winner = calculateWinner(this.state.squares)
        let status
        if (winner) {
            status = 'winner:' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'))
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}
