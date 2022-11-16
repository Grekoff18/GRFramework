export default function error(msg: string): Error {
  console.error(msg)
  throw new Error(msg)
}
