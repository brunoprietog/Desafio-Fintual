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
    stocks = {
      funtual: 500,
    };
  }
  addStock(stock, numberOfStocks) {
    //TODO: Si existe el stock, no debe reescribirlo, debe agregar al lote
    const company = stock.getCompany();
    const pricePerDate = stock.getPricePerDate();
    //if (this.#stocks == company) {
    //  this.#stocks.company = {
    //    ...this.#stocks.company,
    //    [numberOfStocks]: this.#stocks.company.numberOfStocks + numberOfStocks
    //  };
    //}
    //else {
    this.#stocks = {
      ...this.#stocks,
      [company]: { pricePerDate, numberOfStocks },
    };
    //}
  }
  profit(initialDate, finalDate) {
    var finalProfit = 0;
    for (var item in this.stocks) {
      var prices = item.getPricePerDate();
      console.log(prices);
      console.log(item.numberOfStocks);
      var individualProfit = (prices[finalDate] - prices[initialDate]) * item.numberOfStocks;
      finalProfit += individualProfit;
      return 0;
    }
    return finalProfit;
  }
}

fintualStock = new Stock('Fintual');
//cornershopStock = new Stock('Cornershop');
fintualStock.setDateWithPrice('Hoy', 1000);
fintualStock.setDateWithPrice('Ayer', 500);
myPortfolio = new Portfolio('My Portfolio');
myPortfolio.addStock(fintualStock, 4);
//myPortfolio.addStock(fintualStock, 4);
//myPortfolio.addStock(cornershopStock, 4);
myPortfolio.profit('Ayer', 'Hoy');
