import React from "react";

// 생명주기 실행 순서 render -> componentDidMount
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      console.log("history.push('/')");
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      console.log(location.state);
      return null;
    }
  }
}

export default Detail;
