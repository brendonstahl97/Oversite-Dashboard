import React from 'react'

export default function GoalListItem(props) {
    const { goalName, targetType, target, completionDate } = props.goal;
    return (
        <tr>
            <td>{goalName}</td>
            <td>{targetType}</td>
            <td>{target}</td>
            <td className="text-center">{completionDate}</td>
        </tr>
    )
};
