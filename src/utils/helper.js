export const progressToFramesConverter = (progress, maxFrames) => {
  return parseInt(progress * maxFrames);
};
