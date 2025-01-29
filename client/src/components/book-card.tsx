interface BookCardProps {
  title: string;
  imgUrl: string;
  price: number;
}

export default function BookCard(props: BookCardProps) {
  return (
    <div className="flex w-fit flex-col rounded-4xl bg-white">
      <div>
        <img className="rounded-t-2xl" src={props.imgUrl} />
      </div>

      <div className="flex h-full flex-col px-2 py-1">
        <h3 className="text-primary text-xl font-bold">{props.title}</h3>
        <p className="text-hover-accent font-bold">{props.price + " $"}</p>
        <button className="bg-accent text-background mt-auto mb-2 self-center rounded-2xl px-3 py-1 font-black">
          Add to cart
        </button>
      </div>
    </div>
  );
}
