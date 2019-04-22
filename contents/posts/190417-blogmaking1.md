---
title: '블로그를 위한 React Framework 고르기'
categories:
- project-foregroundone
date: '2019-04-17'
intro: 'React를 사용해서 가장 간단하게 블로그를 만들 수 있는 방법을 탐색했습니다.'
---

# 첫번째 단계: 툴 탐색

중요하게 생각했던 조건들은 다음과 같습니다: 
* 리액트를 사용해서 만든다
* SEO(Search Engine Optimization: 검색엔진최적화)가 쉽게 될 것
* 컨텐츠 추가가 자유롭다

와 같은 조건을 만족하는 툴을 탐색하여 보았습니다.

그리하여 다음과 같은 후보들이 떠올랐습니다: 
1. [Create React App](https://github.com/facebook/create-react-app)
2. [Gatsby](https://www.gatsbyjs.org/)
3. [Next.js](https://nextjs.org/)

## 간단한 설명
Create React App(CRA)은 가장 간단하고 대표적인 리액트 앱 생성기입니다. Gatsby는 리액트로 작성된 앱을 스태틱 파일로 익스포트해 웹에 쉽게 호스팅 할 수 있게 해주는 프레임워크, Next.js는 쉬운 라우팅이 특징인 서버사이드 렌더링 프레임워크입니다.

# 두번째 단계: 비교

## 추후 확장성
CRA, Gatsby는 클라이언트 사이드만 지원하기 때문에 기능 확장이 덜 자유롭다는 단점이 있었습니다.  넥스트는 커스텀 서버를 사용하여 간단한 백엔드 프로그래밍이 가능합니다. 

## SEO와 서버사이드 렌더링

개츠비, 넥스트 둘다 완전히 렌더링된 HTML을 서버가 반환합니다. 검색엔진이 쉽게 읽을 수 있어서
블로그 접근성이 높아집니다.

Create React App은 서버사이드 렌더링을 적용하기 어렵기 때문에 아쉽지만 여기서 탈락입니다. 


## 스태틱 파일 호스팅

개츠비는 처음부터 스태틱 파일 호스팅을 위해 만들어진 프레임워크입니다.

넥스트는 SSR 프레임워크이지만 [스태틱 HTML 익스포트](https://nextjs.org/docs#static-html-export)
기능이 있어 스태틱 파일 호스팅으로 갈아탈 수도 있어요.


## 컨텐츠 관리

개츠비는 GraphQL을 통한 컨텐츠 관리 방법이 따로 존재합니다.

포스팅은 마크다운으로 작성할 계획이었고, front matter(마크다운에서 헤더 역할)만 잘 파싱해서 쓸 수 있다면 개츠비의 컨텐츠 관리 체계를 이해할 필요가 없을 것 같아 넥스트에서 다음과 같이 구현해 보기로 하였습니다:

* [설정된 마크다운 파서](https://github.com/cloud9esc/blog/blob/master/lib/parser.js) 와
* [리포지토리](https://github.com/cloud9esc/blog/blob/master/lib/repository.js)

를 조합해서 간단한 포스트 API를 구현했습니다.
