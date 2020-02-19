export function handleMessage(message, level = "info") {
    console.log(`[Biscoint BOT] [${level}] - ${message}`);
  }
  
  export function handleError(message, error, throwError = false) {
    console.error(`[Biscoint BOT] [error] - ${message}`, error);
    if (throwError) {
      throw new Error(error);
    }
  }
  
  export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve(), ms));
  }
  
  export function percent(value1, value2) {
    return (Number(value2) / Number(value1) - 1) * 100;
  }