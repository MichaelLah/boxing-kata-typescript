import { BoxItem } from "../components/shipping/ShippingBox";
import { MemberPreferences } from "../components/FamilyPreferences";

export default (preferences: Array<MemberPreferences>): Array<Array<BoxItem>> => {
  let allBoxes = Array<Array<BoxItem>>();
  let currentBoxIndex = 0;
  while (currentBoxIndex < preferences.length) {
    console.log(currentBoxIndex, preferences.length)
    debugger;
    const currentBox = Array<BoxItem>();
    if (currentBoxIndex + 1 < preferences.length) {
      //At least two more items left
      const currentColor = preferences[currentBoxIndex].brush_color;
      const nextColor = preferences[currentBoxIndex + 1].brush_color;
      if (currentColor === nextColor) {
        currentBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Brushes"
        });
        currentBox.push({
          color: currentColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
      } else {
        currentBox.push({
          color: currentColor,
          quantity: 1,
          itemName: "Brush"
        });
        currentBox.push({
          color: currentColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
        currentBox.push({
          color: nextColor,
          quantity: 1,
          itemName: "Brush"
        });
        currentBox.push({
          color: nextColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
      }
      currentBoxIndex += 2;

    } else {
      //only one left!
      const currentColor = preferences[currentBoxIndex].brush_color;
      currentBox.push({
        color: currentColor,
        quantity: 1,
        itemName: "Brush"
      });
      currentBox.push({
        color: currentColor,
        quantity: 1,
        itemName: "Replacement Head"
      });
      currentBoxIndex++;
    }
    allBoxes.push(currentBox);
  }
  return allBoxes;
};
