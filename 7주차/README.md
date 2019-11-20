## 메모 어플리케이션 새로 알게 된 내용 들

## mapXXX
mapAction, mapMutation 등등 mapXXX 메소드를 사용해서 여러 함수를 한번에 여러개 부를 수 있는 기능

## mutations-type
상수로 문자열을 정해서 재사용하는 부분이 특이하기는 했는데... 별로 좋아보이지는 않는다.

```javascript
const FUNC_NAME = "hello";

const obj = {
  [FUNC_NAME]() {
    return "Hello World";
  }
};

document.body.innerHTML = obj["hello"](); // Hello World!
```





