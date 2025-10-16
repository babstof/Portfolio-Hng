// Update current time in milliseconds
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    const updateTime = () => {
      timeElement.textContent = Date.now();
    };
    updateTime();
    setInterval(updateTime, 1000);