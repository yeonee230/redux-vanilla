# Vanilla Rudex and React-Redux

⭐️ Studying Redux and React-Redux

---
## 📝 Note
### 🔆 주요개념
✅ state는 single source of truth이며, read-only이다 <br>
✅ store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.<br>
✅ state를 mutate(변형)하지 말아야한다.<br>
    ▷ mutating state하는 대신에 new state objects를 리턴해야 한다.
<br>
### 🔆 사용법

|❤️ Vanilla JS / Pure Redux|
|---|
|* createStore(reducer) - store 만들기|
|* function Reducer (state, action) - reducer 함수 만들기|
|* store.dispatch(action) - reducer에 action 전달|
|* store.subscribe(func) - ui 변경|
|* store.getState() - 현재 상태값 가져오기|

|❤️ React JS / React Redux|
|---|
|* connect Store - store 만들고 provider이용해 연결 |
|* connect는 argument로 state와 dispatch를 가짐 <br> ▷ connect()는 return한 것을 해당 component의 prop에 추가해줌|
|* mapStateToProps는 두 종류의 argument와 함께 호출되는 함수 <br> ▷ 첫번째 argument : Redux store에서 온 state <br> ▷ 두번째 argument : component의 props|
|* |

|❤️ Redux Tookit|
|---|