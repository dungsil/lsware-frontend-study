# Vue.JS 인스턴스 및 라이프사이클

## Vue 인스턴스
```javascript
import Vue from 'vue'

new Vue({}) // vue instance
```

### Vue 인스턴스 옵션

#### data
반응형 모델 ( 특정 조건으로 값이 변경되었을 때 뷰에서 보이는 값이 같이 연동되어 변경되는 것 ) 선언
```javascript
new Vue({ // 뷰 인스턴스
	data: {
        foo: 'bar'
    }
})

// 뷰 컴포넌트
const component = Vue.extends({
    name: 'MyComponent',
    data () {
        return {
            foo: 'bar'
        }
    }
})
```
 - 일반적인 객체는 컴포넌트들이 같은 주소의 데이터를 공유(Call by reference)하기 때문에 예기치 못한 사항이 생길 수 있음
    - 일반적인 SPA에서는 큰 문제가 아니나 여러 컴포넌트를 사용하게 되면 문제가 발생할 수 있음
 - 객체를 반환하는 함수로 선언된 `data`는 각각의 데이터가 독립적으로 유지


#### props
부모 컴포넌트에서 데이터를 받아올 수 있게 노출된 속성들로 HTML의 어트리뷰트처럼 작성하여 값을 넘겨줄 수 있다.
 - 반응형 데이터를 다루도록 설계하지 않았기 때문에 일반적으로 자식 컴포넌트는 `this`를 사용하여 참조하여 다시 선언하거나 `vm.$emit`을 통해 부모 데이터를 변경해주어야 함

props 정의:
```javascript
Vue.component('MySimpleComponents', {
    props: ['error'] // 단순 표현
})

Vue.component('MyComponents', {
    props: {
        error:{
            type: Object, // props 값의 타입
            required: true, // 필수 여부
            default () { // 기본 값 (객체의 경우 함수를 이용하여 선언. 이유는 data와 동일)
                return { code: 500, message:'Server Error!' }
            },
            validator(value) { // 응답 받은 값이 유효한지 검증
                return code >= 400 && code <=599
            }
        }
    }
})

// props를 반응모델로 사용하는 예시
Vue.component('MyReativeComponents', {
    props: {
        error: {
            type: Object
            required: true
        }
    },
    data () {
        return {
            dataError: this.error
        }
    }
})
```

사용 예시:
```html
<my-components :error="{ code: 404, message: 'Page Not Found' }" />
```

#### computed
인라인으로도 자바스크립트 표현식을 사용할 수 있고, 일반적인 메소드를 사용하여도 동일한 결과가 나오겠지만
 - `computed` 내부에서 데이터가 변경되면 자동으로 값이 갱신되며 한번 계산된 값은 캐싱되기 때문에 성능 상 이점이 생김

#### methods
인스턴스에 추가되는 메소드

#### watch
인스턴스 내의 데이터 변화를 감지하여 특정 로직을 수행할때 사용됨

##### computed와의 차이점
|       | watch    | computed |
| ----- | -------- | -------- |
| 캐싱  |   X      |    O     |
| deep watch | O   |  x       |
 - 일반적인 경우 `computed`
 - 값이 변경될 때마다 값을 통하여 서버로 부터 데이터를 받아온다던가의 경우에는 `watch`


### Vue 인스턴스 목성 및 메소드

#### vm.$data, vm.$props
`data` 및 `props`의 프록시 

#### vm.$el
Vue 인스턴스의 돔 엘리먼트 (HTMLElement)

#### vm.$attr
현재 컴포넌트에서 주어진 HTML 속성(어트리뷰트) 중에서 props로 인식되지 않은 속성을 뜻함

#### vm.$set, vm.$delete
반응형으로 선언된 값을 업데이트하는 메소드 ($set은 일반적인 대입으로도 작동한다.)

#### vm.$emit
인자로 주어진 이벤트를 트리거한다. 이벤트 이름은 자유롭게 할당할 수 있다.
    - 외부에 있는 다른 인스턴스에게 현재 인스턴스에 이벤트가 발생했다는 사실을 알림
```html
<template>
    <button @click="hello" />
</template>

<script>
export default {
    name: 'Index',
    methods (){
        this.$emit('button_Click', { message: 'hello' })
    }
}
</script>
```

