const form = document.querySelector('#showForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchedShow = form.elements.query.value;
    const config = { params: { q: searchedShow } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        const img = document.createElement('IMG');
        try {
            img.src = result.show.image.medium;
            document.body.append(img)
        } catch (Exception) {
            console.log('This is a null image')
        }
    }
}