import { useState, useEffect } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import page1 from '../assets/page1.jpg';
import page2 from '../assets/page2.jpg';

const ProgressDashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setWorkouts(savedWorkouts);
    setGoals(savedGoals);
  }, []);

  const handleClearProgress = () => {
    localStorage.removeItem('workouts');
    localStorage.removeItem('goals');
    setWorkouts([]);
    setGoals([]);
    displayNotification('All progress cleared!');
  };

  const handleDeleteItem = (index, type) => {
    if (type === 'workout') {
      const updatedWorkouts = workouts.filter((_, i) => i !== index);
      localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
      setWorkouts(updatedWorkouts);
      displayNotification('Workout deleted!');
    } else if (type === 'goal') {
      const updatedGoals = goals.filter((_, i) => i !== index);
      localStorage.setItem('goals', JSON.stringify(updatedGoals));
      setGoals(updatedGoals);
      displayNotification('Goal deleted!');
    }
  };

  const displayNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2000);
  };

  return (
    <div className="p-4 space-y-4 bg-primary-dark-opacity text-white rounded-lg">
      <button
        onClick={handleClearProgress}
        className="bg-red-500 text-white p-2 rounded-lg mb-4 flex items-center space-x-2"
      >
        <TrashIcon className="h-5 w-5" />
        <span>Clear All Progress</span>
      </button>

      {/* Workouts Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Workouts</h2>
        {workouts.length === 0 ? (
          <p>No workout logs available</p>
        ) : (
          workouts.map((workout, index) => (
            <div
              key={index}
              className="relative p-4 rounded-lg mb-2 flex justify-between items-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded"
                style={{
                  backgroundImage: `url(${page1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.5
                }}
              />
              <div className="relative z-10 bg- p-4 rounded-lg">
                <p><strong>Exercise:</strong> {workout.exercise}</p>
                <p><strong>Duration:</strong> {workout.duration} minutes</p>
                <p><strong>Calories:</strong> {workout.calories}</p>
                <p><strong>Date:</strong> {workout.date}</p>
                <p><strong>Time:</strong> {workout.time}</p>
              </div>
              <button
                onClick={() => handleDeleteItem(index, 'workout')}
                className="bg-red-500 text-white p-2 rounded-lg z-10"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Goals Section */}
      <div>
        <h2 className="text-xl font-bold mb-2">Goals</h2>
        {goals.length === 0 ? (
          <p>No goals set</p>
        ) : (
          goals.map((goal, index) => (
            <div
              key={index}
              className="relative p-4 rounded-lg mb-2 flex justify-between items-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${page2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.4, // Adjust opacity here
                }}
              />
              <div className="relative z-10 bg-[#2D2424] p-4 rounded-lg">
                <p><strong>Goal:</strong> {goal.description}</p>
                <p><strong>Target Date:</strong> {goal.targetDate}</p>
              </div>
              <button
                onClick={() => handleDeleteItem(index, 'goal')}
                className="bg-red-500 text-white p-2 rounded-lg z-10"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {notification && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300">
          {notification}
        </div>
      )}
    </div>
  );
};

export default ProgressDashboard;