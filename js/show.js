function Show(val) {

    if (document.getElementById("show" + val).style.display == 'none') {
        var classElements = document.querySelectorAll(".accordeon__content");
        var idArray = document.getElementsByClassName('fas fa-minus');
        var idElement = document.getElementById("show" + val);

        for (var i = 0; i < classElements.length; i++) {
            classElements[i].style.display = "none";
        }
        for (var j = 0; j < idArray.length; j++) {
            idArray[j].className = 'fas fa-plus';
        }
        idElement.style.display = "block";
        document.getElementById(val).className = 'fas fa-minus';
    } else {
        document.getElementById("show" + val).style.display = "none";
        document.getElementById(val).className = 'fas fa-plus';
    }
}