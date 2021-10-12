let humanScore = 0;
let computerScore = 0;

function selectOption(element) {
    const MATCH_STATE_UNPLAYED      = 0;
    const MATCH_STATE_HUMAN_WON     = 1;
    const MATCH_STATE_COMPUTER_WON  = 2;
    const MATCH_STATE_DRAW          = 3;

    let humanOption = element.dataset.selection;
    let icon = element.innerText;
    document.getElementById('human_selection').innerText = icon;
    let options = ['r', 'p', 's'];
    //Math.random() // Between 0 and 1. (0 included, 1 not included)
    let computerSelection = Math.floor(Math.random() * 3); //0 to 3, 3 not included.
    //Floor = 0.15 => 0, 1.23 => 1.
    let computerOption = options[computerSelection];
    // console.log(computerOption);
    let computerIcon = '';
    switch(computerOption) {
        case 'r':
            computerIcon = '🤘🏻'; 
            break;
        case 'p':
            computerIcon = '📰';
            break;
        case 's':
            computerIcon = '✂';
            break;
    }
    document.getElementById('computer_selection').innerText = computerIcon;

    let matchStatus = MATCH_STATE_UNPLAYED;

    //TODO: Write logic to calculate who won the round.
    if(humanOption == 'r') {
        switch(computerOption) {
            case 'r':
                matchStatus = MATCH_STATE_DRAW;
                break;
            case 'p':
                matchStatus = MATCH_STATE_COMPUTER_WON;
                break;
            case 's':
                matchStatus = MATCH_STATE_HUMAN_WON;
                break;
        }
    }else if(humanOption == 'p') {
        switch(computerOption) {
            case 'r':
                matchStatus = MATCH_STATE_HUMAN_WON;
                break;
            case 'p':
                matchStatus = MATCH_STATE_DRAW;
                break;
            case 's':
                matchStatus = MATCH_STATE_COMPUTER_WON;
                break;
        }
    }else if(humanOption == 's') {
        switch(computerOption) {
            case 'r':
                matchStatus = MATCH_STATE_COMPUTER_WON;
                break;
            case 'p':
                matchStatus = MATCH_STATE_HUMAN_WON;
                break;
            case 's':
                matchStatus = MATCH_STATE_DRAW;
                break;
        }
    }

    let resultElem = document.getElementById('result');
    if(matchStatus == MATCH_STATE_COMPUTER_WON) {
        resultElem.innerText = 'Computer Won';
        computerScore++;
    }else if(matchStatus == MATCH_STATE_HUMAN_WON) {
        resultElem.innerText = 'Human Won';
        humanScore++;
    }else if(matchStatus == MATCH_STATE_DRAW) {
        resultElem.innerText = 'It\'s a Draw';
    }

    document.getElementById('computer_score').innerText = computerScore;
    document.getElementById('human_score').innerText = humanScore;

}