<h1 align='center'>Pokecha(포켓챠)</h1>

<p align='center'> 포켓몬빵을 못사는 서러움을 풀고자 만들어낸 웹 사이트 '포켓챠' 입니다.
띠부띠부씰을 원없이 모아보세요! </p>

<div align='center'>
  <h2>
    <a href='https://stately-marzipan-5df473.netlify.app/' target='_blank'>
      https://stately-marzipan-5df473.netlify.app/
    </a>
  </h2>
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/54323527/183843208-92f7d8f2-eeea-46c9-98e1-b43d63e53e3e.jpg" alt="지우의 각오" />
</div>


## `Tech Stack`

common  
[![React Badge](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)]()
[![TypeScript Badge](https://img.shields.io/badge/Typescript-235A97?style=flat-square&logo=Typescript&logoColor=white)]()   
style   
[![styled Badge](https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)]()    
state   
[![react-query Badge](https://img.shields.io/badge/reactQuery-000?style=flat-square&logo=recoil&logoColor=white)]()
[![recoil Badge](https://img.shields.io/badge/recoil-000?style=flat-square&logo=recoil&logoColor=white)]()

<br/>


## `DEV mode Scripts`

> `> npm i`   
> `> npm run start`

<br/>

## `Structure`
```
src
 ┣ components
 ┃ ┣ common
 ┃ ┃ ┣ EmptyData.tsx
 ┃ ┃ ┣ Filter.tsx
 ┃ ┃ ┣ FilterTag.tsx
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┣ List.tsx
 ┃ ┃ ┣ Modal.tsx
 ┃ ┃ ┣ Nav.tsx
 ┃ ┃ ┣ PokemonDetailModal.tsx
 ┃ ┃ ┣ ScrollInit.tsx
 ┃ ┃ ┣ ScrollTop.tsx
 ┃ ┃ ┣ SearchInput.tsx
 ┃ ┃ ┗ Skeleton.tsx
 ┃ ┣ gacha
 ┃ ┃ ┣ Bread.tsx
 ┃ ┃ ┗ GachaContainer.tsx
 ┃ ┣ home
 ┃ ┃ ┣ HomeContainer.tsx
 ┃ ┃ ┣ PokemonCard.tsx
 ┃ ┃ ┗ PokemonList.tsx
 ┃ ┗ my
 ┃ ┃ ┣ ListModeButtons.tsx
 ┃ ┃ ┗ MyPageContainer.tsx
 ┣ hooks
 ┃ ┣ useDebounce.tsx
 ┃ ┗ useIntersection.tsx
 ┣ lib
 ┃ ┣ api
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ pokemon.ts
 ┃ ┣ store
 ┃ ┃ ┣ client
 ┃ ┃ ┃ ┣ modal.ts
 ┃ ┃ ┃ ┗ user.ts
 ┃ ┃ ┗ server
 ┃ ┃ ┃ ┣ index.ts
 ┃ ┃ ┃ ┗ pokemon.ts
 ┃ ┣ util
 ┃ ┃ ┗ index.ts
 ┃ ┣ constant.ts
 ┃ ┗ lang_list.json
 ┣ pages
 ┃ ┣ Gacha.tsx
 ┃ ┣ Home.tsx
 ┃ ┗ MyPage.tsx
 ┣ static
 ┃ ┣ images
 ┃ ┗ svg
 ┣ style
 ┃ ┣ GlobalStyle.ts
 ┃ ┣ media.ts
 ┃ ┣ palette.ts
 ┃ ┣ theme.ts
 ┃ ┗ transition.ts
 ┣ App.tsx
 ┗ index.tsx
