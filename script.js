function randomtext() {
    var texts = [
        "Bản ngã xuất hiện bằng cách tách biệt mình khỏi những bản ngã khác. Con người xuất hiện bằng cách bước vào mối quan hệ với những người khác.",
        "Hầu hết con người tin rằng tâm trí là một tấm gương, phản chiếu gần gần chân thực thế giới bên ngoài, mà không nhận ra rằng ngược lại, chính tâm trí là yếu tố sáng tạo chính.",
        "Chúng ta phải nhận ra mình ở người khác trước khi nhận thức người khác ở mình."
    ];
    return texts[Math.floor((Math.random() * texts.length))];
}

document.getElementById("message").innerHTML = "'" + randomtext() + "'";
