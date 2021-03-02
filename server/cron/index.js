const cron = require('node-cron');
const { Goal } = require("../models");
const db = require("../models");
const {successEmail, failureEmail} = require('./email.service')

// cron schedule fro goal completion
module.exports = {
    runJob: async () => {
        // console.log(process.env)
        cron.schedule('0 0 * * *', async () => {
            var date = new Date();
            var completionDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                                .toISOString()
                                .split("T")[0];
                                
            console.log('job run at ', completionDate );
            const data = await db.Goal.find({completionDate})
            // console.log(data)
            data.forEach(item => {
                const {goalLog, target, consequenceTargetContact, goalName, successMessage, failureMessage}  = item;
                if(goalLog[goalLog.length - 1] === target) {
                    successEmail(consequenceTargetContact, goalName, successMessage, completionDate)
                } else {
                    failureEmail(consequenceTargetContact, goalName, failureMessage, completionDate)
                }
            })
          }, {
            scheduled: true
          });
    }
}
    