## Vue 라이프사이클
![#](https://kr.vuejs.org/images/lifecycle.png)

라이프사이클은 전체 DOM마운트가 아닌 해당 컴포넌트마다 각각 독립적으로 작동된다.

1. **beforeCreate**: 인스턴스가 생성될때 처음 실행되는 훅
    - 데이터와 이벤트는 생성되지 않음
2. **created**: beforeCreate 이후 데이터와 이벤트가 초기화된 직후
    - DOM이 마운트되지 않았기 때문에 DOM 조작은 불가능
    - 일반적으로 API 요청을 통해 필수 데이터가 필요할때 여기서 받아온다.
3. **beforeMount**: 마운트 되기 직전에 실행되는 훅
    - 아직 DOM 조작은 불가능하다.
4. **mounted**: DOM 마운트가 끝난상태
    - 차트나 에디터같이 DOM을 수정 후 렌더링하는 경우 해당 훅에서 렌더링된다.
5. **beforeUpdate**: 컴포넌트 마운트 후 데이터에 변화가 감지되었을때 가상돔에 데이터를 적용하고 가상돔을 렌더링하기 전 상태
    - 데이터가 변경됨에 따라 변경된 데이터를 가상DOM에 적용하는 등 가상 DOM과의 연관성이 깊다.
6. **updated**: 가상돔에 데이터가 적용되고 재렌더링되어 실제 DOM이 되었을 때 호출한다.
    - 변경된 모든 돔이 렌더링 된 후로 호출되므로 데이터 변경 후 보정 작업등이 필요할 때 사용하면 될 것 같음
7. **beforeDestroy**: Vue 인스턴스가 제거되기 전 호출
    - 인스턴스가 제거되기 전 인스턴스에 접근해서 수행해야하는 코드 작성 (이벤트 제거 등)
8. **destoryed**: Vue 인스턴스가 제거된 후 호출
    - Vue 인스턴스가 제거되었기 때문에 `this`를 사용하여 인스턴스에 접근할 수 없다.

## 템플릿 문법
```vue
<p> {{ msg }} </p>

<!-- 일회성 보간 -->
<p v-once> {{ msg }}</p>
```
HTML 코드 내의 자바스크립트 표현식을 템플릿 문법이라고 표현한다.
 - 템플릿 문법으로 사용된 변수가 반응 모델일 경우 함께 변경된다.
 - 변수를 갱신하지 않는다면 변수를 감시하는 것은 비효율 적이기 때문에 `v-once`를 통하여 일회성으로만 호출하게 사용할 수 있다. (렌더링 최적화)

 ## 디렉티브
 DOM의 모든 것을 관리할 수 있는 지시문으로 HTML 속성(어트리뷰트)처럼 사용할 수 있으며 `v-` 접두사를 가지고 있다.
 - 디렉티브의 값은 자바스크립트 표현식 사용이 가능하다.
 
 ### 디렉티브 수식어
 수식어는 `.`를 사용하는 특수 접미사로 특정 조건에 따라 기능이나 조건 추가할 수 있다.
 ```html
 <!-- 숫자형으로 캐스팅한다 -->
<input v-model.number="3" />

<!-- 마우스 우클릭 이벤트 발생 -->
<button @click.right="onRightClick">
 ```

### v-bind
HTML 값을 동적으로 바인딩하거나 (`v-html`) 컴포넌트 props에 값을 주입할 때 사용할 수 있다. `:`를 사용하여 축약하여 표현할 수 있다

```html
<!-- 동일한 코드 -->
<a v-bind:href="url"></a>
<a :href="url"></a>

<!-- 로우 데이터를 추가할 수도 있다 -->
<div :data="{ code:123 }">

클래스를 바인딩할 때 배열을 사용할 수 있다.
<div :class="['button', 'button-primary']">
```

### v-on
DOM 엘리먼트나 컴포넌트의 이벤트 리스너를 연결할 때 사용하는 디렉티브로 `@`를 사용하여 축약하여 표현할 수 있다.

### v-model
폼 요소와 같이 사용자 입력을 받을 수 있는 요소에 양방향 데이터 바인딩을 생성한다.
    - 사용자가 input요소에 입력된 값이 p 요소에 바로 반영 가능

### v-pre
하위 요소에 대하여 모든 컴파일을 스킵한다.
