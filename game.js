p1= localStorage.getItem("P1");
p2= localStorage.getItem("P2");

p1_score= 0;
p2_score= 0;

document.getElementById("p1name").innerHTML= p1+ " : ";
document.getElementById("p2name").innerHTML= p2+ " : ";

document.getElementById("p1score").innerHTML= p1_score;
document.getElementById("p2score").innerHTML= p2_score;

document.getElementById("pq").innerHTML= "Question Turn : " + p1;
document.getElementById("pa").innerHTML= "Answer Turn : " + p2;

function send() {
    num1= document.getElementById("num1").value;
   num2= document.getElementById("num2").value;
   actual_answer= parseInt(num1) * parseInt(num2);

   

    number= "<h4 id= 'num101'>" + num1 + "X" + num2 +"</h4>";
    input_box= "<input id= 'text1' placeholder= 'Type your answer Here'>";
btn= "<br> <br> <button onclick= 'check()' class= 'btn btn-info'>Check </button>"
row= number+input_box+btn;

document.getElementById("output").innerHTML= row;
}
function Check() {
    get_answer = document.getElementById("input_box").value
    document.getElementById("word_display").innerHTML= ans
    if (ans == actual_answer) {
        if (question_turn == "p1") {
            p1score = p1score + 1
            document.getElementById("p1score").innerHTML = p1score
        } else {
            p2score = p2score + 1
            document.getElementById("p2score").innerHTML = p2score
        }
    }
    if (question_turn == "p1") {
        question_turn = "p2"
        document.getElementById("pq").innerHTML = "Question turn is " + p2 + "'s"
    } else {
        question_turn = "p1"
        document.getElementById("pq").innerHTML = "Question turn is " + p1 + "'s"
    }
    if (answer_turn == "p1") {
        answer_turn = "p2"
        document.getElementById("pa").innerHTML = "Answer turn is " + p2 + "'s"
    } else {
        answer_turn = "p1"
        document.getElementById("pa").innerHTML = "Answer turn is " + p1 + "'s"
    }
}