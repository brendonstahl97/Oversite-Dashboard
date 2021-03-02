module.exports = {
    success: (goalName, message, date) => {
        return `Congraturaltions! Your child completed their goal callled ${goalName} by ${date}. Your kid is pretty cool!
        
        Note: ${message}`
    },
    failure: (goalName, message, date) => {
        return `We're sorry. Your child failed to complete their goal called ${goalName} by ${date}. They are an enormous failure!
        
        Note: ${message}`
    }
}