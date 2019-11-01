import { BoxItem } from "../components/shipping/ShippingBox";
import { MemberPreferences } from "../components/FamilyPreferences";

export default (preferences: Array<MemberPreferences>): Array<BoxItem> => {
  let allBoxes = Array<BoxItem>();
  let currentBoxIndex = 0;
  while (currentBoxIndex < preferences.length) {
    if (currentBoxIndex + 1 < preferences.length) {
      //At least two more items left
      const currentColor = preferences[currentBoxIndex].brush_color;
      const nextColor = preferences[currentBoxIndex + 1].brush_color;
      if (currentColor === nextColor) {
        allBoxes.push({
          color: currentColor,
          quantity: 2,
          itemName: "Brushes"
        });
        allBoxes.push({
          color: currentColor,
          quantity: 2,
          itemName: "Replacement Heads"
        });
      } else {
        allBoxes.push({
          color: currentColor,
          quantity: 1,
          itemName: "Brush"
        });
        allBoxes.push({
          color: currentColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
        allBoxes.push({
          color: nextColor,
          quantity: 1,
          itemName: "Brushe"
        });
        allBoxes.push({
          color: nextColor,
          quantity: 1,
          itemName: "Replacement Head"
        });
      }
      currentBoxIndex += 2;
    } else {
      //only one left!
      const currentColor = preferences[currentBoxIndex].brush_color;
      allBoxes.push({
        color: currentColor,
        quantity: 1,
        itemName: "Brush"
      });
      allBoxes.push({
        color: currentColor,
        quantity: 1,
        itemName: "Replacement Head"
      });
    }
  }
  return allBoxes;
};
