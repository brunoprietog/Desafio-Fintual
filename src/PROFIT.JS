class Stock {
  #company;
  #pricePerDate;
  constructor(company) {
    this.#company = company;
    this.#pricePerDate = {};
  }
  setPricePerDate(date, price) {
    this.#pricePerDate = { ...this.#pricePerDate, [date]: price };
  }
  price(date) {
    return this.#pricePerDate[date];
  }
  getCompany() {
    return this.#company;
  }
}

class Portfolio {
  #stocks;
  #numberOfStocks;
  constructor(name) {
    this.name = name;
    this.#stocks = [];
    this.#numberOfStocks = {};
  }
  addStock(stock, numberOfStocks) {
    var company = stock.getCompany();
    if (!this.#stocks.includes(stock)) this.#stocks.push(stock);
    if (!this.#numberOfStocks.hasOwnProperty(company)) this.#numberOfStocks[company]=0
    this.#numberOfStocks[company] += numberOfStocks
  }
  profit(initialDate, finalDate) {
    var finalProfit = 0;
    for (var stock of this.#stocks) {
      var individualProfit = (stock.price(finalDate) - stock.price(initialDate)) * this.#numberOfStocks[stock.getCompany()];
      if (!isNaN(individualProfit)) finalProfit += individualProfit;
    }
    return finalProfit;
  }
}

fintualStock = new Stock('Fintual');
cornershopStock = new Stock('Cornershop');
fintualStock.setPricePerDate('Hoy', 1000);
fintualStock.setPricePerDate('Ayer', 500);

myPortfolio = new Portfolio('My Portfolio');
myPortfolio.addStock(fintualStock, 4);
myPortfolio.addStock(fintualStock, 4);
myPortfolio.addStock(cornershopStock, 4);
console.log(myPortfolio.profit('Ayer', 'Hoy'));
fintualStock.setPricePerDate('Hoy', 2000);
console.log(myPortfolio.profit('Ayer', 'Hoy'));

