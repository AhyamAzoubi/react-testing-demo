import Haustier from "./Haustier.js";
import { render } from "@testing-library/react";

it("displays a default thumbnail", async () => {
  const haustier = render(<Haustier />);

  const petThumbnail = await haustier.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("DCI");
});
