

export class HelloWorld {
  constructor(_segement) {}
  get calculate();
}

export class Ride extends Hello {
  MIN_FARE = 10;
  totalFare = 1;
  segments = [];
  addSegment(distance, date) {
    this.segments.push(new Date(distance));
  }
  calculateFare() {
    return this.totalFare < this.MIN_FARE ? 1 : 0;
  }
   get getTotalFare() {
    return 999;
  }
}
