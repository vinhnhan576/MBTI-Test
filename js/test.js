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
        calculateMBTI();
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
    else {
        showQuestion(noquestion);
    }
}

function calculateMBTI(){
    let E = 0, I = 0, S = 0, N = 0, T = 0, F = 0, J = 0, P = 0;
    for(let i = 0; i < questions.length - 1; i++){
        switch (i % 7) {
            case 1:
                if(questions[i].answer > -1){
                    if(questions[i].answer == 0)
                        E++;
                    else if(questions[i].answer == 1)
                        I++;
                }
                break;
            case 2: case 3:
                if(questions[i].answer > -1){
                    if(questions[i].answer == 0)
                        S++;
                    else if(questions[i].answer == 1)
                        N++;
                }
                break;
            case 4: case 5:
                if(questions[i].answer > -1){
                    if(questions[i].answer == 0)
                        T++;
                    else if(questions[i].answer == 1)
                        F++;
                }
                break;
            case 6: case 0:
                if(questions[i].answer > -1){
                    if(questions[i].answer == 0)
                        J++;
                    else if(questions[i].answer == 1)
                        P++;
                }
                break;
            default:
                break;
        }
    }
    console.log(E + " " + I + " " + S + " " + N + " " + T + " " + F + " " + J + " " + P);
    const mbtipic = document.querySelector(".result-box .pic");
    // const intro = document.querySelector(".result-box .mbti-info .title .intro");
    const mbti = document.querySelector(".result-box .mbti-info .title .mbti");
    const detail = document.querySelector(".result-box .mbti-info .title .mbti-detail");
    if((E + I) < 1 || (S + N) < 1 || (N + T) < 1 || (J + P) < 1){
        mbtipic.innerHTML = '<img id="mbti-pic" src="./img/cdmd.jpg" alt="">';
        mbti.innerHTML = 'NGƯỜI MẤT DẠY (CDMD)';
        detail.innerHTML = "Chơi cái trò gì mất dạy z đụ má t mà gặp mày là á hả gạch ống này t phang là t phang chết cđm m nha"
    }
    else if(E > I){
        if(S > N){
            if(T > F){
                if(J > P){
                    console.log("ESTJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/estj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI GIÁM SÁT (ESTJ)';
                    detail.innerHTML = "ESTJ là những người lễ nghi, thực tế, chăm chỉ và trách nhiệm cao với một bộ óc nhạy bén trong việc kinh doanh, tổ chức quản lý cũng như con mắt nhìn người. Họ làm việc có trật tự, quy tắc và một hệ thống phương pháp rõ ràng. ESTJ luôn muốn mang đến một cấu trúc được tổ chức hoàn hảo và các hoạt động được vận hành một cách trơn tru cho môi trường xung quanh. Họ đặc biệt giỏi với vai trò của một người quản lý, giám sát với khả năng giao tiếp đối ngoại tốt, họ không khó khăn để truyền đạt ý kiến, hướng dẫn, giúp đợ và thiết lập được một quy trình làm việc có hiệu suất tốt nhất cho mọi người cũng như hệ thống xã hội.";
                }
                else{
                    console.log("ESTP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/estp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI ĐỀ XƯỚNG (ESTP)';
                    detail.innerHTML = "ESTP là những người tích cực, có xu hướng thực hành để giải quyết vấn đề hơn là chỉ thảo luận về chúng. Họ còn lão làng một cách nghệ thuật trong việc thúc đẩy, tạo sức ảnh hưởng để người khác cùng hành động. Cụ thể trong lời nói và thực dụng trong hành động, họ luôn mang đến một nguồn năng lượng dồi dào cho tập thể. ESTP thích tập trung vào các kết quả rõ ràng trước mắt hơn là suy nghĩ về những mục tiêu dài hạn. Họ có khả năng tháo nút thắt cho các vấn đề để mang người khác đồng hành với mình qua đó đem lại những điều tốt đẹp cho cuộc sống. Vì thế mà ESTP được gọi là những Promoter – Người đề xướng.";
                }
            }
            else{
                if(J > P){
                    console.log("ESFJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/esfj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI QUAN TÂM (ESFJ)';
                    detail.innerHTML = "ESFJ có xu hướng tập trung vào thế giới bên ngoài nhiều và đánh giá những kinh nghiệm của họ một cách chủ quan. Phần lớn đánh giá của họ dựa trên hệ thống niềm tin. ESFJ rất thích sự cụ thể, tin tưởng vào những thông tin chi tiết, thực tế được thu thập dựa trên các giác quan sinh lý. ESFJ ấm áp và thích quan tâm đến hạnh phúc của người khác, hài lòng khi chứng người khác được hạnh phúc Họ coi trọng giá trị truyền thống và sự đảm bảo nó mang lại. Cũng gần giống ENFJ, giá trị của các ESFJ tập trung nhiều hơn vào các tổ chức xã hội. Họ vượt trội trong môi trường tiêu chuẩn đạo đức cao vì có xu hướng thể hiện được sự rộng lượng và sự tốt bụng tử tế. Họ cũng đánh giá cao các quy tắc luật lệ và mong muốn người khác cũng vậy. ESFJ có thể ít quan tâm đến các khái niệm đằng sau các quy tắc, né tránh sự trừu tượng và nhân hóa.";
                }
                else{
                    console.log("ESFP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/esfp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI TRÌNH DIỄN (ESFP)';
                    detail.innerHTML = "ESFP luôn hoạt bát, quyến rũ và thu hút những người xung quanh khiến họ cảm thấy vui vẻ. Họ rất ấm áp, hài hước và thích được là trung tâm của sự chú ý. ESFP sống trong những khoảnh khắc của hiện tại và muốn tận hưởng tối đa những gì mà cuộc sống mang lại. Họ đặc biệt giỏi trong việc quan sát, cảm nhận, giúp đỡ và huy động thuyết phục mọi người để cùng giải quyết vấn đề theo những cách rất thực tế. ESFP thích một cuộc sống tự nhiên mà không cần phải lên kế hoặch trước, muốn thoải mái vui vẻ cũng các hoạt động, sở thích với bạn bè mà không cần các nguyên tắc, quy ước can thiệp vào. Tính tình rộng lượng, lạc quan và giỏi thuyết phục, họ là những người tương tác cá nhân tuyệt vời.";
                }
            }
        }
        else{
            if(T > F){
                if(J > P){
                    console.log("ENTJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/entj.png" alt="">';
                    mbti.innerHTML = 'NHÀ ĐIỀU HÀNH (ENTJ)';
                    detail.innerHTML = "ENTJ có tố chức để trở thành một nhà lãnh đạo, thiết lập chiến lược và tạo ra động lực cho tổ chức đạt được sự tiến bộ. Họ nổi bật trong việc phân tích, lý luận logic và đầu óc tư duy xuất sắc. Ngoài ra, họ còn rất quyết đoán, bộc trực và luôn thích chịu trách nhiệm khi phát sinh vấn đề lỗi. ENTJ tự tin về khả năng của mình, áp đảo người khác bởi đầu óc lập luận sắc bén và ngôn từ sắc sảo. Tuy nhiên họ cũng rất khách quan và không bị ảnh hưởng bởi các vấn đề xung đột hoặc sự chỉ trích xung quanh. Đôi lúc, một vài người có thể cho rằng ENTJ kiêu ngạo, vô cảm nhưng đó là bản năng của họ, suy cho cùng thì họ vẫn muốn tập trung vào kết quả của công việc với năng suất cao nhất.";
                }
                else{
                    console.log("ENTP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/entp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI ĐÀM PHÁN (ENTP)';
                    detail.innerHTML = "ENTP được mô tả là những người thông minh, lanh lợi, hướng ngoại, sáng tạo, linh hoạt và tháo vát. Họ luôn xuất sắc trong việc đưa ra các giải pháp mới mẻ và độc đáo trước các vấn đề khó khăn, thường thì họ không lên kế hoặch trước cho một dự án. ENTP cũng có một sự hiểu biết sâu sắc về cách mà mọi thứ cũng như các mối quan hệ hoạt động và làm cách nào để cải thiện chúng. Họ không thích phán xét, cởi mở, khéo léo trong giao tiếp với đầu óc thông minh và khả năng ngôn ngữ linh hoạt. Với sự sáng tạo không ngừng và kỹ năng giao tiếp xã hội tuyệt vời, The Inventor hoàn toàn xứng đáng với vai trò của một người lãnh đạo trong một tổ chức hay tập thể.";
                }
            }
            else{
                if(J > P){
                    console.log("ENFJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/enfj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI CHỈ DẠY (ENFJ)';
                    detail.innerHTML = "ENFJ là những người giàu năng lượng, có định hướng và rất nhiều khả năng sâu bên trong. Họ có khả năng tự điều chỉnh theo nhu cầu của nhiều người khác trong tập thể, bằng sự dự đoán và nhận thức, cảm giác sâu sắc và sự đồng cảm về những vấn đề của người khác. Và bằng trực giác cũng như xu hướng lạc quan nên luôn suy nghĩ về tương lai để cải thiện chúng. ENFJ luôn muốn kết nối chặt chẽ với mọi người, hỗ trợ và hợp tác với họ trong công việc. ENFJ cũng rất tham vọng, nhưng tham vọng của họ không phải cá nhân mà luôn hướng tới cộng đồng để giúp mọi người cùng tốt hơn. Chính vì vậy ENFJ còn được gọi là The Givers – Người cho đi.";
                }
                else{
                    console.log("ENFP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/enfp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI TRUYỀN CẢM HỨNG (ENFP)';
                    detail.innerHTML = "ENFP là những người sáng tạo, giàu năng lượng, đam mê  hứng thú với mọi người và khả năng của họ. ENFP luôn mang đến những ý tưởng, sinh lực và kích thích người khác phát triển bằng sự nhiệt tình trong những hơi thở của họ. ENFP thích những sự khởi đầu của một dự án nào đó hoặc là một mối quan hệ mới, họ có khả năng giao tiếp thông minh, óc phán đoán nhanh nhạy để biết được nhu cầu của người khác để có thể đưa ra những giúp đỡ, tư vấn cần thiết. Họ không thích tập trung quá vào chi tiết và lặp đi lăp lại các quá trình cũ kỹ. ENFP thích sự mới lạ, luôn lạc quan, hang hái và cảm xúc mạnh mẽ. Ho khát khao dành chiến thắng và chia sẻ kinh nghiệm của họ đến những người khác.";
                }
            }
        }
    }
    else{
        if(S > N){
            if(T > F){
                if(J > P){
                    console.log("ISTJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/istj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI TRÁCH NHIỆM (ISTJ)';
                    detail.innerHTML = "ISTJ là mẫu người của sự logic, có tổ chức, hợp lý và nghiêm túc, thích giữ cho cuộc sống và môi trường làm việc của họ được điều tiết tốt. Họ sống khá dè dặt và nghiêm nghị, thành công đến với họ nhờ sự thấu đáo và đáng tin cậy. ISTJ sống rất thực tế và luôn có trách nhiệm, họ như một con ong thợ chăm chỉ và luôn cố gắng phấn đấu cho mục tiêu của mình. Là dạng người sống hướng nội nên cũng dễ hiểu khi các ISTJ gặp khó khăn trong việc đáp ứng nhu cầu chia sẻ cảm xúc với mọi người xung quanh nhưng không phải là dạng cô lập hoặc tách biệt hẳn với người khác. Nhìn chung, ISTJ là dạng người truyền thống, quy tắc, luôn quan tâm đến việc duy trì trật tự xã hội và các tiêu chuẩn.";
                }
                else{
                    console.log("ISTP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/istp.png" alt="">';
                    mbti.innerHTML = 'NHÀ CƠ HỌC (ISTP)';
                    detail.innerHTML = "ISTP rất giỏi về các vấn đề cơ khí, sửa chữa, khắc phục sự cố và có xu hướng nghiên cứu cách mọi thứ hoạt động. Họ độc lập, logic, linh hoạt và dễ thích nghi, vì vậy họ rất giỏi ứng phó và tìm kiếm các giải pháp thực tế cho các vấn đề trong tầm tay cũng như các tình huống khẩn cấp. ISTP thích hành động, chú ý đến các chi tiết và tương tác với thế giới xung quanh theo cách tự định hướng, tự phát. Họ làm việc khá độc lập, tách rời và có phần khép kín, họ muốn được làm việc một cách tự do trong một không gian cá nhân để có thể đi theo sự dẫn dắt của chính bản thân mình.";
                }
            }
            else{
                if(J > P){
                    console.log("ISFJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/isfj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI NUÔI DƯỠNG (ISFJ)';
                    detail.innerHTML = "ISFJ thật sự đề cao đến việc duy trì trật tự và sự hài hòa trong mọi khía cạnh của cuộc sống, họ là những người kiên định, tỉ mỉ và có trách nhiệm trong công việc. Mặc dù là người sống hướng nội nhưng họ rất giỏi trong việc quan sát và định hướng con người, họ không chỉ nhớ rõ các chi tiết của những người xung quanh mà con nhạy bén trong việc theo dõi cảm xúc của người khác. Mọi người thường mô tả ISFJ là dạng người chu đáo, có lòng thương cảm quan tâm người khác và đáng tin cậy, luôn quan tâm chăm sóc cho mọi người để giữ họ luôn an toàn bằng những hành động thực tế. Đôi khi bản chất hướng nội khiến cho người khác hiểu lầm về ISFJ nhưng nếu đã là bạn bè và gia đình thì sẽ hoàn toàn ngược lại.";
                }
                else{
                    console.log("ISFP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/isfp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI NGHỆ SĨ (ISFP)';
                    detail.innerHTML = "ISFP là những người hòa bình, thân thiện, dễ tính. Với phương châm sống là để tận hưởng những khoảnh khắc của cuộc sống, họ luôn lạc quan, vui vẻ và linh hoạt một cách tự phát với dòng chảy  để tận hưởng những gì cuộc sống mang lại. ISFP có tính thẩm mỹ cao, luôn tìm kiếm cái đẹp, họ đặc biệt xuất sắc trong việc sử dụng sự sáng tạo, tài năng tự nhiên trong nghệ thuật. ISFP mặc dù yên tĩnh, khiêm tốn, dễ chịu nhưng vẫn có giá trị đóng góp riêng của mình. Họ không thích là tâm điểm của sự chú ý và thích đóng vai trò hỗ trợ, chia sẻ kinh nghiệm trong cuộc sống.";
                }
            }
        }
        else{
            if(T > F){
                if(J > P){
                    console.log("INTP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/intp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI TƯ DUY (INTP)';
                    detail.innerHTML = "INTP là những cá nhân trầm tính, chu đáo, có niềm đam mê mãnh liệt với phân tích logic, hệ thống phức tạp và thiết kế. Họ thường tò mò và thích tìm hiểu về các hệ thống, lý thuyết phức tạp và cách mọi thứ hoạt động. INTP thông thường không phải kiểu người truyền thống, họ có những suy nghĩ riêng và không chạy theo đám đông. Do tính chất độc lập nên họ thích làm việc tách biệt hơn là trong một nhóm, tuy nhiên họ có thể thể hiện kỹ năng vượt trội trong việc giải thích các khái niệm, ý tưởng phức tạp cho người khác. Đối với những The Thinkers, cuộc sống là một hành trình khám phá những bí ẩn của vũ trụ.";
                }
                else{
                    console.log("INTJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/intj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI QUÂN SƯ (INTJ)';
                    detail.innerHTML = "INTJ có một niềm đam mê mạnh mẽ với việc phân tích, giải quyết vấn đề, cải thiện các hệ thống và quy trình bằng các ý tưởng sáng tạo của họ. Họ luôn khát khao nâng cao kiến thức và cố gắng không ngừng nghỉ, luôn cầu toàn với tiêu chuẩn hiệu suất cực cao dành cho bản thân và cả những người đồng nghiệp. Sự độc lập trong tính cách và tư tưởng đôi khi khiến INTJ bị xa cách nhưng họ luôn là những đối tác trung thành. INTJ nhận thức về các hệ thống và lên chiến lược cho nó, và thông thường thì mọi thứ sẽ được định hướng rõ ràng như trên một bàn cờ. Với khả năng tư duy logic, sự tự tin và tài năng, The Mastermind hoàn toàn có thể đảm nhận vai trò lãnh đạo, cố vấn chiến lược tài ba.";
                }
            }
            else{
                if(J > P){
                    console.log("INFJ");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infj.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI CHE CHỞ (INFJ)';
                    detail.innerHTML = "INFJ là những người rất tận tâm và có định hướng rõ ràng, họ luôn tìm kiếm các ý nghĩa trong các mối quan hệ, ý tưởng và các sự kiện để mong muốn hiểu được bản thân và những người xung quanh. Bằng các kỹ năng trực quan, tầm nhìn và sự tự tin để phát triển cải thiện cuộc sống của mọi người. Cũng khá tương tự với đối tác INTJ, INFJ luôn nhìn nhận các vấn đê gặp phải như là cơ hội để thách thức sự phát triển, sáng tạo. Tuy là một người hướng nội thật sự nhưng INFJ vẫn có đủ những kiến thức để thích ứng tốt trong các tình huống xã hội. Họ quan tâm đến sự hạnh phúc của người khác, có thể hợp tác và sáng tạo để giải quyết những sự khác biệt. Nhìn chung INFJ là người sống nội tâm phong phú, sống động nhưng cũng rất cởi mở và quan tâm mọi người. Đặc biệt, INFJ có những khả năng độc đáo để truyền cảm xúc và động lực cho người khác.";
                }
                else{
                    console.log("INFP");
                    mbtipic.innerHTML = '<img id="mbti-pic" src="./img/infp.png" alt="">';
                    mbti.innerHTML = 'NGƯỜI HÒA GIẢI (INFP)';
                    detail.innerHTML = "INFP là những nhà lý tưởng giàu trí tưởng tượng được dẫn dắt bởi chính niềm tin và các giá trị cốt lõi của họ. Họ tập trung nhiều năng lượng vào các cảm giác mãnh liệt và các giá trị đạo đức sâu sắc. INFP thường rất nhạy cảm, đồng cảm, có lòng vị tha và quan tâm đến sự phát triển của bản thân cũng như những người khác, và mong đợi mọi người cũng làm như vậy. Mang tư tưởng cá nhân nhưng cũng rất sáng tạo, linh hoạt và có hơi hướng nghệ thuật, và không hề phán xét trong việc đối xử với người khác vì họ biết rằng mỗi người có một con đường riêng của bản thân. INFP thật chất là những người có thể trao đổi cởi mở, hợp tác hỗ trợ nhưng có thể sẽ không thích khi các giá trị riêng của bản thân bị vi phạm.";
                }
            }
        }
    }
}