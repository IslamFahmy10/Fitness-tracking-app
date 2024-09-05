import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const GoalsForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      description: '',
      targetDate: '',
    },
    validationSchema: Yup.object({
      description: Yup.string().required('Description is required'),
      targetDate: Yup.date().required('Target date is required').nullable(),
    }),
    onSubmit: (values) => {
      // Get existing goals from local storage
      const existingGoals = JSON.parse(localStorage.getItem('goals')) || [];

      // Add new goal to existing goals
      const updatedGoals = [...existingGoals, values];

      // Save updated goals to local storage
      localStorage.setItem('goals', JSON.stringify(updatedGoals));

      // Reset form and show notification
      formik.resetForm();
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 2000);
    },
  });

  return (
    <div className="p-4 max-w-md mx-auto bg-[#2D2424] text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Set Fitness Goal</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Goal Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={`w-full p-2 border text-black rounded-lg ${
              formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="targetDate" className="block text-sm font-medium mb-1">
            Target Date
          </label>
          <input
            id="targetDate"
            name="targetDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.targetDate}
            className={`w-full p-2 border text-black rounded-lg ${
              formik.touched.targetDate && formik.errors.targetDate ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {formik.touched.targetDate && formik.errors.targetDate ? (
            <div className="text-red-500 text-sm">{formik.errors.targetDate}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="w-full bg-[#B85C38] text-white p-2 rounded-lg hover:bg-[#a14e1d]"
        >
          Add Goal
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-4 p-2 bg-green-500 text-white rounded-lg text-center">
          Goal added successfully!
        </div>
      )}
    </div>
  );
};

export default GoalsForm;