// Import necessary dependencies
import { useEffect, useState } from 'react';

// Define the useScrollEffect hook
function useScrollEffect(element, limit) {
    // Initialize the count state variable
    const [count, setCount] = useState(0);

    // Use the useEffect hook to add scroll and load event listeners
    useEffect(() => {
        // Initialize variables to track visibility and repetitions
        let isVisible = true;
        let reps = 0;

        // Define the scroll event handler
        function handleScroll() {
            // Check if the element is visible
            let visible = element.current.getBoundingClientRect().top;
            // If the element is visible and hasn't been counted yet, start counting
            if (visible < window.innerHeight && isVisible) {
                // Mark the element as counted
                isVisible = false;
                // Start a timer that increments the count every 150ms
                const timer = setInterval(() => {
                    // Increment the count
                    setCount((count) => count + 1);
                    // Increment the repetitions
                    reps++;
                    // If the limit is reached, stop the timer
                    if (reps === limit) {
                        clearInterval(timer);
                    }
                }, 150);
            }
        }

        // Add the scroll and load event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    // Return the count
    return {count};
}

// Export the useScrollEffect hook
export default useScrollEffect;