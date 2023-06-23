import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  square: any = []
  xIsNext = true
  winner = ''
  counter = 0
  isdraw = ''
  freshPage = true
  newGame() {
    this.square = Array(9).fill(null)
    this.winner = ''
    this.counter = 0
    this.isdraw = ''
    this.freshPage = false
  }
  get Player() {
    return this.xIsNext ? 'X' : 'O'
  }
  makeMove(idx: number) {
    if (!this.square[idx]) {
      this.square.splice(idx, 1, this.xIsNext)
      this.xIsNext = !this.xIsNext
      this.counter++
    }
    this.winner = this.calculateWinner()
    if (!this.winner && this.counter == 9) {
      this.isdraw = 'yes'
    }
  }
  calculateWinner() {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (this.square[a] && this.square[a] === this.square[b] && this.square[a] === this.square[c]) {
        return this.square[a];
      }
      return null
    }
  }
}
