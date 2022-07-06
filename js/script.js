function randomtext() {
    var texts = [
        "Bản ngã xuất hiện bằng cách tách biệt mình khỏi những bản ngã khác. Con người xuất hiện bằng cách bước vào mối quan hệ với những người khác.",
        "Hầu hết con người tin rằng tâm trí là một tấm gương, phản chiếu gần gần chân thực thế giới bên ngoài, mà không nhận ra rằng ngược lại, chính tâm trí là yếu tố sáng tạo chính.",
        "Chúng ta phải nhận ra mình ở người khác trước khi nhận thức người khác ở mình.",
        "Có một câu hỏi đôi khi khiến tôi thấy mơ hồ: Tôi điên hay người khác điên?",
        "Hạnh phúc lớn nhất ở đời là có thể tin chắc rằng ta được yêu thương - yêu vì chính bản thân ta, hay đúng hơn, yêu bất kể bản thân ta có như thế nào.",
        "Sống như chính mình trong một thế giới luôn cố biến mình thành người khác là thành tựu lớn nhất.",
        "Người biết yêu bản thân mình không có đối thủ.",
        "Bậc thềm tiến vào thánh đường của trí tuệ là biết sự ngu dốt của chính mình.",
        "Sự phản bội không làm tổn thương bạn, điều làm tổn thương bạn, là bạn quá để tâm tới chuyện đó. Chia tay không làm tổn thương bạn, điều làm tổn thương bạn, là hồi ức."
    ];
    return texts[Math.floor((Math.random() * texts.length))];
}

document.getElementById("message").innerHTML = "\"" + randomtext() + "\"";
