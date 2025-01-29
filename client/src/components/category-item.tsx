interface CategoryItemProps {
  name: string;
}

export default function CategoryItem(props: CategoryItemProps) {
  return (
    <div className="flex flex-row items-center overflow-hidden">
      <input className="mt-2 mr-1 mb-2" type="radio" name="category" />
      <span className="font-light">{props.name}</span>
    </div>
  );
}
