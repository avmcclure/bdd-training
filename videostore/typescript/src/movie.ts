export interface Movie {
  title: string;
  calculateRentalPrice: (daysRented: number) => number;
  calculateRenterPoints: (daysRented: number) => number;
}

export class RegularMovie implements Movie {
  title: string;
  basePrice = 2;
  dailyPrice = 1.5;
  daysWithoutDailyCharge = 2;

  constructor(title: string) {
    this.title = title;
  }

  calculateRentalPrice(daysRented: number): number {
    if (daysRented <= this.daysWithoutDailyCharge) {
      return this.basePrice;
    }

    return this.basePrice + (daysRented - this.daysWithoutDailyCharge) * this.dailyPrice;
  }

  calculateRenterPoints(daysRented: number): number {
    return 1;
  }
}

export class ChildrensMovie implements Movie {
  title: string;
  basePrice = 1.5;
  dailyPrice = 1.5;
  daysWithoutDailyCharge = 3;

  constructor(title: string) {
    this.title = title;
  }

  calculateRentalPrice(daysRented: number): number {
    if (daysRented <= this.daysWithoutDailyCharge) {
      return this.basePrice;
    }

    return this.basePrice + (daysRented - this.daysWithoutDailyCharge) * this.dailyPrice;
  }

  calculateRenterPoints(daysRented: number): number {
    return 1;
  }
}

export class NewRelease implements Movie {
  title: string;
  dailyPrice = 3;

  constructor(title: string) {
    this.title = title;
  }

  calculateRentalPrice(daysRented: number): number {
    return daysRented * this.dailyPrice;
  }

  calculateRenterPoints(daysRented: number): number {
    if (daysRented > 1) {
      return 2;
    }
    return 1;
  }
}
