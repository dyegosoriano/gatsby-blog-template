export default date => {
  const now = new Date(date)

  return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
}
