$(document).ready(function () {
  $('#load-text').load('http://numbersapi.com/1/30/date?json', function (responseText, statusText, xhr) {
    if (statusText == "error") {
      $('#load-text').text("Error loading text: " + xhr.status + " " + xhr.statusText);
    } else {
      $('#load-text').text(responseText);
    }
  });

  $(function () {
    $("aks-file-upload").aksFileUpload({
      fileUpload: "#file",
      fileType: ["pdf", "docx", "rtf", "jpg", "jpeg", "png", "webp", "gif"],
      dragDrop: true,
      maxSize: "50 MB",
      multiple: false,
      maxFile: 5,
      ajaxUpload: true,
      ajax: {
        directlyLoad: false,
        url: "http://localhost:3000/upload",
        type: "POST",
        contentType: false,
        processData: false,
        cache: false,
        async: true,
        enctype: "multipart/form-data"
      },
    });
  });
});