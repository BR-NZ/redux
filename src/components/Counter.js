import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions"

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1 id="counter" className="m-1">{counter}</h1>
            <button onClick={dec} className="btn btn-primary m-1">(-) DEC</button>
            <button onClick={inc} className="btn btn-primary m-1">(+) INC</button>
            <button onClick={rnd} className="btn btn-primary m-1">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch( actions.inc() ),
//         dec: () => dispatch( actions.dec() ),
//         rnd: () => dispatch( actions.rnd() )
//     }
// }

export default connect(mapStateToProps, actions)(Counter);