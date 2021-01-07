class Stock {
  constructor(company) {
    this.company = company;
    this.datesWithPrices = {};
  }
  setDateWithPrice(date, price) {
    this.datesWithPrices = { ...this.datesWithPrices, [date]: price };
  }
  price(date) {
    return this.datesWithPrices[date];
  }
}

class Portfolio {
  constructor(name) {
    this.name = name;
    this.stocks = {};
  }
  addStock(stock, numberOfStocks) {
    this.stocks = { ...this.stocks, [stock.company]: { datesWithPrices: stock.datesWithPrices, numberOfStocks: numberOfStocks } };
  }
  profit(initialDate, finalDate) {
    var finalProfit=0
    for (var stock in this.stocks) {
      var datesWithPrices = this.stocks[stock].datesWithPrices;
      var numberOfStocks = this.stocks[stock].numberOfStocks;
      var individualProfit = (datesWithPrices[finalDate] - datesWithPrices[initialDate]) * numberOfStocks;
      if (!isNaN(individualProfit)) finalProfit += individualProfit;
    }
    return finalProfit;
  }
}

fintualStock = new Stock("Fintual");
cornershopStock = new Stock("Cornershop");
fintualStock.setDateWithPrice("Hoy", 1000);
fintualStock.setDateWithPrice("Ayer", 500);
myPortfolio = new Portfolio("My Portfolio");
myPortfolio.addStock(fintualStock, 4);
myPortfolio.addStock(cornershopStock, 4);
console.log(myPortfolio.stocks);
console.log(myPortfolio.profit("Ayer", "Hoy"));

