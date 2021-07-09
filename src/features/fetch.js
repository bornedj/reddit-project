// let url = "https://www.reddit.com/r/dankmemes/hot.json";
// function will receive a link then go get the json from that link

const fetchData = (url) => {
    return fetch(url).then((response) => response.json());
}

export const fetchWrapper = async (url) => {
    const data = await fetchData(url);
    return data
}