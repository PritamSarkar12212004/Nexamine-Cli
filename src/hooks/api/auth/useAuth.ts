import { useNavigation } from '@react-navigation/native';
import ApiConstant from '../../../constants/api/ApiConstant';
import api from '../../../utils/api/api';
import { userContext } from '../../../utils/context/ContextProvider';

const useAuth = () => {
  const { setTempOtpData } = userContext();
  const navigation = useNavigation();
  const authApi = async ({ number, setloading, data }: any) => {
    console.log(data);
    await api
      .post(ApiConstant.Auth.Create, {
        payload: {
          phoneNumber: number,
        },
      })
      .then(async res => {
        if (res.data.status === true) {
          setTempOtpData({
            otp: res.data.data.otp,
            phoneNumber: res.data.data.phoneNumber,
            firstName: data.name,
            lastName: data.lastName,
            userName: data.userName,
            passowrd: data.password,
          });
        }
        navigation.navigate('LoginVarify');
        await setloading(false);
      })
      .catch(err => {
        console.log(err);
        setloading(false);
      });
  };
  return {
    authApi,
  };
};

export default useAuth;
