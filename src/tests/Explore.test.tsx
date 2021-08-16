import {fireEvent, render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import Explore from "../pages/Explore/Explore";
import userEvent from "@testing-library/user-event";


const getOptionsLength = () => document.querySelectorAll("[data-testid='card']").length


test("Renders the filter and the videos section", async () => {
  render(<Explore/>)

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  expect(screen.getByTestId('filter')).toBeInTheDocument()
  expect(screen.getByTestId('videos')).toBeInTheDocument()

})

test("Writing in the search input, filters the videos", async () => {
  const testString = "frank"

  render(<Explore/>)

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  const initialOptionsLength = getOptionsLength()

  expect(screen.getByTestId('videos')).toBeInTheDocument()

  const input = screen.getByRole("textbox") as HTMLInputElement

  fireEvent.click(input)

  userEvent.paste(input, testString)

  await waitFor(() =>
    expect(getOptionsLength()).not.toBe(initialOptionsLength)
  )

  expect(getOptionsLength()).toBe(1)
})

test("Pressing the button 'Load more', loads more videos", async () => {
  render(<Explore/>)

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  fireEvent.click(screen.getByRole('button', {name: /load more/i}))

  expect(getOptionsLength()).toBe(40)
})

test("Pressing the button 'Clear filters', sets the filters to it's initial value", async () => {
  const testString = "frank"

  render(<Explore/>)

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  const initialOptionsLength = getOptionsLength()

  expect(screen.getByTestId('videos')).toBeInTheDocument()

  const input = screen.getByRole("textbox") as HTMLInputElement

  fireEvent.click(input)

  userEvent.paste(input, testString)

  await waitFor(() =>
    expect(getOptionsLength()).not.toBe(initialOptionsLength)
  )

  expect(getOptionsLength()).toBe(1)

  fireEvent.click(screen.getByRole('button', {name: /clear filters/i}))

  expect(getOptionsLength()).toBe(20)
})

test("Show No results component if the search query has no data to show", async () => {
  const testString = "666"

  render(<Explore/>)

  await waitForElementToBeRemoved(() => screen.getByTitle(/loading spinner/i))

  const input = screen.getByRole("textbox") as HTMLInputElement

  fireEvent.click(input)

  userEvent.paste(input, testString)

  await waitFor(() =>
    expect(getOptionsLength()).toBe(0)
  )

  expect(screen.getByText(/no results/i)).toBeInTheDocument()

})


