export async function getData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      return await response.json();
    } catch (error) {
      console.error('Error en getData:', error);
      throw error;
    }
}
  