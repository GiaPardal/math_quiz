player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0
player2_score = 0

document.getElementById("player1Name").innerHTML = player1_name + ": ";
document.getElementById("player2Name").innerHTML = player2_name + ": ";

document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "question turn = " + player1_name;
document.getElementById("playerAnswer").innerHTML = "answer turn = " + player2_name;

answerTurn = "player2";
questionTurn = "player1";

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4 id = 'word_display'>Q." + number1 + "X" + number2 + "</h4>";
    input_box = "<br> answer: <input type='text' id='input_checkbox'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>check</button>";

    join = question + input_box + check_button;
    document.getElementById("output").innerHTML = join;
    
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

function check(){
    answer = document.getElementById("input_checkbox").value;
    
    if (answer == actual_answer) {
        if (answerTurn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1Score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2Score").innerHTML = player2_score;
        }
    }

    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player2_name;
    }

    else{
        questionTurn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn: " + player1_name;
    }

    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player2_name;
    }

    else{
        answerTurn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn: " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}