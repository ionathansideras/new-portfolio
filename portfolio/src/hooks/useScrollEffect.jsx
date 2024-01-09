import { useEffect, useState } from 'react';

function useScrollEffect(element, limit) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let isVisible = true;
        let reps = 0;

        function handleScroll() {
            let visible = element.current.getBoundingClientRect().top;
            if (visible < window.innerHeight && isVisible) {
                isVisible = false;
                const timer = setInterval(() => {
                    setCount((count) => count + 1);
                    reps++;
                    if (reps === limit) {
                        clearInterval(timer);
                    }
                }, 150);
            }
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("load", handleScroll);
        };
    }, []);

    return {count};
}

export default useScrollEffect;