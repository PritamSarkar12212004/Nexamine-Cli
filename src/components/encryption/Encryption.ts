import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';
import { v4 as uuidv4 } from 'uuid'; // unique id ke liye

// Encrypt single part
const encryptData = (
  message: any,
  publicKeyBase64: any,
  privateKeyBase64: any,
) => {
  const publicKey = naclUtil.decodeBase64(publicKeyBase64);
  const privateKey = naclUtil.decodeBase64(privateKeyBase64);

  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  const messageUint8 = naclUtil.decodeUTF8(message);

  const encrypted = nacl.box(messageUint8, nonce, publicKey, privateKey);

  return {
    nonce: naclUtil.encodeBase64(nonce),
    cipher: naclUtil.encodeBase64(encrypted),
  };
};

// Encrypt full files array
const encryptFiles = (files: any, publicKey: any, privateKey: any) => {
  return files.map((file: any) => {
    const id = uuidv4();
    const enc1 = encryptData(file.part1, publicKey, privateKey);
    const enc2 = encryptData(file.part2, publicKey, privateKey);

    return {
      id,
      encryptedPart1: enc1,
      encryptedPart2: enc2,
    };
  });
};

export default encryptFiles;
