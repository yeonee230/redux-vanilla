import { legacy_createStore, dispatch } from 'redux';

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

//2. reducer는 data를 수정할 수 있는 함수
const countModifier = (state = 0, action) => {
  if (action.type === 'PLUS') {
    count = count + 1;
    return count;
  } else if (action.type === 'MINUS') {
    count = count - 1;
    return count;
  } else {
    return;
  }
};

//1.store를 만든다. store는 데이터를 저장하는 곳. reducer를 넣어줘야함.
const store = legacy_createStore(countModifier);

//3. ✅ Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위해
//✅ Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});
store.dispatch({ type: 'PLUS' });
store.dispatch({ type: 'PLUS' });
store.dispatch({ type: 'MINUS' });
console.log('Result: ',store.getState());
