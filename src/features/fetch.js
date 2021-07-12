const fetchData =  async (url) => {
    const data = await fetch(url).then((response) => response.json());
    return data;
}

//function to fetch multiple reddits
export const fetchReddits = async (props) => {
    const children = [];

    for (let url of props) {
        const oneSubreddit = await fetchData(url);
        children.push(oneSubreddit.data.children)
    }

    return children;
}

export const selectPosts = async (props) => {
    const postsToShow = [];
    const subredditsData = await fetchReddits(props);

    //while loop to select 32 posts to show
    do {
        for (let i = 0; i < subredditsData.length; i++) {
            //get value from random index in array
            let idx = Math.floor(Math.random() * subredditsData[i].length);
            let dataToAdd = subredditsData[i][idx];
            console.log(subredditsData[i].length)
            subredditsData[i].splice(idx, 1);
            console.log(subredditsData[i].length)
            postsToShow.push(dataToAdd);
        }
    } while (postsToShow.length < 33);

    // console.log(subredditsData)
    // console.log(postsToShow);
    return postsToShow;
}