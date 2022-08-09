import appAxios from "api/appAxios";
import { SLUG_PRODUCT } from "./define";

export class ProductApi {
  getListProduct = (params?: {}) =>
    appAxios.get(SLUG_PRODUCT.GET_LIST_PRODUCT, params);
}

const callProductApi = new ProductApi();
export default callProductApi;
