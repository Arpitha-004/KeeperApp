import CopyButton from "./CopyButton";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <CopyButton text={props.content} />
    </div>
  );
}
