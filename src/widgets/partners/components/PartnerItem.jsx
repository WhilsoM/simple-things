export const PartnerItem = ({imgPath}) => {
  const alt = imgPath.split('.')[0]

  return (
    <div className="partner">
      <div className="img-box">
        <img
          src={`/img/partners/${imgPath}`}
          alt={alt}
        />
      </div>
    </div>
  )
}
