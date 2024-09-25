let express = require("express");
let cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/calculate-returns',(req,res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let Return = (marketPrice - boughtAt) * quantity;
  res.send(Return.toString());
})

app.get('/total-returns',(req,res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let Return = stock1 + stock2 + stock3 + stock4;
  res.send(Return.toString());

})

app.get('/calculate-return-percentage',(req,res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
})

app.get('/total-return-percentage', (req, res) => {
  
  let boughtAt1 = parseFloat(req.query.boughtAt1);
  let boughtAt2 = parseFloat(req.query.boughtAt2);
  let boughtAt3 = parseFloat(req.query.boughtAt3);
  let boughtAt4 = parseFloat(req.query.boughtAt4);
  
  let returns1 = parseFloat(req.query.returns1);
  let returns2 = parseFloat(req.query.returns2);
  let returns3 = parseFloat(req.query.returns3);
  let returns4 = parseFloat(req.query.returns4);

  
  let totalBoughtAt = boughtAt1 + boughtAt2 + boughtAt3 + boughtAt4;
  let totalReturns = returns1 + returns2 + returns3 + returns4;

  
  let totalReturnPercentage = (totalReturns / totalBoughtAt) * 100;

  
  res.send(totalReturnPercentage.toString());
});

app.get('/status',(req,res) => {
  let returnPercentage = req.query.returnPercentage;
  let finalStock;

  if (returnPercentage > 0) {
    finalStock = 'Profit'

  }else{
    finalStock = 'Loss'
  }
  res.send(finalStock.toString());

})





app.listen(PORT, () => console.log("Server is listening on port " + PORT));
