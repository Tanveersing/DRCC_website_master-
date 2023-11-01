//  auto side for my perifery 
        const slider = document.querySelector('.slider02');
        let currentIndex = 0;
        const interval = 2000; // Change image every 2 seconds (adjust as needed)
    
        function scrollToNextImage() {
            currentIndex = (currentIndex + 1) % slider.children.length;
            const offset = currentIndex * slider.offsetWidth;
            slider.scrollTo({
                left: offset,
                behavior: 'smooth'
            });
        }
    
        // Automatically scroll images at the specified interval
        setInterval(scrollToNextImage, interval);