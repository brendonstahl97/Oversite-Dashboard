import React from 'react'

export default function GoalListItem(props) {
    const { goalName, unitType, goalType, targetType, target, completionDate } = props.goal;
    return (
        <tr>
            <td>{goalName}</td>
            <td>{unitType}</td>
            <td>{goalType}</td>
            <td>{targetType}</td>
            <td>{target}</td>
            <td>{completionDate}</td>
        </tr>
    )
};
