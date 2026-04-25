import { getData, postData, uploadFile } from './providers/directus';
import { ICollectionMap, IData } from './types';

const Api: IData = {
  async getData(dataType) {
    return (await getData(dataType)) as ICollectionMap[typeof dataType];
  },

  async postData(dataType, data) {
    await postData(dataType, data);
  },

  async uploadFile(file) {
    return await uploadFile(file);
  },
};

export default Api;
