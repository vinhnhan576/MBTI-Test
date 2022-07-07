const notesbox = document.querySelector(".notes-box");
const btnstart = notesbox.querySelector(".buttons #start");
const testbox = document.querySelector(".test-page .test-box");
const resultbox = document.querySelector(".test-page .result-box");

btnstart.onclick = ()=>{
    // notesbox.classList.remove("activeNotes");
    testbox.classList.add("activeTest");
    console.log("clicked");
    btnprev.classList.add("disableButton");
    showQuestion(0);
}

let noquestion = 0;

const btnnext = testbox.querySelector(".next-question");
const btnprev = testbox.querySelector(".prev-question");

btnnext.onclick = ()=>{
    if(noquestion == 0){
        btnprev.classList.remove("disableButton");
    }
    if(noquestion < questions.length - 2){
        noquestion++;
        showQuestion(noquestion);
    } 
    else if(noquestion < questions.length - 1){
        btnnext.innerHTML = "Hoàn thành";
        noquestion++;
        showQuestion(noquestion);
    }
    else{
        testbox.classList.remove("activeTest");
        resultbox.classList.add("activeResult");
    }
}

btnprev.onclick = ()=>{
    if(noquestion > 0){
        if(noquestion == 1){
        btnprev.classList.add("disableButton");
        }
        noquestion--;
        showQuestion(noquestion);
    }
    if(noquestion < questions.length - 1){
        btnnext.innerHTML = "Tiếp theo";
    }
}

function showQuestion(index){
    const question = document.querySelector(".question");
    const mpclist = document.querySelector(".mpc-list");
    const questionnumber = testbox.querySelector(".question-number");
    const footernoquestion = testbox.querySelector(".noquestion");
    let totalquestiontag = '<span><p>' + questions[index].no + '</p>trên<p>70</p> câu hỏi</span>';
    let questionnumbertag = 'Câu ' + questions[index].no;
    let questiontag = '<span>' + questions[index].question + '</span>';
    let mpclisttag = '<div class="mpc">' + questions[index].options[0] + '</div>'
                    + '<div class="mpc">' + questions[index].options[1] + '</div>'
                    + '<div class="mpc">Hông biết nữa</div>';
    footernoquestion.innerHTML = totalquestiontag;
    questionnumber.innerHTML = questionnumbertag;
    question.innerHTML = questiontag;
    mpclist.innerHTML = mpclisttag;

    const mpc = mpclist.querySelectorAll(".mpc");
    if(questions[index].answer != -1){
        mpc[questions[index].answer].classList.add("chosenAnswer");
    }

    for(let i = 0; i < mpc.length; i++){
        mpc[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    if(noquestion == 0){
        btnprev.classList.remove("disableButton");
    }
    const mpclist = document.querySelector(".mpc-list");
    const mpc = mpclist.querySelectorAll(".mpc");
    for(let i = 0; i < mpc.length; i++){
        if(mpc[i] == answer)
            questions[noquestion].answer = i;
    }
    if(noquestion < questions.length - 2){
        noquestion++;
        showQuestion(noquestion);
    }
    else if(noquestion < questions.length - 1){
        btnnext.innerHTML = "Hoàn thành";
        noquestion++;
        showQuestion(noquestion);
    }
    else{
        btnnext.innerHTML = "Hoàn thành";
        testbox.classList.remove("activeTest");
        resultbox.classList.add("activeResult");
    }
}