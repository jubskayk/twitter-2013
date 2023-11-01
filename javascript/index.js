window.onload = async function() {
    const url = "https://newsapi.org/v2/everything";
    const apiKey = "4d127a6091984a38b580b6012a6d81a7";

    const response = await fetch(`${url}?${new URLSearchParams({
        q: 'brazil dev',
        from: '2023-10-01',
        sortBy: 'publishedAt',
        apiKey
    })}`, {
        method: 'GET'
    })

    const result = await response.json();

    if(result.status === 'ok'){
        const divStream = document.getElementById('stream');

        result.articles.forEach(articles => {
            divStream.innerHTML += `
            <div class="tweet">
            <div class="content">
              <img class="avatar" src="${articles.urlToImage}" />
              <strong class="fullname">${articles.author}</strong>
              <span class="username">@${articles.author?.toLowerCase().replaceAll(' ', '_')}</span>

              <p class="tweet-text">${articles.description}</p>
              <div class="tweet-actions">
                <ul>
                  <li><span class="icon action-reply"></span> Reply</li>
                  <li><span class="icon action-retweet"></span> Retweet</li>
                  <li><span class="icon action-favorite"></span> Favorite</li>
                  <li><span class="icon action-more"></span> More</li>
                </ul>
              </div>

              <div class="stats">
                <div class="retweets">
                  <p class="num-retweets">30</p>
                  <p>RETWEETS</p>
                </div>
                <div class="favorites">
                  <p class="num-favorites">6</p>
                  <p>FAVORITES</p>
                </div>
                <div class="users-interact">
                  <div>
                    <img src="img/alagoon.jpg" />
                    <img src="img/vklimenko.jpg" />
                  </div>
                </div>
                <div class="time">1:04 PM - 19 Sep 13</div>
              </div>
            </div>
          </div>
            `
        })
    }
}