const notesbox = document.querySelector(".notes-box");
const btnstart = notesbox.querySelector(".buttons #start");
const testbox = document.querySelector(".test-page .test-box");

btnstart.onclick = ()=>{
    // notesbox.classList.remove("activeNotes");
    testbox.classList.add("activeTest");
    console.log("clicked");
    showQuestion(0);
}

let noquestion = 0;

const btnnext = testbox.querySelector(".next-question");
const btnprev = testbox.querySelector(".prev-question");

btnnext.onclick = ()=>{
    if(noquestion < questions.length - 1){
        noquestion++;
        showQuestion(noquestion);
    }
    else{
        console.log("Test completed");
    }
}

btnprev.onclick = ()=>{
    if(noquestion > 0){
        noquestion--;
        showQuestion(noquestion);
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
    for(let i = 0; i < mpclist.length; i++){
        mpc[i].setAttribute("onclick", "optionSelected:(this)");
    }
}

function optionSelected(answer){
    noquestion++;
    showQuestion(noquestion);
}