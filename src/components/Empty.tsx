function Empty({
  message,
  children,
}: {
  message: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h3 className="font-bold text-4xl text-center">{message}</h3>
      {children}
    </div>
  );
}

export default Empty;
