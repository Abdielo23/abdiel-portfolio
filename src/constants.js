const BASE_URL = import.meta.env.BASE_URL || '/';

export const asset = (filename) => {
  const cleanName = filename.replace(/^\/+/, "");
  return `${BASE_URL}${cleanName}`;
};

export const RESUME_URL = `${BASE_URL}resume.pdf`;
export const LINKEDIN_URL = "https://linkedin.com/in/abdielvallejo";
export const GITHUB_URL = "https://github.com/Abdielo23";
export const EMAIL = "abdiel.vallejo@upr.edu";
