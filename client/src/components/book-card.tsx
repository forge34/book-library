interface BookCardProps {
  title: string;
  imgUrl: string;
  price: number;
}

export default function BookCard(props: BookCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-4xl w-fit">
      <div>
        <img className="rounded-t-2xl" src={props.imgUrl} />
      </div>

      <div className="flex flex-col py-1 px-2 h-full">
        <h3 className="text-xl text-primary font-bold">{props.title}</h3>
        <p className="text-hover-accent font-bold">{props.price + " $"}</p>
        <button className="bg-accent self-center rounded-2xl text-background py-1 px-3 font-black mb-2 mt-auto">
          Add to cart
        </button>
      </div>
    </div>
  );
}
