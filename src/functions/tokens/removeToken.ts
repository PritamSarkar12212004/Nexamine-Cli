import { storage } from '../../utils/storage/storage';

const removeToken = async (key: string) => {
  await storage.delete(key);
  return true;
};
export default removeToken;
