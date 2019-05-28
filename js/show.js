function Show(val) {
    var idElement = document.getElementById("show" + val);
    var classElements = document.querySelectorAll(".accordeon__content");
    var idArray = document.getElementsByClassName('fas fa-minus');
    var flag = document.getElementById(val);
    if (idElement.style.display == 'none') {
        for (var i = 0; i < classElements.length; i++) {
            classElements[i].style.display = "none";
        }
        for (var j = 0; j < idArray.length; j++) {
            idArray[j].className = 'fas fa-plus';
        }
        idElement.style.display = "block";
        flag.className = 'fas fa-minus';
    } else {
        console.log(idElement);
        idElement.style.display = "none";
        flag.className = 'fas fa-plus';
    }
}

function ShowSearch() {
    var id = document.getElementById('search__input');
    if (id.style.display == 'none') {
        id.style.display = "flex";
    } else {
        id.style.display = "none";
    }
}