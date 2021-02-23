import React from 'react'

const GoalSelectionOption = props => {
    return (
            <option value={props.goalIndex}>{props.goalName}</option>
    )
}

export default GoalSelectionOption;
