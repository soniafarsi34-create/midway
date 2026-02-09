const routes = [
  {
    city: "Salzburg",
    fromVienna: { time: 2.5, price: 40, transport: "Train" },
    fromZurich: { time: 5, price: 70, transport: "Train" }
  },
  {
    city: "Munich",
    fromVienna: { time: 4, price: 50, transport: "Train" },
    fromZurich: { time: 4, price: 60, transport: "Train" }
  },
  {
    city: "Innsbruck",
    fromVienna: { time: 4.5, price: 45, transport: "Train" },
    fromZurich: { time: 3.5, price: 55, transport: "Train" }
  }
];

export default routes;
