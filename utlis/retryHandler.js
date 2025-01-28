export async function retryOperation(operation, retries = 2, delay = 1000) {
    let attempt = 0;
  
    while (attempt < retries) {
      try {
        return await operation(); 
      } catch (error) {
        attempt++;
        if (attempt >= retries) {
          throw error; 
        }
        console.error(`Retry attempt ${attempt} failed. Retrying in ${delay}ms...`, error);
        await new Promise((resolve) => setTimeout(resolve, delay)); 
      }
    }
  }
  