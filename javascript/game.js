function computerPlay()
{
    const sign = ["Rock", "Paper", "Scissors"];
    return sign[Math.floor(Math.random()*sign.length)];
}

function playRound(playerSelection, computerSelection)
{
    const player = playerSelection.toLowerCase().trim();
    const computer = computerSelection.toLowerCase().trim();
    if (player === "rock")
    {
        if (computer === "rock")
        {
            return 0; // draw
        }
        else if (computer === "scissors")
        {
            return 1; // win
        }
        else if (computer === "paper")
        {
            return 2; // lose
        }

    }
    else if (player === "paper")
    {
        if (computer === "paper")
        {
            return 0; // draw
        }
        else if (computer === "rock")
        {
            return 1; // win
        }
        else if (computer === "scissors")
        {
            return 2; // lose
        }
    }
    else if (player === "scissors")
    {
        if (computer === "scissors")
        {
            return 0; // draw
        }
        else if (computer === "paper")
        {
            return 1; // win
        }
        else if (computer === "rock")
        {
            return 2; // lose
        }
    }
    else
    {
        return 'Invalid input, choose only between {"rock", "paper", "scissors"}';
    }
}

function checkLargerScore(playerScore, computerScore) 
{
	if(playerScore > computerScore)
  {
  	return "WIN";
  }
  else if(playerScore < computerScore)
  {
  	return "LOST";
  }
  else
  {
  	return "DRAWN";
  }
}

function checkPlayerSelection(playerSigns)
{
    for (let i = 0; i < playerSigns.length; i++)
    {
        let sign = playerSigns[i].toLowerCase().trim();
        if (sign == "rock" || sign == "paper" || sign == "scissors")
        {
            return true; // normal
        }
        else
        {
            return false;
            break;
        }
    }
}

function game()
{
    let sign = prompt("Please enter your name:");

    let playerScore = 0;
    let computerScore = 0;
    //const playerSigns = ["rock", "paper", "scissors", "paper"]; // <-- change user signs here 
    const playerSigns = sign.split(', ');
    let checkIfValidSelections = checkPlayerSelection(playerSigns);
    if (playerSigns.length == 5 && checkIfValidSelections == true)
    {
        for (let i = 0; i < 5; i++)
        {            
            // 0=draw, 1=win, 2=lose
            let score = playRound(playerSigns[i], computerPlay());

            if (score == 1)
            {
                playerScore = playerScore+1;
            }
            else if (score == 2)
            {
                computerScore = computerScore+1;
            }
        }
        return "You " + checkLargerScore(playerScore, computerScore) + " \nPlayer score: " + playerScore + ". \nComputer score: " + computerScore + ".";
    }
    else
    {
        alert("wrong");
    }

}

console.log(game());