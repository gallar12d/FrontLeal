export const getUser = async (identification) => {
  try {
    
    const response = await fetch(`http://localhost:4000/user/${identification}`);
    const data = await response.json();
    return data
  } catch (e) {
    console.log(e);
  }
};
