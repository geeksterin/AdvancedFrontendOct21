function selectOption(element) {
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

    //TODO: Write logic to calculate who won the round.

}