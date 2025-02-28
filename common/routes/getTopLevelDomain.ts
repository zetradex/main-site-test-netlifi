export function getTopLevelDomain(fullHostname: string) {
  // Извлекаем только TLD из полного хостнейма
  const parts = fullHostname.split(".");
  const topLevelDomain = parts.length > 1 ? parts[parts.length - 1] : "com"; // По умолчанию используем .com

  return topLevelDomain;
}
