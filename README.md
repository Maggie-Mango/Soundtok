# SoundTok, a place to share your sound

[https://soundtok.live](https://soundtok.live/#/)

Anyone, from the casual listener and discoverer of new music to the veteran producer, will find a community on SoundTok. Put together a new track by uploading audio files from your computer or loading from saved drafts and layering different sounds and effects. Once you're satisfied, post the song with a description, image, and hashtags so others can discover your music through the feed or search bar. Keep your profile up to date, so others know who you are as an artist.

# Table of Contents

- [Nav Bar](#navigation-bar)
- [Studio](#studio)
- [Feed](#feed)
- [Hashtag Page](#hashtag-page)
- [Profile](#profile)
- [Schema](#schema-design)
- [Authentication](#authentication)
- [Tech Stack](#tech-stack--libraries)
- [Contributors](#contributors)

## Navigation Bar

## Studio

## Feed

_Main Features_

- Post music by uploding an audio file, loading from drafts, or putting together a track in the studio
- Posts include can include a title, description (limited to 140 char), and image
- Explore others' musical projects, which are sorted with most recently posted on top
- Discover relevant music and artists when clicking on a hashtag
- Remix songs that pique your interest directly in the studio
- Save unfinished posts to drafts to revisit later

GIF TO BE ADDED

## Hashtag Page

_Main Features_

- When a user clicks on or search for a hashtag, renders a list consisting of every post which contains the same hashtag
- Posts include project title, audio length, profile picture, username, and an expandable description
- Re-render the posts content when a user searches other hashtags from the page
- Add animated wave effect

## Profile

## Schema Design

## Authentication

## Tech Stack & Libraries

_Deployment/Utility_

- Circle CI
- AWS EC2
- [Jest](https://jestjs.io/)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Eslint](https://eslint.org/)

_Core Tech_

- [Node v16](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Express v4](https://expressjs.com/)
- [React v17](https://reactjs.org/docs/getting-started.html)
- [Postgres v14](https://www.postgresql.org/docs/)

_Libraries_

- [Styled-components](https://styled-components.com/)
- [Luxon](https://moment.github.io/luxon/api-docs/index.html#duration)
- [Axios](https://www.npmjs.com/package/axios)
- [Auth0](https://auth0.com/docs/)
- [Cloudinary](https://cloudinary.com/documentation)
- [Linkify.js](https://linkify.js.org/docs/)

## Contributors

[@xoxohorses](https://github.com/xoxohorses) - **Product Manager/Software Engineer** (Feed, Design, Project Management)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Julie%20Yu-blue)](https://www.linkedin.com/in/juliemyu/)

[@roastnewt](https://github.com/roastnewt) - **Architecture Owner/Software Engineer** (Deployment, CI/CD, Studio drafts)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Clayton%20Watterson-blue)]()

[@imperium11](https://github.com/imperium11) - **UI Owner/Software Engineer** (Studio, Design)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Poyraz%20Akay-blue)](https://www.linkedin.com/in/poyraz-akay/)

[@Maggie-Mango](https://github.com/Maggie-Mango) - **Software Engineer** (Database design, Deployment, API tests)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Maggie%20Saldivia-blue)](https://www.linkedin.com/in/maggiesaldivia)

[@rita0927](https://github.com/rita0927) - **Software Engineer** (Soundbar, Hashtag page, tests)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yu%20Zhang-blue)](https://www.linkedin.com/in/yuzhang734680/)

[@yuanqiwang](https://github.com/yuanqiwang) - **Software Engineer** (Authentication, Navigation bar/search)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yuanqi%20Wang-blue)](https://www.linkedin.com/in/yuanqiw/)

[@rickkunz](https://github.com/rickkunz) - **Software Engineer** (Profile page)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rick%20Kunz-blue)](https://www.linkedin.com/in/rickckunz/)
