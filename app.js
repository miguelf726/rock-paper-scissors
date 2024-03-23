function getComputerChoice() {
    let computerChoice = Math.random() * 3
    console.log(computerChoice)
    if (computerChoice<=1) {
        computerChoice = "Rock"
    }
    else if (computerChoice>1 && computerChoice<=2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    console.log(computerChoice)
}

getComputerChoice()
 