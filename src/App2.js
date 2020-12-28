// https://kim-mj.tistory.com/250
// React Lifecycle(생명 주기)
import React from "react";
//컴포넌트는 'MOUNT(생성) => UPDATE => UNMOUNT(제거)'의 생명 주기를 갖고 있다.
class App2 extends React.Component {
  // 생명주기 함수
  //컴포넌트의 인스턴스가 생성되어, DOM에 삽입될 때 순서대로 호출된다.
  //constructor -> render -> componentDidMount

  constructor(props) {
    super(props);
    //console.log(props)
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 이 함수가 실행되는 시점은 화면이 업데이트 되는 경우
  // props나 state가 변경되면 렌더(갱신)가 진행되며 순서대로 호출된다.
  // 실행순서 setState() -> render() -> componentDidUpdate()
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 보통 컴포넌트에 적용한 이벤트 리스너를 제거할때 많이 사용한다
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  state = {
    a: 0,
    count: 0,
    test: "123",
  };
  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
    console.log("addTest");
  };
  minus = () => {
    this.setState((test1) => ({
      count: test1.count - 1,
    }));
    console.log("minusTest");
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>hi {this.state.count}</h1>
        <button onClick={this.add}>test1</button>
        <button onClick={this.minus}>test2</button>
      </div>
    );
  }
}

export default App2;
