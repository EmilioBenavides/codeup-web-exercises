// const myPromise = fetch(url, {headers: { EMILIO_GITHUB_TOKEN}});
const formatDate = function (date) {
    return new Date(date).toLocaleDateString()
}
const commitHistory = function (username) {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {Authorization: `token ${EMILIO_GITHUB_TOKEN}`}})
        .then(function (re) {
            return re.json()
        }).then(function (results) {
        for (let result of results) {
            if (result.type === 'PushEvent') {
                console.log(formatDate(result.created_at))
                return result.created_at;
            }
        }
    })

}
commitHistory("EmilioBenavides")


const wait = function (time) {
    new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(time);
        },time);
    });
}
wait(1000).then(r => console.log(`You'll see this after ${r/1000} seconds`));
wait(3000).then(r => console.log(`You'll see this after ${r/1000} seconds`));