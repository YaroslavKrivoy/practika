function ShowSearch() {
    var id = document.getElementById('search__input');
    if (id.style.display == 'none') {
        id.style.display = "flex";
    } else {
        id.style.display = "none";
    }
}