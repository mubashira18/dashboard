import { Line } from "react-chartjs-2";

const data = await fetch("https://covid-19-statistics.p.rapidapi.com/regions");
const json = await data.json();

function Graph() {
  return (
    <div>
      <Line data={json} />
    </div>
  );
}

export default Graph;
