const projectsData = [
  {
    title: 'Ted',
    description: 'Wrote a vim replacement because I love it so much with a friend, also have no life.',
    imgSrc: '/static/images/pp/ted.png',
    href: 'https://github.com/abhishekshree/ted',
  },
  {
    title: 'Engn',
    description: 'Wrote a dummy trading and order matching engine with guarantees of matching in Rust while learning the language.',
    imgSrc: '/static/images/pp/engn.png',
    href: 'https://github.com/abhishekshree/engn',
  },
  {
    title: 'GrowSimplee Route Optimization',
    description: 'Attempted to solve the travelling salseman problem with additional real-life constraints and created an end to end product for the same.',
    imgSrc: '/static/images/pp/gs.png',
    href: 'https://github.com/abhishekshree/GrowSimplee',
  },
  {
    title: 'Fcache',
    description: 'Caching based on a distributed system implemented in golang over a custom protocol.',
    imgSrc: '/static/images/pp/fcache.png',
    href: 'https://github.com/abhishekshree/fcache',
  },
  {
    title: 'Feral',
    description: 'Contributed a gitter8 template to the feral serverless for generating a simple lambda in scala (typelevel).',
    imgSrc: '/static/images/pp/feral.png',
    href: 'https://github.com/typelevel/feral.g8',
  },
  {
    title: 'Immutable SegTrees',
    description: 'This implementation consists of a Scala class depicting behavior of standard segment trees but the states of each node being immutable.',
    imgSrc: '/static/images/pp/segtree.png',
    href: 'https://github.com/spo-iitk/immutable-segment-tree',
  },
  {
    title: 'RAS-CDN',
    description: 'An attempt to make a self hosted Content Delivery System keeping in mind latency and correctness in the files delivered.',
    imgSrc: '/static/images/pp/cdn.png',
    href: 'https://github.com/spo-iitk/ras-cdn',
  },
  {
    title: 'Firewall Filtering and FHE',
    description: 'Implemented firewall based packet filtering and a prototype for fully homomorphic encryption based on paillier encryption.',
    imgSrc: '/static/images/pp/packet.png',
    href: 'https://github.com/abhishekshree/cybersecurity-engage',
  },
  {
    title: 'Simulating MultiNode Communication',
    description: 'Wrote a simple simulation in C++ to demonstrate how data (vectors) can be transmitted over multiple receivers by one or many senders.',
    imgSrc: '/static/images/pp/senders.png',
    href: 'https://github.com/abhishekshree/SKA',
  },
  {
    title: 'Digital Alpha SaaS Analyzer',
    description:
      'Prepared a solution for the High Problem Statement of Digital Alpha to develop a scalable web application on a custom ML model to analyze large SEC fillings and get SaaS metrics of given companies',
    imgSrc: '/static/images/pp/digitalalpha.png',
    href:
      'https://docs.google.com/presentation/d/1zgRrYwIt0juemg0FGrPXUjsLX2gD7f9wmv1iU7j4Gxo/edit?usp=sharing',
  },
  {
    title: 'PubSub',
    description: `Wrote a PubSub for in-process communication between multiple goroutines over channels. Channels in Go are powerful. Difficult questions of ownership and ordering still arise, and it's instructive to think through a single problem from multiple angles.`,
    imgSrc: '/static/images/pp/pubsub.png',
    href: 'https://github.com/abhishekshree/pubsub',
  },
  {
    title: 'Container Zoo',
    description: `A repository where I am storing the (useful?) containers I've created/came across till now.`,
    imgSrc: '/static/images/pp/container-zoo.jpg',
    href: 'https://github.com/abhishekshree/container-zoo',
  },
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
