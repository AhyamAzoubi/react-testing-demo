/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import Haustier from "./Haustier.js";
import { render } from "@testing-library/react";

it("displays a default thumbnail", async () => {
  const haustier = render(<Haustier />);

  const petThumbnail = await haustier.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("DCI");
});

it("displays a non-default thumbnail", async () => {
  const haustier = render(<Haustier images={["1.jpg", "2.png", "3.webm"]}/>);

  const petThumbnail = await haustier.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("1.jpg");
});