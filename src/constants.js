const BASE_URL = import.meta.env.BASE_URL || '/abdiel-portfolio/';

export const asset = (filename) => {
  const cleanName = filename.replace(/^\\/+/, "");
  return `${BASE_URL}${cleanName}`;
};

export const RESUME_URL = `${BASE_URL}resume.pdf`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/abdiel-vallejo-0a6b2632b/";
export const GITHUB_URL = "https://github.com/Abdielo23";
export const EMAIL = "abdiel.vallejo@upr.edu";
