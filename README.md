# 🌟 TodoList Web App

![study project](https://img.shields.io/badge/Project-Study-blue)
![clone coding](https://img.shields.io/badge/Clone-NomadCoders-orange)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)

간단하고 직관적인 **ToDo List 웹 애플리케이션**입니다.
시계, 로그인, 명언, 날씨 위젯까지 포함된 개인용 대시보드 형태로 제작되었습니다.

이 프로젝트는 **노마드코더(Nomad Coders)** 의 바닐라 JS 강의를 기반으로 학습 목적으로 강의에서 배운 내용을 토대로 기능을 확장하고, 디자인을 직접 커스터 마이징하였습니다.

---

## 🎥 실행 화면
> 아래는 실제 실행 화면 예시입니다.


---

## 📌 주요 기능

- ⏰ **실시간 시계**: 현재 시간을 시:분:초 단위로 표시

- 🙋 **로그인 기능**: 이름 입력 후 환영 메시지 표시 (localStorage 저장)

- 📝 **ToDo List**:

  - 할 일 추가
  - 체크 버튼으로 개별 삭제
  - 새로고침 후에도 저장 유지

- 🌈 **랜덤 배경 이미지**: 새로고침마다 다른 이미지 표시

- 💬 **랜덤 명언** : 매번 새로운 명언과 작가 출력

- 🌦 **날씨 위젯** : 현재 위치 기반 날씨 및 온도 표시 (OpenWeather API 사용)

---

## 🛠 기술 스택
- HTML, CSS, JavaScript  
- OpenWeatherMap API  
- LocalStorage

---

## 🚀 실행 방법

1. 저장소 클론
   ```bash
   git clone https://github.com/사용자명/저장소명.git
   ```

2. 프로젝트 폴더로 이동
```bash
cd 저장소명
```

3. `index.html` 실행

## ⚙️ 환경 설정
- `weather.js` 파일에서 **OpenWeather API 키** 교체 필요
```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

## 📜 출처
이 프로젝트는 Nomad Coders의 **바닐라 JS 크롬 앱 만들기 강의**를 기반으로 클론코딩한 결과물입니다.

