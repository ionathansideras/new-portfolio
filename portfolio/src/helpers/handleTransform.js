// Define the handleTransform function
export function handleTransform(up, down, count) {
    // If count is 0, move the element down by 70% of its height
    if (count === 0) {
        return "translateY(70%)";
    } 
    // If count is between 'up' and 'down', move the element up by 40px
    else if (count >= up && count <= down) {
        return "translateY(-40px)";
    } 
    // If count is greater than or equal to 'down', don't move the element
    else if (count >= down) {
        return "translateY(0px)";
    }
}