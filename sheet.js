function BtnAdd() {
  // Mendapatkan elemen dengan ID "grade"
  var gradeElement = document.getElementById("grade");

  // Cek apakah elemen "grade" ditemukan
  if (gradeElement) {
    // Salin elemen "grade"
    var gradeCopy = gradeElement.cloneNode(true);

    // Kosongkan input dan select di dalam elemen yang baru disalin
    var inputElements = gradeCopy.querySelectorAll("input, select");
    inputElements.forEach(function (input) {
      input.value = ""; // Kosongkan nilai input
    });

    // Tambahkan elemen yang baru disalin ke dalam formulir
    gradeElement.parentNode.appendChild(gradeCopy);
  } else {
    console.error("Element with ID 'grade' not found.");
  }
}
function BtnDel() {
  // Mendapatkan elemen dengan ID "grade" yang terakhir
  var gradeElements = document.querySelectorAll("#grade");
  var lastGradeElement = gradeElements[gradeElements.length - 1];

  // Hapus elemen terakhir
  lastGradeElement.parentNode.removeChild(lastGradeElement);
}
