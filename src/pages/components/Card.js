const Card = ({id,name,image,type}) => {
  return <div className=" m-1 p-3 w-[18vw] h-[20vw] rounded-lg bg-white flex flex-col justify-center space-y-4 items-center shadow-sm">
    <span className="text-xs">#0{id}</span>
    <img src={image} alt={name} className="w-[5vw]" />
    <div className="flex flex-col">
      <h1 className="text-sm">{name}</h1>
      <small className="text-xs">Type:{type}</small>
    </div>
  </div>
}

export default Card