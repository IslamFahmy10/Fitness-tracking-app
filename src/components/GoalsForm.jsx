import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const GoalsForm = () => {
  const [showNotification, setShowNotification] = useState('');

  const formik = useFormik({
    initialValues: {
      goal: '',
      targetDate: '',
    },
    validationSchema: Yup.object({
      goal: Yup.string().required('Required'),
      targetDate: Yup.date().required('Required'),
    }),
    onSubmit: values => {
      const goals = JSON.parse(localStorage.getItem('goals')) || [];
      goals.push(values);
      localStorage.setItem('goals', JSON.stringify(goals));
      formik.resetForm();
      setShowNotification('You will make it!');
      setTimeout(() => setShowNotification(''), 2000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-4 space-y-4 bg-primary-dark-opacity text-white rounded-lg max-w-2xl mx-auto">
      <div>
          <label htmlFor="goal" className="block text-sm font-medium">Goal</label>
          <input
            id="goal"
            name="goal"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.goal}
            className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
          />
          {formik.touched.goal && formik.errors.goal ? (
            <div className="text-red-500 text-sm">{formik.errors.goal}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="targetDate" className="block text-sm font-medium">Target Date</label>
          <input
            id="targetDate"
            name="targetDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.targetDate}
            className="mt-1 block w-full border text-black border-gray-300 p-2 rounded"
          />
          {formik.touched.targetDate && formik.errors.targetDate ? (
            <div className="text-red-500 text-sm">{formik.errors.targetDate}</div>
          ) : null}
        </div>
      <button type="submit" className="bg-[#B85C38] text-white p-2 rounded-lg">Set Goal</button>
      {showNotification && (
        <div className="fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300">
          {showNotification}
        </div>
      )}
    </form>
  );
};

export default GoalsForm;