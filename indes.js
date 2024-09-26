window.onload = function() {
    // Scroll down and then back up
    const scrollDuration = 800; // Duration of the scroll in milliseconds
    const scrollAmount = 100; // Amount to scroll in pixels
    const scrollStep = scrollAmount / (scrollDuration / 15); // Calculate step

    let scrollDown = true; // Flag to check scrolling direction
    let currentScroll = 0; // Current scroll position

    function scroll() {
        if (scrollDown) {
            // Scroll down
            window.scrollBy(0, scrollStep);
            currentScroll += scrollStep;

            // If we reached the scroll amount, start scrolling up
            if (currentScroll >= scrollAmount) {
                scrollDown = false;
            }
        } else {
            // Scroll up
            window.scrollBy(0, -scrollStep);
            currentScroll -= scrollStep;

            // If we reached back to the original position, stop
            if (currentScroll <= 0) {
                clearInterval(scrollInterval);
            }
        }
    }

    const scrollInterval = setInterval(scroll, 15); // Set scroll interval
};
