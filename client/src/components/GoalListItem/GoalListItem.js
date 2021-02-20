import React from 'react'

export default function GoalListItem(props) {
    const { goalName, targetType, target, habit, completionDate } = props.goal;
    return (
        <tr>
            <td>{goalName}</td>
            <td>{targetType}</td>
            <td>{target}</td>
            <td>{habit}</td>
            <td className="text-center">{completionDate}</td>
        </tr>
    )
};
