function openSelectedCV() {
    var selectElement = document.getElementById("cv-select");
    var selectedValue = selectElement.value;
    if (selectedValue) {
        window.open(selectedValue, "_blank");
    }
}

function openCV(cvFileName) {
    window.open(cvFileName, '_blank');
}
