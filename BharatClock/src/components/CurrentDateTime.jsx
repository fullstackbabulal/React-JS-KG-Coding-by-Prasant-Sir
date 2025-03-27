let CurrentDateTime = () => {
  let time = new Date();
  console.log(time);
  return(
    <>
    <p>This is the current time: {time.toLocaleDateString()} -{time.toLocaleTimeString()}</p>
    </>
  )
}

export default CurrentDateTime;