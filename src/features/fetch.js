// let url = "https://www.reddit.com/r/dankmemes/hot.json";
// function will receive a link then go get the json from that link

const fetchData = (url) => {
    return fetch(url).then((response) => response.json());
}

export const fetchWrapper = async (url) => {
    const data = await fetchData(url);
    return data
}


//function to fetch multiple reddits
export const fetchReddits = async (props) => {
    const subredditsData = [];// will mutate
    const children = [];

    for (let url of props) {
        const oneSubreddit = await fetchWrapper(url);
        Object.entries(oneSubreddit.data.children).forEach(([idx, value]) => children.push(value))

        // console.log(children)
        subredditsData.push(children)
    }

    return subredditsData;
}
export const selectPosts = async (props) => {
    const postsToShow = [];
    const subredditsData = await fetchReddits(props);
    // console.log(subredditsData)
    // console.log(subredditsData[0])

    //while loop to select 32 posts to show
    do {
        for (let i = 0; i < subredditsData.length; i++) {
            //get value from random index in array
            let idx = Math.floor(Math.random() * subredditsData[i].length);
            let dataToAdd = subredditsData[i][idx];
            subredditsData[i] = subredditsData[i].splice(idx, 1);
            postsToShow.push(dataToAdd);
        }
    } while (postsToShow.length < 33);

    // console.log(subredditsData)
    console.log(postsToShow);
    return postsToShow;
}