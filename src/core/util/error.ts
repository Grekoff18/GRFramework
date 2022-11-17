import { inBrowser } from "../../../config";

export default function error(msg: string): Error {
  if (msg) {
    console.error(msg);
  }

  if (inBrowser) {
    throw new Error(msg);
  } else {
    process.exit(1);
  }
}
