---
title: 'BEM + React 조합의 스타일링🧚‍♂️'
categories:
- project-foregroundone
- projects
date: '2019-04-18'
intro: 'CSS 방법론 중 하나인 BEM이 React로 구현한 UI를 스타일링 하는 데 매우 편리합니다.'
---

# BEM

**Block Element Modifier** 의 줄임말입니다.
class명을 block__element--modifier 의 형태로 작성하도록 합니다.
예를 들어,
~~~html
<div class="IndexPage__button--active">
~~~ 
처럼 작성하게 됩니다.
id는 사용하지 않고, class만 사용합니다.

## Block

문서 가장 바깥쪽에서 감싸고 있는 container element를 지칭합니다. 

저는 주로 각 페이지, 또는 컴포넌트 이름으로 지정합니다. 예시의 코드는 인덱스 페이지, 즉 메인 페이지 내 한 요소의 클래스 이름이 될 것입니다. 

## Element

Block 내부에서 특정한 기능을 수행하는 요소입니다. 예시에서는 인덱스 페이지 안의 버튼을 생각해 보았습니다. 또 다른 예시로는 Navigation Component안의 Menu등을 들 수 있을 듯 합니다.

## Modifier

block, element의 속성값을 나타냅니다. 예시의 **active**는 버튼이 눌렸을 경우에 버튼의 외관이 변할 것임을 알게 해줍니다.

# With React

~~~jsx
<ul>
  {item.children.map(child => (
    <li 
      key={child.category}
      className={`Nav__subtitle ${
        child.category === selectedCategory
        ? "Nav__subtitle--active"
        : ""
      }`}>
      <Link
        href={{
          pathname: '/',
          query: { category: child.category }
        }}>
        <a>
          + {child.title}
        </a>
      </Link>
    </li>
  ))}
</ul>
~~~
제 블로그 내비게이션 메뉴에 쓰이는 코드입니다. 내비게이션 컴포넌트 전체 코드는 [이곳](https://github.com/cloud9esc/blog/blob/master/components/Nav.js)에서 보실 수 있습니다.

저는 카테고리들을 미리 객체화 해놓고 map을 돌려서 렌더를 했는데요, 현재 보고 있는 카테고리에만  active 모디파이어를 추가한 클래스명이 붙도록 작성하였습니다.

스타일링은 다음과 같습니다: 
~~~css
.Nav__subtitle {
    margin-top: 5px;
    font-size: 15px;
  }
.Nav__subtitle--active {
  >a {
    text-decoration: underline;
  }
}
~~~


## 리액트와 BEM
 BEM은 원래 코드 가독성과 재사용성을 높여주는 좋은 방법론입니다. 더불어 리액트는 Object Oriented Programming 이기 때문에 블록, 엘리먼트로 구분하기가 매우 쉽고, 현재 가지고 있는 status를 모디파이어에 넣는 것도 가능합니다. 

 **  