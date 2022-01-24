function TextShow(props: any) {
  if (!props.data) {
    return null;
  }

  return <div>Input Text - {props.data}</div>;
}

export default TextShow;
