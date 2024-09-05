import GoalsForm from '../components/GoalsForm';

const Goals = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-white bg-primary-dark-opacity p-2 rounded-lg">Fitness Goals</h2>
        <GoalsForm />
      </div>
    </div>
  );
};

export default Goals;