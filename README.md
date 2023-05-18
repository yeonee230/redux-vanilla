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
|* Connecting Store - store 만들고 provider이용해 연결 |
|* connect ( state, dispatch) <br> ▷ connect()는 return한 것을 해당 component의 prop에 추가해줌|
|* mapStateToProps (state, ownProps) <br> ▷ 첫번째 argument : Redux store에서 온 state <br> ▷ 두번째 argument(optional) : component의 props  <br> ▷ ❗️getState 같은 기능 <br> * useSelector() : mapStateToProps 대신 권장 <br> ▷  ``const 현재state값 = useSelector(state => state)`` <br> ▷  store에 저장되어 있는현재state값을 바로 가져올 수 있음. |
|* mapDispatchToProps (dispatch, ownProps) <br> ▷ 첫번째 argument : dispatch <br> ▷ 두번째 argument(optional) : component의 props<br> ▷ ❗️ dispatch 같은 기능 <br> * useDispatch() <br> ``const dispatch() = useDispatch();`` 선언 후, 필요한 곳에 바로 사용.<br>``() => dispatch(funcA)``|

|❤️ Redux Tookit|
|---|
|* createAction('type이름')|
|* createReducer(초기값, builder 함수)<br>createReducer()에서는 새로운 state를 리턴하거나 state를 mutate 할 수 있음. <br>▷ 뭔가를 리턴할 때는 새로운 state여야만한다. <br> ▷ (builder) => builder.addCase(createAction값,(state, action) =>{ }).addCase(...).addCase(...) ... |
|* configureStore({reducer}) <br> ▷ createStore() 역할 <br>▷ 더 나은 개발 경험을 위해 store 설정에 몇몇 기본 값을 추가함 |
|* createSlice() : reducer와 action 만들기를 한번에! 
    const mySlice = createSlice({
    name :'이름',
    initialState: 초기값,
    reducers: { // reducers 's' 매우 중요!! 
        funcA : (state,action) =>{},
        funcB :  (state,action) =>{}
        }
    })
```
export const { funcA, funcB } = mySlice.actions;
const store = configureStore({ reducer:mySlice.reducer});
```



