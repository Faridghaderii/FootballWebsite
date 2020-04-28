This Functions Will show and dismiss searchBox

function DismissSearch() {
    let SrchSec = document.getElementById("SearchSection");
    SrchSec.classList.remove("ShowSearch");
}

function ShowSearch() {
    let SrchSec = document.getElementById("SearchSection");
    SrchSec.classList.add("ShowSearch");
}