/*
EXAMPLE:
  {
    title: 'A Search Engine',
    description: `What is you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten handphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
*/

const projectsData = [
  {
    title: 'Webserver in C++',
    description: `Wrote a simple webserver using websockets purely in C++. The webserver listens on port 8080, which is the default port. Learnt how webservers communicate with the client to process requests.`,
    imgSrc: '/static/images/pp/webserver.png',
    href: 'https://github.com/abhishekshree/webserver-cpp',
  },
  {
    title: 'Handpose detection using tensorflow',
    description: `This project is based on MediaPipe Handpose, a lightweight ML pipeline . Currently it detects the thumbs up and peace emojis with hand gestures. Through this project I explored about the ideas on Convolutional Neural Networks and AR.`,
    imgSrc: '/static/images/pp/tfjs.jpeg',
    href: 'https://abhishekshree.github.io/handpose-emote-detection/',
  },
  {
    title: 'IITK Coin',
    description: `Developed a centralised pseudo-coin system in golang (fiber) for use in IITK Campus. Involved Database Management, password authentication with hashing & salting and session validation with JSON Web Tokens(JWTs), concurrency and deadlock prevention, discussed in detail in the github repository.`,
    imgSrc: '/static/images/pp/coin.png',
    href: 'https://github.com/abhishekshree/iitk-coin',
  },
  {
    title: 'Gnix',
    description: `I did this project as a part of learning golang. This consists of implementing some famous *nix shell commands like ls, grep, etc. Also this projects helped me in understanding how Makefiles work. Indeed it was a nice experience overall.`,
    imgSrc: '/static/images/pp/gnix.png',
    href: 'https://github.com/abhishekshree/gnix',
  },
  {
    title: 'CTF',
    description: `Created a CTF challenge based on web exploits as an entrypoint to learn basic concepts such as cookies, requests, crawlers, etc. as a part of ACA's fullstack web development project. Feel free to climb up the leaderboard (please write me an email in case the webiste is down when you find this) :p`,
    imgSrc: '/static/images/pp/ctf.png',
    href: 'http://aca.pythonanywhere.com/',
  },
  {
    title: 'Chat Application',
    description: `Created a chat application as a part of learning android development. This app is based on Java and is powered by Firebase. Learned how firebase auth, storage and database. Also learned to implement recyclerView in applications.`,
    imgSrc: '/static/images/pp/chat.png',
    href: 'https://github.com/abhishekshree/Android-Project',
  },
  {
    title: 'Sudoku Solver',
    description: `Created this mini project while studying about recursion in ESC101. Backtracking is pretty cool in board games. It is currently hosted on heroku, so the website may take some time to load.`,
    imgSrc: '/static/images/pp/sudoku.png',
    href: 'https://solve-sudoku-fast.herokuapp.com/',
  },
] 

export default projectsData
