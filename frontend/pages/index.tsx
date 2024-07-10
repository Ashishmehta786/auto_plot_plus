import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-6 text-center">Welcome</h1>
        <div className="flex flex-col items-center">
          <Link href="/login" legacyBehavior>
            <a className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4 text-center">
              Login
            </a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-center">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;