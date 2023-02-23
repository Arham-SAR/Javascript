function func() {
    var name = document.getElementById("name").value;
    document.getElementById("pname").innerHTML = name;

    var institute = document.getElementById("iname").value;
    document.getElementById("piname").innerHTML = institute;

    var batch = document.getElementById("batch").value;
    document.getElementById("pbatch").innerHTML = batch;

    var project = document.getElementById("epro").value;
    document.getElementById("pro").innerHTML = project;


    var practical = document.getElementById("eprac").value;
    document.getElementById("prac").innerHTML = practical;

    var modular = document.getElementById("emod").value;
    document.getElementById("mod").innerHTML = modular;



    var ob = eval(parseFloat(project) + parseFloat(practical) + parseFloat(modular));
    document.getElementById("om").innerHTML = ob;


    var per = eval((ob / 300) * 100);
    document.getElementById("per").innerHTML = Math.round(per);

    switch (true) {
        case (per >= 80):
            document.getElementById("grade").innerHTML = "A+";
            break;
        case (per >= 70):
            document.getElementById("grade").innerHTML = "A";
            break;
        case (per >= 60):
            document.getElementById("grade").innerHTML = "B";
            break;
        case (per >= 50):
            document.getElementById("grade").innerHTML = "C";
            break;
        case (per >= 40):
            document.getElementById("grade").innerHTML = "D";
            break;

        default:
            document.getElementById("grade").innerHTML = "Fail";
            break;
    }

}



function clr() {
    document.getElementById("table").innerHTML = "";
    location.reload();
}

function add() {
    var x = document.getElementsByClassName("table").insertRow(0);
    incertrow=(0);
    incertrow=(1);
    incertrow=(2);
}