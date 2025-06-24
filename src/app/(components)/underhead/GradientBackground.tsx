export default function GradientBackground() {
  return (
    <div className="absolute inset-0 primary-gradient-bg">
      <div className="absolute w-full h-full bg-primary-gradient-bg"></div>
      <div className="absolute w-full h-full rounded-full blur-3xl"></div>
    </div>
  );
}
