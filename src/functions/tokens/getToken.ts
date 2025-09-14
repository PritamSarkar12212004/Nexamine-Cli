import { storage } from '../../utils/storage/storage';

const getToken = async (key: any) => {
  const status: any = await storage.getString(key);
  const mainData = await JSON.parse(status);
  return mainData;
};

export default getToken;
