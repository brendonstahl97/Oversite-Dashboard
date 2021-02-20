import React from 'react'
import { Table } from 'reactstrap';
import GoalListItem from "../GoalListItem/GoalListItem.js";

export default function GoalList(props) {

<<<<<<< HEAD
=======
    //window.user.goalList
>>>>>>> 6ff551ac8c2bbb5cb4221e90b1d22797a04524c4
    let goalData = [
        {
            goalName: "Quit Smoking",
            targetType: "Total",
            target: "0",
            habit: "reduce",
            completionDate: "01/01/2022"
        }
    ];

    return (
        <Table className="tablesorter" responsive>
            <thead className="text-primary">
                <tr>
                    <th>Name</th>
                    <th>Target Type</th>
                    <th>Target</th>
                    <th>Habit</th>
                    <th className="text-center">Completion Date</th>
                </tr>
            </thead>
            <tbody>
                {goalData.map((goal, index) => {
                    return (
                        <GoalListItem
                            goal={goal}
                        />
                    )
                })}
            </tbody>
        </Table>
    );
};
