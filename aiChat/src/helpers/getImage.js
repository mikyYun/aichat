const getImageNumber = () => {
  const num = Math.floor(Math.random() * 8) + 1;
  return num;
}

export default getImageNumber;