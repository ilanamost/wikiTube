'use strict';

var gSearches;

function init() {
    gSearches = [];
    runSearch('green');
    findSearchesAndRender();
}

function runSearch(value) {
    runSearchYoutube(value);
    runSearchWikipedia(value);
}

function searchItem(ev) {
    ev.preventDefault();
    var searchValue = document.querySelector('.search > input').value;
    runSearch(searchValue);
    findSearchValueAndRender(searchValue);
}

function findSearchesAndRender() {
    if (getFromStorage('searchItems')) {
        gSearches = getFromStorage('searchItems');
        renderSearches(gSearches);
    } else {
        saveToStorage('searchItems', gSearches);
        renderSearches(gSearches);
    }
}

function findSearchValueAndRender(searchValue) {
    if (((getFromStorage('searchItems').indexOf(searchValue)) === -1)) {
        gSearches.push(searchValue);
        saveToStorage('searchItems', gSearches);
        renderSearches(gSearches);
    }
}

function renderSearches(gSearches) {
    var strHtmls = gSearches.map(function (search) {
        var strHtml = `<div class="word">${search}</div>`;
        return strHtml;
    });

    var elSearched = document.querySelector('.searched-words');
    elSearched.innerHTML = `<span class="bold">Searched:</span>` + strHtmls;
}






