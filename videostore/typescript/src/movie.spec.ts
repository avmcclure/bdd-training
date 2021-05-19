import { ChildrensMovie, Movie, NewRelease, RegularMovie } from "./movie";

describe("Movie", function () {
  describe("Regular Movie", function () {
    let movie: Movie;

    beforeEach(function () {
      movie = new RegularMovie("Blazing Saddles");
    });

    describe("rental price", function () {
      it("should be $2 for the first two days", function () {
        const actual = movie.calculateRentalPrice(2);
        expect(actual).toEqual(2);
      });

      it("should add $1.5 for each day after 2", function () {
        const actual = movie.calculateRentalPrice(5);
        expect(actual).toEqual(2 + 1.5 * 3);
      });
    });

      it("should give 1 reward point for any rental", function() {
        const actual = movie.calculateRenterPoints(0);
        expect(actual).toEqual(1);
      });
  });

  describe("Children Movie", function () {
    let movie: Movie;

    beforeEach(function () {
      movie = new ChildrensMovie("Peewee's Big Adventure");
    });

    describe("rental price", function () {
      it("should be $1.5 for the first three days", function () {
        const actual = movie.calculateRentalPrice(3);
        expect(actual).toEqual(1.5);
      });

      it("should add $1.5 for each day after 3", function () {
        const actual = movie.calculateRentalPrice(5);
        expect(actual).toEqual(1.5 + 1.5 * 2);
      });
    });

      it("should give 1 reward point for any rental", function() {
        const actual = movie.calculateRenterPoints(0);
        expect(actual).toEqual(1);
      });
  });


  describe("New Release Movie", function () {
    let movie: Movie;

    beforeEach(function () {
      movie = new NewRelease("Raya and the Last Dragon");
    });

    describe("rental price", function () {
      it("should be $3 each day", function () {
        const actual = movie.calculateRentalPrice(1);
        expect(actual).toEqual(3);
      });

      it("should be $9 for 3 days", function () {
        const actual = movie.calculateRentalPrice(3);
        expect(actual).toEqual(9);
      });
    });

    describe("rewards points", function() {
      it("should give 1 reward points for any rental of 1 day", function() {
        const actual = movie.calculateRenterPoints(1);
        expect(actual).toEqual(1);
      });

      it("should give 2 reward points for any rental greater than 1 day", function() {
        const actual = movie.calculateRenterPoints(5);
        expect(actual).toEqual(2);
      });
    });
  });
});
