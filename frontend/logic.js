import routes from "./data.js";

export function getBestMatch(priority = "balanced") {
  return routes.map(route => {
    const totalTime =
      route.fromVienna.time + route.fromZurich.time;

    const totalPrice =
      route.fromVienna.price + route.fromZurich.price;

    let score;

    if (priority === "cheap") {
      score = totalPrice;
    } else if (priority === "fast") {
      score = totalTime;
    } else {
      score = totalTime + totalPrice / 10;
    }

    return {
      ...route,
      totalTime,
      totalPrice,
      score
    };
  }).sort((a, b) => a.score - b.score);
}
