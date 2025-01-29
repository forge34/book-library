interface ButtonProps {
  text: string;
  clickHandler?: React.MouseEventHandler;
  styles?: string | null;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={"rounded-xl bg-white px-2 py-1 " + props.styles}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
}
