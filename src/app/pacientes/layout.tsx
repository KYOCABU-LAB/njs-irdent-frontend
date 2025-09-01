const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2 className="text-2xl bg-amber-600 text-white">hola</h2>
      {children}
    </div>
  );
};

export default RootLayout;
