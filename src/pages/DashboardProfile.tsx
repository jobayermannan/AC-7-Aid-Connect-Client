import { useAppSelector } from '@/redux/hook';

const DashboardProfile = () => {
  const { token, user } = useAppSelector((state) => state.auth);

  let email = user?.email ?? '';

  if (!email && token) {
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      email = decoded?.email ?? '';
    } catch {
      email = '';
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-base font-medium">{email || 'Not available'}</p>
      </div>
    </div>
  );
};

export default DashboardProfile;