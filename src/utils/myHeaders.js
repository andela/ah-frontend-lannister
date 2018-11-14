export const AUTHENTICATED = localStorage.getItem("token");
export var myHeaders = new Headers({
  Accept: "application/json",
  "Content-type": "application/json",
  Authorization: `token ${AUTHENTICATED}`
});

export const headers=() =>{
  return {
    headers: { Authorization: `token ${AUTHENTICATED}` }
  };
};
