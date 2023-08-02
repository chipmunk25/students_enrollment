const ChipErr = ({ msg, id }) => {
  return (
    <p id={id} className="mt-2 text-xs text-error ">
      {msg}
    </p>
  );
};

export default ChipErr;
