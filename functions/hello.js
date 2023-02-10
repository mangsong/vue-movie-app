// 넷리파이 함수 사용예시 

exports.handler = async function (event, context) { //핸들러를 사용해 함수(event,context)를 받음
  return {
    statusCode: 200, //스테이터스코드가 200이면 제대로된페이지임. 400이면 없는페이지및 에러페이지
    body: JSON.stringify({ //바디부분은 무조건 문자열이 들어가야함. 문자로 쓸수 없는 경우 배열데이터로 처리한다
      name: 'Orpe',
      age: 85,
      email: 'ajdak@nskd.com'
    })
  }
}
