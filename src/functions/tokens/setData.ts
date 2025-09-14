import { storage } from '../../utils/storage/storage';

const setData = async (key: any, value: any) => {
  storage.set(key, JSON.stringify(value));
  return true;
};
export default setData;
