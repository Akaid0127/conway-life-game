export const getRandomStatus = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber >= 1 && randomNumber <= 5) {
		// alive
    return 1;
  }
	// dead
  return 0;
};
