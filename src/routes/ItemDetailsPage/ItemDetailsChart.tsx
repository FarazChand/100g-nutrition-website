import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type ItemDetailsChartProps = {
  displayedCalories: number;
  displayedProtein: number;
  displayedCarbs: number;
  displayedFat: number;
};

export default function ItemDetailsChart({
  displayedCalories,
  displayedProtein,
  displayedCarbs,
  displayedFat,
}: ItemDetailsChartProps) {
  // Protein and carbs have 4 calories per gram, while fat has 9 calories per gram
  const proteinAndCarbMultiplier = 4;
  const fatMultiplier = 9;

  const caloriesFromProtein = proteinAndCarbMultiplier * displayedProtein;
  const caloriesFromCarbs = proteinAndCarbMultiplier * displayedCarbs;
  const caloriesFromFat = fatMultiplier * displayedFat;

  const proteinPercentage = (+caloriesFromProtein / +displayedCalories) * 100;
  const carbPercentage = (+caloriesFromCarbs / +displayedCalories) * 100;
  const fatPercentage = (+caloriesFromFat / +displayedCalories) * 100;

  const data = {
    labels: ["Protein %", "Carbohydrate %", "Fat %"],
    datasets: [
      {
        label: "",
        // data: [3, 6, 9],
        data: [proteinPercentage, carbPercentage, fatPercentage],
        backgroundColor: ["#dc2626", "#22c55e", "#eab308"],
        borderColor: ["#dc2626", "#22c55e", "#eab308"],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} options={{}} />
    </div>
  );
}
