const URL = 'https://assets.breatheco.de/apis/fake/todos/user/edu2andrade';

export const getTodoList = async () => {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data;

  } catch (error) {
    console.log(error)
  }
}; 

export const putRequest = async (newObj) => {
  try {
    const response = await fetch(URL, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
    const data = await response.json()
    return data;

  } catch (error) {
    console.log(error)
  }
};