export function FormatTime (formatedTime: Date) {
  return `${ formatedTime.getHours()  < 10 ? '0' : '' }${ formatedTime.getHours()}:${ (formatedTime.getMinutes() < 10 ? '0' : '') }${ formatedTime.getMinutes() }`;
}
