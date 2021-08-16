import {render, screen} from "@testing-library/react";
import {NavBar} from "./NavBar";

test("Navbar has company logo", () => {
  render(<NavBar/>)

  expect(screen.getByRole('img', {name: /company logo/i})).toBeInTheDocument()

})
