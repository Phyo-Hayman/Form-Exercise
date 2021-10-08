function myFunction() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    if (fname, lname === "") {
        alert("必須の項目を入力ください！");
        window.scrollTo("#name-1");
        return false;
    } else {
        document.getElementById("output-name").innerHTML = fname + " " + lname;
    }

    var gender1 = document.getElementById("gender-1");
    var gender2 = document.getElementById("gender-2");
    if (gender1.checked === true) {
        document.getElementById("output-gender").innerHTML = "男性";
    } else {
        document.getElementById("output-gender").innerHTML = "女性";
    }

    var post_code_1 = document.getElementById("post_code_1").value;
    var post_code_2 = document.getElementById("post_code_2").value;
    var address = document.getElementById("address").value;
    document.getElementById("output-address").innerHTML = "テ" + post_code_1 + " －" + +post_code_2 + address;

    var phone = document.getElementById("phone").value;
    if (phone === "") {
        alert("必須の項目を入力ください！");
        window.scrollTo("#phone");
        return false;
    } else {
        document.getElementById("output-phone").innerHTML = phone;
    }

    var mail = document.getElementById("mail").value;
    var re_fill_mail = document.getElementById("re_fill_mail").value;
    var re_check_mail = document.getElementById("re_check_mail");
    if (re_fill_mail !== mail) {
        re_check_mail.style.display = "block";
        window.scrollTo("#re_fill_mail");
        return false;
    }

    if (mail === "") {
        alert("必須の項目を入力ください！");
        window.scrollTo("#mail");
        return false;
    } else {
        document.getElementById("output-mail").innerHTML = mail;
        document.getElementById("output-re_fill_mail").innerHTML = re_fill_mail;
    }

    if (document.getElementById("contact_type").value == "0") {
        document.getElementById("output-contact_type").innerHTML = "勉強会について";
    }

    if (document.getElementById("contact_type").value == "1") {
        document.getElementById("output-contact_type").innerHTML = "レクチャー用の書類提出";
    }

    if (document.getElementById("contact_type").value == "2") {
        document.getElementById("level_box").style.display = "block";
        document.getElementById("output-contact_type").innerHTML = "新しいクラスの情報";
    }

    if (document.getElementById("contact_type").value == "3") {
        document.getElementById("output-contact_type").innerHTML = "個人プロジェクトの窓口";
    }

    if (document.getElementById("contact_type").value == "4") {
        document.getElementById("output-contact_type").innerHTML = "定例ミーティングの欠席に関する連絡";
    }

    if (document.getElementById("contact_type").value == "5") {
        document.getElementById("output-contact_type").innerHTML = "それぞれのご意見";
    }

    var contact_type_level = document.getElementById("contact_type_level").value;
    if (contact_type_level === '') {
        window.alert('レベルと資格を入れてください。');
        return false;
    } else {
        document.getElementById("output-contact_type_level").innerHTML = contact_type_level;
    }

    var content_detail = document.getElementById("content_detail").value;
    document.getElementById("output-content_detail").innerHTML = content_detail;

    var checkbox = document.getElementById("checkbox");
    if (checkbox.checked == true) {
        document.getElementById("output-checkbox").innerHTML = "true";
    } else {
        document.getElementById("output-checkbox").innerHTML = "false";
    }

    var x, y;
    x = document.getElementById("contact_input_data");
    y = document.getElementById("contact_output_data");

    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none"
    }
}

function displayDivDemo(id, elementValue) {
    document.getElementById(id).style.display = elementValue.value == 2 ? 'block' : 'none';
}