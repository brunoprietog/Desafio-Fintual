class Stock {
  #company;
  #pricePerDate;
  constructor(company) {
    this.#company = company;
    this.#pricePerDate = {};
  }
  setDateWithPrice(date, price) {
    this.#pricePerDate = { ...this.#pricePerDate, [date]: price };
  }
  price(date) {
    return this.#pricePerDate[date];
  }
  getCompany() {
    return this.#company;
  }
  getPricePerDate() {
    return this.#pricePerDate;
  }
}

class Portfolio {
  #stocks;
  constructor(name) {
    this.name = name;
    this.#stocks = {};
  }
  addStock(stock, numberOfStocks) {
    //TODO: Si existe el stock, no debe reescribirlo, debe agregar al lote
    const company = stock.getCompany();
    const pricePerDate = stock.getPricePerDate();
    this.#stocks = {
      ...this.#stocks,
      [company]: { pricePerDate, numberOfStocks },
    };
  }
  profit(initialDate, finalDate) {
    var finalProfit = 0;
    this.stocks.map((item) => {
      var prices = item.getPricePerDate();
      var individualProfit = (prices[finalDate] - prices[initialDate]) * item.numberOfStocks;
      finalProfit += individualProfit;
    });
    return finalProfit;
  }
}

fintualStock = new Stock('Fintual');
cornershopStock = new Stock('Cornershop');
fintualStock.setDateWithPrice('Hoy', 1000);
fintualStock.setDateWithPrice('Ayer', 500);
myPortfolio = new Portfolio('My Portfolio');
myPortfolio.addStock(fintualStock, 4);
myPortfolio.addStock(cornershopStock, 4);
console.log(myPortfolio.stocks);
console.log(myPortfolio.profit('Ayer', 'Hoy'));
