interface ButtonProps {
  text: string;
  clickHandler?: React.MouseEventHandler;
  styles?: string|null;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={"py-1 px-2 rounded-xl bg-white " + props.styles}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
}
