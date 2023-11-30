
const Logout = () => {
  return (
    <>
      <div>Logout</div>
      {/* corregir esta parte */}
      <div>{`"Hello, " + JSON.parse(localStorage.getItem('auth')).name + <div><BiChevronDown /></div>`}</div>
    </>
  )
}

export default Logout