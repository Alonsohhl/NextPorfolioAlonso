interface IInfoProps {
  dateFrom: string,
  dateTo: string,
  companyName: string,
  role: string
}

export function Info(props: IInfoProps) {
  const { dateFrom, dateTo, companyName, role } = props

  return (
    <div className="border border-solid border-white py-4 px-8 mr-4 ">
      <div className="info-code mb-0">
        <p className="info-code-title">Company</p>
        <p className="info-code-content">{companyName}</p>
      </div>
      <p className="info-code-title">FROM</p>
      <div className="info-code mb-0">
        <p className="info-code-content">{dateFrom}</p>
      </div>
      <div className="info-code mb-0">
        <p className="info-code-title">TO</p>
        <p className="info-code-content">{dateTo}</p>
      </div>
    </div>
  )
}
