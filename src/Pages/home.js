import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getData, DetailData } from "../actions/actions";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  componentDidMount() {
    this.props.getData();
  }
  static getDerivedStateFromProps(props, state) {
    if ( state.data !== props.fetchData) {
      return {
        data: props.fetchData
      };
    }
    return null;
  }

  DetailPage = (event) => {
    const data = this.state.data;
    let id = event.target.id
    if(data.length != 0)
    data.AllData.map(e => {
      if(e.id == id) {
        this.props.DetailData(e) 
        localStorage.setItem("details", JSON.stringify(e))
        this.props.history.push('/details')
    
      }
    });
   
  }

  componentWillUnmount(){
    this.setState({data:null})
  }
  render() {
    const { data } = this.state
    console.log("data", data)
    return (
      <div className="container">
        {data !== null
          ? data.AllData.map((e, i) => {
            return (
              <div className="col" key={i}>
                <span className="fig">
                  <img
                    src="https://cdn.itead.cc/media/blog/mirror/en/uploads/image/2011_07/opensource-electronic-dummy-load-overload-review_1.jpg"
                    alt="electronic"
                    className="img"
                  />
                </span>
                <p>
                  <span
                    className="product_name"
                    onClick={this.DetailPage}
                    id={e.id}
                  >
                    {e.name}
                  </span>
                </p>
              </div>
            );
          })
          : null}
      </div>
    );
  }
}

const mapPropsToState = dispatch => {
  return bindActionCreators(
    {
      getData: getData,
      DetailData: DetailData
    },
    dispatch
  );
};
const mapStateToProps = state => {
  return {
    fetchData: state.getDataReducer
  };
};

export default connect(
  mapStateToProps,
  mapPropsToState
)(HomeComponent);
