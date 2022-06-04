/**
 * To make a random computerised selection
 * 
 * @returns random selection from the constant array
 */
function computerPlay()
{
    const sign = ["Rock", "Paper", "Scissors"];
    return sign[Math.floor(Math.random()*sign.length)]; // use Math class to get a random element
}

/**
 * To check who wins on current round
 * 
 * @param {*} playerSelection 
 * @param {*} computerSelection 
 * @returns 
 */
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
        return 'Invalid input, choose only between {"rock", "paper", "scissors"}'; // internal validation
    }
}

/**
 * To check who had higher score between the player and the computer
 * 
 * @param {*} playerScore 
 * @param {*} computerScore 
 * @returns 
 */
function checkLargerScore(playerScore, computerScore) 
{
	if(playerScore > computerScore) // if user has higher score than computer
  {
  	return "WIN";
  }
  else if(playerScore < computerScore) // if computer has higher score than user
  {
  	return "LOST";
  }
  else // if draw
  {
  	return "DRAWN";
  }
}

/**
 * To validate the selection inputs from the user
 * Compare each element of the 5 selections against
 * the constans rock, paper, and scissors
 * 
 * @param {*} playerSigns 
 * @returns boolean true=correct input, false=wrong input
 */
function checkPlayerSelection(playerSigns)
{
    for (let i = 0; i < playerSigns.length; i++)
    {
        let sign = playerSigns[i].toLowerCase().trim();
        if (sign == "rock" || sign == "paper" || sign == "scissors")
        {
            return true; // correct selection input
        }
        else
        {
            return false; // wrong selection input
            break;
        }
    }
}

/**
 * To play the game 5 times
 * The function ignores the draws
 * 
 * @returns messages with reult information
 */
function game()
{
    let sign = prompt("Please replace each selection with either: rock, paper, scissors", "selection, selection, selection, selection, selection");
    let playerScore = 0;
    let computerScore = 0;
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
                playerScore = playerScore + 1; // score for player
            }
            else if (score == 2)
            {
                computerScore = computerScore + 1; // score for computer
            }
            else
            {
                i--; // if draw ignore this loop
            }
        }
        return "You " + checkLargerScore(playerScore, computerScore) + " \nPlayer score: " + playerScore + ". \nComputer score: " + computerScore + ".";
    }
    else
    {
        alert("Please replace each selection with either rock, paper, scissors"); // validation
        return "Game over"
    }
}

alert(game()); // start game