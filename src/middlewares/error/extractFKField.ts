export const extractFKField = (constraintName?: string): string => {
  if (!constraintName) return "reference";

  // candidate_personals_religionId_fkey → religionId
  const match = constraintName.match(/_(\w+)_fkey/);

  return match?.[1] || "reference";
};