function TextShow(props: any) {
  if (!props.input) {
    return null;
  }

  return (
    <div style={{ wordWrap: "break-word" }}>Input Text - {props.input}</div>
  );
}

export default TextShow;
