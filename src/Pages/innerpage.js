import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect}  from "react-router-dom";
class InnerPage extends Component {
  constructor(props) {
    super(props);
    this.state ={
      details : null
    }
  }

static getDerivedStateFromProps (props, state){
  debugger
  if(props.fetchData.DetailData !== state.details){
    return{
      details:[ props.fetchData.DetailData]
    }
  }
  return null
}

renderRedirect = ()=>{
  return <Redirect to="/"/>
}

  render() {
    {this.renderRedirect()}
    return this.state.details
      ? this.state.details.map((e,i) => {
          return (
            <div className="detailPage" key={i}>
              <div className="prfpic">
                <img
                  src="https://cdn.itead.cc/media/blog/mirror/en/uploads/image/2011_07/opensource-electronic-dummy-load-overload-review_1.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <h4>{e.name}</h4>
                <p>
                  <b>{e.id}</b>
                </p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          );
        })
      : this.renderRedirect();
  }
}


const mapStateToProps = state => {
  return {
    fetchData: state.getDataReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(InnerPage);
