import React, { Component } from "react";
import { connect } from "react-redux";
import GoalList from '../components/GoalList'
import { fetchGoals } from "../store/actions"

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class Goal extends Component {
    state = {};
    componentDidMount() {
        this.props.fetchGoals();
    }

    render() {
        let goals = this.props.isLoadingData ? null : this.props.data
        let html = null

        html = this.props.isLoadingData ? "Loading . . ." : <GoalList
        goals={ goals }
        />

        return(
            <div>
                <Fab color="primary" aria-label="add" style={{right: "5%", bottom: "5%", position: "fixed"}}>
                    <AddIcon />
                </Fab>
                <br/>
                <br/>
                {html}
            </div>
        );
    }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});

export default connect(
    mapStateToProps,
    {
        fetchGoals
    }
)(Goal);
