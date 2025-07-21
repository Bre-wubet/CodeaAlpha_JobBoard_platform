import Resume from '../models/Resume.js';

export const uploadResume = async (resumeFile, candidateId) => {
  try {
    if (!resumeFile || !candidateId) {
      throw new Error("Resume file and candidate ID are required");
    }

    const newResume = new Resume({
      candidateId,
      filePath: resumeFile.path,
      originalName: resumeFile.originalname,
    });

    await newResume.save();
    return newResume;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload resume");
  }
};

