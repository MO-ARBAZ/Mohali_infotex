import React, { useState, useEffect } from 'react';
import { fetchClassSchedule, bookClass } from '../services/Service';

const ClassSchedule = () => {
    const [classSchedule, setClassSchedule] = useState([]);
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchClassSchedule().then(data => {
            setClassSchedule(data);
        });
    }, []);

    const handleBookClass = (classId) => {
        const canBook = checkBookingLimit();
        if (!canBook) {
            setMessage('You can only book a maximum of 3 classes per week.');
            return;
        }

        bookClass(classId).then(response => {
            if (response.success) {
                const updatedSchedule = classSchedule.map(cls => {
                    if (cls.id === classId && cls.availableSeats > 0) {
                        cls.availableSeats--;
                    }
                    return cls;
                });
                setClassSchedule(updatedSchedule);
                setCart([...cart, classId]);
            } else {
                setMessage('Failed to book the class. Please try again later.');
            }
        });
    };

    const checkBookingLimit = () => {
        // Logic to check if user can book more classes this week
        return true; // Placeholder logic, implement as needed
    };

    return (
        <div>
            <h2>Class Schedule</h2>
            {message && <div className="alert">{message}</div>}
            <table>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Seats Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classSchedule.map(cls => (
                        <tr key={cls.id}>
                            <td>{cls.name}</td>
                            <td>{cls.date}</td>
                            <td>{cls.time}</td>
                            <td>{cls.availableSeats}</td>
                            <td>
                                {cls.availableSeats > 0 ? (
                                    <button onClick={() => handleBookClass(cls.id)}>Book Now</button>
                                ) : (
                                    "Full"
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassSchedule;
