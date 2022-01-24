function Input({ type, placeholder, value, name, onChange }: any) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </>
  );
}

export default Input;
