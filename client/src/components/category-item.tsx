interface CategoryItemProps {
  name: string;
}

export default function CategoryItem(props: CategoryItemProps) {
  return (
    <div>
      <input className="mr-1 mt-2 mb-2" type="radio" name="category" />
      <span>{props.name}</span>
    </div>
  );
}
