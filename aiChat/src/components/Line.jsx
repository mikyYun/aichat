const Line = ({message}) => {
  const detail = Object.keys(message)[0]
  const isMyMessage = message[detail]
  console.log(detail, isMyMessage)

  const className = isMyMessage ? "chat_box mine" : "chat_box"
  return (
    <div className="line">
      <div className={className}>{detail}</div>
    </div>
  );
};


export default Line;