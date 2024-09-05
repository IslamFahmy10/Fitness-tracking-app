import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';


const WorkoutForm = () => {
  const [showNotification, setShowNotification] = useState('');

  const formik = useFormik({
    initialValues: {
      gender: 'male',
      exercise: '',
      duration: '',
      calories: '',
      date: '',
      time: '',
    },
    validationSchema: Yup.object({
      gender: Yup.string().required('Required'),
      exercise: Yup.string().required('Required'),
      duration: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
      calories: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
      date: Yup.date().required('Required'),
      time: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
      workouts.push(values);
      localStorage.setItem('workouts', JSON.stringify(workouts));
      formik.resetForm();
      setShowNotification('You are doing great today! Keep going!');
      setTimeout(() => setShowNotification(''), 2000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 space-y-4 bg-primary-dark-opacity text-white rounded-lg max-w-2xl mx-auto">
       <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formik.values.gender === 'male'}
            onChange={formik.handleChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formik.values.gender === 'female'}
            onChange={formik.handleChange}
            className="mr-2"
          />
          Female
        </label>
      </div>

      <div>
        <label htmlFor="exercise" className="block text-sm font-medium">Exercise</label>
        <input
          id="exercise"
          name="exercise"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.exercise}
          className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
        />
        {formik.touched.exercise && formik.errors.exercise ? (
          <div className="text-red-500 text-sm">{formik.errors.exercise}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="duration" className="block text-sm font-medium">Duration (minutes)</label>
        <input
          id="duration"
          name="duration"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.duration}
          className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
        />
        {formik.touched.duration && formik.errors.duration ? (
          <div className="text-red-500 text-sm">{formik.errors.duration}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="calories" className="block text-sm font-medium">Calories Burned</label>
        <input
          id="calories"
          name="calories"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.calories}
          className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
        />
        {formik.touched.calories && formik.errors.calories ? (
          <div className="text-red-500 text-sm">{formik.errors.calories}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
        />
        {formik.touched.date && formik.errors.date ? (
          <div className="text-red-500 text-sm">{formik.errors.date}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium">Time</label>
        <input
          id="time"
          name="time"
          type="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
          className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
        />
        {formik.touched.time && formik.errors.time ? (
          <div className="text-red-500 text-sm">{formik.errors.time}</div>
        ) : null}
      </div>
      <button type="submit" className="bg-[#B85C38] text-white p-2 rounded-lg">Log Workout</button>
      {showNotification && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300">
          {showNotification}
        </div>
      )}
    </form>
  );
};

export default WorkoutForm;