
    var classObject = {
        "IX": {
            "MATH": [],
            "PHYSICAL SCIENCE": [],
            "LIFE SCIENCE":[]
        },
        "X": {
            "MATH": [],
            "PHYSICAL SCIENCE": [],
            "LIFE SCIENCE":[]
        },
        "XI":{
            "MATH":[],
            "PHYSICS":[],
            "CHEMISTRY":[]
        },
        "XII":{
            "MATH":[],
            "PHYSICS":[],
            "CHEMISTRY":[]
        }
    }
    window.onload = function () {
        var classSel = document.getElementById("class");
        var subjectSel = document.getElementById("subject");
        for (var x in classObject) {
            classSel.options[classSel.options.length] = new Option(x, x);
        }
        classSel.onchange = function () {

            subjectSel.length = 1;
            for (var y in classObject[this.value]) {
                subjectSel.options[subjectSel.options.length] = new Option(y, y);
            }
        }
    }

    function openPage() {
        var classSel = document.getElementById("class");
        var subjectSel = document.getElementById("subject");

        location.replace(classSel.value + subjectSel.value + '.html')

    }

    function openNav(){
        document.getElementById("mySidepanel").style.width="250px";
    }

    function closeNav(){
        document.getElementById("mySidepanel").style.width="0px";
    }

    function closeNav(){
        document.getElementById("mySidepanel").style.width="0";
    }