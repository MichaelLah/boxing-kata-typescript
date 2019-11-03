import { BoxItem } from "../components/shipping/ShippingBox";
import { MemberPreferences } from "../components/FamilyPreferences";

export default (
  preferences: Array<MemberPreferences>
): {
  starterBoxes: Array<Array<BoxItem>>;
  refillBoxes: Array<Array<BoxItem>>;
} => {
  let starterBoxes = Array<Array<BoxItem>>();
  let refillBoxes = Array<Array<BoxItem>>();
  let currentBoxIndex = 0;
  while (currentBoxIndex < preferences.length) {
    const currentStarterBox = Array<BoxItem>();
    const currentRefillBox = Array<BoxItem>();
    if (currentBoxIndex + 1 < preferences.length) {
      //At least two more items left
      const currentColor = preferences[currentBoxIndex].brush_color;
      const nextColor = preferences[currentBoxIndex + 1].brush_color;
      if (currentColor === nextColor) {
        currentStarterBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Brushes"
        });
        currentStarterBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
        currentRefillBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
      } else {
        currentStarterBox.push({
          color: currentColor,
          quantity: 1,
          itemName: "Brush"
        });
        currentStarterBox.push({
          color: currentColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
        currentRefillBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
        currentStarterBox.push({
          color: nextColor,
          quantity: 1,
          itemName: "Brush"
        });
        currentStarterBox.push({
          color: nextColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
        currentRefillBox.push({
          color: nextColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
      }
      currentBoxIndex += 2;
    } else {
      //only one left!
      const currentColor = preferences[currentBoxIndex].brush_color;
      currentStarterBox.push({
        color: currentColor,
        quantity: 1,
        itemName: "Brush"
      });
      currentStarterBox.push({
        color: currentColor,
        quantity: 1,
        itemName: "Replacement Head"
      });
      currentRefillBox.push({
        color: currentColor,
        quantity: 2,
        itemName: "Replacement Heads"
      });
      currentBoxIndex++;
    }
    starterBoxes.push(currentStarterBox);
    refillBoxes.push(currentRefillBox);
  }
  return { starterBoxes, refillBoxes };
};
