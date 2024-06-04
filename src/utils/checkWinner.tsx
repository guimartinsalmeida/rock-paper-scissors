export default function CheckWinner(player: string, machine: string){

  let winner = null
    // scissors cases
    if(player === 'scissors' && machine === 'paper'){
      return winner = 'player 1'
    }
    if(player === 'scissors' && machine === 'rock'){
      return winner = 'player 2'
    }
    if(player === 'scissors' && machine === 'scissors'){
      return winner = 'draw'
    }

  // paper cases
    if(player === 'paper' && machine === 'paper'){
      return winner = 'draw'
    }
    if(player === 'paper' && machine === 'rock'){
      return winner = 'player 1'
    }
    if(player === 'paper' && machine === 'scissors'){
      return winner = 'player 2'
    }

    // rock cases
    if(player === 'rock' && machine === 'rock'){
      return winner = 'draw'
    }
    if(player === 'rock' && machine === 'paper'){
      return winner = 'player 2'
    }
    if(player === 'rock' && machine === 'scissors'){
      return winner = 'player 1'
    }

    winner
}