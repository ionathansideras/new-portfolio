export function handleTransform(up, down, count) {
    if (count === 0) {
        return "translateY(70%)";
    } else if (count >= up && count <= down) {
        return "translateY(-40px)";
    } else if (count >= down) {
        return "translateY(0px)";
    }
}