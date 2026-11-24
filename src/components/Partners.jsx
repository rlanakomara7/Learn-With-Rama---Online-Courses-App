import "../styles/Partners.css";

function Partners(props) {
  // daftar ditulis 2x supaya loop terlihat tanpa putus
  const loop = [...props.partnersList, ...props.partnersList];

  return (
    <div className="marquee">
      <div className="partner-list">
        {loop.map((item, index) => {
          return (
            <div className="kartu-partner" key={index}>
              <img src={item.image} alt="Partner" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
