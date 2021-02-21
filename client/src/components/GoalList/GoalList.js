import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import GoalListItem from "../GoalListItem/GoalListItem.js";
import axios from 'axios';

export default function GoalList(props) {

    //window.user.goalList
    const [goalData, setGoalData] = useState([]);

    useEffect(() => {

        const data = axios.get(`/api/goals/list/${window.user.userData.id}`);

        data.then(res => {
            const goals = res.data;
            setGoalData(goals);
        })

        console.log(goalData);


    }, []);

    return (
        <Table className="tablesorter" responsive>
            <thead className="text-primary">
                <tr>
                    <th>Name</th>
                    <th>Target Type</th>
                    <th>Target</th>
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
