function runSearchWikipedia(term) {
    axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`)
        .then(function (res) {
            renderInfo(res);
        })
}

function renderInfo(res) {
    var items = res.data;
    var title = res.data[0];
    var titles = res.data[1];
    var paragraphs = res.data[2];
    var links = res.data[3];
    var strHtmls = '';

    items.forEach(function (item, idx) {
        var strHtml = `<div class="info-item"><p>${titles[idx]}</p>
                       <p>${paragraphs[idx]}</p>
                       <a href='${links[idx]}'>${links[idx]}</a></div>`;
        strHtmls += strHtml;
    });

    var elTitle = document.querySelector('.info > h1');
    elTitle.innerHTML = title;

    var elInfo = document.querySelector('.info-for-title');
    elInfo.innerHTML = strHtmls;
}
