import { useParams } from "react-router-dom";
import { useItemDetails } from "../../lib/customHooks";

export default function ItemDetailsPage() {
  const { itemId = "null" } = useParams();

  const { itemDetails, isLoading } = useItemDetails(itemId);

  console.log(itemDetails);
  console.log(isLoading);

  return <div>ItemDetailsPage</div>;
}
