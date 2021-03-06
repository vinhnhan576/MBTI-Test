let questions = [
    {
        no: 1,
        question: "Tại một bữa tiệc, bạn sẽ",
        options:[
            "tiếp xúc với nhiều người, kể cả người lạ",
            "chỉ tiếp xúc với những người mà bạn quen",
        ],
        answer: -1,
    },
    {
        no: 2,
        question: "Bạn thiên về",
        options:[
            "thực tế hơn là suy đoán",
            "suy đoán hơn là thực tế",
        ],
        answer: -1,
    },
    {

        no: 3,
        question: "Bạn cảm thấy tồi tệ hơn khi",
        options:[
            "luôn mơ mộng, đầu óc trên mây",
            "luôn trong một tình trạng cố định, buồn tẻ",
        ],
        answer: -1,
    },
    {
        no: 4,
        question: "Bạn bị ấn tượng hơn bởi",
        options:[
            "nguyên tắc, luật lệ",
            "cảm xúc",
        ],
        answer: -1,
    },
    {
        no: 5,
        question: "Bạn bị thu hút bởi",
        options:[
            "lý lẽ thuyết phục",
            "những điều cảm động",
        ],
        answer: -1,
    },
    {
        no: 6,
        question: "Bạn thường làm việc",
        options:[
            "đúng deadline",
            "mỗi lúc tùy hứng",
        ],
        answer: -1,
    },
    {
        no: 7,
        question: "Khi đưa ra lựa chọn bạn thường",
        options:[
            "cẩn thận suy xét",
            "tin vào cảm giác",
        ],
        answer: -1,
    },
    {
        no: 8,
        question: "Tại các bữa tiệc, bạn thường",
        options:[
            "ở lại đến cuối với tràn trề năng lượng",
            "ra về sớm và thấy mệt mỏi thiếu năng lượng",
        ],
        answer: -1,
    },
    {
        no: 9,
        question: "Ai sẽ thu hút bạn",
        options:[
            "người biết điều, khôn ngoan",
            "người giàu trí tưởng tượng",
        ],
        answer: -1,
    },
    {
        no: 10,
        question: "Bạn hứng thú với",
        options:[
            "việc thực tế đã từng xảy ra",
            "việc có khả năng xảy ra",
        ],
        answer: -1,
    },
    {
        no: 11,
        question: "Khi đánh giá người khác, bạn sẽ",
        options:[
            "tuân theo quy tắc, quy định",
            "dựa vào hoàn cảnh cụ thể",
        ],
        answer: -1,
    },
    {
        no: 12,
        question: "Khi tiếp cận người khác, bạn thường",
        options:[
            "có cái nhìn khách quan",
            "có cái nhìn chủ quan",
        ],
        answer: -1,
    },
    {
        no: 13,
        question: "Bạn sẽ thường",
        options:[
            "đúng giờ",
            "ung dung",
        ],
        answer: -1,
    },
    {
        no: 14,
        question: "Bạn bồn chồn với những việc",
        options:[
            "chưa hoàn thành",
            "đã xong",
        ],
        answer: -1,
    },
    {
        no: 15,
        question: "Trong các nhóm bạn của bạn khi có chuyện mới, bạn là người",
        options:[
            "biết mọi thông tin nhanh nhất đầu tiên",
            "biết thông tin sau cùng",
        ],
        answer: -1,
    },
    {
        no: 16,
        question: "Với những việc hàng ngày bạn thích sẽ",
        options:[
            "làm như thông thường",
            "làm theo cách riêng",
        ],
        answer: -1,
    },
    {
        no: 17,
        question: "Theo bạn các nhà văn nên",
        options:[
            "viết mọi thứ rõ ràng tường minh",
            "viết sử dụng nhiều so sánh, liên tưởng",
        ],
        answer: -1,
    },
    {
        no: 18,
        question: "Điều lôi cuốn bạn hơn",
        options:[
            "sự thống nhất về tư duy, suy nghĩ",
            "sự hòa hợp trong mối quan hệ",
        ],
        answer: -1,
    },
    {
        no: 19,
        question: "Bạn cảm thấy thoải mái hơn khi nhận xét",
        options:[
            "một cách logic",
            "mỗi cách có ý nghĩa, giá trị",
        ],
        answer: -1,
    },
    {
        no: 20,
        question: "Bạn thích những thứ",
        options:[
            "được định trước",
            "chưa được quyết định",
        ],
        answer: -1,
    },
    {
        no: 21,
        question: "Bạn là người",
        options:[
            "nghiêm túc, quyết đoán",
            "dễ tính, thoải mái",
        ],
        answer: -1,
    },
    {
        no: 22,
        question: "Khi nói chuyện điện thoại, bạn",
        options:[
            "hiếm khi băn khoăn đến những điều mình sẽ nói",
            "thường chuẩn bị trước những gì sẽ nói",
        ],
        answer: -1,
    },
    {
        no: 23,
        question: "Thực tế là",
        options:[
            "bản thân một điều giải thích cho chính nó",
            "điều đó là bằng chứng giải thích cho các quy luật",
        ],
        answer: -1,
    },
    {
        no: 24,
        question: "Những người có tầm nhìn xa",
        options:[
            "ở một mức độ, họ gây khó chịu cho người khác",
            "khá thú vị",
        ],
        answer: -1,
    },
    {
        no: 25,
        question: "Bạn là người",
        options:[
            "có cái đầu lạnh",
            "có trái tim ấm",
        ],
        answer: -1,
    },
    {
        no: 26,
        question: "Tồi tệ hơn khi đối xử",
        options:[
            "không công bằng",
            "tàn nhẫn",
        ],
        answer: -1,
    },
    {
        no: 27,
        question: "Mọi người nên để mọi thứ",
        options:[
            "diễn ra một cách kĩ lưỡng",
            "diễn ra một cách tự nhiên",
        ],
        answer: -1,
    },
    {
        no: 28,
        question: "Bạn thấy thoải mái hơn khi",
        options:[
            "đã mua được một thứ gì đó",
            "có điều kiện để mua",
        ],
        answer: -1,
    },
    {
        no: 29,
        question: "Trong công ty, bạn thường",
        options:[
            "khởi xướng câu chuyện",
            "đợi người khác bắt đầu cuộc nói chuyện",
        ],
        answer: -1,
    },
    {
        no: 30,
        question: "Với những logic đã được chấp nhận, bạn sẽ",
        options:[
            "tin tưởng và không có nghi ngờ",
            "xem xét lại tính đúng sai",
        ],
        answer: -1,
    },
    {
        no: 31,
        question: "Bạn cảm thấy trẻ em thường không",
        options:[
            "tự mình phát huy hết năng lực",
            "thỏa mãn hết trí tưởng tượng của bản thân",
        ],
        answer: -1,
    },
    {
        no: 32,
        question: "Khi đưa ra quyết định, bạn sẽ",
        options:[
            "dựa theo tiêu chuẩn, quy định",
            "dựa theo cảm xúc, cảm nhận",
        ],
        answer: -1,
    },
    {
        no: 33,
        question: "Bạn là người",
        options:[
            "chắc chắn hơn là nhẹ nhàng",
            "nhẹ nhàng hơn là chắc chăn",
        ],
        answer: -1,
    },
    {
        no: 34,
        question: "Điều đáng khâm phục hơn",
        options:[
            "Khả năng tổ chức và làm việc có phương pháp",
            "khả năng thích ứng, xoay xở trước mọi tình huống",
        ],
        answer: -1,
    },
    {
        no: 35,
        question: "Bạn đề cao",
        options:[
            "sự chắc chắn",
            "sự cởi mở",
        ],
        answer: -1,
    },
    {
        no: 36,
        question: "Đối mặt với vấn đề mới, bạn thường",
        options:[
            "thấy háo hức",
            "thấy mệt mỏi",
        ],
        answer: -1,
    },
    {
        no: 37,
        question: "Bạn thường là",
        options:[
            "người thực tế",
            "người có khả năng tưởng tượng phong phú",
        ],
        answer: -1,
    },
    {
        no: 38,
        question: "Bạn thường xem người khác",
        options:[
            "có thể làm gì hữu ích",
            "nghĩ và cảm nhận thế nào",
        ],
        answer: -1,
    },
    {
        no: 39,
        question: "Bạn thấy thoải mái hơn khi",
        options:[
            "thảo luận một vấn đề kĩ lưỡng",
            "đạt được sự nhất trí về vấn đề",
        ],
        answer: -1,
    },
    {
        no: 40,
        question: "Lý trí hay trái tim chi phối bạn hơn",
        options:[
            "lý trí",
            "trái tim",
        ],
        answer: -1,
    },
    {
        no: 41,
        question: "Bạn thích những công việc",
        options:[
            "có hợp đồng làm việc rõ ràng",
            "không trịnh trọng, không có hợp đồng",
        ],
        answer: -1,
    },
    {
        no: 42,
        question: "Bạn tìm kiếm những mọi thứ",
        options:[
            "theo thứ tự",
            "một cách ngẫu nhiên",
        ],
        answer: -1,
    },
    {
        no: 43,
        question: "Bạn thích kiểu",
        options:[
            "nhiều bạn bè nhưng không thân lắm",
            "ít bạn nhưng cực thân",
        ],
        answer: -1,
    },
    {
        no: 44,
        question: "Bạn thường dựa vào",
        options:[
            "sự việc, thông tin",
            "nguyên lí, nguyên tắc",
        ],
        answer: -1,
    },
    {
        no: 45,
        question: "Bạn hứng thú với việc gì hơn",
        options:[
            "sản xuất, phân phối",
            "thiết kế, nghiên cứu",
        ],
        answer: -1,
    },
    {
        no: 46,
        question: "Bạn thích được khen là",
        options:[
            "một người có đầu óc logic tốt",
            "một người tinh tế, tình cảm",
        ],
        answer: -1,
    },
    {
        no: 47,
        question: "Bạn thấy điều nào ở mình giá trị hơn",
        options:[
            "kiên định, vững vàng",
            "toàn tâm, cống hiến",
        ],
        answer: -1,
    },
    {
        no: 48,
        question: "Bạn thích",
        options:[
            "một công bố không đổi",
            "một tuyên bố sơ bộ, chưa chắc chắn",
        ],
        answer: -1,
    },
    {
        no: 49,
        question: "Bạn thấy thoải mái hơn",
        options:[
            "trước khi đưa ra quyết định",
            "sau khi đã đưa ra quyết định",
        ],
        answer: -1,
    },
    {
        no: 50,
        question: "Bạn thấy mình",
        options:[
            "dễ bắt chuyện với người lạ",
            "khó nói chuyện với người lạ",
        ],
        answer: -1,
    },
    {
        no: 51,
        question: "Bạn thường tin vào",
        options:[
            "kinh nghiệm bản thân",
            "linh cảm bản thân",
        ],
        answer: -1,
    },
    {
        no: 52,
        question: "Bạn thấy mình là người",
        options:[
            "thực tế hơn là khéo léo mưu trí",
            "khéo léo mưu trí hơn là thực tế",
        ],
        answer: -1,
    },
    {
        no: 53,
        question: "Theo bạn ai đáng được khen ngợi",
        options:[
            "người giàu lý trí",
            "người giàu cảm xúc",
        ],
        answer: -1,
    },
    {
        no: 54,
        question: "Bạn có xu hướng nhiều hơn về",
        options:[
            "công bằng, vô tư",
            "thông cảm, đồng cảm",
        ],
        answer: -1,
    },
    {
        no: 55,
        question: "Mọi việc sẽ hợp lý hơn nếu",
        options:[
            "được chuẩn bị trước",
            "diễn ra tự nhiên",
        ],
        answer: -1,
    },
    {
        no: 56,
        question: "Mọi việc",
        options:[
            "có thể nói chuyện để giải quyết",
            "nên diễn ra ngẫu nhiên tùy hoàn cảnh",
        ],
        answer: -1,
    },
    {
        no: 57,
        question: "Khi chuông điện thoại reo, bạn sẽ",
        options:[
            "là người đầu tiên nhấc máy",
            "hi vọng có người khác nhấc máy",
        ],
        answer: -1,
    },
    {
        no: 58,
        question: "Bạn đánh giá cao điều gì trong mình",
        options:[
            "cảm nhận tốt các yếu tố thực tế",
            "trí tưởng tượng phong phú",
        ],
        answer: -1,
    },
    {
        no: 59,
        question: "Bạn chú ý hơn đến",
        options:[
            "nguyên tắc, nguyên lý cơ bản",
            "ngụ ý, hàm ý",
        ],
        answer: -1,
    },
    {
        no: 60,
        question: "Bạn không thích những người",
        options:[
            "quá nồng nhiệt",
            "quá khách quan",
        ],
        answer: -1,
    },
    {
        no: 61,
        question: "Bạn đánh giá mình là người",
        options:[
            "thiết thực ít bị chi phối bởi tình cảm",
            "đa cảm",
        ],
        answer: -1,
    },
    {
        no: 62,
        question: "Tình huống lôi kéo bạn",
        options:[
            "tình huống rõ ràng có kế hoạch",
            "tình huống không xác định, không có kế hoạch",
        ],
        answer: -1,
    },
    {
        no: 63,
        question: "Bạn có xu hướng",
        options:[
            "theo thói quen",
            "hay thay đổi",
        ],
        answer: -1,
    },
    {
        no: 64,
        question: "Bạn có xu hướng",
        options:[
            "dễ tiếp cận",
            "kín đáo",
        ],
        answer: -1,
    },
    {
        no: 65,
        question: "Khi viết, bạn thích",
        options:[
            "viết văn chương hơn",
            "viết theo số liệu, dữ liệu hơn",
        ],
        answer: -1,
    },
    {
        no: 66,
        question: "Điều gì là khó hơn",
        options:[
            "hiểu và chia sẻ với người khác",
            "sử dụng người khác",
        ],
        answer: -1,
    },
    {
        no: 67,
        question: "Bạn mong muốn có thêm",
        options:[
            "lí trí suy xét rõ ràng",
            "tình thương, lòng trắc ẩn",
        ],
        answer: -1,
    },
    {
        no: 68,
        question: "Điều lỗi hơn khi",
        options:[
            "hành động bừa bãi k cân nhắc",
            "hành độn chỉ trích, phê phán",
        ],
        answer: -1,
    },
    {
        no: 69,
        question: "Bạn thích",
        options:[
            "sự kiện có kế hoạch trước",
            "sự kiện không có kế hoạch trước",
        ],
        answer: -1,
    },
    {
        no: 70,
        question: "bạn thiên về",
        options:[
            "hành động cẩn trọng",
            "hànhd động tự nhiên, tự phát",
        ],
        answer: -1,
    }
];