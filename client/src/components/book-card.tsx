import { useNavigate } from "@tanstack/react-router";

interface BookCardProps {
  title: string;
  imgUrl: string;
  price: number;
  bookid?: string;
}

export default function BookCard(props: BookCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="mx-6 mt-4 flex w-[150px] flex-none flex-col rounded-4xl bg-white lg:mx-0 lg:mt-0 lg:h-[420px] lg:w-[230px]"
      onClick={() => {
        navigate({
          to: `/books/$bookid`,
          params: { bookid: props.bookid || "" },
        });
      }}
    >
      <img
        className="h-[202px] w-[150px] rounded-t-2xl lg:h-[283px] lg:w-[270px]"
        src={props.imgUrl}
      />

      <div className="flex h-full flex-col px-2 py-1 text-wrap">
        <h3 className="text-primary text-md font-bold break-words">
          {props.title}
        </h3>
        <p className="text-hover-accent text-md mt-2 font-bold">
          {props.price + " $"}
        </p>
        <button className="bg-accent text-background mt-auto mb-2 self-center rounded-2xl px-3 py-1 font-black transition-all duration-300 hover:scale-110 hover:brightness-115">
          Add to cart
        </button>
      </div>
    </div>
  );
}
