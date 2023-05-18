# Vanilla Rudex and React-Redux

⭐️ Studying Redux and React-Redux

---
## 📝 Note
✅ state는 single source of truth이며, read-only이다 <br>
✅ store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.<br>
✅ state를 mutate(변형)하지 말아야한다.<br>
    ▷ mutating state하는 대신에 new state objects를 리턴해야 한다.
<br>
### 🔆 주요 개념
* createStore(reducer) - store 만들기
* function Reducer (state, action) - reducer 함수 만들기
* dispatch(action) - reducer에 action 전달
* subscribe(func) - ui 변경