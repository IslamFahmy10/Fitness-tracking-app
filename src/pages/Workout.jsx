import WorkoutForm from '../components/WorkoutForm';

const Workout = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen ">
      <div className="max-w-lg w-full p-4 bg-primary-dark-opacity text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Workout Logging</h2>
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Workout;