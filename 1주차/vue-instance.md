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

#### vm.$data
인스턴스 옵션 `data`의 프록시

#### vm.$props
인스턴스 옵션 `props`의 프록시

#### vm.$el
Vue 인스턴스의 HTML 요소([HTMLElement](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement))

#### vm.$attr
현재 컴포넌트에서 주어진 HTML 속성(어트리뷰트) 중에서 props로 인식되지 않은 속성을 뜻함

#### vm.$set
반응형으로 선언된 값을 업데이트하는 메소드 ($set은 일반적인 대입으로도 작동한다.)

#### vm.$delete
선언된 값을 제거하는 메소드

#### vm.$emit
인자로 주어진 이벤트를 트리거한다. 이벤트 이름은 자유롭게 할당할 수 있다.
    - 외부에 있는 다른 인스턴스에게 현재 인스턴스에 이벤트가 발생했다는 사실을 알리는 역할
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
