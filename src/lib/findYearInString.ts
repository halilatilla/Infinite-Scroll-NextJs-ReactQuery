export default function findYearInString(str: string) {
  const res = str.match(/\b19|20\d{2}\b/g) || ''

  return +res?.[0]
}
