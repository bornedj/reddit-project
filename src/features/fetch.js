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
    console.log(subredditsData)

    //while loop to select 32 posts to show
    do {
        for (let i = 0; i < subredditsData.length; i++) {
            // guardian clause to check if the postsTo show is at 32
            if (postsToShow.length === 32) {
                break;
            }
            //get value from random index in array
            let idx = Math.floor(Math.random() * subredditsData[i].length);
            let dataToAdd = subredditsData[i][idx];
            subredditsData[i].splice(idx, 1);
            postsToShow.push(dataToAdd);
        }
    } while (postsToShow.length < 32);

    // console.log(subredditsData)
    // console.log(postsToShow);
    return postsToShow;
}