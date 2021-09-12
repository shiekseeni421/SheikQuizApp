
let fromEl = document.getElementById("fromEl");
let result1 = '';
let result2 = '';
let result3 = '';
let result4 = '';
let result5 = '';
let mainScore=document.getElementById("scroe")
let scroe = 0;


let arrayObject = new XMLHttpRequest();
arrayObject.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
arrayObject.onreadystatechange = function () {
    if (this.readyState == 4) {
        var valueOfObject = (JSON.parse(this.responseText))
        console.log(valueOfObject)
        for (let i = 0; i < valueOfObject.length; i++) {
            var QutionText = document.createElement("h3");
            QutionText.className = "QutionText";
            QutionText.textContent = valueOfObject[i].question
            fromEl.appendChild(QutionText);
            //creating input Elmenet
            for (let j = 0; j < valueOfObject[i].options.length; j++) {
                let valueOption = valueOfObject[i].options[j]
                var optionContiner = document.createElement("div");
                optionContiner.className = "paddin";
                var inputEl = document.createElement("input");
                inputEl.setAttribute('id', valueOption + j.toString());
                inputEl.value = valueOption;
                inputEl.type = "radio";
                inputEl.name = i.toString();
                optionContiner.appendChild(inputEl);
                var labelEl = document.createElement("label");
                labelEl.setAttribute("for", valueOption + j.toString());
                labelEl.textContent = valueOption;
                labelEl.className = "labelText";
                optionContiner.appendChild(labelEl)
                var breakEl = document.createElement("br");
                optionContiner.appendChild(breakEl);
                hrline = document.createElement("hr");
                hrline.className = "hrText"
                fromEl.appendChild(optionContiner);

            }
            fromEl.appendChild(hrline);
        }

        let submitEl = document.createElement("input");
        submitEl.type = "submit";
        submitEl.value = "submit";
        submitEl.className="submitButton"
        fromEl.appendChild(submitEl)

        let harry1 = document.getElementById("Harry0");
        let Nagini2 = document.getElementById("Nagini1");
        let Helga3 = document.getElementById("Helga's Diadem2");
        let Riddle4 = document.getElementById("Tom Riddle's Diary3");

        harry1.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Nagini2.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Helga3.addEventListener("change", function (event) {
            result1 = event.target.value;
        });
        Riddle4.addEventListener("change", function (event) {
            result1 = event.target.value;
        });



        let Grawp5 = document.getElementById("Grawp0");
        let Fluffy6 = document.getElementById("Fluffy1");
        let Aragog7 = document.getElementById("Aragog2");
        let Noberta8 = document.getElementById("Noberta3");

        Grawp5.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Fluffy6.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Aragog7.addEventListener("change", function (event) {
            result2 = event.target.value;
        });
        Noberta8.addEventListener("change", function (event) {
            result2 = event.target.value;
        });

        let Potions9 = document.getElementById("Potions0");
        let Charms1 = document.getElementById("Charms1");
        let Defense2 = document.getElementById("Defense Against Dark Arts2");
        let Transfiguration3 = document.getElementById("Transfiguration3");

        Potions9.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Charms1.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Defense2.addEventListener("change", function (event) {
            result3 = event.target.value;
        });
        Transfiguration3.addEventListener("change", function (event) {
            result3 = event.target.value;
        });


        let Gryffindor4 = document.getElementById("Gryffindor0");
        let Slytherin5 = document.getElementById("Slytherin1");
        let Ravenclaw6 = document.getElementById("Ravenclaw2");
        let Hufflepuff7 = document.getElementById("Hufflepuff3");

        Gryffindor4.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Slytherin5.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Ravenclaw6.addEventListener("change", function (event) {
            result4 = event.target.value;
        });
        Hufflepuff7.addEventListener("change", function (event) {
            result4 = event.target.value;
        });



        let Astronomy8 = document.getElementById("Astronomy0");
        let Herbology9 = document.getElementById("Herbology1");
        let Charms10 = document.getElementById("Charms2");
        let Muggle11 = document.getElementById("Muggle Studies3");

        Astronomy8.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Herbology9.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Charms10.addEventListener("change", function (event) {
            result5 = event.target.value;
        });
        Muggle11.addEventListener("change", function (event) {
            result5 = event.target.value;
        });

        fromEl.addEventListener("submit", function (e) {
            e.preventDefault();
            if(result1==""&&result2==""&&result3==""&&result4==""&&result5==""){
                alert("Enter any option in each Qeastion")
            }
            else{
                if(result1=="Tom Riddle's Diary"){
                    scroe+=1
                }
                if(result1!="Tom Riddle's Diary" && result1!='') {
                    scroe+=0
                }
                if(result2=="Fluffy"){
                    scroe+=1
                }
                if(result2!="Fluffy" && result2!=''){
                    scroe+=0
                }
                if(result3=="Transfiguration"){
                    scroe+=1
                }
                if(result3!="Transfiguration" && result3!=''){
                    scroe+=0
                }
               if(result4=="Hufflepuff"){
                    scroe+=1
                }
                if(result4!="Hufflepuff" && result4!=''){
                    scroe+=0
                }
                if(result5=="Charms"){
                    scroe+=1
                }
                if(result5!="Charms" && result5!=''){
                    scroe+=0
                }
            }
            mainScore.textContent=scroe;
            scroe=0;

            

          }  )


    }
}

arrayObject.send()

















