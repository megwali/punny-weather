import useUserLocation from '../hooks/useUserLocation';

const Dashboard = () => {
  const { data, loading } = useUserLocation();

  return loading ? 'Loading' : <div>Dashboard</div>
};

export default Dashboard;
