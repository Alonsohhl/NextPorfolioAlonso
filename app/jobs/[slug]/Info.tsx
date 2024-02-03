interface IInfoProps {
  dateFrom: string,
  dateTo: string,
  companyName: string,
  role: string
}

export function Info(props: IInfoProps) {
  const { dateFrom, dateTo, companyName, role } = props

  return (
    <div className="mr-4 mt-6 border border-solid border-white p-4">
      <div className="info-code">
        <p className="info-code-title">Company</p>
        <p className="info-code-content">{companyName}</p>
      </div>
      <div className="info-code">
        <p className="info-code-title">FROM</p>
        <p className="info-code-content">{dateFrom}</p>
      </div>
      <div className="info-code">
        <p className="info-code-title">TO</p>
        <p className="info-code-content">{dateTo}</p>
      </div>
    </div>
  )
}
