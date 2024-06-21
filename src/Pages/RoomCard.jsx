const RoomCard = ({room}) => {
    const {price_per_night,image} = room;
    return (
        <div>
            <div className=" bg-base-100 ">
  <figure><img src={image} alt="room" /></figure>
</div>
        </div>
    );
};

export default RoomCard;