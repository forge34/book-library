import { render, screen } from "@testing-library/react";
import BookCard from "../components/book-card";

describe("Renders props", () => {
  it("renders props", () => {
    render(
      <BookCard
        title="Atomic habits"
        price={20}
        imgUrl="https://placehold.co/600x400"
      />,
    );

    expect(screen.getByRole("heading")).toHaveTextContent("Atomic habits");
    expect(screen.getByRole("img")).toBeInTheDocument()
    expect(screen.getByRole("paragraph")).toHaveTextContent("20$")
  });
});
