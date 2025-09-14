import { storage } from '../../utils/storage/storage';

const getToken = async (key: any) => {
  const status = await storage.getString(key);
  return status;
};

export default getToken;
