export default function Button({ children, onClickHanlder }) {
  return (
    <button onClick={onClickHanlder} className="button">
      {children}
    </button>
  );
}
