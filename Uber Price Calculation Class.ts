class UberPriceCalculator {
    private baseFare: number;
    private costPerMile: number;
    private costPerMinute: number;
    private bookingFee: number;
  
    constructor(baseFare: number, costPerMile: number, costPerMinute: number, bookingFee: number) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
      this.bookingFee = bookingFee;
    }
  
    calculatePrice(distance: number, duration: number): number {
      const price = this.baseFare + (this.costPerMile * distance) + (this.costPerMinute * duration) + this.bookingFee;
      return parseFloat(price.toFixed(2));
    }
  }
  
  // Example usage:
  const uberCalculator = new UberPriceCalculator(2.50, 1.50, 0.25, 1.75);
  const price = uberCalculator.calculatePrice(10, 30);
  console.log(`The Uber price is $${price}`);
  