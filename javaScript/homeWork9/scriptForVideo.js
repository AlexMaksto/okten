{
    function Music(title, author, mp3) {
        this.title = title;
        this.author = author;
        this.mp3 = mp3;
    }

    const itemGridItem = document.body.getElementsByClassName('item-grid-item');
    for (const element of itemGridItem) {
        const title = element.getElementsByClassName('item-grid-card__title')[0].innerText;
        const author = element.getElementsByClassName('item-grid-music-preview__author')[0].innerText;
        const mp3 = element.getElementsByTagName('audio')[0].currentSrc;
        console.log(new Music(title, author, mp3));
    }
}

