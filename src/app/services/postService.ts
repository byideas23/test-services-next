export async function postData(data: any) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error('Error en postData:', error);
      throw error;
    }
}
  