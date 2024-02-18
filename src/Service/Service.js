// Mocked service file for API calls

const mockClassSchedule = [
    { id: 1, name: 'Class 1', date: '2024-02-18', time: '10:00 AM', availableSeats: 10 },
    { id: 2, name: 'Class 2', date: '2024-02-19', time: '11:00 AM', availableSeats: 0 },
    // Add more class schedule data as needed
];

const fetchClassSchedule = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mockClassSchedule);
        }, 1000);
    });
};

const bookClass = (classId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            // Simulating successful booking for demo
            resolve({ success: true });
        }, 500);
    });
};

export { fetchClassSchedule, bookClass };
