interface BookCardProps {
  title: string;
  imgUrl: string;
  price: number;
}

export default function BookCard(props: BookCardProps) {
  return (
    <div className="flex w-fit flex-col rounded-4xl bg-white">
      <img
        className="w-full rounded-t-2xl"
        width={"205px"}
        height={"275px"}
        src={props.imgUrl}
      />

      <div className="flex h-full flex-col px-2 py-1">
        <h3 className="text-primary text-md font-bold">{props.title}</h3>
        <p className="text-hover-accent text-md font-bold">
          {props.price + " $"}
        </p>
        <button className="hover:brightness-115 hover:scale-110 transition-all duration-300 bg-accent text-background mt-auto mb-2 self-center rounded-2xl px-3 py-1 font-black">
          Add to cart
        </button>
      </div>
    </div>
  );
}
