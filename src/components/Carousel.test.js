/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-unused-vars */
/* eslint-disable testing-library/render-result-naming-convention */
import {render, waitFor} from "@testing-library/react";
import Carousel from "./Carousel.js";

it("lets users click on thumbnails to make them the hero image", async () => {
  const haustierArray = [
    {
      name: "Aristoteles",
    animal: "Meerschweinchen",
    breed: "Glatthaar",
    id: 1,
    images: ["0.jpg", "1.jpg", "2.jpg", "3.jpg"],
    }
  ]
  const carousel = render(<Carousel haustierArray={haustierArray} />);

  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(haustierArray[0].images[0]);

  for (let i = 0; i < haustierArray[0].images.length; i++) {
    const image = haustierArray[0].images[i];
    const thumb = await carousel.findByTestId(`thumbnail${i}`);
    thumb.click();
    await waitFor(() => {
      expect(hero.src).toContain(image);
      expect(thumb.classList).toContain("active");
    })
  }
})