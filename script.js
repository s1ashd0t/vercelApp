document.getElementById('recommendButton').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;
    const recommendationsDiv = document.getElementById('recommendations');

    // Clear previous recommendations
    recommendationsDiv.innerHTML = '';

    // Mock API request (replace with your actual API endpoint)
    const recommendations = await getRecommendations(userInput);

    // Display recommendations
    recommendations.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        recommendationsDiv.appendChild(p);
    });
});

// Mock function to simulate API call
async function getRecommendations(input) {
    // Replace this with a real API call to your recommendation engine
    return new Promise((resolve) => {
        setTimeout(() => {
            const mockData = [
                `Recommended for "${input}": Item 1`,
                `Recommended for "${input}": Item 2`,
                `Recommended for "${input}": Item 3`
            ];
            resolve(mockData);
        }, 1000);
    });
}
