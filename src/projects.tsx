import img1 from './img/mgt_terminal.svg'
import gif1 from './img/popithere.gif'

const projects_list = [
    {
        "card_title": "mgt (monorepo git tools)",
        "card_text": "A command line interface program that automates bidirectional sync between multiple git repositories.",
        "card_img": img1,
    },
    {
        "card_title": "Scrobble",
        "card_text": "A browser implementation of the popular board game. Some friends of mine wanted to play scrabble a while ago so I made it work in the browser so we could play together for free",
        "card_img": "https://raw.githubusercontent.com/nikita-skobov/scrobble/master/.github/board.png" 
    },
    {
        "card_title": "Popithere!",
        "card_text": "A website where users can create images/gifs to upload to the site, and then pop onto a canvas shared by everyone live in real time.",
        "card_img": gif1,
    },
    {
        "card_title": "url-completion",
        "card_text": "An odd hack that allows bash auto completion of URLs found from your currently open tabs.",
        "card_img": "https://github.com/nikita-skobov/url-completion/raw/master/example.gif"
    }
]

export default projects_list
