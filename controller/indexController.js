const week = 3;

$(document).ready(function () {
    //disable form submit
    $('form').submit(false);

    configureStudyWeek();
    const stuName = localStorage.getItem("name");
    const stuNumber = localStorage.getItem("number");
    if (stuName) {
        $("#studentNameInput").val(stuName);
    }
    if (stuNumber) {
        $("#studentIDInput").val(stuNumber);
    }
});

function configureStudyWeek() {
    $("#studentWeek").html(week);
}

function processForm() {
    const studentName = $("#studentNameInput").val();
    const studentNumber = $("#studentIDInput").val();
    localStorage.setItem("name", studentName);
    localStorage.setItem("number", studentNumber);

    const requestObj = {
        "studentName": studentName,
        "studentNumber": studentNumber,
        "week": week
    };

    $.ajax({
        type: 'POST',
        url: '<Server>',
        data: JSON.stringify(requestObj), // or JSON.stringify ({name: 'jonas'}),
        success: function (data) {
            window.location.replace('complete.html');
        },
        error: function (xhr) {
            console.error(xhr.status + ': ' + xhr.responseText);
        },
        contentType: "application/json",
        dataType: 'json'
    });
}
