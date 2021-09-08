# 50 Projects in 50 Days

> https://www.udemy.com/course/50-projects-50-days

퇴근 후 매일 하나씩 따라하고 숙지하면서 html, css, js 테크닉을 익히기 위한 프로젝트

## Notes

### Day - 0 | Bolierplate Template 

* 보일러 플레이트 작성

### Day - 1 | Expanding Cards 

* background-size: auto 100%; 보다 cover; 를 사용하는 것이 더 좋다.
* flex layout에서 아이템 클래스에 flex를 적용하면 상대적 크기를 정할 수 있다.

### Day - 2 | Progress Steps 

* flex-direction 의 default 값은 row ( 수평 정렬 ) 이다.

### Day - 3 | Rotating Navigation 

* 이미지 넘칠 땐, max-width: 100%; 
* li + li 하면 두번째 li 부터 적용
* "+" : 인접 선택자로 부르는 선택자입니다. 앞의 요소 바로 뒤에 있는 요소만 선택합니다. 위 코드에서 각 ul 뒤에 오는 첫 번째 단락의 텍스트만 빨간색이 됩니다.

### Day - 4 Hidden Search Widget

* background color에 linear-gradient 사용하고 싶을땐 background-image
  

```css
    background-image: linear-gradient(90deg, #7d5fff, #7158e2)
```

* css 에서 클래스 이어붙이는건 한 element

```css
.search.active {}
```

```html
<element class="search active">
```

* 띄어쓰기 하는건 부모 자식

```css
.search .input {}
```

``` html 
<element class="search">
  <element class="input">

```

- ","로 구분하는건 여러개
``` css
.btn:focus, .input:focus {

}
```

```html
<element class="input" :focus>
</element>

<element class="btn" :focus>
</element>
```

* 해당 element로 focus하게 하기

```javascript
const input = document.querySelector('.input')

input.focus()
```

### Day 5 - Blurry Loading

* blur 효과룰 주고싶을때, 

```css
filter: blur(70px);
```

* blur 효과 줄때 테두리가 빈 현상이 나타다서, 30px씩 땡긴다.

```css
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vw + 60px);
```

* background image를 꽉 채우고 싶을때, cover (아닐땐 contain)

```css
background: url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80') no-repeat center center/cover;
```

* scale 조절 마법 함수

```javascript
scale(progress, 0, 100, 1, 0); // 0 부터 100사이에 있는 progress를 1부터 0 사이의 숫자로 맵핑시켜줌.

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
```

### Day 6 | Scroll Animation

* height에서 벗어난 컨텐츠가 짤릴때
  1. overflow 확인
  2. height: auto;

* 짝수번째 elements 에 적용

```css
.box:nth-of-type(even) {
    transform: translateX(-400%);
}
```

* 해당 dom의 위치 & 사이즈를 알고싶을때

```javascript
box.getBoundingClientRect();
```

### Day 7 | Split Landing Page

* css 에서 변수 사용하기

```css
/* :root 안에서 선언 */
:root {
    --left-bg-color: rgba()
}

/* 사용하기 */
background-color: var(--left-bg-color);
```

* asolute 포지션 가운데 맞추기 hack

```css
left: 50%; // 전체의 50%만큼 옮기고,
transform: translateX(-50%); // 내부 컨텐츠 크기의 50% 만큼 뒤로 빼고
```

* 자동으로 줄바꿈 하는거 막기

``` css 
white-space: nowrap; 

```

### Day - 8 | Form Input Wave

- input 에 포커스나 valid시 못생긴 outline 없애기

``` css
.form-control input:focus, .form-control input:valid {
  outline: 0;
}
```

* display: inline-block; 

> 한줄로 나란히 배치

> width, height, margin, padding 지정 가능

* 왜인지는 모르지만 button에 font-family가 inherit 되지 않아 추가 했음.

```css
  font-family: inherit;
```

> https://www.w3schools.com/cssref/css_default_values.asp

### Day - 9 | Sound Board

* Vscode studio | 같은 단어 한번 변경

> cmd + d

* 화면에서 audio 효과를 내고싶을때, html 한구석에 audio tag를 선언

```html
  <audio id="applause" src="sounds/applause.mp3"></audio>
  <audio id="boo" src="sounds/boo.mp3"></audio>
```

* audio stop하기

```javascript
const song = document.getElementById(sound)

song.pause();
song.currentTime = 0; // 시간도 0 으로 되돌리기
```

### Day - 10 | Dad Jokes

* 자간 조절

```css
letter-spacing: 2px;
```

### Day - 11 | Event KeyCodes

* javascript event keycode site

> https://keycode.info/

* inline-flex

> Inline 특성의 Flex Container를 정의 ( flex는 Block )

### Day - 12 | FAQ Collapse

* unicode로 font awesome 사용하기

```html
<!-- 현재버전은 font-family: 'Font Awesome 5 Free'; 지원이 안되는 듯.. -->
<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
```

```css
content:'\f075';
font-family: 'Font Awesome 5 Free';
```

* 부모 element 가져오기

``` javascript 
el.parentNode

```

### Day - 13 | Random Choice Picker

- 자유로운 input을 만들땐 textarea 태그 사용 ( html5 기본 태그)

- 스크립트에서 tag생성

``` javascript
const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
```

* randomInt ( 0 ~ limit )

```javascript
Math.floor(Math.random() * limit)
```

### Day - 14 | Animated Navigation

* linear-gradient 로 반땅하기

```css
background-image: linear-gradient(to bottom, #eafbff 0%, #eafbff 50%, #5290f9 50%, #5290f9 100%);
```

* ul 스타일 없애기

```css
  list-style-type: none;
```

* margin-top, margin-bottom 의 auto는 실제론 0 이다

> 수직정렬 가운데로 맞추는건 margin으로 하는건 불가능하다.

### Day - 15 | Incrementing Counter

* data-* attribute 사용하기

```html
<div class="counter" data-target="7500"></div>
```

```javascript
const counter = document.querySelector('.counter');
const data = counter.dataset;
const target = counter.getAttribute('data-target')
```

```css
.counter::before {
    content: attr(data-target);
}

.counter[data-target='7500'] {
    width: 400px;
}
```

* String -> Number

```javascript
const c = +counter.innerText
```

* Number -> String

```javascript
counter.innerText = '' + Math.ceil(c + increment)
```

* 증가하는 모션 카운더 만들기

```javascript
const updateCounter = () => {
    const target = counter.getAttribute('data-target')

    const c = +counter.innerText
    const increment = target / 200

    if (c < target) {
        counter.innerText = '' + Math.ceil(c + increment)
        setTimeout(updateCounter, 1)
    } else {
        counter.innerText = target
    }
}
```

### Day - 16 | Drink Water

* flexbox로 여러줄 만들기 > flex-wrap: wrap; 이용

```css
.cups {
    display: flex;
    flex-wrap: wrap;
    width: 280px;
}
```

* 필요하다면 display: flex 덕덕지 나쁘지 않은 듯?

* 드래그 방지

```css
user-select: none;
```

* DOM은 남기지만 보이지는 않게하기

```javascript
if (fullCups == totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
} else {
    remained.style.visibility = 'visible'
    remained.style.height = 'auto'
```

### Day - 17 | Movie App

* input에서 placehold 스타일 바꾸기

```css
.search::placeholder {
    color: #7378c5;
}
```
