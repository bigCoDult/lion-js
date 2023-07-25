/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/
//
const xhr = new XMLHttpRequest();

//오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// 이벤트
xhr.addEventListener('readystatechange', () => {
  const { status, readyState, response } = xhr;
  if (status >= 200 && status < 400) {
    if (readyState === 4) {
      console.log(JSON.parse(response));
      console.log('성공');
    }
  } else {
    console.log('실패');
  }
  // console.log(xhr.readyState);
});

//샌드
xhr.send();
// const xhr = new XMLHttpRequest();

function xhr1(method, url) {
  xhr.open(method, url);
  // const { status, readyState, response } = xhr;
  // const { status, readyState} = xhr;

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    // const {response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log(JSON.parse(response));
        console.log('성공');
      }
    } else {
      console.log('실패');
    }
  });
  xhr.send();
}

xhr1('GET', 'https://jsonplaceholder.typicode.com/users', () => {});
