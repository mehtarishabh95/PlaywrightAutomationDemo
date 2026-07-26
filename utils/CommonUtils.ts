import cryptoJS from "crypto-js";
import process from "process";

export default class CommonUtils {
  private secretKey: string;

  constructor() {
    if(process.env.SECRET_KEY) {
        this.secretKey = process.env.SECRET_KEY;
    }
    else {
      throw new Error("SECRET_KEY is not defined in environment variables");
    }
  }

  /**
   * 
   * @param data 
   * @returns 
   */
  public encryptData(data: string): string {
    const encryptedData = cryptoJS.AES.encrypt(data, this.secretKey).toString();
    return encryptedData;
  }

  /**
   * 
   * @param encryptedData 
   * @returns 
   */
  public decryptData(encryptedData: string): string {
    const bytes = cryptoJS.AES.decrypt(encryptedData, this.secretKey);
    const decryptedData = bytes.toString(cryptoJS.enc.Utf8);
    return decryptedData;
  }

}