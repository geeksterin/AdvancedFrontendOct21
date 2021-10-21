const MATCH_STATE_UNPLAYED      = 0;
const MATCH_STATE_HUMAN_WON     = 1;
const MATCH_STATE_COMPUTER_WON  = 2;
const MATCH_STATE_DRAW          = 3;
const PLAYER_TYPE_PLAYER_1      = 'player1';
const PLAYER_TYPE_PLAYER_2      = 'player2';
const SELECTION_ROCK            = "R";
const SELECTION_PAPER           = "P";
const SELECTION_SCISSORS        = "S";

let player1_score     = 0;
let player2_score     = 0;
let currentPlayerType = PLAYER_TYPE_PLAYER_1;

firebase.initializeApp({
    apiKey: "AIzaSyDzWfyAgDmJgBVz1AEGc1uD00IhBZvwjWU",
    authDomain: "onlinerps-6e266.firebaseapp.com",
    projectId: "onlinerps-6e266",
});

let db = firebase.firestore();

function createSession() {
    db.collection("game_sessions").add({
        player1_score: "0",
        player2_score: "0",
        player1_selection: "",
        player2_selection: ""
    })
    .then((docRef) => {
        // docID = docRef.id;
        document.getElementById('sessionID').value = docRef.id;
        currentPlayerType = PLAYER_TYPE_PLAYER_1;
        attachDBListener(docRef.id)
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });   
}

function joinSession() {
    let sessionID = document.getElementById('sessionID').value;
    currentPlayerType = PLAYER_TYPE_PLAYER_2;
    attachDBListener(sessionID);
}

function attachDBListener(docID) {
    db.collection("game_sessions").doc(docID)
    .onSnapshot((doc) => {
        let data = doc.data();
        updatePointsUI(data);
        updateSelectionUI(data);
        console.log("Current data: ", doc.data());
    });
}

function setSelection(element) {
    let selection_value = element.dataset.selection;
    let selection_key = "player1_selection";
    if(currentPlayerType == PLAYER_TYPE_PLAYER_2) {
        selection_key = "player2_selection";
    }
    let docID = document.getElementById('sessionID').value;


    db.collection("game_sessions").doc(docID).update({
    selection_key: selection_value
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

function updatePointsUI(data) {
    player1_score = data.player1_score;
    player2_score = data.player2_score;
    document.getElementById('player1_score').innerText = player1_score;
    document.getElementById('player2_score').innerText = player2_score;
}

function updateSelectionUI(data) {
    let player1_selection = data.player1_selection;
    let player2_selection = data.player2_selection;
    document.getElementById('player1_selection').innerText = getSelectionIcon(player1_selection);
    document.getElementById('player2_selection').innerText = getSelectionIcon(player2_selection);
}

function getSelectionIcon(selection) {
    switch(selection) {
        case SELECTION_ROCK:
            return '🤘🏻'; 
        case SELECTION_PAPER:
            return '📰';
        case SELECTION_SCISSORS:
            return '✂';
        default:
            return '❔';
    }
}






// let matchStatus = MATCH_STATE_UNPLAYED;

// //TODO: Write logic to calculate who won the round.
// if(humanOption == 'r') {
//     switch(computerOption) {
//         case 'r':
//             matchStatus = MATCH_STATE_DRAW;
//             break;
//         case 'p':
//             matchStatus = MATCH_STATE_COMPUTER_WON;
//             break;
//         case 's':
//             matchStatus = MATCH_STATE_HUMAN_WON;
//             break;
//     }
// }else if(humanOption == 'p') {
//     switch(computerOption) {
//         case 'r':
//             matchStatus = MATCH_STATE_HUMAN_WON;
//             break;
//         case 'p':
//             matchStatus = MATCH_STATE_DRAW;
//             break;
//         case 's':
//             matchStatus = MATCH_STATE_COMPUTER_WON;
//             break;
//     }
// }else if(humanOption == 's') {
//     switch(computerOption) {
//         case 'r':
//             matchStatus = MATCH_STATE_COMPUTER_WON;
//             break;
//         case 'p':
//             matchStatus = MATCH_STATE_HUMAN_WON;
//             break;
//         case 's':
//             matchStatus = MATCH_STATE_DRAW;
//             break;
//     }
// }

// let resultElem = document.getElementById('result');
// if(matchStatus == MATCH_STATE_COMPUTER_WON) {
//     resultElem.innerText = 'Computer Won';
//     computerScore++;
// }else if(matchStatus == MATCH_STATE_HUMAN_WON) {
//     resultElem.innerText = 'Human Won';
//     humanScore++;
// }else if(matchStatus == MATCH_STATE_DRAW) {
//     resultElem.innerText = 'It\'s a Draw';
// }
