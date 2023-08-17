import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedBy?: SortOrder;
  locationData?: SortOrder;
  locationtype?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
