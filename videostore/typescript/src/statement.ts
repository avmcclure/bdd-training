import { Rental } from "./rental";

export type Customer = {
  name: string;
};

type Totals = { totalAmount: number; frequentRenterPoints: number; result: string };

export function createStatement(customer: Customer, rentals: Rental[]): string {
  const totals = sumMovieTotals(rentals)
  return formatTotals(totals, customer);
}

function sumMovieTotals(rentals: Rental[]): Totals {
  return rentals.reduce<Totals>(
    (acc, { daysRented, movie }) => {
      const price = movie.calculateRentalPrice(daysRented);
      return {
        totalAmount: acc.totalAmount + price,
        frequentRenterPoints: acc.frequentRenterPoints + movie.calculateRenterPoints(daysRented),
        result: acc.result + `\t${movie.title}\t${price.toFixed(1)}\n`
      };
    },
    { totalAmount: 0, frequentRenterPoints: 0, result: "" }
  );
}

function formatTotals({ totalAmount, frequentRenterPoints, result }: Totals, customer: Customer) {
  return `Rental Record for ${customer.name}
${result}You owed ${totalAmount.toFixed(1)}
You earned ${frequentRenterPoints} frequent renter points 
`;
}
