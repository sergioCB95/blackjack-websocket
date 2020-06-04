import rng from 'random-number-csprng';

const getRandom = async (mod) => rng(0, mod - 1);

export default getRandom;
