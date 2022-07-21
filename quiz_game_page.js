function send (){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<center><h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br><h4>Answer : </h4><input type='text' id = 'input_check_box' placeholder = 'Type Answer Here'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button></center>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}