import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";

// ProductService Api => productlarga daxldor malumotlarni backenddan olish maqsadida qurildi
class ProductService {  //=>  ProductService nomli class
  private readonly path: string; // path nomli state, type string

  constructor() {
    // constructor ichida pathni qiymatini shakllantirib oldik
    this.path = serverApi; // path ni qiymatini serverApi orqali hosil qildik.(backendimiz linkini- http://localhost:3003  qo'yib beradi)
  }

  public async getProducts(input: ProductInquiry): Promise<Product[]> {  // ProductService ni getProducts methodi hosil qildik
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`; 
      // url => axios da ishlatish maqsadida
      if (input.productCollection)
        url += `&productCollection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`; // search qiymati parametrimiz ichida mavjud bo'lsa uning qiymati kiritilsin

      const result = await axios.get(url); // Rest Api URL ni methodi get bo'lganligi uchun get methodi ishlatilyapti
      console.log("getProducts:", result);

      return result.data;
    } catch(err) {
      console.log("Error, getProduct:", err);
      throw err;
      
    }
  } 
}

export default ProductService;