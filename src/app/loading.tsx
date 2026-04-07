export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      <p className="mt-4 text-white text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
