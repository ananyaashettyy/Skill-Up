export const skillList = [
  'JavaScript', 'JS', 'React', 'React.js', 'Node.js', 'Node',
  'Express', 'MongoDB', 'HTML', 'CSS', 'Git', 'GIT',
  'Python', 'SQL', 'AWS', 'Docker'
];

export function extractSkills(text) {
  const cleanedText = text.toLowerCase().replace(/\s+/g, ' ');
  return skillList.filter(skill => {
    const pattern = new RegExp(`\\b${skill.replace('.', '\\.')}\\b`, 'i');
    return pattern.test(cleanedText);
  });
}
