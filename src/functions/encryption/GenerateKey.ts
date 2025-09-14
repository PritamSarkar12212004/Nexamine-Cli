import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

const GenerateKey = () => {
  const keyPair = nacl.box.keyPair();
  const publicKey = naclUtil.encodeBase64(keyPair.publicKey);
  const privateKey = naclUtil.encodeBase64(keyPair.secretKey);
  return {
    publicKey,
    privateKey,
  };
};

export default GenerateKey;
