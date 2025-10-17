# 자바스크립트 비동기 처리와 Promise, async/await

자바스크립트는 싱글 스레드 언어이지만, 비동기 처리를 통해 여러 작업을 동시에 수행하는 것처럼 보이게 합니다. 이는 웹 애플리케이션에서 사용자 경험을 향상시키고, 네트워크 요청과 같이 시간이 오래 걸리는 작업을 메인 스레드를 멈추지 않고 처리할 수 있도록 돕습니다. 비동기 처리를 위한 주요 패턴으로는 콜백 함수, Promise, 그리고 async/await가 있습니다.

### 1. 자바스크립트 비동기 처리 (Asynchronous Processing)

비동기 처리는 특정 코드의 연산이 완료될 때까지 전체 코드의 실행을 중단하지 않고, 다음 코드를 우선적으로 실행하는 방식입니다. 작업이 완료되면 그 결과를 나중에 전달받아 처리합니다. 이는 메인 스레드가 작업을 다른 곳에 위임하여 처리되게 하고, 작업이 완료되면 콜백 함수를 받아 실행하는 방식으로 동작합니다.

**콜백 함수 (Callback Function)**
콜백 함수는 자바스크립트 초기부터 비동기 처리를 위해 널리 사용된 방식입니다. 어떤 함수의 인자로 전달되어 특정 연산이 완료된 이후에 실행될 코드를 함수 형태로 정의하는 것을 의미합니다.

**콜백 지옥 (Callback Hell)**
하지만 여러 비동기 연산이 서로 의존할 때 콜백 함수를 과도하게 중첩하여 사용하면 코드의 가독성, 유지보수성, 오류 처리 등에 문제가 발생합니다. 이를 '콜백 지옥'이라고 부르며, 코드가 피라미드 모양으로 깊어지는 현상을 초래합니다.

```javascript
// 콜백 지옥 예시 (가상의 시나리오)
function fetchData(callback) {
  setTimeout(() => {
    const data = "데이터1";
    callback(data, (data2) => {
      setTimeout(() => {
        const processedData = data2 + " 처리됨";
        callback(processedData, (finalData) => {
          console.log(finalData);
        });
      }, 500);
    });
  }, 1000);
}

fetchData((data1, next) => {
  console.log(data1);
  next(data1 + " 추가");
});
```

### 2. Promise

Promise는 콜백 지옥의 단점을 보완하고 비동기 처리 시점을 명확하게 표현하기 위해 도입된 객체입니다. 비동기 연산의 최종 완료 또는 실패를 나타내는 객체로, 성공 또는 실패 시점에 실행할 콜백 함수들을 연결할 수 있게 합니다. Promise는 비동기 작업이 끝날 때까지 결과를 기다리는 것이 아니라, 결과를 제공하겠다는 '약속'을 반환한다는 의미에서 Promise라고 명명되었습니다.

**Promise의 3가지 상태**
*   **Pending (대기):** 비동기 처리 로직이 아직 완료되지 않은 초기 상태입니다.
*   **Fulfilled (이행):** 비동기 처리가 성공적으로 완료되어 Promise가 결과 값을 반환해준 상태입니다. `resolve()` 함수가 호출될 때 이 상태가 됩니다.
*   **Rejected (실패):** 비동기 처리가 실패하거나 오류가 발생한 상태입니다. `reject()` 함수가 호출될 때 이 상태가 됩니다.

**Promise 사용법**
`new Promise()` 구문을 사용하여 새로운 Promise 객체를 생성합니다. `new Promise()`의 인자로 전달되는 함수를 'executor 함수'라고 부르며, 이 함수는 즉시 실행됩니다. executor 함수는 `resolve`와 `reject`라는 두 가지 콜백 함수를 받습니다.

*   `.then()`: Promise가 성공적으로 이행(fulfilled)되었을 때 호출될 콜백 함수를 등록합니다.
*   `.catch()`: Promise가 실패(rejected)되었을 때 호출될 콜백 함수를 등록합니다.
*   `.finally()`: Promise의 성공 또는 실패 여부와 관계없이 최종적으로 실행될 콜백 함수를 등록합니다.

```javascript
// Promise 예시
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // 비동기 작업의 성공/실패 가정
      if (success) {
        resolve("데이터를 성공적으로 가져왔습니다.");
      } else {
        reject("데이터를 가져오는 데 실패했습니다.");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then((message) => {
    console.log(message); // "데이터를 성공적으로 가져왔습니다."
    return message + " (추가 처리)";
  })
  .then((processedMessage) => {
    console.log(processedMessage); // "데이터를 성공적으로 가져왔습니다. (추가 처리)"
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("작업 완료!");
  });
```

### 3. async/await

`async`와 `await`는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법으로, Promise를 기반으로 동작하며 콜백 함수와 Promise의 단점을 보완하여 개발자가 읽기 좋은 코드를 작성할 수 있도록 돕습니다. 비동기 코드를 마치 동기 코드처럼 작성할 수 있게 해줍니다.

*   **`async` 키워드:** 함수 앞에 `async`를 붙이면 해당 함수는 항상 Promise를 반환합니다. Promise가 아닌 값을 반환하더라도 이행 상태의 Promise로 값을 감싸서 반환합니다.
*   **`await` 키워드:** `await`는 Promise가 처리될 때까지 함수 실행을 기다리게 만듭니다. Promise가 처리되면 그 결과와 함께 실행이 재개됩니다. `await`는 반드시 `async` 함수 안에서만 사용할 수 있습니다.

**async/await 사용법**

```javascript
// async/await 예시
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function processData() {
  try {
    console.log("데이터 요청 시작...");
    await delay(1000); // 1초 대기
    const data = await fetchDataPromise(); // Promise가 해결될 때까지 기다림
    console.log(data);

    await delay(500); // 0.5초 대기
    const processedData = data + " (async/await로 처리됨)";
    console.log(processedData);

    return processedData;
  } catch (error) {
    console.error("오류 발생:", error);
    throw error; // 오류를 다시 던져서 호출자에게 알림
  } finally {
    console.log("async/await 작업 완료!");
  }
}

processData()
  .then(result => console.log("최종 결과:", result))
  .catch(err => console.error("최종 오류:", err));
```

`async/await`는 복잡한 비동기 처리를 동기 코드처럼 작성할 수 있도록 도와주는 매우 유용한 기능이며, 에러 처리를 `try...catch` 문을 사용하여 깔끔하게 할 수 있다는 장점이 있습니다.
