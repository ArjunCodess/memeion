const BUTTON = document.querySelector(".meme-generator .btn");
const IMAGE = document.querySelector(".meme-generator img");
const TITLE = document.querySelector(".meme-generator .title");
const AUTHOR = document.querySelector(".meme-generator .author");
const ANCHOR = document.querySelector(".meme-generator .anchor");
const SUBREDDIT = document.querySelector(".subreddit")

const subreddits = ["dankmemes", "indiandankmemes", "memes", "wholesomememes", "meme", "marvelmemes"];

const getRandomSubreddit = () => {
    const randomIndex = Math.floor(Math.random() * subreddits.length);
    return subreddits[randomIndex];
};

const updateDetails = (memeUrl, memeTitle, memeAuthor, memeLink) => {
    IMAGE.setAttribute("src", memeUrl);
    TITLE.innerHTML = memeTitle;
    AUTHOR.innerHTML = `Meme by: ${memeAuthor}`;
    ANCHOR.setAttribute("href", memeLink)
};

const generateMeme = () => {
    const subreddit = getRandomSubreddit();
    SUBREDDIT.innerHTML = `subreddit: ${subreddit}`;

    fetch(`https://meme-api.com/gimme/${subreddit}`)
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author, data.postLink);
        });
};

BUTTON.addEventListener("click", generateMeme);

generateMeme();
