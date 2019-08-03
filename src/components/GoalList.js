import React, { Component } from "react";
import GoalListItem from '../components/GoalListItem'

class GoalList extends Component {

    render() {
        let html = null

        if(Array.isArray(this.props.goals)) {
             html = this.props.goals.map((goal, index) => {
                return <GoalListItem
                    key={ index }
                    name={ goal.name }
                    color={ goal.color }
                    image={ goal.image }
                    created_at={ goal.created_at }
                />
            })
        }

        return(
            <div>
                {html}
            </div>
        );
    }
}

export default GoalList;
