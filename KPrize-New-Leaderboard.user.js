// ==UserScript==
// @name        KPrize New Leaderboard
// @namespace   Violentmonkey Scripts
// @match       https://www.kaggle.com/competitions/konwinski-prize/leaderboard*
// @grant       none
// @version     1.0
// @author      Smart Manoj
// @description 3/1/2025, 6:47:20 PM
// ==/UserScript==

// https://www.kaggle.com/competitions/konwinski-prize/discussion/563798
function getScore(a, b, c) {
    if (a === 0) {
        return -1.0;
    }
    return (a - b - c / 10000) / (a + b + c);
}

function calculateResults(score) {
    let bestMatch = null;
    let bestError = 1;
    for (let nCorrect = 0; nCorrect < 72; nCorrect++) {
        for (let nWrong = 0; nWrong < 72 - nCorrect; nWrong++) {
            let nSkipped = 71 - nCorrect - nWrong;
            let scoreTry = getScore(nCorrect, nWrong, nSkipped);
            let error = Math.abs(score - scoreTry);
            if (error < bestError) {
                bestError = error;
                bestMatch = [nCorrect, nWrong, nSkipped];
            }
        }
    }
    return [bestMatch, bestError];
}

function updateLeaderboard() {
    score_header = document.querySelector('#site-content > div:nth-child(2) > div > div > div.sc-hxIGLx.hjmoty > div:nth-child(5) > ul > li:nth-child(1) > div > span.sc-eUlrpB.sc-EBWJC.bhRUwc.chGCIC')
    if (score_header.parentElement.childElementCount==7){
      score_header.insertAdjacentHTML('afterend', '<span class="sc-eUlrpB sc-eigkBd kxkOnC jkddsd">N Correct</span><span class="sc-eUlrpB sc-eigkBd kxkOnC jkddsd">N Wrong</span><span class="sc-eUlrpB sc-eigkBd kxkOnC jkddsd">N Skipped</span>')
    }

    list = document.querySelector('#site-content > div:nth-child(2) > div > div > div.sc-hxIGLx.hjmoty > div:nth-child(5) > ul')
    totalrows = list.querySelectorAll('li')

    for (let i = 0; i < totalrows.length; i++) {
        try {
            row = totalrows[i]
            if (row.firstChild.childElementCount!=7)continue
            score= row.querySelector('span:nth-child(4)').innerText

            data= calculateResults(score)[0]
            for (let i = 0; i < 3; i++) {
                const element = data[2-i];
                    html = `<span class="sc-eUlrpB sc-eigkBd kxkOnC jkddsd">${element}</span>`
                    row.querySelector('span:nth-child(4)').insertAdjacentHTML('afterend', html)
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log('Leaderboard updated');
}


window.addEventListener('load', function() {

  document.addEventListener('keydown', function(event) {
      if (event.altKey && event.key === 'u') {
        console.log('Leaderboard updated');
        updateLeaderboard();
      }
    });
  setTimeout(updateLeaderboard, 3000);
});
