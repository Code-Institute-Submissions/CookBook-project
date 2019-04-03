let url_array = ["5c7ad2bffb6fc072012c83cc", "5c7ad43efb6fc072012c862f", "5c7b9468fb6fc072012cbeb8", "5c7b9497fb6fc072012cbed8", "5c7b94a2fb6fc072012cbedd", "5c7b94aefb6fc072012cbee1", "5c7b94b7fb6fc072012cbee3", "5c7b94c0fb6fc072012cbee4", "5c7b94cafb6fc072012cbeec", "5c7b94d4fb6fc072012cbeed", "5c7b94defb6fc072012cbeef", "5c7b94e8fb6fc072012cbef3", "5c7b94f2fb6fc072012cbef7", "5c7b94fbfb6fc072012cbef8", "5c7b9505fb6fc072012cbef9", "5c7b9510fb6fc072012cbefa", "5c7b951dfb6fc072012cbefd", "5c7b952bfb6fc072012cbeff", "5c7b9535fb6fc072012cbf00", "5c7b9483fb6fc072012cbec9", "5c7b948dfb6fc072012cbecc", "5c7b9540fb6fc072012cbf01", "5c7b954afb6fc072012cbf04", "5c7b9479fb6fc072012cbebf"];

let thumbsUpButton = document.getElementsByClassName('fa-thumbs-up')[0];
let thumbsDownButton = document.getElementsByClassName('fa-thumbs-down')[0];

// thumbsUpButton.addEventListener('click', myfunction);
// let myfunction = (trigger) => {
// 	console.log(trigger.dataset.name);
// };

let banana = recipeId;

thumbsUpButton.addEventListener('click', loadLike);
thumbsDownButton.addEventListener('click', loadDislike);

function loadLike(e) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('likes__number').innerHTML = "Likes " + response.likes;
        }
    };
    url_array.forEach(function(url) {
        if (url == banana) {
            xhr.open("POST", "/like/" + url, true);
        }
    });
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
    e.preventDefault();
}

function loadDislike(e) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('likes__number').innerHTML = "Likes " + response.likes;
        }
    };
    url_array.forEach(function(url) {
        if (url == banana) {
            xhr.open("POST", "/dislike/" + url, true);
        }
    });
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
    e.preventDefault();
}