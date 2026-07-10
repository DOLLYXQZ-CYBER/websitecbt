function playGame(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "🎉 You Win!";
    } else {
        result = "💻 Computer Wins!";
    }

    document.getElementById("result").textContent = result;

    document.getElementById("computerChoice").textContent =
        "Computer chose: " + computerChoice;
}