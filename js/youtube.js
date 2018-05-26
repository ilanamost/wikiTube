

function runSearchYoutube(value) {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet
              &videoEmbeddable=true&type=video&key=AIzaSyAedONMQHKFLftgPTOwNJLwVQA7GpEKClw&q=${value}`)
        .then(function (res) {
            renderTop5(res);
            var videoUrl = "https://www.youtube.com/embed/" + res.data.items[0].id.videoId;
            renderVideo(videoUrl, value);
        })
}

function renderTop5(res) {
    var strHtmls = '';
    var items = res.data.items;

    items.forEach(function (item) {
        var thumbnail = item.snippet.thumbnails.default.url;
        var videoUrl = "https://www.youtube.com/embed/" + item.id.videoId;
        var title = item.snippet.title;
        var strHtml = `<li onclick="renderVideo('${videoUrl}')">
                       <img src="${thumbnail}"/>
                       <p>${title}</p>
                       </li>`;
        strHtmls += strHtml;
    });

    var elList = document.querySelector('.list');
    var elUl = elList.querySelector('ul');
    elUl.innerHTML = strHtmls;
}

function renderVideo(url) {
    var elFrame = document.querySelector('iframe');
    elFrame.src = `${url}`;
}