import { storage } from '../../utils/storage/storage';

const setData = async (key: any, value: any) => {
  storage.set(key, value);
  return true;
};
export default setData;
