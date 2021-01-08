export class Stock {
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

export class Portfolio {
  #stocks;
  constructor(name) {
    this.name = name;
    this.#stocks = {};
  }
  addStock(company, numberOfStocks) {
    if (!this.#stocks.hasOwnProperty(company)) this.#stocks[company] = 0;
    this.#stocks[company] += numberOfStocks
  }
  profit(stocks, initialDate, finalDate) {
    var finalProfit = 0;
    for (var portfolioStock in this.#stocks) {
      for (var stock of stocks) {
        if (portfolioStock == stock.getCompany()) {
          var individualProfit = (stock.price(finalDate) - stock.price(initialDate)) * this.#stocks[stock.getCompany()];
          if (!isNaN(individualProfit)) finalProfit += individualProfit;
          break;
        }
      }
    }
    return finalProfit;
  }
}

//var stocks = [];
//fintualStock = new Stock('Fintual');
//cornershopStock = new Stock('Cornershop');
//stocks.push(fintualStock);
//stocks.push(cornershopStock);

//fintualStock.setPricePerDate('Hoy', 1000);
//fintualStock.setPricePerDate('Ayer', 500);

//myPortfolio = new Portfolio('My Portfolio');
//myPortfolio.addStock("Fintual", 4);
//myPortfolio.addStock("Fintual", 4);
//myPortfolio.addStock("Cornershop", 4);
//console.log(myPortfolio.profit(stocks, 'Ayer', 'Hoy'));
//fintualStock.setPricePerDate('Hoy', 2000);
//console.log(myPortfolio.profit(stocks, 'Ayer', 'Hoy'));

