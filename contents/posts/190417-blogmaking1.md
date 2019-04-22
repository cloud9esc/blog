---
title: '블로그 시작하기: Next.js 초기화'
categories:
- project-foregroundone
date: '2019-04-17'
intro: '가장 간단하게 React를 사용해서 블로그를 만들 수 있는 방법을 탐색 해 보았더니 넥스트가 또'
---

# 첫번째 단계: 툴 탐색

중요하게 생각했던 조건들은 다음과 같았다: 
* 리액트를 사용해서 만든다
* ssr이 쉽게 될 것
* 컨텐츠 추가가 자유롭다

와 같은 조건을 만족하는 툴을 탐색하여 보았다.

그리하여 다음과 같은 후보들이 떠올랐다: 
1. [Create React App](https://github.com/facebook/create-react-app)
2. [Gatsby](https://www.gatsbyjs.org/)
3. [Next.js](https://nextjs.org/)


```scss
@import '../styles/common';

.Post {
  border: 3px solid $border-white;
  padding: 20px 20px 20px 20px;

  .Post__body {
    * {
      line-height: 1.8;
    }
    > * {
      margin-bottom: 15px;
      @include media-breakpoint-up(sm) {
        padding-left: 70px;
      }
      @include media-breakpoint-up(md) {
        padding-left: 300px;
      }
    }
  }
}
```