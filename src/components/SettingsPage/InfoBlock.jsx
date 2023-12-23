export default function InfoBlock({ fieldName, fieldValue, isMutable }) {
  return (
    <div className="flex justify-between">
      <span className="font-medium">{fieldName}</span>
      <p className="">{fieldValue}</p>
    </div>
  );
}
