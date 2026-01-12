import { hash, verify } from '@node-rs/argon2';

export async function hashPassword(password: string) {
  const result = await hash(password);
  return result;
}
export async function verifyPassword(data: { password: string; hash: string }) {
  const { password, hash } = data;
  const result = verify(hash, password);
  return result;
}
