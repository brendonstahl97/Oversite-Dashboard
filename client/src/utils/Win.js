import axios from 'axios';

const Win = {
    updateGoals: (history) => {
        const data = axios.get(`/api/goals/list/${window.user._id}`);

        data.then(res => {
            const goals = res.data;
            window.goals = goals;

            history.push("/admin/dashboard");
        });
    }
};

export default Win;