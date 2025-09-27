# HTTP 통신 구조

## 개요

HTTP(HyperText Transfer Protocol)은 클라이언트와 서버 간의 요청(Request)과 응답(Response)으로 이루어진 비연결성(Stateless) 프로토콜이다. 여기서 비연결성이란, 상태를 저장하지 않는다는 의미이며 이를 쿠키로 대체한다.

## HTTP 흐름

클라이언트가 서버와 통신하고자 할 때, 최종 서버가 됐든 중간 프록시가 됐든 다음 단계의 과정을 수행한다.

1. TCP 연결을 연다. TCP 연결은 요청을 보내거나 응답을 받는데 사용된다. 클라이언트는 새 연결을 열거나, 기존 연결을 재사용하거나, 서버에 대한 여러 TCP 연결을 열 수 있다.

2. HTTP 메세지를 전송한다. HTTP 메세지(HTTP/2 이전)는 인간이 읽을 수 있다. HTTP/2에서는 이런 간단한 메세지가 프레임 속으로 캡슐화되어 직접 읽는게 불가능하지만 원칙은 동일하다.

```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

3. 서버에 의해 전송된 응답을 읽어들인다.

```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```
4. 연결을 닫거나 다른 요청들을 위해 재사용한다.


## 요청
요청은 다음의 요소들로 구성된다.

![](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-request.svg)

- Method: 동작 정의(GET, POST, PUT, DELETE 등)
- Path: 요청 자원의 경로
- Protocol version: 예) HTTP/1.1, HTTP/2
- Host: 서버 주소

## 응답
응답은 다음의 요소들로 구성된다.

![](https://mdn.github.io/shared-assets/images/diagrams/http/overview/http-response.svg)

- Protocol version
- Status Code: 요청 결과 상태 (200, 404, 500 등)
- Status Message: 상태 설명
- date: 날짜
- cache-control: 캐싱 정책
- content-type: 응답 데이터 형식