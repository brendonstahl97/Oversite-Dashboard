
import { Table } from 'reactstrap';
import GoalListItem from "../GoalListItem/GoalListItem.js";

export default function GoalList(props) {


    return (
        <Table className="tablesorter" responsive>
            <thead className="text-primary">
                <tr>
                    <th>Name</th>
                    <th>Unit of Measure</th>
                    <th>Goal Type</th>
                    <th>Target</th>
                    <th>Completion Date</th>
                </tr>
            </thead>
            <tbody>
                {window.goals.map((goal, index) => {
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
