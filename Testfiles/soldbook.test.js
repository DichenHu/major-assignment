import {render, fireEvent, screen} from '@testing-library/react'
import SoldBook from "./components/Book/SoldBook";
import BookData from "./Data.json";
function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function(arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      {   id: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
        name: "Book1",
        price: 198,
        customer: "Jack"},
      { id: 2,      
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
        name: "Book2",
        price: 178,
        customer: "ABC"},
      { id: 3, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
        name: "Book3",
        price: 131,
        customer: "GARRY"}
    ];
    const output = [{  id: 3, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
      name: "Book3",
      price: 131,
      customer: "GARRY" }];
    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).toEqual(output); // New test
  });
});