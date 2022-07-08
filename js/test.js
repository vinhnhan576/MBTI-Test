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

function calculateMBTI(){
    let E, I, S, N, T, F, J, P = 0;
    for(let i = 0; i < questions.length - 1; i++){
        switch (i % 7) {
            case 1:
                if(question[i].answer > 0){
                    if(question[i].answer == 1)
                        E++;
                    else
                        I++;
                }
                break;
            case 2, 3:
                if(question[i].answer > 0){
                    if(question[i].answer == 1)
                        S++;
                    else
                        N++;
                }
                break;
            case 4, 5:
                if(question[i].answer > 0){
                    if(question[i].answer == 1)
                        T++;
                    else
                        F++;
                }
                break;
            case 6, 0:
                if(question[i].answer > 0){
                    if(question[i].answer == 1)
                        J++;
                    else
                        P++;
                }
                break;
            default:
                break;
        }

        const mbtipic = document.querySelector(".result-box .pic");
        // const intro = document.querySelector(".result-box .mbti-info .title .intro");
        const mbti = document.querySelector(".result-box .mbti-info .title .mbti");
        const detail = document.querySelector(".result-box .mbti-info .title .mbti-detail");
        if(E > I){
            if(S > N){
                if(T > F){
                    if(J > P){
                        //ESTJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ESTP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
                else{
                    if(J > P){
                        //ESFJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ESFP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
            }
            else{
                if(T > F){
                    if(J > P){
                        //ENTJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ENTP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
                else{
                    if(J > P){
                        //ENFJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ENFP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
            }
        }
        else{
            if(S > N){
                if(T > F){
                    if(J > P){
                        //ISTJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ISTP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
                else{
                    if(J > P){
                        //ISFJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //ISFP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
            }
            else{
                if(T > F){
                    if(J > P){
                        //INTP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //INTJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                }
                else{
                    if(J > P){
                        //INFJ
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                        detail.innerHTML = "Có rất ít người mang tính cách này, chỉ chiếm khoảng 1% dân số và họ mang trong mình khá nhiều đặc điểm bất thường. Mặc dù sự hiện diện của họ có thể được miêu tả như là rất yên tĩnh, nhưng các INFJ lại thường có nhiều ý kiến ​​mạnh mẽ, đặc biệt là khi nói đến các vấn đề mà họ cho là thực sự quan trọng trong cuộc sống. Nếu một INFJ chiến đấu cho một điều gì đó thì nguyên nhân chính là vì họ tin vào ý tưởng riêng của mình, không phải vì một số lý do ích kỷ.";
                    }
                    else{
                        //INFP
                        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infp.png" alt="">';
                        mbti.innerHTML = 'NGƯỜI HÒA GIẢI (INFP)';
                        detail.innerHTML = "là một trong những nhóm hiếm nhất của 16 loại cá tính, chỉ chiếm 4,5% dân số thế giới. INFPs thường được đánh giá là chu đáo, tận tâm, tiêu chuẩn cao, nhạy cảm, linh hoạt.";
                    }
                }
            }
        }
    }
}