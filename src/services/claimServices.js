export const createClaim = async (claim) => {
  try {
    const response = await fetch("http://localhost:4002/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(claim)
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};


