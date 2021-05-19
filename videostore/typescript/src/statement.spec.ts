import { createStatement, Customer } from "./statement";
import { ChildrensMovie, NewRelease, RegularMovie } from "./movie";
import { Rental } from "./rental";

it("should return expected statement", () => {
  const bob: Customer = {
    name: "Bob"
  };
  const rentals: Rental[] = [
    { movie: new RegularMovie("Pulp Fiction"), daysRented: 2 },
    { movie: new ChildrensMovie("Lilo & Stitch"), daysRented: 4 },
    { movie: new ChildrensMovie("Moana"), daysRented: 2 },
    { movie: new RegularMovie("Gladiator"), daysRented: 6 },
    { movie: new NewRelease("Avengers"), daysRented: 4 }
  ];

  var bobsStatement = createStatement(bob, rentals);

  const expectedStatement =
    "Rental Record for Bob\n" +
    "\tPulp Fiction\t2.0\n" +
    "\tLilo & Stitch\t3.0\n" +
    "\tMoana\t1.5\n" +
    "\tGladiator\t8.0\n" +
    "\tAvengers\t12.0\n" +
    "You owed 26.5\n" +
    "You earned 6 frequent renter points \n";

  expect(bobsStatement).toEqual(expectedStatement);
});
